/**
 * Advanced Analytics Utility
 * Provides comprehensive analytics tracking and reporting functionality
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

export interface AnalyticsReport {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  userJourney: string[];
}

export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export interface AnalyticsConfig {
  trackingId: string;
  enabled: boolean;
  debug: boolean;
  respectDoNotTrack: boolean;
  anonymizeIp: boolean;
  customDimensions?: Record<string, string>;
}

export class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private events: AnalyticsEvent[] = [];
  private sessionStartTime: number = Date.now();

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize(): void {
    if (this.config.enabled && typeof window !== 'undefined') {
      this.trackPageView();
      this.setupPerformanceTracking();
      this.setupErrorTracking();
    }
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.config.enabled) return;

    const eventWithTimestamp = {
      ...event,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getUserId()
    };

    this.events.push(eventWithTimestamp);

    if (this.config.debug) {
      console.log('Analytics Event:', eventWithTimestamp);
    }

    // Send to analytics service
    this.sendToAnalytics(eventWithTimestamp);
  }

  /**
   * Track page view
   */
  trackPageView(page?: string): void {
    const currentPage = page || window.location.pathname;
    
    this.trackEvent({
      name: 'page_view',
      properties: {
        page: currentPage,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`
      }
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, properties?: Record<string, unknown>): void {
    this.trackEvent({
      name: 'interaction',
      properties: {
        element,
        action,
        ...properties
      }
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number, properties?: Record<string, unknown>): void {
    this.trackEvent({
      name: 'conversion',
      properties: {
        conversionType,
        value,
        ...properties
      }
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metrics: PerformanceMetrics): void {
    this.trackEvent({
      name: 'performance',
      properties: metrics
    });
  }

  /**
   * Get analytics report
   */
  getReport(): AnalyticsReport {
    const pageViews = this.events.filter(e => e.name === 'page_view').length;
    const sessionDuration = Date.now() - this.sessionStartTime;
    const interactions = this.events.filter(e => e.name === 'interaction').length;
    const conversions = this.events.filter(e => e.name === 'conversion').length;

    const pageViewEvents = this.events.filter(e => e.name === 'page_view');
    const pageCounts: Record<string, number> = {};
    
    pageViewEvents.forEach(event => {
      const page = event.properties?.page as string;
      if (page) {
        pageCounts[page] = (pageCounts[page] || 0) + 1;
      }
    });

    const topPages = Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const userJourney = pageViewEvents
      .map(event => event.properties?.page as string)
      .filter(Boolean);

    return {
      pageViews,
      sessionDuration,
      bounceRate: pageViews === 1 ? 100 : 0,
      conversionRate: pageViews > 0 ? (conversions / pageViews) * 100 : 0,
      topPages,
      userJourney
    };
  }

  private setupPerformanceTracking(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics: PerformanceMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Would need to be measured with LCP API
          firstInputDelay: 0, // Would need to be measured with FID API
          cumulativeLayoutShift: 0, // Would need to be measured with CLS API
          timeToInteractive: 0 // Would need to be calculated
        };

        this.trackPerformance(metrics);
      }, 0);
    });
  }

  private setupErrorTracking(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
      this.trackEvent({
        name: 'error',
        properties: {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error?.stack
        }
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent({
        name: 'unhandled_promise_rejection',
        properties: {
          reason: event.reason?.toString(),
          stack: event.reason?.stack
        }
      });
    });
  }

  private sendToAnalytics(event: AnalyticsEvent): void {
    // In a real implementation, this would send data to your analytics service
    if (this.config.debug) {
      console.log('Sending to analytics:', event);
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private getUserId(): string | undefined {
    return localStorage.getItem('analytics_user_id') || undefined;
  }
}

export default AdvancedAnalytics;