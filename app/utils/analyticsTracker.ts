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
   * Track page view
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
    }
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
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
    }
  }

  /**
   * Track error
   */
  trackError(error: ErrorReport): void {
    if (typeof window === 'undefined') return;
    
    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: error.message,
          fatal: error.severity === 'critical' || error.severity === 'high'
        });
      }
      
      // Always log errors to console
      console.error('Analytics Error:', error);
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
  trackConversion(conversionId: string, value?: number): void {
    this.trackEvent({
      category: 'Conversion',
      action: 'conversion',
      label: conversionId,
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
    if (typeof gtag !== 'undefined') {
      gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency
      });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Transaction:', { transactionId, value, currency });
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
   * Track form submission
   */
  trackFormSubmission(formName: string, success: boolean): void {
    this.trackEvent({
      category: 'Form',
      action: success ? 'submit_success' : 'submit_error',
      label: formName
    });
  }

  /**
   * Track file download
   */
  trackDownload(fileName: string, fileType?: string): void {
    this.trackEvent({
      category: 'Download',
      action: 'download',
      label: fileName,
      value: fileType ? 1 : undefined
    });
  }

  /**
   * Track video interaction
   */
  trackVideo(action: string, videoTitle: string, progress?: number): void {
    this.trackEvent({
      category: 'Video',
      action,
      label: videoTitle,
      value: progress
    });
  }

  /**
   * Track outbound link click
   */
  trackOutboundLink(url: string): void {
    this.trackEvent({
      category: 'Outbound',
      action: 'click',
      label: url
    });
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, any>): void {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: properties
      });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('User Properties:', properties);
    }
  }

  /**
   * Set user ID
   */
  setUserId(userId: string): void {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId
      });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('User ID:', userId);
    }
  }
}

// Create singleton instance
export const analytics = new AnalyticsTracker();

// Auto-initialize in browser
if (typeof window !== 'undefined') {
  analytics.initialize();
}

export default analytics;