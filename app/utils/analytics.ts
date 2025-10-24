interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

class Analytics {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.analytics.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  // Track custom events
  track(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (_command: string, _action: string, _parameters: Record<string, unknown>) => void }).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }
  }

  // Track page views
  trackPageView(page: string, title?: string): void {
    this.track({
      category: "Page",
      action: "View",
      label: page,
      custom_parameters: {
        page_title: title || document.title,
        page_url: window.location.href
      }
    });
  }

  // Track user interactions
  trackClick(element: string, location?: string): void {
    this.track({
      category: "User Interaction",
      action: "Click",
      label: element,
      custom_parameters: {
        location
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

  // Track performance metrics
  trackPerformance(metric: string, value: number, unit: string = "ms"): void {
    this.track({
      category: "Performance",
      action: "Metric",
      label: metric,
      value,
      custom_parameters: {
        unit
      }
    });
  }

  // Track errors
  trackError(error: string, fatal: boolean = false): void {
    this.track({
      category: "Error",
      action: "Exception",
      label: error,
      custom_parameters: {
        fatal
      }
    });
  }
}

// Create a singleton instance
const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_API_KEY || '');

export default analytics;