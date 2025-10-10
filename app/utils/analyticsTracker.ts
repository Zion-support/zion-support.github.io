'use client';

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
    this.queue.forEach(fn => fn());
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
      // Google Analytics 4
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          non_interaction: event.nonInteraction
        });
      }

      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event);
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: path,
          page_title: title || document.title
        });
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
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'timing_complete', {
          name: metrics.metric,
          value: Math.round(metrics.value),
          event_category: 'Performance'
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metrics);
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track error
   */
  trackError(error: ErrorReport): void {
    if (typeof window === 'undefined') return;

    const track = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: error.severity === 'critical' || error.severity === 'high',
          event_category: 'Error'
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Analytics Error:', error);
      }
    };

    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
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
    });
  }

  /**
   * Track conversion
   */
  trackConversion(action: string, value?: number): void {
    this.trackEvent({
      category: 'Conversion',
      action,
      value
    });
  }

  /**
   * Track search
   */
  trackSearch(searchTerm: string, resultsCount?: number): void {
    this.trackEvent({
      category: 'Search',
      action: 'search',
      label: searchTerm,
      value: resultsCount
    });
  }

  /**
   * Track social interaction
   */
  trackSocial(network: string, action: string, target?: string): void {
    this.trackEvent({
      category: 'Social',
      action: `${network}_${action}`,
      label: target
    });
  }

  /**
   * Track e-commerce transaction
   */
  trackTransaction(transactionId: string, value: number, currency = 'USD'): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: transactionId,
        value,
        currency
      });
    }
  }

  /**
   * Track custom dimension
   */
  trackCustomDimension(dimension: string, value: string): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: {
          [dimension]: value
        }
      });
    }
  }
}

// Create singleton instance
export const analyticsTracker = new AnalyticsTracker();

// Export convenience functions
export const trackEvent = (event: AnalyticsEvent) => analyticsTracker.trackEvent(event);
export const trackPageView = (path: string, title?: string) => analyticsTracker.trackPageView(path, title);
export const trackPerformance = (metrics: PerformanceMetrics) => analyticsTracker.trackPerformance(metrics);
export const trackError = (error: ErrorReport) => analyticsTracker.trackError(error);
export const trackEngagement = (action: string, element?: string) => analyticsTracker.trackEngagement(action, element);
export const trackConversion = (action: string, value?: number) => analyticsTracker.trackConversion(action, value);
export const trackSearch = (searchTerm: string, resultsCount?: number) => analyticsTracker.trackSearch(searchTerm, resultsCount);
export const trackSocial = (network: string, action: string, target?: string) => analyticsTracker.trackSocial(network, action, target);
export const trackTransaction = (transactionId: string, value: number, currency?: string) => analyticsTracker.trackTransaction(transactionId, value, currency);
export const trackCustomDimension = (dimension: string, value: string) => analyticsTracker.trackCustomDimension(dimension, value);

export default analyticsTracker;