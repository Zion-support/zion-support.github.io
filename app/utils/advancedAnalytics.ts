// Advanced Analytics Utility

interface UserEvent {
  id: string;
  type: string;
  name: string;
  value?: number;
  timestamp: string;
  sessionId: string;
  userId?: string;
  url: string;
  metadata?: Record<string, unknown>;
}

interface UserSession {
  id: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  pageViews: number;
  events: UserEvent[];
  userAgent: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

interface AnalyticsConfig {
  trackingId: string;
  enabled: boolean;
  debug: boolean;
  respectDoNotTrack: boolean;
  anonymizeIP: boolean;
  customDimensions?: Record<string, string>;
  batchSize: number;
  flushInterval: number;
  maxRetries: number;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
  timeToInteractive: number;
}

class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private session: UserSession;
  private eventQueue: UserEvent[] = [];
  private flushTimer: NodeJS.Timeout | null = null;
  private isOnline: boolean = true;
  private retryCount: number = 0;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = {
      trackingId: '',
      enabled: true,
      debug: false,
      respectDoNotTrack: true,
      anonymizeIP: true,
      batchSize: 20,
      flushInterval: 30000, // 30 seconds
      maxRetries: 3,
      ...config
    };

    this.session = this.createSession();
    this.setupEventListeners();
    this.startFlushTimer();
  }

  private createSession(): UserSession {
    const sessionId = this.generateId();
    const startTime = new Date().toISOString();
    
    return {
      id: sessionId,
      startTime,
      pageViews: 0,
      events: [],
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      utmSource: this.getUTMParameter('utm_source'),
      utmMedium: this.getUTMParameter('utm_medium'),
      utmCampaign: this.getUTMParameter('utm_campaign'),
      utmTerm: this.getUTMParameter('utm_term'),
      utmContent: this.getUTMParameter('utm_content')
    };
  }

  private generateId(): string {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUTMParameter(name: string): string | undefined {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || undefined;
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushEvents();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('page_hidden', 'engagement');
      } else {
        this.trackEvent('page_visible', 'engagement');
      }
    });

    // Before unload
    window.addEventListener('beforeunload', () => {
      this.endSession();
      this.flushEvents(true);
    });

    // Performance monitoring
    this.setupPerformanceMonitoring();
  }

  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Web Vitals
    this.measureWebVitals();

    // Page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      this.trackEvent('page_load', 'performance', {
        load_time: loadTime,
        dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        first_byte: navigation.responseStart - navigation.requestStart
      });
    });
  }

  private measureWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.trackEvent('web_vital', 'performance', {
            metric: 'FCP',
            value: entry.startTime
          });
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.trackEvent('web_vital', 'performance', {
        metric: 'LCP',
        value: lastEntry.startTime
      });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.trackEvent('web_vital', 'performance', {
          metric: 'FID',
          value: entry.processingStart - entry.startTime
        });
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      this.trackEvent('web_vital', 'performance', {
        metric: 'CLS',
        value: clsValue
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  public trackEvent(
    name: string,
    type: string = 'custom',
    metadata?: Record<string, unknown>,
    value?: number
  ): void {
    if (!this.config.enabled) return;

    // Check Do Not Track
    if (this.config.respectDoNotTrack && this.isDoNotTrackEnabled()) {
      return;
    }

    const event: UserEvent = {
      id: this.generateId(),
      type,
      name,
      value,
      timestamp: new Date().toISOString(),
      sessionId: this.session.id,
      userId: this.session.userId,
      url: window.location.href,
      metadata: {
        ...metadata,
        page_title: document.title,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        screen_width: screen.width,
        screen_height: screen.height,
        color_depth: screen.colorDepth,
        pixel_ratio: window.devicePixelRatio,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    this.session.events.push(event);
    this.eventQueue.push(event);

    if (this.config.debug) {
      console.log('Analytics Event:', event);
    }

    // Flush if batch size reached
    if (this.eventQueue.length >= this.config.batchSize) {
      this.flushEvents();
    }
  }

  public trackPageView(page: string, title?: string): void {
    this.session.pageViews++;
    this.trackEvent('page_view', 'navigation', {
      page,
      page_title: title || document.title,
      referrer: document.referrer
    });
  }

  public trackClick(element: string, context?: string): void {
    this.trackEvent('click', 'interaction', {
      element,
      context: context || 'unknown',
      element_type: this.getElementType(element)
    });
  }

  public trackFormSubmit(formName: string, success: boolean = true): void {
    this.trackEvent('form_submit', 'form', {
      form_name: formName,
      success,
      form_success: success
    }, success ? 1 : 0);
  }

  public trackSearch(query: string, resultsCount?: number): void {
    this.trackEvent('search', 'search', {
      search_query: query,
      results_count: resultsCount
    }, resultsCount);
  }

  public trackError(error: string, context?: string): void {
    this.trackEvent('error', 'error', {
      error_message: error,
      error_context: context || 'unknown',
      error_url: window.location.href,
      error_line: this.getErrorLine()
    });
  }

  public trackConversion(conversionName: string, value?: number): void {
    this.trackEvent('conversion', 'conversion', {
      conversion_name: conversionName
    }, value);
  }

  public setUserId(userId: string): void {
    this.session.userId = userId;
  }

  public setCustomDimension(key: string, value: string): void {
    this.config.customDimensions = {
      ...this.config.customDimensions,
      [key]: value
    };
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flushEvents();
    }, this.config.flushInterval);
  }

  private flushEvents(sync: boolean = false): void {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    if (this.isOnline) {
      this.sendEvents(events, sync);
    }
  }

  private async sendEvents(events: UserEvent[], sync: boolean = false): Promise<void> {
    try {
      const payload = {
        events,
        session: this.session,
        config: {
          trackingId: this.config.trackingId,
          anonymizeIP: this.config.anonymizeIP,
          customDimensions: this.config.customDimensions
        }
      };

      if (sync) {
        // Synchronous request for beforeunload
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/analytics', false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(payload));
      } else {
        // Asynchronous request
        const response = await fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        this.retryCount = 0;
      }
    } catch (error) {
      if (this.config.debug) {
        console.error('Analytics tracking failed:', error);
      }

      // Retry logic
      if (this.retryCount < this.config.maxRetries) {
        this.retryCount++;
        setTimeout(() => {
          this.sendEvents(events, sync);
        }, Math.pow(2, this.retryCount) * 1000); // Exponential backoff
      } else {
        // Store events for later retry
        this.eventQueue.unshift(...events);
      }
    }
  }

  private endSession(): void {
    this.session.endTime = new Date().toISOString();
    this.session.duration = new Date(this.session.endTime).getTime() - new Date(this.session.startTime).getTime();
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

  public getSession(): UserSession {
    return { ...this.session };
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

  public cleanup(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flushEvents(true);
  }
}

// Singleton instance
export const advancedAnalytics = new AdvancedAnalytics({
  enabled: true,
  debug: process.env.NODE_ENV === 'development',
  respectDoNotTrack: true,
  anonymizeIP: true,
  batchSize: 20,
  flushInterval: 30000,
  maxRetries: 3
});

// Utility functions
export const trackEvent = (name: string, type?: string, metadata?: Record<string, unknown>, value?: number): void => {
  advancedAnalytics.trackEvent(name, type, metadata, value);
};

export const trackPageView = (page: string, title?: string): void => {
  advancedAnalytics.trackPageView(page, title);
};

export const trackClick = (element: string, context?: string): void => {
  advancedAnalytics.trackClick(element, context);
};

export const trackFormSubmit = (formName: string, success: boolean = true): void => {
  advancedAnalytics.trackFormSubmit(formName, success);
};

export const trackSearch = (query: string, resultsCount?: number): void => {
  advancedAnalytics.trackSearch(query, resultsCount);
};

export const trackError = (error: string, context?: string): void => {
  advancedAnalytics.trackError(error, context);
};

export const trackConversion = (conversionName: string, value?: number): void => {
  advancedAnalytics.trackConversion(conversionName, value);
};

export const setUserId = (userId: string): void => {
  advancedAnalytics.setUserId(userId);
};

export const setCustomDimension = (key: string, value: string): void => {
  advancedAnalytics.setCustomDimension(key, value);
};

// Auto-track page views
if (typeof window !== 'undefined') {
  // Track initial page view
  advancedAnalytics.trackPageView(window.location.pathname);

  // Track page changes (for SPAs)
  let currentPath = window.location.pathname;
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      advancedAnalytics.trackPageView(currentPath);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}