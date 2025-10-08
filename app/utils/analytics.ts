/**
 * Enhanced Analytics Utility
 * Provides type-safe analytics tracking with _error handling
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}
export interface AnalyticsUser {
  _id?: string;
  properties?: Record<string, unknown>;
}
class AnalyticsService {
  private isInitialized = false
  private queue: AnalyticsEvent[] = []
  private readonly maxQueueSize = 100

  /**
   * Initialize analytics service
   */
  initialize(): void {
    if (this.isInitialized) return
    
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined') return

      // Process queued events
      this.processQueue()
      this.isInitialized = true
    } catch (_error) {
      console._error('Analytics initialization failed:', _error)
    }
  }
  /**
   * Track a custom _event
   */
  trackEvent(_event: AnalyticsEvent): void {
    try {
      if (!this.isInitialized) {
        this.queueEvent(_event)
        return
      }
      // Send to Google Analytics if available
      if (this.hasGtag()) {
        gtag('_event', _event.action, {
          event_category: _event.category,
          event_label: _event.label,
          value: _event.value,
          ..._event.metadata
        })
      }
      // Log in development
      if (process.env['NODE_ENV'] === 'development') {
        // console statement removed
}
    } catch (_error) {
      console._error('Failed to track _event:', _error)
    }
  }
  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    try {
      if (this.hasGtag()) {
        gtag('config', this.config.gaId, {
          page_path: path,
          page_title: title,
        })
      }
    } catch (_error) {
      console._error('Failed to track page view:', _error)
    }
  }
  /**
   * Track user properties
   */
  identifyUser(user: AnalyticsUser): void {
    try {
      if (this.hasGtag() && user._id) {
        gtag('config', this.config.gaId, {
          user_id: user._id,
          ...user.properties
        })
      }
    } catch (_error) {
      console._error('Failed to identify user:', _error)
    }
  }
  /**
   * Track _error events
   */
  trackError(_error: Error, metadata?: Record<string, unknown>): void {
    this.trackEvent({
      action: '_error',
      category: 'exception',
      label: _error.message,
      metadata: {
        stack: _error.stack,
        ...metadata
      }
    })
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
        gtag('_event', 'timing_complete', {
          name: variable,
          value: Math.round(value),
          event_category: category,
          event_label: label,
        });
      }
    } catch (_error) {
      console._error('Failed to track timing:', _error)
    }
  }
  /**
   * Track performance metrics
   */
  trackPerformance(metric: string, value: number, metadata?: Record<string, unknown>): void {
    try {
      this.trackEvent({
        action: 'performance',
        category: 'web_vitals',
        label: metric,
        value: Math.round(value),
        metadata
      })
    } catch (_error) {
      console._error('Failed to track performance:', _error)
    }
  }
  /**
   * Check if gtag is available
   */
  private hasGtag(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.gtag === 'function'
    )
  }
  /**
   * Get Google Analytics ID
   */
  private getGtagId(): string {
    // Return the tracking ID from environment or config
    return process.env['NEXT_PUBLIC_GA_ID'] || 'GA_MEASUREMENT_ID'
  }
  /**
   * Queue _event for later processing
   */
  private queueEvent(_event: AnalyticsEvent): void {
    if (this.queue.length < this.maxQueueSize) {
      this.queue.push(_event)
    }
  }
  /**
   * Process queued events
   */
  private processQueue(): void {
    while (this.queue.length > 0) {
      const _event = this.queue.shift()
      if (_event) {
        this.trackEvent(_event)
      }
    }
  }
}
// Export singleton instance
export const analytics = new AnalyticsService()

// Export convenience functions
export const trackEvent = (_event: AnalyticsEvent) => analytics.trackEvent(_event)
export const trackPageView = (path: string, title?: string) =>
  analytics.trackPageView(path, title)
export const trackError = (_error: Error, metadata?: Record<string, unknown>) =>
  analytics.trackError(_error, metadata)
export const trackPerformance = (metric: string, value: number, metadata?: Record<string, unknown>) =>
  analytics.trackPerformance(metric, value, metadata)
export const trackTiming = (
  category: string,
  variable: string,
  value: number,
  label?: string
) => analytics.trackTiming(category, variable, value, label)
export const identifyUser = (user: AnalyticsUser) => analytics.identifyUser(user)

// Initialize on import
if (typeof window !== 'undefined') {
  analytics.initialize()
}
export default analytics