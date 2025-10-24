// Analytics utilities for tracking user interactions and performance

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
  custom_parameters?: Record<string, unknown>;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  // Track custom events
  track(event: AnalyticsEvent): void {
    this.events.push({
      ...event,
      timestamp: Date.now()
    });

    // In production, you would send this to your analytics service
    if (process.env.NODE_ENV === "production") {
      // Send to analytics service (Google Analytics, Mixpanel, etc.)
      console.log("Analytics event:", event);
    }
  }

  // Track page views
  trackPageView(page: string, title?: string): void {
    this.track({
      category: "Page",
      action: "View",
      label: page,
      custom_parameters: {
        page_title: title || page
      }
    });
  }

  // Track button clicks
  trackClick(buttonName: string, location?: string): void {
    this.track({
      category: "Button",
      action: "Click",
      label: buttonName,
      custom_parameters: {
        location: location
      }
    });
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean): void {
    this.track({
      category: "Form",
      action: success ? "Submit Success" : "Submit Error",
      label: formName
    });
  }

  // Get all events (for debugging)
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents(): void {
    this.events = [];
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance();

// React hook for analytics
export const useAnalytics = () => {
  return {
    track: analytics.track.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackClick: analytics.trackClick.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics)
  };
};
