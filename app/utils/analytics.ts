/**
 * Comprehensive Analytics System
 * Provides event tracking, performance monitoring, and user analytics
 */

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
  properties?: Record<string, any>;
  timestamp?: number;
}

export interface UserProperties {
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  language?: string;
  timezone?: string;
  referrer?: string;
  [key: string]: any;
}

class Analytics {
  private debug: boolean;
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties = {};
  private sessionId: string;

  constructor(debug: boolean = false) {
    this.debug = debug;
    this.sessionId = this.generateSessionId();
    this.initializeUserProperties();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeUserProperties(): void {
    if (typeof window !== 'undefined') {
      this.userProperties = {
        sessionId: this.sessionId,
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        timestamp: Date.now(),
      };
    }
  }

  /**
   * Track a custom event
   */
  track(eventName: string, properties?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      name: eventName,
      properties: {
        ...properties,
        ...this.userProperties,
      },
      timestamp: Date.now(),
      userId: this.userProperties.userId,
      sessionId: this.sessionId,
    };

    this.events.push(event);

    if (this.debug) {
      console.log('[Analytics] Event tracked:', event);
    }

    // In production, send to analytics service
    this.sendToAnalyticsService(event);
  }

  /**
   * Track page view
   */
  trackPageView(pageName: string, properties?: Record<string, any>): void {
    this.track('page_view', {
      page_name: pageName,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      page_title: typeof document !== 'undefined' ? document.title : '',
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
    const metric: PerformanceMetric = {
      name: metricName,
      value,
      properties: {
        ...properties,
        ...this.userProperties,
      },
      timestamp: Date.now(),
    };

    this.track('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      ...properties,
    });

    if (this.debug) {
      console.log('[Analytics] Performance metric:', metric);
    }
  }

  /**
   * Track conversion events
   */
  trackConversion(conversionType: string, value?: number, properties?: Record<string, any>): void {
    this.track('conversion', {
      conversion_type: conversionType,
      conversion_value: value,
      ...properties,
    });
  }

  /**
   * Track errors
   */
  trackError(error: Error, properties?: Record<string, any>): void {
    this.track('error', {
      error_message: error.message,
      error_stack: error.stack,
      error_name: error.name,
      ...properties,
    });
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  /**
   * Get user properties
   */
  getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }

  /**
   * Get all events
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
   * Send events to analytics service (placeholder for actual implementation)
   */
  private sendToAnalyticsService(event: AnalyticsEvent): void {
    // In production, implement actual analytics service integration
    // Examples: Google Analytics, Mixpanel, Amplitude, etc.
    
    if (this.debug) {
      console.log('[Analytics] Would send to service:', event);
    }
  }

  /**
   * Enable/disable debug mode
   */
  setDebugMode(debug: boolean): void {
    this.debug = debug;
  }
}

// Create singleton instance
export const analytics = new Analytics(process.env.NODE_ENV === 'development');

// Export convenience functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => 
  analytics.track(eventName, properties);

export const trackPageView = (pageName: string, properties?: Record<string, any>) => 
  analytics.trackPageView(pageName, properties);

export const trackInteraction = (element: string, action: string, properties?: Record<string, any>) => 
  analytics.trackInteraction(element, action, properties);

export const trackPerformance = (metricName: string, value: number, properties?: Record<string, any>) => 
  analytics.trackPerformance(metricName, value, properties);

export const trackConversion = (conversionType: string, value?: number, properties?: Record<string, any>) => 
  analytics.trackConversion(conversionType, value, properties);

export const trackError = (error: Error, properties?: Record<string, any>) => 
  analytics.trackError(error, properties);

export default analytics;