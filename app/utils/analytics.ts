// Advanced analytics and tracking utilities

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface UserProperties {
  userId?: string;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  screenResolution: string;
  viewportSize: string;
}

export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private userProperties: UserProperties;
  private eventQueue: AnalyticsEvent[] = [];
  private isInitialized = false;

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  private constructor() {
    this.userProperties = this.initializeUserProperties();
  }

  private initializeUserProperties(): UserProperties {
    if (typeof window === 'undefined') {
      return {
        sessionId: 'server-side',
        userAgent: 'server-side',
        language: 'en',
        timezone: 'UTC',
        screenResolution: 'unknown',
        viewportSize: 'unknown',
      };
    }

    return {
      sessionId: this.generateSessionId(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  init(trackingId?: string) {
    if (this.isInitialized) return;

    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    if (trackingId) {
      this.initializeGoogleAnalytics(trackingId);
    }

    // Initialize custom analytics
    this.initializeCustomAnalytics();

    this.isInitialized = true;
  }

  private initializeGoogleAnalytics(trackingId: string) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        dimension1: 'user_type',
        dimension2: 'session_duration',
      },
    });
  }

  private initializeCustomAnalytics() {
    // Track page views
    this.trackEvent({
      event: 'page_view',
      category: 'Navigation',
      action: 'Page View',
      label: window.location.pathname,
    });

    // Track user engagement
    this.trackUserEngagement();
  }

  private trackUserEngagement() {
    let startTime = Date.now();
    let isActive = true;

    // Track time on page
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime;
      this.trackEvent({
        event: 'time_on_page',
        category: 'Engagement',
        action: 'Time on Page',
        value: Math.round(timeOnPage / 1000),
      });
    };

    // Track when user becomes inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        trackTimeOnPage();
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    // Track when user leaves the page
    const handleBeforeUnload = () => {
      if (isActive) {
        trackTimeOnPage();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track scroll depth
    this.trackScrollDepth();

    // Track clicks
    this.trackClicks();
  }

  private trackScrollDepth() {
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          this.trackEvent({
            event: 'scroll_depth',
            category: 'Engagement',
            action: 'Scroll Depth',
            label: '25%',
            value: 25,
          });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          this.trackEvent({
            event: 'scroll_depth',
            category: 'Engagement',
            action: 'Scroll Depth',
            label: '50%',
            value: 50,
          });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
          this.trackEvent({
            event: 'scroll_depth',
            category: 'Engagement',
            action: 'Scroll Depth',
            label: '75%',
            value: 75,
          });
        } else if (maxScrollDepth >= 90) {
          this.trackEvent({
            event: 'scroll_depth',
            category: 'Engagement',
            action: 'Scroll Depth',
            label: '90%',
            value: 90,
          });
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
  }

  private trackClicks() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');

      if (link) {
        this.trackEvent({
          event: 'click',
          category: 'Navigation',
          action: 'Link Click',
          label: link.href || link.textContent || 'Unknown Link',
        });
      } else if (button) {
        this.trackEvent({
          event: 'click',
          category: 'Interaction',
          action: 'Button Click',
          label: button.textContent || 'Unknown Button',
        });
      }
    });
  }

  trackEvent(event: AnalyticsEvent) {
    // Add to queue
    this.eventQueue.push({
      ...event,
      customParameters: {
        ...event.customParameters,
        ...this.userProperties,
        timestamp: new Date().toISOString(),
      },
    });

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  trackPageView(page: string, title?: string) {
    this.trackEvent({
      event: 'page_view',
      category: 'Navigation',
      action: 'Page View',
      label: page,
      customParameters: {
        page_title: title || document.title,
        page_location: window.location.href,
      },
    });
  }

  trackConversion(conversionType: string, value?: number) {
    this.trackEvent({
      event: 'conversion',
      category: 'Conversion',
      action: 'Conversion',
      label: conversionType,
      value,
    });
  }

  trackError(error: Error, context?: string) {
    this.trackEvent({
      event: 'error',
      category: 'Error',
      action: 'Error Occurred',
      label: error.message,
      customParameters: {
        error_stack: error.stack,
        error_context: context,
      },
    });
  }

  getEventQueue(): AnalyticsEvent[] {
    return [...this.eventQueue];
  }

  clearEventQueue() {
    this.eventQueue = [];
  }
}

export const analytics = AnalyticsManager.getInstance();