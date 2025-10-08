/**
 * Enhanced Analytics Utility
 * Provides type-safe analytics tracking with error handling
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export interface AnalyticsUser {
  id?: string;
  properties?: Record<string, unknown>;
}

class AnalyticsService {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];
  private readonly maxQueueSize = 100;

  /**
   * Initialize analytics service
   */
  initialize(): void {
    if (this.isInitialized) return;
    
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined') return;

      // Process queued events
      this.processQueue();
      this.isInitialized = true;
    } catch (error) {
      console.error('Analytics initialization failed:', error);
    }
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    try {
      if (!this.isInitialized) {
        this.queueEvent(event);
        return;
      }

      // Send to Google Analytics if available
      if (this.hasGtag()) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.metadata,
        });
      }

      // Log in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Analytics Event:', event);
      }
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    try {
      if (this.hasGtag()) {
        window.gtag('config', this.getGtagId(), {
          page_path: path,
          page_title: title,
        });
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  /**
   * Track user properties
   */
  identifyUser(user: AnalyticsUser): void {
    try {
      if (this.hasGtag() && user.id) {
        window.gtag('set', 'user_properties', {
          user_id: user.id,
          ...user.properties,
        });
      }
    } catch (error) {
      console.error('Failed to identify user:', error);
    }
  }

  /**
   * Track error events
   */
  trackError(error: Error, metadata?: Record<string, unknown>): void {
    this.trackEvent({
      action: 'error',
      category: 'exception',
      label: error.message,
      metadata: {
        stack: error.stack,
        ...metadata,
      },
    });
  }

  /**
   * Track timing events (for performance monitoring)
   */
  trackTiming(
    category: string,
    variable: string,
    value: number,
    label?: string
  ): void {
    try {
      if (this.hasGtag()) {
        window.gtag('event', 'timing_complete', {
          name: variable,
          value: Math.round(value),
          event_category: category,
          event_label: label,
        });
      }
    } catch (error) {
      console.error('Failed to track timing:', error);
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metric: string, value: number): void {
    this.trackTiming('Performance', metric, value);
  }

  /**
   * Check if gtag is available
   */
  private hasGtag(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof (window as any).gtag === 'function'
    );
  }

  /**
   * Get Google Analytics ID
   */
  private getGtagId(): string {
    // Return the tracking ID from environment or config
    return process.env['NEXT_PUBLIC_GA_ID'] || 'GA_MEASUREMENT_ID';
  }

  /**
   * Queue event for later processing
   */
  private queueEvent(event: AnalyticsEvent): void {
    if (this.queue.length < this.maxQueueSize) {
      this.queue.push(event);
    }
  }

  /**
   * Process queued events
   */
  private processQueue(): void {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();

// Export convenience functions
export const trackEvent = (event: AnalyticsEvent) => analytics.trackEvent(event);
export const trackPageView = (path: string, title?: string) =>
  analytics.trackPageView(path, title);
export const trackError = (error: Error, metadata?: Record<string, unknown>) =>
  analytics.trackError(error, metadata);
export const trackTiming = (
  category: string,
  variable: string,
  value: number,
  label?: string
) => analytics.trackTiming(category, variable, value, label);
export const identifyUser = (user: AnalyticsUser) => analytics.identifyUser(user);

// Initialize on import
if (typeof window !== 'undefined') {
  analytics.initialize();
}

export default analytics;