// Analytics utility for tracking user interactions and performance
interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics if available
    if ('gtag' in window) {
      this.isInitialized = true;
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.isInitialized || typeof window === 'undefined') {
      // Fallback to console in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
console.log('Analytics Event:', event);
      }
      return;
    }

    const gtag = (window as unknown as { gtag: Function }).gtag;
    gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value
    });
  }

  trackPageView(pageName: string) {
    this.track({
      event: 'page_view',
      category: 'Navigation',
      label: pageName
    });
  }

  trackPerformance(metric: string, value: number) {
    this.track({
      event: 'performance_metric',
      category: 'Performance',
      label: metric,
      value: Math.round(value)
    });
  }

  trackUserInteraction(action: string, element: string) {
    this.track({
      event: 'user_interaction',
      category: 'Engagement',
      label: `${action}_${element}`
    });
  }

  trackError(error: string, context?: string) {
    this.track({
      event: 'error_occurred',
      category: 'Error',
      label: context ? `${error}_${context}` : error
    });
  }
}

export const analytics = new Analytics();