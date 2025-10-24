// Analytics utilities for tracking user interactions and performance
<<<<<<< HEAD
import React from "react"
=======

>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
  custom_parameters?: Record<string, unknown>;
}

class Analytics {
<<<<<<< HEAD
  private static instance: Analytics
  private events: AnalyticsEvent[] = [  ];
=======
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];

>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  // Track custom events
  track(event: AnalyticsEvent): void {
    this.events.push({
      ...event
      timestamp: Date.now()
<<<<<<< HEAD
    })
    // In production, you would send this to your analytics service
    if (process.env.NODE_ENV === "production") {
      this.sendToAnalytics(event);
    } else {
      console.log("Analytics Event:", event);
=======
    });

    // Send to external analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
    }
  }

  // Track page views
  trackPageView(page: string, title?: string): void {
    this.track({
      category: "Page"
      action: "View"
      label: page,
      custom_parameters: {
<<<<<<< HEAD
        page_title: title || document.title
        page_url: window.location.href
      }
    });
<<<<<<< HEAD
  }
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-778a
=======
        page_title: title || (typeof document !== 'undefined' ? document.title : ''),
        page_url: typeof window !== 'undefined' ? window.location.href : ''
      }
    });
  }
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)

  // Track user interactions
  trackClick(element: string, location?: string): void {
    this.track({
<<<<<<< HEAD
      category: "User Interaction"
      action: "Click"
      label: element,
      custom_parameters: {
        location
=======
      category: "Interaction",
      action: "Click",
      label: element,
      custom_parameters: {
        location: location || 'unknown'
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
      }
    });
  }

  // Track form submissions
  trackFormSubmit(formName: string, success: boolean): void {
    this.track({
<<<<<<< HEAD
      category: "Form"
      action: success ? "Submit Success" : "Submit Error"
      label: formName
=======
      category: "Form",
      action: "Submit",
      label: formName,
      value: success ? 1 : 0
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
    });
  }

  // Track performance metrics
  trackPerformance(metric: string, value: number): void {
    this.track({
<<<<<<< HEAD
      category: "Performance"
      action: "Metric"
      label: metric
      value
      custom_parameters: {
        unit
      }
    });
  }

  // Track errors
  trackError(error: Error, context?: string): void {
    this.track({
      category: "Error"
      action: "Occurred"
      label: error.message
      custom_parameters: {
        error_name: error.name
        error_stack: error.stack
        context
      }
=======
      category: "Performance",
      action: "Metric",
      label: metric,
      value: Math.round(value)
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
    });
  }

  // Get all events
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents(): void {
    this.events = [];
  }
<<<<<<< HEAD

  // Send to analytics service (implement based on your analytics provider)
  private sendToAnalytics(event: AnalyticsEvent): void {
    // Example implementation for Google Analytics
    if (typeof window !== "undefined" && (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag("event", event.action, {
        event_category: event.category
        event_label: event.label
        value: event.value
        ...event.custom_parameters
      });
    }
  }
}

export const analytics = Analytics.getInstance()
// React hooks for easy integration
export function useAnalytics() {
  return {
    track: analytics.track.bind(analytics)
    trackPageView: analytics.trackPageView.bind(analytics)
    trackClick: analytics.trackClick.bind(analytics)
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics)
    trackPerformance: analytics.trackPerformance.bind(analytics)
    trackError: analytics.trackError.bind(analytics)
  };
}

// Higher-order component for automatic page view tracking
export function withAnalytics<T extends React.ComponentType<unknown>>(WrappedComponent: T): T {
  return ((props: unknown) => {
    const { trackPageView } = useAnalytics()
    React.useEffect(() => {
      trackPageView(window.location.pathname, document.title);
    }, [trackPageView]);
    return React.createElement(WrappedComponent, props);
  }) as T;
}
=======
}

export default Analytics;
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
