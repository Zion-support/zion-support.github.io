// Analytics utility for tracking user interactions and performance
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export class Analytics {
  private static instance: Analytics;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public init(): void {
    if (typeof window === 'undefined') return;
    
    this.isInitialized = true;
    
    // Initialize Google Analytics if available
    if ((window as any).gtag) {
      (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }

  public trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    // Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  public trackPageView(path: string): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    if ((window as any).gtag) {
      (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: document.title,
      });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', path);
    }
  }

  public trackPerformance(metric: string, value: number): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    this.trackEvent({
      action: metric,
      category: 'Performance',
      value: Math.round(value),
    });
  }
}

export const analytics = Analytics.getInstance();