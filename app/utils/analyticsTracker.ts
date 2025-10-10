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
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', path)
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
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metrics)
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
      
      // Always log errors to console
      console.error('Analytics Error:', error)
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
  trackEngagement(action: string, element?: string): void {
    this.trackEvent({
      category: 'Engagement',
      action,
      label: element
    })
  }

  /**
   * Track conversion events
   */
  trackConversion(conversionType: string, value?: number): void {
    this.trackEvent({
      category: 'Conversion',
      action: conversionType,
      value
    })
  }

  /**
   * Track search queries
   */
  trackSearch(query: string, results?: number): void {
    this.trackEvent({
      category: 'Search',
      action: 'search',
      label: query,
      value: results
    })
  }

  /**
   * Track form interactions
   */
  trackFormInteraction(formName: string, action: string, field?: string): void {
    this.trackEvent({
      category: 'Form',
      action,
      label: `${formName}${field ? ` - ${field}` : ''}`
    })
  }

  /**
   * Track button clicks
   */
  trackButtonClick(buttonText: string, location?: string): void {
    this.trackEvent({
      category: 'Button',
      action: 'click',
      label: `${buttonText}${location ? ` - ${location}` : ''}`
    })
  }

  /**
   * Track link clicks
   */
  trackLinkClick(url: string, text?: string): void {
    this.trackEvent({
      category: 'Link',
      action: 'click',
      label: text || url
    })
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(depth: number): void {
    this.trackEvent({
      category: 'Engagement',
      action: 'scroll',
      value: depth
    })
  }

  /**
   * Track time on page
   */
  trackTimeOnPage(timeInSeconds: number): void {
    this.trackEvent({
      category: 'Engagement',
      action: 'time_on_page',
      value: timeInSeconds
    })
  }
}

// Create singleton instance
export const analytics = new AnalyticsTracker()

// Initialize on client side
if (typeof window !== 'undefined') {
  analytics.initialize()
}

export default AnalyticsTracker