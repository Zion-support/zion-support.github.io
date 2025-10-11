// Analytics tracker utilities
interface TrackEvent {
  event: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}

class AnalyticsTracker {
  private events: TrackEvent[] = [];
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = typeof window !== 'undefined';
  }

  track(event: string, properties?: Record<string, unknown>): void {
    if (!this.isEnabled) return;

    const trackEvent: TrackEvent = {
      event,
      properties,
      timestamp: Date.now()
    };

    this.events.push(trackEvent);
    
    // Send to analytics service
    this.sendToAnalytics(trackEvent);
  }

  trackPageView(page: string, properties?: Record<string, unknown>): void {
    this.track('page_view', {
      page,
      ...properties
    });
  }

  trackUserAction(action: string, element?: string, properties?: Record<string, unknown>): void {
    this.track('user_action', {
      action,
      element,
      ...properties
    });
  }

  trackConversion(conversionType: string, value?: number): void {
    this.track('conversion', {
      type: conversionType,
      value
    });
  }

  trackError(error: Error, context?: string): void {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      context,
      url: window.location.href
    });
  }

  private sendToAnalytics(event: TrackEvent): void {
    // In a real implementation, this would send to your analytics service
    console.log('Analytics Event:', event);
  }

  getEvents(): TrackEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

// Export singleton instance
export const analyticsTracker = new AnalyticsTracker();

// Export utility functions
export const trackEvent = (event: string, properties?: Record<string, unknown>): void => {
  analyticsTracker.track(event, properties);
};

export const trackPageView = (page: string, properties?: Record<string, unknown>): void => {
  analyticsTracker.trackPageView(page, properties);
};

export const trackUserAction = (action: string, element?: string, properties?: Record<string, unknown>): void => {
  analyticsTracker.trackUserAction(action, element, properties);
};

export const trackConversion = (conversionType: string, value?: number): void => {
  analyticsTracker.trackConversion(conversionType, value);
};

export const trackError = (error: Error, context?: string): void => {
  analyticsTracker.trackError(error, context);
};