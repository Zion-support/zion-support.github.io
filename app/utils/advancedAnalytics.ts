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
  topPages: string[];
  userEngagement: number;
}

export class AdvancedAnalytics {
  private events: AnalyticsEvent[] = [];
  private sessionStartTime: number = Date.now();

  trackEvent(event: AnalyticsEvent): void {
    const eventWithTimestamp = {
      ...event,
      timestamp: Date.now(),
      sessionId: this.getSessionId()
    };
    
    this.events.push(eventWithTimestamp);
    
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.name, event.properties);
    }
  }

  trackPageView(page: string): void {
    this.trackEvent({
      name: 'page_view',
      properties: { page }
    });
  }

  trackConversion(conversionType: string, value?: number): void {
    this.trackEvent({
      name: 'conversion',
      properties: { conversionType, value }
    });
  }

  generateReport(): AnalyticsReport {
    const now = Date.now();
    const sessionDuration = now - this.sessionStartTime;
    const pageViews = this.events.filter(e => e.name === 'page_view').length;
    const conversions = this.events.filter(e => e.name === 'conversion').length;
    
    return {
      pageViews,
      sessionDuration,
      bounceRate: pageViews === 1 ? 100 : 0,
      conversionRate: pageViews > 0 ? (conversions / pageViews) * 100 : 0,
      topPages: this.getTopPages(),
      userEngagement: this.calculateEngagement()
    };
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private getTopPages(): string[] {
    const pageViews = this.events
      .filter(e => e.name === 'page_view')
      .map(e => e.properties?.page as string)
      .filter(Boolean);
    
    const pageCounts = pageViews.reduce((acc, page) => {
      acc[page] = (acc[page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(pageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([page]) => page);
  }

  private calculateEngagement(): number {
    // Simple engagement calculation based on events per minute
    const sessionDurationMinutes = (Date.now() - this.sessionStartTime) / 60000;
    return sessionDurationMinutes > 0 ? this.events.length / sessionDurationMinutes : 0;
  }
}

export const advancedAnalytics = new AdvancedAnalytics();