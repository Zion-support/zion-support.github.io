// Enhanced analytics utility

export interface EnhancedAnalyticsConfig {
  trackingId?: string;
  debug?: boolean;
  autoTrack?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enableUserTracking?: boolean;
  enablePageTracking?: boolean;
  enableEventTracking?: boolean;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

export interface UserProperties {
  id?: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

export class EnhancedAnalytics {
  private config: Required<EnhancedAnalyticsConfig>;
  private events: AnalyticsEvent[] = [];
  private performanceMetrics: PerformanceMetric[] = [];
  private userProperties: UserProperties = {};
  private sessionId: string;
  private pageStartTime: number;

  constructor(config: EnhancedAnalyticsConfig = {}) {
    this.config = {
      trackingId: '',
      debug: false,
      autoTrack: true,
      enablePerformanceTracking: true,
      enableErrorTracking: true,
      enableUserTracking: true,
      enablePageTracking: true,
      enableEventTracking: true,
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.pageStartTime = Date.now();

    if (this.config.autoTrack) {
      this.initializeAutoTracking();
    }
  }

  /**
   * Track a custom event
   */
  track(event: AnalyticsEvent): void {
    if (!this.config.enableEventTracking) return;

    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || Date.now(),
      sessionId: this.sessionId,
      userId: this.userProperties.id
    };

    this.events.push(eventWithTimestamp);

    if (this.config.debug) {
      console.log('Enhanced Analytics Event:', eventWithTimestamp);
    }

    this.sendToAnalytics(eventWithTimestamp);
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    if (!this.config.enablePageTracking) return;

    const pageViewTime = Date.now() - this.pageStartTime;
    
    this.track({
      name: 'page_view',
      properties: {
        page,
        title: title || document.title,
        url: window.location.href,
        referrer: document.referrer,
        pageViewTime
      }
    });

    // Track performance metrics
    if (this.config.enablePerformanceTracking) {
      this.trackPerformanceMetrics();
    }
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, properties?: Record<string, any>): void {
    if (!this.config.enableEventTracking) return;

    this.track({
      name: 'interaction',
      properties: {
        element,
        action,
        ...properties
      }
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number, properties?: Record<string, any>): void {
    this.track({
      name: 'conversion',
      properties: {
        conversionType,
        value,
        ...properties
      }
    });
  }

  /**
   * Track performance metric
   */
  trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    if (!this.config.enablePerformanceTracking) return;

    const performanceMetric: PerformanceMetric = {
      name: metric,
      value,
      unit,
      timestamp: Date.now()
    };

    this.performanceMetrics.push(performanceMetric);

    this.track({
      name: 'performance',
      properties: performanceMetric
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    if (!this.config.enableErrorTracking) return;

    this.track({
      name: 'error',
      properties: {
        errorMessage: error.message,
        errorStack: error.stack,
        ...context
      }
    });
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: UserProperties): void {
    if (!this.config.enableUserTracking) return;

    this.userProperties = { ...this.userProperties, ...properties };
    
    this.track({
      name: 'user_properties_updated',
      properties: this.userProperties
    });
  }

  /**
   * Identify user
   */
  identify(userId: string, properties?: UserProperties): void {
    if (!this.config.enableUserTracking) return;

    this.userProperties = { ...this.userProperties, id: userId, ...properties };
    
    this.track({
      name: 'user_identified',
      properties: this.userProperties
    });
  }

  /**
   * Track performance metrics
   */
  private trackPerformanceMetrics(): void {
    if (!window.performance) return;

    // Page load time
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.trackPerformance('page_load_time', navigation.loadEventEnd - navigation.loadEventStart);
      this.trackPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.trackPerformance('first_paint', navigation.loadEventEnd - navigation.fetchStart);
    }

    // Resource timing
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
      this.trackPerformance(`resource_${resource.name}`, resource.duration);
    });

    // Web Vitals
    this.trackWebVitals();
  }

  /**
   * Track Web Vitals
   */
  private trackWebVitals(): void {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.trackPerformance('lcp', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            this.trackPerformance('fid', entry.processingStart - entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  /**
   * Initialize auto tracking
   */
  private initializeAutoTracking(): void {
    // Track page views
    this.trackPageView(window.location.pathname);

    // Track clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target) {
        this.trackInteraction(
          target.tagName.toLowerCase(),
          'click',
          {
            text: target.textContent?.slice(0, 100),
            className: target.className,
            id: target.id
          }
        );
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      if (form) {
        this.trackInteraction('form', 'submit', {
          action: form.action,
          method: form.method
        });
      }
    });

    // Track errors
    window.addEventListener('error', (e) => {
      this.trackError(e.error, {
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
      this.trackError(new Error(e.reason), {
        type: 'unhandled_promise_rejection'
      });
    });
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Send event to analytics
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    // Send to Google Analytics
    if (this.config.trackingId && window.gtag) {
      window.gtag('event', event.name, event.properties);
    }

    // Send to custom analytics endpoint
    if (this.config.trackingId) {
      fetch('/api/analytics/enhanced', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      }).catch(error => {
        if (this.config.debug) {
          console.error('Failed to send enhanced analytics event:', error);
        }
      });
    }
  }

  /**
   * Get analytics data
   */
  getData(): { events: AnalyticsEvent[]; performanceMetrics: PerformanceMetric[]; userProperties: UserProperties } {
    return {
      events: [...this.events],
      performanceMetrics: [...this.performanceMetrics],
      userProperties: { ...this.userProperties }
    };
  }

  /**
   * Clear analytics data
   */
  clearData(): void {
    this.events = [];
    this.performanceMetrics = [];
    this.userProperties = {};
  }
}

export default EnhancedAnalytics;