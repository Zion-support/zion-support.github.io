// Advanced analytics utility

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

export interface AnalyticsConfig {
  trackingId?: string;
  debug?: boolean;
  autoTrack?: boolean;
}

export class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private events: AnalyticsEvent[] = [];

  constructor(config: AnalyticsConfig = {}) {
    this.config = {
      debug: false,
      autoTrack: true,
      ...config
    };

    if (this.config.autoTrack) {
      this.initializeAutoTracking();
    }
  }

  /**
   * Track a custom event
   */
  track(event: AnalyticsEvent): void {
    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || Date.now()
    };

    this.events.push(eventWithTimestamp);

    if (this.config.debug) {
      console.log('Analytics Event:', eventWithTimestamp);
    }

    // Send to analytics service
    this.sendToAnalytics(eventWithTimestamp);
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.track({
      name: 'page_view',
      properties: {
        page,
        title: title || document.title,
        url: window.location.href
      }
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, properties?: Record<string, any>): void {
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
   * Track performance metrics
   */
  trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    this.track({
      name: 'performance',
      properties: {
        metric,
        value,
        unit
      }
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    this.track({
      name: 'error',
      properties: {
        message: error.message,
        stack: error.stack,
        ...context
      }
    });
  }

  /**
   * Get analytics data
   */
  getData(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Clear analytics data
   */
  clearData(): void {
    this.events = [];
  }

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
            className: target.className
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

    // Track performance
    if (window.performance) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          this.trackPerformance('page_load_time', navigation.loadEventEnd - navigation.loadEventStart);
          this.trackPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }
      });
    }
  }

  private sendToAnalytics(event: AnalyticsEvent): void {
    // Send to Google Analytics
    if (this.config.trackingId && window.gtag) {
      window.gtag('event', event.name, event.properties);
    }

    // Send to custom analytics endpoint
    if (this.config.trackingId) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      }).catch(error => {
        if (this.config.debug) {
          console.error('Failed to send analytics event:', error);
        }
      });
    }
  }
}

export default AdvancedAnalytics;