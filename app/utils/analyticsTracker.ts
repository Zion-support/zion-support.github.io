/**
 * Analytics Tracker
 * Provides comprehensive analytics tracking for the application
 */

interface AnalyticsEvent {
<<<<<<< HEAD
  action: string;
  category: string;
=======
  category: string;
  action: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
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

<<<<<<< HEAD
  /**
   * Track a page view
   */
  trackPageView(path: string): void {
    const event = () => {
      console.log('Page view tracked:', path);
      // Add your analytics implementation here
    };

    if (this.isInitialized) {
      event();
    } else {
      this.queue.push(event);
    }
  }

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
<<<<<<< HEAD
    const trackFn = () => {
      console.log('Event tracked:', event);
      // Add your analytics implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
=======
    if (typeof window === 'undefined') return;
    
    const track = () => {
      // Send to analytics service (replace with your preferred service)
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
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
   * Track page views
   */
  trackPageView(path: string, title?: string): void {
    if (typeof window === 'undefined') return;
    
    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: path,
          page_title: title || document.title
        });
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', { path, title: title || document.title });
      }
    };
    
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
<<<<<<< HEAD
    const trackFn = () => {
      console.log('Performance tracked:', metrics);
      // Add your performance tracking implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
=======
    if (typeof window === 'undefined') return;
    
    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: metrics.metric,
          value: Math.round(metrics.value),
          event_category: 'Performance'
        });
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metrics);
      }
    };
    
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
    }
  }

  /**
   * Track an error
   */
  trackError(error: ErrorReport): void {
<<<<<<< HEAD
    const trackFn = () => {
      console.error('Error tracked:', error);
      // Add your error tracking implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
=======
    if (typeof window === 'undefined') return;
    
    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: error.message,
          fatal: error.severity === 'critical' || error.severity === 'high',
          event_category: 'Error'
        });
      }
      
      // Always log errors to console
      console.error('Analytics Error:', error);
    };
    
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
    }
  }

  /**
<<<<<<< HEAD
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
=======
   * Track user interactions
   */
  trackInteraction(element: string, action: string, details?: Record<string, any>): void {
    this.trackEvent({
      category: 'User Interaction',
      action,
      label: element,
      value: details?.value
    });
  }

  /**
   * Track conversion events
   */
  trackConversion(conversionType: string, value?: number, currency?: string): void {
    if (typeof window === 'undefined') return;
    
    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: value,
          currency: currency || 'USD',
          event_category: 'Conversion'
        });
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Conversion:', { conversionType, value, currency });
      }
    };
    
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(depth: number): void {
    this.trackEvent({
      category: 'Engagement',
      action: 'scroll',
      label: `${depth}%`,
      value: depth
    });
  }

  /**
   * Track time on page
   */
  trackTimeOnPage(timeInSeconds: number): void {
    this.trackEvent({
      category: 'Engagement',
      action: 'time_on_page',
      value: timeInSeconds
    });
  }

  /**
   * Track form submissions
   */
  trackFormSubmission(formName: string, success: boolean, errorMessage?: string): void {
    this.trackEvent({
      category: 'Form',
      action: success ? 'submit_success' : 'submit_error',
      label: formName,
      value: success ? 1 : 0
    });
    
    if (!success && errorMessage) {
      this.trackError({
        message: `Form submission failed: ${errorMessage}`,
        severity: 'medium'
      });
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
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
<<<<<<< HEAD
export const analyticsTracker = new AnalyticsTracker();
=======
export const analytics = new AnalyticsTracker();

// Initialize on client side
if (typeof window !== 'undefined') {
  analytics.initialize();
}
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55

export default AnalyticsTracker;