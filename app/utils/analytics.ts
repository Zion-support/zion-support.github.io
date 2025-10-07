// Analytics utility for tracking user interactions and performance
interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
}

interface RateLimitConfig {
  maxEventsPerMinute: number;
  maxEventsPerHour: number;
}

class Analytics {
  private isInitialized = false;
  private userOptedIn = true; // Default to true, should be checked against user preferences
  private eventQueue: Array<{ event: AnalyticsEvent; timestamp: number }> = [];
  private rateLimitConfig: RateLimitConfig = {
    maxEventsPerMinute: 30,
    maxEventsPerHour: 500,
  };

  constructor() {
    this.initialize();
    this.loadUserPreferences();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics if available
    if ('gtag' in window) {
      this.isInitialized = true;
    }
  }

  private loadUserPreferences() {
    if (typeof window === 'undefined') return;
    
    try {
      const preferences = localStorage.getItem('analyticsPreferences');
      if (preferences) {
        const parsed = JSON.parse(preferences);
        this.userOptedIn = parsed.optedIn ?? true;
      }
    } catch (error) {
      console.warn('Failed to load analytics preferences:', error);
    }
  }

  setUserConsent(optedIn: boolean) {
    this.userOptedIn = optedIn;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('analyticsPreferences', JSON.stringify({ optedIn }));
      } catch (error) {
        console.warn('Failed to save analytics preferences:', error);
      }
    }
  }

  private isRateLimited(): boolean {
    const now = Date.now();
    const oneMinuteAgo = now - 60 * 1000;
    const oneHourAgo = now - 60 * 60 * 1000;

    // Clean old events
    this.eventQueue = this.eventQueue.filter(item => item.timestamp > oneHourAgo);

    const eventsInLastMinute = this.eventQueue.filter(item => item.timestamp > oneMinuteAgo).length;
    const eventsInLastHour = this.eventQueue.length;

    return (
      eventsInLastMinute >= this.rateLimitConfig.maxEventsPerMinute ||
      eventsInLastHour >= this.rateLimitConfig.maxEventsPerHour
    );
  }

  track(event: AnalyticsEvent) {
    // Check user consent
    if (!this.userOptedIn) {
      return;
    }

    // Check rate limit
    if (this.isRateLimited()) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Analytics rate limit exceeded, event not tracked:', event);
      }
      return;
    }

    if (!this.isInitialized || typeof window === 'undefined') {
      // Fallback to console in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        if (import.meta.env.DEV) { console.log('Analytics Event:', event); }
      }
      return;
    }

    // Add to queue
    this.eventQueue.push({ event, timestamp: Date.now() });

    const gtag = (
      window as unknown as {
        gtag: (
          command: string,
          eventName: string,
          parameters: Record<string, unknown>
        ) => void;
      }
    ).gtag;
    gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  trackPageView(pageName: string) {
    this.track({
      event: 'page_view',
      category: 'Navigation',
      label: pageName,
    });
  }

  trackPerformance(metric: string, value: number) {
    this.track({
      event: 'performance_metric',
      category: 'Performance',
      label: metric,
      value: Math.round(value),
    });
  }

  trackUserInteraction(action: string, element: string) {
    this.track({
      event: 'user_interaction',
      category: 'Engagement',
      label: `${action}_${element}`,
    });
  }

  trackError(error: string, context?: string) {
    this.track({
      event: 'error_occurred',
      category: 'Error',
      label: context ? `${error}_${context}` : error,
    });
  }
}

export const analytics = new Analytics();
