export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface AnalyticsConfig {
  trackingId?: string;
  enabled?: boolean;
  debug?: boolean;
}

export const analyticsTracker = {
  config: {
    trackingId: '',
    enabled: true,
    debug: false
  } as AnalyticsConfig,

  // Initialize analytics
  init: (config: AnalyticsConfig): void => {
    analyticsTracker.config = { ...analyticsTracker.config, ...config };
    
    if (typeof window !== 'undefined' && config.trackingId) {
      // Load Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function(...args: any[]) {
        (window as any).dataLayer.push(args);
      };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', config.trackingId);
    }
  },

  // Track page view
  trackPageView: (pagePath: string, pageTitle?: string): void => {
    if (!analyticsTracker.config.enabled) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', analyticsTracker.config.trackingId, {
        page_path: pagePath,
        page_title: pageTitle || document.title
      });
    }

    if (analyticsTracker.config.debug) {
      console.log('Page view tracked:', { pagePath, pageTitle });
    }
  },

  // Track custom event
  trackEvent: (event: AnalyticsEvent): void => {
    if (!analyticsTracker.config.enabled) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }

    if (analyticsTracker.config.debug) {
      console.log('Event tracked:', event);
    }
  },

  // Track user interaction
  trackInteraction: (element: string, action: string, details?: string): void => {
    analyticsTracker.trackEvent({
      action,
      category: 'User Interaction',
      label: `${element} - ${details || ''}`
    });
  },

  // Track performance metrics
  trackPerformance: (metric: string, value: number): void => {
    analyticsTracker.trackEvent({
      action: 'Performance Metric',
      category: 'Performance',
      label: metric,
      value: Math.round(value)
    });
  },

  // Track conversion
  trackConversion: (conversionId: string, value?: number): void => {
    analyticsTracker.trackEvent({
      action: 'Conversion',
      category: 'Conversion',
      label: conversionId,
      value
    });
  },

  // Set user properties
  setUserProperties: (properties: Record<string, any>): void => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', analyticsTracker.config.trackingId, {
        custom_map: properties
      });
    }
  },

  // Enable/disable tracking
  setEnabled: (enabled: boolean): void => {
    analyticsTracker.config.enabled = enabled;
  },

  // Set debug mode
  setDebug: (debug: boolean): void => {
    analyticsTracker.config.debug = debug;
  }
};

export default analyticsTracker;