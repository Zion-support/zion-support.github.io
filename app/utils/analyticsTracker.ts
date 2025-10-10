/**
 * Analytics Tracker
 * Provides comprehensive analytics tracking for the application
 */

interface AnalyticsEvent {
  action: string;
  category: string;
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
   * Track a page view
   */
  trackPageView(path: string): void {
    const event = () => {
      // Add your analytics implementation here
    };

    if (this.isInitialized) {
      event();
    } else {
      this.queue.push(event);
    }
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    const trackFn = () => {
      // Add your analytics implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    const trackFn = () => {
      // Add your performance tracking implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
    }
  }

  /**
   * Track an error
   */
  trackError(error: ErrorReport): void {
    const trackFn = () => {
      // Add your error tracking implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
    }
  }

  /**
   * Track user interaction
   */
  trackInteraction(action: string, element?: string): void {
    this.trackEvent({
      action,
      category: 'user-interaction',
      label: element
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number): void {
    this.trackEvent({
      action: 'conversion',
      category: conversionType,
      value
    });
  }

  /**
   * Track external link clicks
   */
  trackExternalLink(url: string, linkText?: string): void {
    this.trackEvent({
      category: 'Outbound',
      action: 'click',
      label: linkText || url
    });
  }

  /**
   * Track search queries
   */
  trackSearch(query: string, resultsCount?: number): void {
    this.trackEvent({
      category: 'Search',
      action: 'search',
      label: query,
      value: resultsCount
    });
  }

  /**
   * Track video interactions
   */
  trackVideoInteraction(videoId: string, action: 'play' | 'pause' | 'complete', progress?: number): void {
    this.trackEvent({
      category: 'Video',
      action,
      label: videoId,
      value: progress
    });
  }

  /**
   * Track download events
   */
  trackDownload(fileName: string, fileType: string): void {
    this.trackEvent({
      category: 'Download',
      action: 'download',
      label: `${fileName}.${fileType}`
    });
  }

  /**
   * Get analytics data (for debugging)
   */
  getAnalyticsData(): {
    isInitialized: boolean;
    queueLength: number;
  } {
    return {
      isInitialized: this.isInitialized,
      queueLength: this.queue.length
    };
  }
}

// Create singleton instance
export const analyticsTracker = new AnalyticsTracker();

export default AnalyticsTracker;