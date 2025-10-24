/**
 * Advanced Analytics utilities
 * Provides comprehensive analytics tracking and reporting
 */

export interface AdvancedAnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
  timestamp?: number;
  session_id?: string;
  user_id?: string;
}

export interface AnalyticsConfig {
  trackingId: string;
  debug?: boolean;
  anonymizeIp?: boolean;
  customDimensions?: Record<string, string>;
  enableEnhancedEcommerce?: boolean;
  enableUserTiming?: boolean;
  enableExceptionTracking?: boolean;
}

export class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private sessionId: string;
  private userId?: string;
  private eventQueue: AdvancedAnalyticsEvent[] = [];
  private isInitialized: boolean = false;

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.sessionId = this.generateSessionId();
  }

  /**
   * Initialize advanced analytics
   */
  init(): void {
    if (this.isInitialized) return;

    if (typeof window !== 'undefined') {
      this.loadGoogleAnalytics();
      this.setupEventQueue();
      this.setupUserTiming();
      this.setupExceptionTracking();
      this.isInitialized = true;
    }
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }

  /**
   * Load Google Analytics
   */
  private loadGoogleAnalytics(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.trackingId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.config.trackingId, {
      anonymize_ip: this.config.anonymizeIp,
      debug_mode: this.config.debug,
      custom_map: this.config.customDimensions,
    });
  }

  /**
   * Setup event queue for batch processing
   */
  private setupEventQueue(): void {
    // Process events every 5 seconds
    setInterval(() => {
      this.processEventQueue();
    }, 5000);

    // Process events on page unload
    window.addEventListener('beforeunload', () => {
      this.processEventQueue();
    });
  }

  /**
   * Setup user timing tracking
   */
  private setupUserTiming(): void {
    if (!this.config.enableUserTiming) return;

    // Track page load performance
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.trackUserTiming('page_load', perfData.loadEventEnd - perfData.fetchStart);
    });
  }

  /**
   * Setup exception tracking
   */
  private setupExceptionTracking(): void {
    if (!this.config.enableExceptionTracking) return;

    window.addEventListener('error', (event) => {
      this.trackException(event.error, {
        component: 'Global',
        action: 'Uncaught Error',
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackException(new Error(event.reason), {
        component: 'Global',
        action: 'Unhandled Promise Rejection',
      });
    });
  }

  /**
   * Track custom event
   */
  trackEvent(event: AdvancedAnalyticsEvent): void {
    if (!this.isInitialized) {
      console.warn('Analytics not initialized. Call init() first.');
      return;
    }

    this.eventQueue.push(event);

    if (this.config.debug) {
      console.log('Analytics Event:', event);
    }
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle: string, customParameters?: Record<string, any>): void {
    this.trackEvent({
      event: 'page_view',
      category: 'Page',
      action: 'View',
      label: pagePath,
      custom_parameters: {
        page_title: pageTitle,
        page_location: window.location.href,
        referrer: document.referrer,
        ...customParameters,
      },
      timestamp: Date.now(),
      session_id: this.sessionId,
      user_id: this.userId,
    });
  }

  /**
   * Track user timing
   */
  trackUserTiming(name: string, value: number, customParameters?: Record<string, any>): void {
    this.trackEvent({
      event: 'user_timing',
      category: 'Performance',
      action: name,
      value: Math.round(value),
      custom_parameters: customParameters,
      timestamp: Date.now(),
      session_id: this.sessionId,
      user_id: this.userId,
    });
  }

  /**
   * Track exception
   */
  trackException(error: Error, context?: Record<string, any>): void {
    this.trackEvent({
      event: 'exception',
      category: 'Error',
      action: 'Exception',
      label: error.message,
      custom_parameters: {
        error_message: error.message,
        error_stack: error.stack,
        ...context,
      },
      timestamp: Date.now(),
      session_id: this.sessionId,
      user_id: this.userId,
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionId: string, value?: number, currency?: string): void {
    this.trackEvent({
      event: 'conversion',
      category: 'Conversion',
      action: 'Purchase',
      label: conversionId,
      value: value,
      custom_parameters: {
        currency: currency || 'USD',
      },
      timestamp: Date.now(),
      session_id: this.sessionId,
      user_id: this.userId,
    });
  }

  /**
   * Set user ID
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Process event queue
   */
  private processEventQueue(): void {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    events.forEach((event) => {
      this.sendToAnalytics(event);
    });
  }

  /**
   * Send event to analytics service
   */
  private sendToAnalytics(event: AdvancedAnalyticsEvent): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.custom_parameters,
      });
    }
  }

  /**
   * Get analytics data
   */
  getAnalyticsData(): {
    sessionId: string;
    userId?: string;
    eventCount: number;
    config: AnalyticsConfig;
  } {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      eventCount: this.eventQueue.length,
      config: this.config,
    };
  }
}

// Export default instance
export const advancedAnalytics = new AdvancedAnalytics({
  trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'GA_MEASUREMENT_ID',
  debug: process.env.NODE_ENV === 'development',
  anonymizeIp: true,
  enableEnhancedEcommerce: true,
  enableUserTiming: true,
  enableExceptionTracking: true,
});

// Export utility functions
export const trackEvent = (event: AdvancedAnalyticsEvent) => {
  advancedAnalytics.trackEvent(event);
};

export const trackPageView = (pagePath: string, pageTitle: string, customParameters?: Record<string, any>) => {
  advancedAnalytics.trackPageView(pagePath, pageTitle, customParameters);
};

export const trackUserTiming = (name: string, value: number, customParameters?: Record<string, any>) => {
  advancedAnalytics.trackUserTiming(name, value, customParameters);
};