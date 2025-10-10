'use client'
/**
 * Enhanced Analytics Tracker
 * Provides comprehensive tracking for user interactions, performance metrics, and errors
 */

interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
  nonInteraction?: boolean
}

interface PerformanceMetrics {
  metric: string
  value: number
  rating?: 'good' | 'needs-improvement' | 'poor'
}

interface ErrorReport {
  message: string
  stack?: string
  componentStack?: string
  severity: 'low' | 'medium' | 'high' | 'critical'
}

class AnalyticsTracker {
  private isInitialized = false
  private queue: Array<() => void> = []

  /**
   * Initialize the analytics tracker
   */
  initialize(): void {
    if (typeof window === 'undefined') return
    
    this.isInitialized = true
    
    // Process queued events
    this.queue.forEach(fn => fn())
    this.queue = []
    
    // Track initial page view
    this.trackPageView(window.location.pathname)
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return

    const track = () => {
      // Send to analytics service
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          non_interaction: event.nonInteraction
        })
      }
      
      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event)
      }
    }

    if (this.isInitialized) {
      track()
    } else {
      this.queue.push(track)
    }
  }

  /**
   * Track page views
   */
  trackPageView(path: string): void {
    if (typeof window === 'undefined') return

    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: path
        })
      }
    }

    if (this.isInitialized) {
      track()
    } else {
      this.queue.push(track)
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    if (typeof window === 'undefined') return

    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: metrics.metric,
          value: Math.round(metrics.value),
          event_category: 'Performance'
        })
      }
    }

    if (this.isInitialized) {
      track()
    } else {
      this.queue.push(track)
    }
  }

  /**
   * Track errors
   */
  trackError(error: ErrorReport): void {
    if (typeof window === 'undefined') return

    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: error.message,
          fatal: error.severity === 'critical' || error.severity === 'high'
        })
      }
    }

    if (this.isInitialized) {
      track()
    } else {
      this.queue.push(track)
    }
  }

  /**
   * Track user engagement
   */
  trackEngagement(action: string, value?: number): void {
    this.trackEvent({
      category: 'Engagement',
      action,
      value
    })
  }

  /**
   * Track business events
   */
  trackBusinessEvent(event: string, value?: number, label?: string): void {
    this.trackEvent({
      category: 'Business',
      action: event,
      label,
      value
    })
  }
}

// Create singleton instance
export const analyticsTracker = new AnalyticsTracker()

// Initialize on client side
if (typeof window !== 'undefined') {
  analyticsTracker.initialize()
}

export default AnalyticsTracker