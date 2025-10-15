export interface AdvancedAnalyticsConfig {
  trackingId: string;
  enabled: boolean;
  debug: boolean;
  customDimensions?: Record<string, string>;
  customMetrics?: Record<string, number>;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export const advancedAnalytics = {
  config: {
    trackingId: '',
    enabled: true,
    debug: false,
    customDimensions: {},
    customMetrics: {}
  } as AdvancedAnalyticsConfig,

  // Initialize advanced analytics
  init: (config: AdvancedAnalyticsConfig): void => {
    advancedAnalytics.config = { ...advancedAnalytics.config, ...config };
    
    if (typeof window !== 'undefined' && config.trackingId) {
      // Load Google Analytics 4
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
      (window as any).gtag('config', config.trackingId, {
        custom_map: config.customDimensions
      });
    }
  },

  // Track enhanced event
  trackEvent: (event: AnalyticsEvent): void => {
    if (!advancedAnalytics.config.enabled) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters
      });
    }

    if (advancedAnalytics.config.debug) {
      console.log('Advanced analytics event tracked:', event);
    }
  },

  // Track user journey
  trackUserJourney: (step: string, details?: Record<string, any>): void => {
    advancedAnalytics.trackEvent({
      action: 'user_journey',
      category: 'User Flow',
      label: step,
      customParameters: details
    });
  },

  // Track performance metrics
  trackPerformance: (metric: string, value: number, unit?: string): void => {
    advancedAnalytics.trackEvent({
      action: 'performance_metric',
      category: 'Performance',
      label: metric,
      value: Math.round(value),
      customParameters: { unit }
    });
  },

  // Track business metrics
  trackBusinessMetric: (metric: string, value: number, currency?: string): void => {
    advancedAnalytics.trackEvent({
      action: 'business_metric',
      category: 'Business',
      label: metric,
      value,
      customParameters: { currency }
    });
  },

  // Track conversion funnel
  trackConversionFunnel: (stage: string, value?: number): void => {
    advancedAnalytics.trackEvent({
      action: 'conversion_funnel',
      category: 'Conversion',
      label: stage,
      value
    });
  },

  // Set user properties
  setUserProperties: (properties: Record<string, any>): void => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', advancedAnalytics.config.trackingId, {
        user_properties: properties
      });
    }
  },

  // Set custom dimensions
  setCustomDimensions: (dimensions: Record<string, string>): void => {
    advancedAnalytics.config.customDimensions = {
      ...advancedAnalytics.config.customDimensions,
      ...dimensions
    };
  },

  // Set custom metrics
  setCustomMetrics: (metrics: Record<string, number>): void => {
    advancedAnalytics.config.customMetrics = {
      ...advancedAnalytics.config.customMetrics,
      ...metrics
    };
  },

  // Track page view with enhanced data
  trackPageView: (pagePath: string, pageTitle?: string, customData?: Record<string, any>): void => {
    if (!advancedAnalytics.config.enabled) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', advancedAnalytics.config.trackingId, {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        ...customData
      });
    }

    if (advancedAnalytics.config.debug) {
      console.log('Enhanced page view tracked:', { pagePath, pageTitle, customData });
    }
  },

  // Enable/disable tracking
  setEnabled: (enabled: boolean): void => {
    advancedAnalytics.config.enabled = enabled;
  },

  // Set debug mode
  setDebug: (debug: boolean): void => {
    advancedAnalytics.config.debug = debug;
  }
};

export default advancedAnalytics;