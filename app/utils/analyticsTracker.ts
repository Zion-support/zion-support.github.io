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
  private events: AnalyticsEvent[] = [];
  private performanceMetrics: PerformanceMetrics[] = [];
  private errorReports: ErrorReport[] = [];
  private sessionId: string;
  private userId?: string;
  private startTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.setupErrorTracking();
    this.setupPerformanceTracking();
  }

  // Event tracking
  trackEvent(event: AnalyticsEvent): void {
    this.events.push({
      ...event,
      timestamp: Date.now()
    });
    
    // Send to analytics service
    this.sendToAnalytics('event', event);
  }

  trackPageView(page: string, title?: string): void {
    this.trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: page,
      value: 1
    });
  }

  trackClick(element: string, category: string = 'interaction'): void {
    this.trackEvent({
      action: 'click',
      category,
      label: element
    });
  }

  trackFormSubmit(formName: string, success: boolean = true): void {
    this.trackEvent({
      action: 'form_submit',
      category: 'form',
      label: formName,
      value: success ? 1 : 0
    });
  }

  trackSearch(query: string, resultsCount: number): void {
    this.trackEvent({
      action: 'search',
      category: 'search',
      label: query,
      value: resultsCount
    });
  }

  trackDownload(fileName: string, fileSize?: number): void {
    this.trackEvent({
      action: 'download',
      category: 'file',
      label: fileName,
      value: fileSize
    });
  }

  trackVideoPlay(videoId: string, duration?: number): void {
    this.trackEvent({
      action: 'video_play',
      category: 'video',
      label: videoId,
      value: duration
    });
  }

  trackVideoPause(videoId: string, currentTime: number): void {
    this.trackEvent({
      action: 'video_pause',
      category: 'video',
      label: videoId,
      value: currentTime
    });
  }

  trackVideoComplete(videoId: string, duration: number): void {
    this.trackEvent({
      action: 'video_complete',
      category: 'video',
      label: videoId,
      value: duration
    });
  }

  // Performance tracking
  trackPerformance(metric: PerformanceMetrics): void {
    this.performanceMetrics.push(metric);
    this.sendToAnalytics('performance', metric);
  }

  trackPageLoadTime(loadTime: number): void {
    this.trackPerformance({
      metric: 'page_load_time',
      value: loadTime,
      rating: this.getPerformanceRating(loadTime, 3000, 1000)
    });
  }

  trackFirstContentfulPaint(fcp: number): void {
    this.trackPerformance({
      metric: 'first_contentful_paint',
      value: fcp,
      rating: this.getPerformanceRating(fcp, 3000, 1800)
    });
  }

  trackLargestContentfulPaint(lcp: number): void {
    this.trackPerformance({
      metric: 'largest_contentful_paint',
      value: lcp,
      rating: this.getPerformanceRating(lcp, 4000, 2500)
    });
  }

  trackFirstInputDelay(fid: number): void {
    this.trackPerformance({
      metric: 'first_input_delay',
      value: fid,
      rating: this.getPerformanceRating(fid, 300, 100)
    });
  }

  trackCumulativeLayoutShift(cls: number): void {
    this.trackPerformance({
      metric: 'cumulative_layout_shift',
      value: cls,
      rating: this.getPerformanceRating(cls, 0.25, 0.1)
    });
  }

  // Error tracking
  trackError(error: ErrorReport): void {
    this.errorReports.push(error);
    this.sendToAnalytics('error', error);
  }

  trackJavaScriptError(error: Error, componentStack?: string): void {
    this.trackError({
      message: error.message,
      stack: error.stack,
      componentStack,
      severity: 'high'
    });
  }

  trackNetworkError(url: string, status: number, message: string): void {
    this.trackError({
      message: `Network error: ${message}`,
      severity: status >= 500 ? 'critical' : 'medium'
    });
  }

  trackResourceError(resource: string, error: string): void {
    this.trackError({
      message: `Resource error: ${error}`,
      severity: 'medium'
    });
  }

  // User tracking
  setUserId(userId: string): void {
    this.userId = userId;
  }

  setUserProperties(properties: Record<string, any>): void {
    this.sendToAnalytics('user_properties', properties);
  }

  // Session tracking
  getSessionId(): string {
    return this.sessionId;
  }

  getSessionDuration(): number {
    return Date.now() - this.startTime;
  }

  // Data retrieval
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  getPerformanceMetrics(): PerformanceMetrics[] {
    return [...this.performanceMetrics];
  }

  getErrorReports(): ErrorReport[] {
    return [...this.errorReports];
  }

  getSessionSummary(): {
    sessionId: string;
    userId?: string;
    duration: number;
    eventCount: number;
    performanceMetricCount: number;
    errorCount: number;
  } {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      duration: this.getSessionDuration(),
      eventCount: this.events.length,
      performanceMetricCount: this.performanceMetrics.length,
      errorCount: this.errorReports.length
    };
  }

  // Private methods
  private generateSessionId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  private getPerformanceRating(value: number, poorThreshold: number, goodThreshold: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= goodThreshold) return 'good';
    if (value <= poorThreshold) return 'needs-improvement';
    return 'poor';
  }

  private setupErrorTracking(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackJavaScriptError(event.error, event.filename);
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: `Unhandled promise rejection: ${event.reason}`,
        severity: 'high'
      });
    });
  }

  private setupPerformanceTracking(): void {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.trackPageLoadTime(loadTime);
    });

    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.trackFirstContentfulPaint(entry.startTime);
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.trackLargestContentfulPaint(lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackFirstInputDelay(entry.processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.trackCumulativeLayoutShift(clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  private sendToAnalytics(type: string, data: any): void {
    // Send to analytics service (e.g., Google Analytics, Mixpanel, etc.)
    if (typeof gtag !== 'undefined') {
      gtag('event', type, data);
    }
    
    // Send to custom analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        data,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: Date.now()
      })
    }).catch(error => {
      console.warn('Failed to send analytics data:', error);
    });
  }
}

// Create singleton instance
const analyticsTracker = new AnalyticsTracker();

// Export convenience functions
export const trackEvent = (event: AnalyticsEvent) => analyticsTracker.trackEvent(event);
export const trackPageView = (page: string, title?: string) => analyticsTracker.trackPageView(page, title);
export const trackClick = (element: string, category?: string) => analyticsTracker.trackClick(element, category);
export const trackFormSubmit = (formName: string, success?: boolean) => analyticsTracker.trackFormSubmit(formName, success);
export const trackSearch = (query: string, resultsCount: number) => analyticsTracker.trackSearch(query, resultsCount);
export const trackDownload = (fileName: string, fileSize?: number) => analyticsTracker.trackDownload(fileName, fileSize);
export const trackVideoPlay = (videoId: string, duration?: number) => analyticsTracker.trackVideoPlay(videoId, duration);
export const trackVideoPause = (videoId: string, currentTime: number) => analyticsTracker.trackVideoPause(videoId, currentTime);
export const trackVideoComplete = (videoId: string, duration: number) => analyticsTracker.trackVideoComplete(videoId, duration);
export const trackPerformance = (metric: PerformanceMetrics) => analyticsTracker.trackPerformance(metric);
export const trackError = (error: ErrorReport) => analyticsTracker.trackError(error);
export const trackJavaScriptError = (error: Error, componentStack?: string) => analyticsTracker.trackJavaScriptError(error, componentStack);
export const trackNetworkError = (url: string, status: number, message: string) => analyticsTracker.trackNetworkError(url, status, message);
export const trackResourceError = (resource: string, error: string) => analyticsTracker.trackResourceError(resource, error);
export const setUserId = (userId: string) => analyticsTracker.setUserId(userId);
export const setUserProperties = (properties: Record<string, any>) => analyticsTracker.setUserProperties(properties);
export const getSessionId = () => analyticsTracker.getSessionId();
export const getSessionDuration = () => analyticsTracker.getSessionDuration();
export const getSessionSummary = () => analyticsTracker.getSessionSummary();

export default analyticsTracker;