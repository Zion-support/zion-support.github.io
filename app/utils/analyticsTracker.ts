/**
 * Analytics Tracker
 * Comprehensive analytics tracking for user interactions and performance
 */

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export interface UserProperties {
  userId?: string;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  screenResolution: string;
  viewportSize: string;
}

class AnalyticsTracker {
  private isInitialized = false;
  private sessionId: string;
  private userId?: string;
  private eventQueue: AnalyticsEvent[] = [];
  private performanceObserver?: PerformanceObserver;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    try {
      this.setupPerformanceMonitoring();
      this.setupErrorTracking();
      this.setupUserInteractionTracking();
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize analytics tracker:', error);
    }
  }

  private setupPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      this.performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.trackPageLoad(entry as PerformanceNavigationTiming);
          } else if (entry.entryType === 'paint') {
            this.trackPaintMetrics(entry as PerformancePaintTiming);
          }
        });
      });

      this.performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });
    }
  }

  private setupErrorTracking(): void {
    window.addEventListener('error', (event) => {
      this.trackError({
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: 'Unhandled Promise Rejection',
        reason: event.reason,
        promise: event.promise,
      });
    });
  }

  private setupUserInteractionTracking(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        this.trackEvent({
          name: 'click',
          category: 'user_interaction',
          action: 'click',
          label: this.getElementLabel(target),
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form) {
        this.trackEvent({
          name: 'form_submit',
          category: 'user_interaction',
          action: 'submit',
          label: form.id || form.className || 'unknown_form',
        });
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent({
          name: 'scroll_depth',
          category: 'user_engagement',
          action: 'scroll',
          value: maxScrollDepth,
        });
      }
    });
  }

  private getElementLabel(element: HTMLElement): string {
    return (
      element.id ||
      element.className ||
      element.tagName ||
      element.textContent?.slice(0, 50) ||
      'unknown_element'
    );
  }

  private trackPageLoad(entry: PerformanceNavigationTiming): void {
    const metrics: PerformanceMetrics = {
      loadTime: entry.loadEventEnd - entry.loadEventStart,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: entry.domInteractive - entry.navigationStart,
    };

    this.trackPerformance(metrics);
  }

  private trackPaintMetrics(entry: PerformancePaintTiming): void {
    if (entry.name === 'first-contentful-paint') {
      this.trackEvent({
        name: 'first_contentful_paint',
        category: 'performance',
        action: 'paint',
        value: entry.startTime,
      });
    }
  }

  /**
   * Track a custom event
   */
  public trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.eventQueue.push(event);
      return;
    }

    try {
      // Send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          custom_parameters: event.customParameters,
        });
      }

      // Send to custom analytics endpoint
      this.sendToAnalytics(event);
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  /**
   * Track performance metrics
   */
  public trackPerformance(metrics: PerformanceMetrics): void {
    this.trackEvent({
      name: 'performance_metrics',
      category: 'performance',
      action: 'measure',
      customParameters: metrics,
    });
  }

  /**
   * Track an error
   */
  public trackError(error: any): void {
    this.trackEvent({
      name: 'error',
      category: 'error',
      action: 'occurred',
      label: error.message || 'Unknown error',
      customParameters: {
        stack: error.stack,
        filename: error.filename,
        lineno: error.lineno,
        colno: error.colno,
      },
    });
  }

  /**
   * Track page view
   */
  public trackPageView(page: string, title?: string): void {
    this.trackEvent({
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: page,
      customParameters: {
        page_title: title || document.title,
        page_url: window.location.href,
        referrer: document.referrer,
      },
    });
  }

  /**
   * Track user identification
   */
  public identifyUser(userId: string, properties?: Record<string, any>): void {
    this.userId = userId;
    this.trackEvent({
      name: 'user_identify',
      category: 'user',
      action: 'identify',
      customParameters: {
        user_id: userId,
        ...properties,
      },
    });
  }

  /**
   * Set user properties
   */
  public setUserProperties(properties: Partial<UserProperties>): void {
    this.trackEvent({
      name: 'user_properties',
      category: 'user',
      action: 'update',
      customParameters: properties,
    });
  }

  /**
   * Track conversion
   */
  public trackConversion(conversionId: string, value?: number, currency?: string): void {
    this.trackEvent({
      name: 'conversion',
      category: 'conversion',
      action: 'completed',
      label: conversionId,
      value: value,
      customParameters: {
        conversion_id: conversionId,
        currency: currency || 'USD',
      },
    });
  }

  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      const payload = {
        ...event,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };

      // Send to your analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }

  /**
   * Flush queued events
   */
  public flush(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  /**
   * Get current session ID
   */
  public getSessionId(): string {
    return this.sessionId;
  }

  /**
   * Get current user ID
   */
  public getUserId(): string | undefined {
    return this.userId;
  }
}

// Export singleton instance
export const analyticsTracker = new AnalyticsTracker();
export default analyticsTracker;