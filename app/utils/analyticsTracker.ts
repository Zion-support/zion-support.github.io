/**
 * Enhanced Analytics Tracker
 * Provides comprehensive tracking for user interactions, performance metrics, and errors
 */

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface PerformanceMetrics {
  metric: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
}

interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class AnalyticsTracker {
  private isInitialized = false;
  private queue: Array<() => void> = [];

  /**
   * Initialize the analytics tracker
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    this.isInitialized = true;
    
    // Process queued events
    this.queue.forEach((fn) => fn());
    this.queue = [];

    // Track initial page view
    this.trackPageView(window.location.pathname);
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          non_interaction: event.nonInteraction,
        });
      }

      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics Event]', event);
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track page views
   */
  trackPageView(path: string): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: path,
          page_title: document.title,
          page_location: window.location.href,
        });
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics Page View]', path);
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'performance', {
          event_category: 'Web Vitals',
          event_label: metrics.metric,
          value: Math.round(metrics.value),
          metric_rating: metrics.rating,
        });
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics Performance]', metrics);
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track errors
   */
  trackError(error: ErrorReport): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: error.severity === 'critical',
          error_severity: error.severity,
        });
      }

      // Always log errors to console
      console.error('[Analytics Error]', error);
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track user timing
   */
  trackTiming(category: string, variable: string, value: number, label?: string): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: variable,
          value: Math.round(value),
          event_category: category,
          event_label: label,
        });
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics Timing]', { category, variable, value, label });
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track conversions
   */
  trackConversion(conversionId: string, value?: number): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: conversionId,
          value: value,
          currency: 'USD',
        });
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics Conversion]', { conversionId, value });
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }
}

// Export singleton instance
export const analyticsTracker = new AnalyticsTracker();

// Auto-initialize when window is available
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    analyticsTracker.initialize();
  } else {
    window.addEventListener('load', () => {
      analyticsTracker.initialize();
    });
  }
}

export default analyticsTracker;