<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
'use client';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
/**
 * Analytics Tracker
 * Comprehensive analytics tracking for user interactions and performance
 */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface AnalyticsEvent {
  action: string;
  category: string;
=======
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export interface UserProperties {
  userId?: string;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  screenResolution: string;
  viewportSize: string;
}

class AnalyticsTracker {
  private isInitialized = false;
  private sessionId: string;
  private userId?: string;
  private eventQueue: AnalyticsEvent[] = [];
  private performanceObserver?: PerformanceObserver;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

<<<<<<< HEAD
  /**
   * Track a page view
   */
  trackPageView(path: string): void {
    const event = () => {
      // Add your analytics implementation here
    };
=======
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595

  private initialize(): void {
    if (typeof window === 'undefined') return;

    try {
      this.setupPerformanceMonitoring();
      this.setupErrorTracking();
      this.setupUserInteractionTracking();
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize analytics tracker:', error);
    }
  }

  private setupPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      this.performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.trackPageLoad(entry as PerformanceNavigationTiming);
          } else if (entry.entryType === 'paint') {
            this.trackPaintMetrics(entry as PerformancePaintTiming);
          }
        });
      });

      this.performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });
    }
  }

  private setupErrorTracking(): void {
    window.addEventListener('error', (event) => {
      this.trackError({
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: 'Unhandled Promise Rejection',
        reason: event.reason,
        promise: event.promise,
      });
    });
  }

  private setupUserInteractionTracking(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        this.trackEvent({
          name: 'click',
          category: 'user_interaction',
          action: 'click',
          label: this.getElementLabel(target),
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form) {
        this.trackEvent({
          name: 'form_submit',
          category: 'user_interaction',
          action: 'submit',
          label: form.id || form.className || 'unknown_form',
        });
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent({
          name: 'scroll_depth',
          category: 'user_engagement',
          action: 'scroll',
          value: maxScrollDepth,
        });
      }
    });
  }

  private getElementLabel(element: HTMLElement): string {
    return (
      element.id ||
      element.className ||
      element.tagName ||
      element.textContent?.slice(0, 50) ||
      'unknown_element'
    );
  }

  private trackPageLoad(entry: PerformanceNavigationTiming): void {
    const metrics: PerformanceMetrics = {
      loadTime: entry.loadEventEnd - entry.loadEventStart,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: entry.domInteractive - entry.navigationStart,
    };

    this.trackPerformance(metrics);
  }

  private trackPaintMetrics(entry: PerformancePaintTiming): void {
    if (entry.name === 'first-contentful-paint') {
      this.trackEvent({
        name: 'first_contentful_paint',
        category: 'performance',
        action: 'paint',
        value: entry.startTime,
      });
    }
  }

=======
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
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa

  /**
   * Initialize the analytics tracker
   */
  initialize(): void {
<<<<<<< HEAD
<<<<<<< HEAD
    if (typeof window === 'undefined') return
    
    this.isInitialized = true
    
    // Process queued events
    this.queue.forEach(fn => fn())
    this.queue = []
    
    // Track initial page view
    this.trackPageView(window.location.pathname)
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
    if (typeof window === 'undefined') return;
    
    this.isInitialized = true;
    
    // Process queued events
    this.queue.forEach(fn => fn());
    this.queue = [];
    
    // Track initial page view
    this.trackPageView(window.location.pathname);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
    if (typeof window === 'undefined') return;

    this.isInitialized = true;

    // Process queued events
    this.queue.forEach(fn => fn());
    this.queue = [];

    // Track initial page view
    this.trackPageView(window.location.pathname);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
  /**
   * Track a custom event
   */
<<<<<<< HEAD
  trackEvent(event: AnalyticsEvent): void {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const trackFn = () => {
      // Add your analytics implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
=======
  public trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.eventQueue.push(event);
      return;
    }

    try {
      // Send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          custom_parameters: event.customParameters,
        });
      }

      // Send to custom analytics endpoint
      this.sendToAnalytics(event);
    } catch (error) {
      console.error('Failed to track event:', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
    if (typeof window === 'undefined') return

    const track = () => {
      // Send to analytics service
=======
    if (typeof window === 'undefined') return;
    
    const track = () => {
      // Send to analytics service (replace with your preferred service)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
=======
    if (typeof window === 'undefined') return;

    const track = () => {
      // Google Analytics 4
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', event.action, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          non_interaction: event.nonInteraction
<<<<<<< HEAD
<<<<<<< HEAD
        })
=======
        });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      }
      
      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    }
  }

=======
        console.log('Analytics Event:', event);
      }
    };
    
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    if (typeof window === 'undefined') return;
<<<<<<< HEAD
    
    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
=======

    const track = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
          page_path: path,
          page_title: title || document.title
        });
      }
<<<<<<< HEAD
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', { path, title: title || document.title });
      }
    };
    
=======
    };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
    }
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
  /**
   * Track performance metrics
   */
<<<<<<< HEAD
  trackPerformance(metrics: PerformanceMetrics): void {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const trackFn = () => {
      // Add your performance tracking implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
=======
    if (typeof window === 'undefined') return

    const track = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: metrics.metric,
          value: Math.round(metrics.value),
          event_category: 'Performance'
        })
      }
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    }

    if (this.isInitialized) {
      track()
    } else {
      this.queue.push(track)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    }
=======
  public trackPerformance(metrics: PerformanceMetrics): void {
    this.trackEvent({
      name: 'performance_metrics',
      category: 'performance',
      action: 'measure',
      customParameters: metrics,
    });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  }

  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Track an error
=======
   * Track error
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
   * Track error
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
   */
<<<<<<< HEAD
  trackError(error: ErrorReport): void {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const trackFn = () => {
      // Add your error tracking implementation here
    };

    if (this.isInitialized) {
      trackFn();
    } else {
      this.queue.push(trackFn);
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
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
    
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    if (this.isInitialized) {
      track();
    } else {
      this.queue.push(track);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    }
  }

  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Track user interaction
=======
  public trackError(error: any): void {
    this.trackEvent({
      name: 'error',
      category: 'error',
      action: 'occurred',
      label: error.message || 'Unknown error',
      customParameters: {
        stack: error.stack,
        filename: error.filename,
        lineno: error.lineno,
        colno: error.colno,
      },
    });
  }

  /**
   * Track page view
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
   */
  public trackPageView(page: string, title?: string): void {
    this.trackEvent({
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: page,
      customParameters: {
        page_title: title || document.title,
        page_url: window.location.href,
        referrer: document.referrer,
      },
    });
  }

  /**
   * Track user identification
   */
  public identifyUser(userId: string, properties?: Record<string, any>): void {
    this.userId = userId;
    this.trackEvent({
      name: 'user_identify',
      category: 'user',
      action: 'identify',
      customParameters: {
        user_id: userId,
        ...properties,
      },
    });
  }

  /**
   * Set user properties
   */
  public setUserProperties(properties: Partial<UserProperties>): void {
    this.trackEvent({
      name: 'user_properties',
      category: 'user',
      action: 'update',
      customParameters: properties,
=======
   * Track user engagement
   */
  trackEngagement(action: string, element?: string): void {
    this.trackEvent({
      category: 'Engagement',
      action,
      label: element
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    });
  }

  /**
   * Track conversion
   */
<<<<<<< HEAD
  public trackConversion(conversionId: string, value?: number, currency?: string): void {
    this.trackEvent({
<<<<<<< HEAD
      action: 'conversion',
      category: conversionType,
      value
    });
=======
      name: 'conversion',
      category: 'conversion',
      action: 'completed',
      label: conversionId,
      value: value,
      customParameters: {
        conversion_id: conversionId,
        currency: currency || 'USD',
      },
    });
  }

  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      const payload = {
        ...event,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };

      // Send to your analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  }

  /**
   * Flush queued events
   */
  public flush(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) {
        this.trackEvent(event);
      }
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    }
  }

  /**
<<<<<<< HEAD
   * Get current session ID
   */
  public getSessionId(): string {
    return this.sessionId;
  }

  /**
   * Get current user ID
   */
  public getUserId(): string | undefined {
    return this.userId;
  }
}

<<<<<<< HEAD
// Create singleton instance
export const analyticsTracker = new AnalyticsTracker();

export default AnalyticsTracker;
=======
// Export singleton instance
export const analyticsTracker = new AnalyticsTracker();
export default analyticsTracker;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
