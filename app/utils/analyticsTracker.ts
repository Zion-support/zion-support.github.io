// Analytics Tracker Utility

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface AnalyticsConfig {
  trackingId?: string;
  enabled: boolean;
  debug: boolean;
  respectDoNotTrack: boolean;
  anonymizeIP: boolean;
  customDimensions?: Record<string, string>;
}

export interface UserProperties {
  userId?: string;
  sessionId?: string;
  userType?: string;
  customProperties?: Record<string, any>;
}

class AnalyticsTracker {
  private config: AnalyticsConfig;
  private userProperties: UserProperties = {};
  private sessionId: string;
  private eventQueue: AnalyticsEvent[] = [];
  private isOnline: boolean = true;

  constructor(config: AnalyticsConfig = { enabled: true, debug: false, respectDoNotTrack: true, anonymizeIP: true }) {
    this.config = config;
    this.sessionId = this.generateSessionId();
    this.setupOnlineStatusListener();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupOnlineStatusListener(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.isOnline = true;
        this.flushEventQueue();
      });

      window.addEventListener('offline', () => {
        this.isOnline = false;
      });
    }
  }

  public setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  public track(event: AnalyticsEvent): void {
    if (!this.config.enabled) return;

    // Check Do Not Track
    if (this.config.respectDoNotTrack && this.isDoNotTrackEnabled()) {
      return;
    }

    const enrichedEvent = {
      ...event,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userProperties.userId,
      userType: this.userProperties.userType,
      customParameters: {
        ...event.customParameters,
        ...this.userProperties.customProperties,
        ...this.config.customDimensions
      }
    };

    if (this.config.debug) {
      console.log('Analytics Event:', enrichedEvent);
    }

    if (this.isOnline) {
      this.sendEvent(enrichedEvent);
    } else {
      this.eventQueue.push(enrichedEvent);
    }
  }

  public pageView(page: string, title?: string): void {
    this.track({
      action: 'page_view',
      category: 'navigation',
      label: page,
      customParameters: {
        page_title: title || document.title,
        page_url: window.location.href,
        referrer: document.referrer
      }
    });
  }

  public click(element: string, context?: string): void {
    this.track({
      action: 'click',
      category: 'interaction',
      label: element,
      customParameters: {
        context: context || 'unknown',
        element_type: this.getElementType(element)
      }
    });
  }

  public formSubmit(formName: string, success: boolean = true): void {
    this.track({
      action: 'form_submit',
      category: 'form',
      label: formName,
      value: success ? 1 : 0,
      customParameters: {
        form_success: success
      }
    });
  }

  public search(query: string, resultsCount?: number): void {
    this.track({
      action: 'search',
      category: 'search',
      label: query,
      value: resultsCount,
      customParameters: {
        search_query: query,
        results_count: resultsCount
      }
    });
  }

  public error(error: string, context?: string): void {
    this.track({
      action: 'error',
      category: 'error',
      label: error,
      customParameters: {
        error_message: error,
        error_context: context || 'unknown',
        error_url: window.location.href,
        error_line: this.getErrorLine()
      }
    });
  }

  public customEvent(action: string, category: string, parameters?: Record<string, any>): void {
    this.track({
      action,
      category,
      customParameters: parameters
    });
  }

  public setCustomDimension(key: string, value: string): void {
    this.config.customDimensions = {
      ...this.config.customDimensions,
      [key]: value
    };
  }

  public flushEventQueue(): void {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    events.forEach(event => {
      this.sendEvent(event);
    });
  }

  private sendEvent(event: AnalyticsEvent): void {
    // This would integrate with your analytics service
    // For example, Google Analytics, Mixpanel, etc.
    
    if (this.config.trackingId) {
      // Google Analytics 4 example
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.customParameters
        });
      }
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(event);
  }

  private sendToCustomEndpoint(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return;

    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(error => {
      if (this.config.debug) {
        console.error('Analytics tracking failed:', error);
      }
    });
  }

  private isDoNotTrackEnabled(): boolean {
    if (typeof navigator !== 'undefined') {
      return navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes';
    }
    return false;
  }

  private getElementType(element: string): string {
    const el = document.querySelector(element);
    return el ? el.tagName.toLowerCase() : 'unknown';
  }

  private getErrorLine(): number | undefined {
    const error = new Error();
    const stack = error.stack;
    if (stack) {
      const lines = stack.split('\n');
      for (const line of lines) {
        const match = line.match(/:(\d+):\d+/);
        if (match) {
          return parseInt(match[1], 10);
        }
      }
    }
    return undefined;
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getEventQueueLength(): number {
    return this.eventQueue.length;
  }

  public clearEventQueue(): void {
    this.eventQueue = [];
  }

  public enable(): void {
    this.config.enabled = true;
  }

  public disable(): void {
    this.config.enabled = false;
  }

  public setDebugMode(enabled: boolean): void {
    this.config.debug = enabled;
  }
}

// Singleton instance
export const analyticsTracker = new AnalyticsTracker({
  enabled: true,
  debug: process.env.NODE_ENV === 'development',
  respectDoNotTrack: true,
  anonymizeIP: true
});

// Utility functions
export const trackEvent = (event: AnalyticsEvent): void => {
  analyticsTracker.track(event);
};

export const trackPageView = (page: string, title?: string): void => {
  analyticsTracker.pageView(page, title);
};

export const trackClick = (element: string, context?: string): void => {
  analyticsTracker.click(element, context);
};

export const trackFormSubmit = (formName: string, success: boolean = true): void => {
  analyticsTracker.formSubmit(formName, success);
};

export const trackSearch = (query: string, resultsCount?: number): void => {
  analyticsTracker.search(query, resultsCount);
};

export const trackError = (error: string, context?: string): void => {
  analyticsTracker.error(error, context);
};

export const trackCustomEvent = (action: string, category: string, parameters?: Record<string, any>): void => {
  analyticsTracker.customEvent(action, category, parameters);
};

export const setUserProperties = (properties: UserProperties): void => {
  analyticsTracker.setUserProperties(properties);
};

export const setCustomDimension = (key: string, value: string): void => {
  analyticsTracker.setCustomDimension(key, value);
};

// Auto-track page views
if (typeof window !== 'undefined') {
  // Track initial page view
  analyticsTracker.pageView(window.location.pathname);

  // Track page changes (for SPAs)
  let currentPath = window.location.pathname;
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      analyticsTracker.pageView(currentPath);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}