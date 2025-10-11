// Advanced analytics utilities
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
}

interface UserSession {
  id: string;
  startTime: number;
  events: AnalyticsEvent[];
  pageViews: number;
}

class AdvancedAnalytics {
  private session: UserSession;
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = typeof window !== 'undefined';
    this.session = {
      id: this.generateSessionId(),
      startTime: Date.now(),
      events: [],
      pageViews: 0
    };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  trackEvent(name: string, properties?: Record<string, unknown>): void {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: Date.now()
    };

    this.session.events.push(event);
    
    // Send to analytics service
    this.sendToAnalytics(event);
  }

  trackPageView(page: string, properties?: Record<string, unknown>): void {
    if (!this.isEnabled) return;

    this.session.pageViews++;
    
    this.trackEvent('page_view', {
      page,
      pageViews: this.session.pageViews,
      ...properties
    });
  }

  trackUserAction(action: string, element?: string, properties?: Record<string, unknown>): void {
    this.trackEvent('user_action', {
      action,
      element,
      ...properties
    });
  }

  trackPerformance(metric: string, value: number, properties?: Record<string, unknown>): void {
    this.trackEvent('performance', {
      metric,
      value,
      ...properties
    });
  }

  trackError(error: Error, context?: string): void {
    this.trackEvent('error', {
      message: error.message,
      stack: error.stack,
      context,
      url: window.location.href
    });
  }

  private sendToAnalytics(event: AnalyticsEvent): void {
    // In a real implementation, this would send to your analytics service
    console.log('Analytics Event:', event);
  }

  getSessionData(): UserSession {
    return { ...this.session };
  }

  resetSession(): void {
    this.session = {
      id: this.generateSessionId(),
      startTime: Date.now(),
      events: [],
      pageViews: 0
    };
  }
}

// Export singleton instance
export const analytics = new AdvancedAnalytics();

// Export utility functions
export const trackCustomEvent = (category: string, action: string, label?: string, value?: number): void => {
  analytics.trackEvent('custom_event', {
    category,
    action,
    label,
    value
  });
};

export const trackConversion = (conversionType: string, value?: number): void => {
  analytics.trackEvent('conversion', {
    type: conversionType,
    value
  });
};

export const trackEngagement = (engagementType: string, duration?: number): void => {
  analytics.trackEvent('engagement', {
    type: engagementType,
    duration
  });
};