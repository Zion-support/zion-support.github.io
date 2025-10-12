// Advanced Analytics Utility
// Provides comprehensive analytics tracking and reporting functionality

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

interface UserBehavior {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  userJourney: string[];
}

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface AnalyticsConfig {
  trackingId: string;
  enabled: boolean;
  debug: boolean;
  sampleRate: number;
  customDimensions?: Record<string, string>;
}

class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private events: AnalyticsEvent[] = [];
  private userBehavior: UserBehavior = {
    pageViews: 0,
    sessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    userJourney: []
  };
  private performanceMetrics: PerformanceMetrics | null = null;

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.initializeTracking();
  }

  /**
   * Initialize analytics tracking
   */
  private initializeTracking(): void {
    if (typeof window === 'undefined' || !this.config.enabled) return;
    
    // Track page view
    this.trackPageView();
    
    // Track performance metrics
    this.trackPerformanceMetrics();
    
    // Track user interactions
    this.trackUserInteractions();
  }

  /**
   * Track a custom event
   */
  trackEvent(name: string, properties?: Record<string, unknown>): void {
    if (!this.config.enabled) return;
    
    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: Date.now(),
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };
    
    this.events.push(event);
    
    if (this.config.debug) {
      console.log('Analytics Event:', event);
    }
    
    // Send to analytics service
    this.sendToAnalytics(event);
  }

  /**
   * Track page view
   */
  trackPageView(page?: string): void {
    const currentPage = page || window.location.pathname;
    this.userBehavior.pageViews++;
    this.userBehavior.userJourney.push(currentPage);
    
    // Update top pages
    const existingPage = this.userBehavior.topPages.find(p => p.page === currentPage);
    if (existingPage) {
      existingPage.views++;
    } else {
      this.userBehavior.topPages.push({ page: currentPage, views: 1 });
    }
    
    this.trackEvent('page_view', {
      page: currentPage,
      userAgent: navigator.userAgent
    });
  }

  /**
   * Track user click events
   */
  trackClick(element: HTMLElement, properties?: Record<string, unknown>): void {
    this.trackEvent('click', {
      element: element.tagName,
      text: element.textContent?.slice(0, 100),
      ...properties
    });
  }

  /**
   * Track form submissions
   */
  trackFormSubmission(form: HTMLFormElement, properties?: Record<string, unknown>): void {
    this.trackEvent('form_submission', {
      formId: form.id,
      formAction: form.action,
      ...properties
    });
  }

  /**
   * Track performance metrics
   */
  private trackPerformanceMetrics(): void {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        this.performanceMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.navigationStart,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Would need to be calculated with LCP API
          firstInputDelay: 0, // Would need to be calculated with FID API
          cumulativeLayoutShift: 0, // Would need to be calculated with CLS API
          timeToInteractive: 0 // Would need to be calculated
        };
        
        this.trackEvent('performance_metrics', this.performanceMetrics);
      }, 0);
    });
  }

  /**
   * Track user interactions
   */
  private trackUserInteractions(): void {
    if (typeof window === 'undefined') return;
    
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackClick(target);
    });
  }

  /**
   * Get user ID from storage or generate new one
   */
  private getUserId(): string {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  /**
   * Get session ID from storage or generate new one
   */
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  /**
   * Send event to analytics service
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    // In a real implementation, this would send to your analytics service
    // For now, we'll just log it
    if (this.config.debug) {
      console.log('Sending to analytics:', event);
    }
  }

  /**
   * Get analytics report
   */
  getReport() {
    return {
      events: this.events,
      userBehavior: this.userBehavior,
      performanceMetrics: this.performanceMetrics,
      totalEvents: this.events.length
    };
  }
}

// Export utility functions
export const createAnalytics = (config: AnalyticsConfig) => new AdvancedAnalytics(config);

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  console.log('Track event:', eventName, properties);
};

export const trackPageView = (page?: string) => {
  console.log('Track page view:', page);
};