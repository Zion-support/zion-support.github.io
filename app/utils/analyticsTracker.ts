// Advanced Analytics Tracking Utility

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

interface AnalyticsConfig {
  trackingId?: string;
  enabled?: boolean;
  debug?: boolean;
  batchSize?: number;
  flushInterval?: number;
  endpoint?: string;
  customDimensions?: Record<string, string>;
}

interface UserProperties {
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  language?: string;
  timezone?: string;
  referrer?: string;
  customProperties?: Record<string, any>;
}

interface PageViewEvent {
  page: string;
  title?: string;
  url?: string;
  referrer?: string;
  timestamp?: number;
}

class AnalyticsTracker {
  private config: Required<AnalyticsConfig>;
  private userProperties: UserProperties = {};
  private eventQueue: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId: string | null = null;
  private flushTimer: NodeJS.Timeout | null = null;

  constructor(config: AnalyticsConfig = {}) {
    this.config = {
      trackingId: config.trackingId || '',
      enabled: config.enabled !== false,
      debug: config.debug || false,
      batchSize: config.batchSize || 10,
      flushInterval: config.flushInterval || 5000,
      endpoint: config.endpoint || '/api/analytics',
      customDimensions: config.customDimensions || {}
    };

    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined' || !this.config.enabled) return;

    this.setupUserProperties();
    this.setupPageTracking();
    this.setupEventListeners();
    this.startFlushTimer();
  }

  private setupUserProperties(): void {
    this.userProperties = {
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer,
      customProperties: {}
    };
  }

  private setupPageTracking(): void {
    // Track initial page view
    this.trackPageView({
      page: window.location.pathname,
      title: document.title,
      url: window.location.href,
      referrer: document.referrer
    });

    // Track page changes (for SPA)
    let lastUrl = window.location.href;
    const observer = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        this.trackPageView({
          page: window.location.pathname,
          title: document.title,
          url: window.location.href,
          referrer: lastUrl
        });
        lastUrl = window.location.href;
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupEventListeners(): void {
    // Track clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target) {
        this.trackEvent({
          action: 'click',
          category: 'interaction',
          label: this.getElementLabel(target),
          customParameters: {
            element: target.tagName.toLowerCase(),
            className: target.className,
            id: target.id
          }
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      if (form) {
        this.trackEvent({
          action: 'form_submit',
          category: 'form',
          label: form.id || form.className || 'unknown_form',
          customParameters: {
            formId: form.id,
            formClass: form.className,
            formAction: form.action
          }
        });
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', this.throttle(() => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent({
          action: 'scroll_depth',
          category: 'engagement',
          value: scrollDepth,
          customParameters: {
            maxScrollDepth: maxScrollDepth
          }
        });
      }
    }, 1000));

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      this.trackEvent({
        action: 'time_on_page',
        category: 'engagement',
        value: Math.round(timeOnPage / 1000),
        customParameters: {
          timeOnPageSeconds: Math.round(timeOnPage / 1000)
        }
      });
    });
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private getElementLabel(element: HTMLElement): string {
    return (
      element.getAttribute('aria-label') ||
      element.getAttribute('title') ||
      element.textContent?.trim() ||
      element.tagName.toLowerCase()
    );
  }

  private throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Public methods
  public trackEvent(event: AnalyticsEvent): void {
    if (!this.config.enabled) return;

    const enrichedEvent: AnalyticsEvent = {
      ...event,
      timestamp: event.timestamp || Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
      customParameters: {
        ...this.config.customDimensions,
        ...event.customParameters
      }
    };

    this.eventQueue.push(enrichedEvent);

    if (this.config.debug) {
      console.log('Analytics Event:', enrichedEvent);
    }

    // Flush if batch size reached
    if (this.eventQueue.length >= this.config.batchSize) {
      this.flush();
    }
  }

  public trackPageView(event: PageViewEvent): void {
    this.trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: event.page,
      customParameters: {
        page: event.page,
        title: event.title,
        url: event.url,
        referrer: event.referrer
      }
    });
  }

  public trackCustomEvent(
    action: string,
    category: string,
    label?: string,
    value?: number,
    customParameters?: Record<string, any>
  ): void {
    this.trackEvent({
      action,
      category,
      label,
      value,
      customParameters
    });
  }

  public setUserId(userId: string): void {
    this.userId = userId;
    this.userProperties.userId = userId;
  }

  public setUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  public setCustomDimension(key: string, value: string): void {
    this.config.customDimensions[key] = value;
  }

  public async flush(): Promise<void> {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      await this.sendEvents(events);
    } catch (error) {
      console.error('Failed to send analytics events:', error);
      // Re-queue events on failure
      this.eventQueue.unshift(...events);
    }
  }

  private async sendEvents(events: AnalyticsEvent[]): Promise<void> {
    if (this.config.trackingId) {
      // Send to Google Analytics or similar
      await this.sendToGoogleAnalytics(events);
    }

    if (this.config.endpoint) {
      // Send to custom endpoint
      await this.sendToCustomEndpoint(events);
    }
  }

  private async sendToGoogleAnalytics(events: AnalyticsEvent[]): Promise<void> {
    // Implementation for Google Analytics
    console.log('Sending to Google Analytics:', events);
  }

  private async sendToCustomEndpoint(events: AnalyticsEvent[]): Promise<void> {
    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events,
          userProperties: this.userProperties,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to send events to custom endpoint:', error);
      throw error;
    }
  }

  public enable(): void {
    this.config.enabled = true;
  }

  public disable(): void {
    this.config.enabled = false;
  }

  public setDebug(debug: boolean): void {
    this.config.debug = debug;
  }

  public getQueueSize(): number {
    return this.eventQueue.length;
  }

  public clearQueue(): void {
    this.eventQueue = [];
  }

  public destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }
    this.flush();
  }
}

// Create default instance
export const analyticsTracker = new AnalyticsTracker();

// Export the class and types
export { AnalyticsTracker, type AnalyticsEvent, type AnalyticsConfig, type UserProperties, type PageViewEvent };

// Utility functions
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  analyticsTracker.trackCustomEvent(action, category, label, value, customParameters);
};

export const trackPageView = (page: string, title?: string, url?: string) => {
  analyticsTracker.trackPageView({ page, title, url });
};

export const setUserId = (userId: string) => {
  analyticsTracker.setUserId(userId);
};

export const setUserProperties = (properties: Partial<UserProperties>) => {
  analyticsTracker.setUserProperties(properties);
};