// Enhanced analytics and monitoring configuration
export const enhancedAnalyticsConfig = {
  // Google Analytics 4
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX',
    enabled: process.env.NODE_ENV === 'production',
    enhancedMeasurement: true,
    customDimensions: {
      userType: 'user_type',
      serviceInterest: 'service_interest',
      contactMethod: 'contact_method'
    }
  },
  
  // Performance monitoring
  performance: {
    enabled: true,
    sampleRate: 1.0,
    thresholds: {
      CLS: 0.1,
      FID: 100,
      FCP: 1800,
      LCP: 2500,
      TTFB: 800,
      INP: 200
    },
    monitoring: {
      realUserMonitoring: true,
      syntheticMonitoring: true,
      errorTracking: true,
      resourceTiming: true,
      navigationTiming: true
    }
  },
  
  // Error tracking
  errorTracking: {
    enabled: true,
    sampleRate: 1.0,
    ignoreErrors: [
      'ResizeObserver loop limit exceeded',
      'Non-Error promise rejection captured',
      'Script error',
      'Network request failed'
    ],
    context: {
      userAgent: true,
      url: true,
      timestamp: true,
      userId: true,
      sessionId: true
    }
  },
  
  // User behavior tracking
  userBehavior: {
    enabled: true,
    trackPageViews: true,
    trackClicks: true,
    trackScrolls: true,
    trackFormSubmissions: true,
    trackDownloads: true,
    trackOutboundLinks: true,
    heatmapTracking: false,
    sessionRecording: false
  },
  
  // Custom events
  customEvents: {
    'service_inquiry': {
      category: 'Engagement',
      action: 'Service Inquiry',
      label: 'Contact Form',
      value: 1
    },
    'phone_click': {
      category: 'Engagement',
      action: 'Phone Click',
      label: 'Contact',
      value: 1
    },
    'service_view': {
      category: 'Engagement',
      action: 'Service View',
      label: 'Services Page',
      value: 1
    },
    'download_whitepaper': {
      category: 'Lead Generation',
      action: 'Download',
      label: 'Whitepaper',
      value: 5
    },
    'schedule_consultation': {
      category: 'Lead Generation',
      action: 'Schedule',
      label: 'Consultation',
      value: 10
    }
  },
  
  // Conversion tracking
  conversions: {
    'contact_form_submit': {
      value: 1,
      currency: 'USD'
    },
    'phone_call': {
      value: 5,
      currency: 'USD'
    },
    'consultation_scheduled': {
      value: 10,
      currency: 'USD'
    }
  },
  
  // Real-time monitoring
  realTime: {
    enabled: true,
    refreshInterval: 5000,
    metrics: ['activeUsers', 'pageViews', 'events', 'conversions']
  }
};

// Enhanced analytics utility functions
export const enhancedAnalyticsUtils = {
  // Track custom event with enhanced data
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const enhancedParams = {
        ...parameters,
        timestamp: Date.now(),
        page_url: window.location.href,
        page_title: document.title,
        user_agent: navigator.userAgent
      };
      
      window.gtag('event', eventName, enhancedParams);
    }
  },
  
  // Track page view with enhanced data
  trackPageView: (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', enhancedAnalyticsConfig.ga4.measurementId, {
        page_title: title || document.title,
        page_location: url,
        custom_map: enhancedAnalyticsConfig.ga4.customDimensions
      });
    }
  },
  
  // Track conversion with enhanced data
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency || 'USD',
        timestamp: Date.now()
      });
    }
  },
  
  // Track user engagement
  trackEngagement: (engagementType: string, details?: Record<string, unknown>) => {
    enhancedAnalyticsUtils.trackEvent('user_engagement', {
      engagement_type: engagementType,
      ...details
    });
  },
  
  // Track performance metrics
  trackPerformance: (metricName: string, value: number, threshold: number) => {
    enhancedAnalyticsUtils.trackEvent('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      threshold: threshold,
      status: value <= threshold ? 'good' : 'needs_improvement'
    });
  }
};

export default enhancedAnalyticsConfig;