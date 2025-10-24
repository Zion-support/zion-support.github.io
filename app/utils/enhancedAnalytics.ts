/**
 * Enhanced Analytics utilities with advanced tracking capabilities
 */

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
  timestamp?: number;
  session_id?: string;
}

export interface UserProperties {
  user_id?: string;
  user_type?: string;
  subscription_tier?: string;
  signup_date?: string;
  last_active?: string;
  custom_properties?: Record<string, any>;
}

export interface PageViewEvent {
  page_path: string;
  page_title: string;
  page_location?: string;
  referrer?: string;
  custom_parameters?: Record<string, any>;
}

export class EnhancedAnalytics {
  private sessionId: string;
  private userId?: string;
  private userProperties: UserProperties = {};
  private eventQueue: AnalyticsEvent[] = [];
  private isInitialized: boolean = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  /**
   * Initialize enhanced analytics
   */
  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupEventQueue();
    this.setupPerformanceTracking();
    this.setupUserInteractionTracking();
    this.isInitialized = true;
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(7)}`;
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
   * Setup performance tracking
   */
  private setupPerformanceTracking(): void {
    if ('performance' in window) {
      // Track page load performance
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        this.trackPerformance('page_load', {
          dom_content_loaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          load_complete: perfData.loadEventEnd - perfData.loadEventStart,
          total_time: perfData.loadEventEnd - perfData.fetchStart,
        });
      });

      // Track Core Web Vitals
      this.trackCoreWebVitals();
    }
  }

  /**
   * Setup user interaction tracking
   */
  private setupUserInteractionTracking(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackCustomEvent('user_interaction', 'click', target.tagName, undefined, {
        element_id: target.id,
        element_class: target.className,
        element_text: target.textContent?.substring(0, 100),
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackCustomEvent('user_interaction', 'form_submit', form.id || 'unnamed_form');
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackCustomEvent('user_interaction', 'scroll_depth', undefined, scrollDepth);
      }
    });
  }

  /**
   * Track Core Web Vitals
   */
  private trackCoreWebVitals(): void {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.trackPerformance('lcp', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.trackPerformance('fid', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      this.trackPerformance('cls', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Track custom event
   */
  trackCustomEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    customParameters?: Record<string, any>
  ): void {
    const event: AnalyticsEvent = {
      event: 'custom_event',
      category,
      action,
      label,
      value,
      custom_parameters: customParameters,
      timestamp: Date.now(),
      session_id: this.sessionId,
    };

    this.eventQueue.push(event);
  }

  /**
   * Track page view
   */
  trackPageView(pageView: PageViewEvent): void {
    this.trackCustomEvent('page_view', 'view', pageView.page_path, undefined, {
      page_title: pageView.page_title,
      page_location: pageView.page_location || window.location.href,
      referrer: pageView.referrer || document.referrer,
      ...pageView.custom_parameters,
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metricName: string, value: number, customParameters?: Record<string, any>): void {
    this.trackCustomEvent('performance', metricName, undefined, value, customParameters);
  }

  /**
   * Track user engagement
   */
  trackEngagement(engagementType: string, details?: Record<string, any>): void {
    this.trackCustomEvent('engagement', engagementType, undefined, undefined, details);
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };
    this.userId = properties.user_id;
  }

  /**
   * Track conversion
   */
  trackConversion(conversionId: string, value?: number, currency?: string): void {
    this.trackCustomEvent('conversion', 'purchase', conversionId, value, {
      currency: currency || 'USD',
    });
  }

  /**
   * Process event queue
   */
  private processEventQueue(): void {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    // Send events to analytics service
    events.forEach((event) => {
      this.sendToAnalytics(event);
    });
  }

  /**
   * Send event to analytics service
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.custom_parameters,
        user_properties: this.userProperties,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  /**
   * Get analytics data
   */
  getAnalyticsData(): {
    sessionId: string;
    userId?: string;
    userProperties: UserProperties;
    eventCount: number;
  } {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      userProperties: this.userProperties,
      eventCount: this.eventQueue.length,
    };
  }
}

// Export singleton instance
export const analytics = new EnhancedAnalytics();

// Export utility functions
export const trackCustomEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  analytics.trackCustomEvent(category, action, label, value, customParameters);
};

export const trackPageView = (pageView: PageViewEvent) => {
  analytics.trackPageView(pageView);
};

export const trackPerformance = (metricName: string, value: number, customParameters?: Record<string, any>) => {
  analytics.trackPerformance(metricName, value, customParameters);
};