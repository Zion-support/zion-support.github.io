/**
 * Analytics utilities and tracking functions
 */

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface AnalyticsConfig {
  trackingId?: string;
  enabled: boolean;
  debug: boolean;
}

class Analytics {
  private config: AnalyticsConfig;
  private events: AnalyticsEvent[] = [];

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = {
      enabled: true,
      debug: process.env.NODE_ENV === 'development',
      ...config,
    };
  }

  /**
   * Track an analytics event
   */
  track(eventName: string, properties?: Record<string, any>): void {
    if (!this.config.enabled) return;

    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now(),
    };

    this.events.push(event);

    if (this.config.debug) {
      console.log('Analytics Event:', event);
    }

    // Send to analytics service (placeholder)
    this.sendToAnalytics(event);
  }

  /**
   * Track page view
   */
  pageView(pageName: string, properties?: Record<string, any>): void {
    this.track('page_view', {
      page_name: pageName,
      ...properties,
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, properties?: Record<string, any>): void {
    this.track('interaction', {
      element,
      action,
      ...properties,
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metricName: string, value: number, properties?: Record<string, any>): void {
    this.track('performance', {
      metric_name: metricName,
      value,
      ...properties,
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionName: string, value?: number, properties?: Record<string, any>): void {
    this.track('conversion', {
      conversion_name: conversionName,
      value,
      ...properties,
    });
  }

  /**
   * Get all tracked events
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Clear all events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Send event to analytics service
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    // Placeholder for actual analytics service integration
    // This would typically send to Google Analytics, Mixpanel, etc.
    if (this.config.debug) {
      console.log('Sending to analytics service:', event);
    }
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, any>): void {
    this.track('user_properties', properties);
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    this.track('error', {
      error_message: error.message,
      error_stack: error.stack,
      ...context,
    });
  }
}

// Create default analytics instance
export const analytics = new Analytics();

// Export individual functions for convenience
export const trackEvent = (eventName: string, properties?: Record<string, any>) => 
  analytics.track(eventName, properties);

export const trackPageView = (pageName: string, properties?: Record<string, any>) => 
  analytics.pageView(pageName, properties);

export const trackInteraction = (element: string, action: string, properties?: Record<string, any>) => 
  analytics.trackInteraction(element, action, properties);

export const trackPerformance = (metricName: string, value: number, properties?: Record<string, any>) => 
  analytics.trackPerformance(metricName, value, properties);

export const trackConversion = (conversionName: string, value?: number, properties?: Record<string, any>) => 
  analytics.trackConversion(conversionName, value, properties);

export const trackError = (error: Error, context?: Record<string, any>) => 
  analytics.trackError(error, context);
