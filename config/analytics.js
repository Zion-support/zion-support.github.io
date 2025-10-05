// Advanced analytics and monitoring configuration
export const analyticsConfig = {// Google Analytics 4
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX'}
    enabled: process.env.NODE_ENV === 'production'
  },
  // Performance monitoring
  performance: {enabled: true,
    sampleRate: 1.0,
    thresholds: {
      CLS: 0.1,
      FID: 100,
      FCP: 1800,
      LCP: 2500}
      TTFB: 800
    }
  },
  // Error tracking
  errorTracking: {enabled: true,
    sampleRate: 1.0,
    ignoreErrors: [
      'ResizeObserver loop limit exceeded'}
      'Non-Error promise rejection captured'
    ]
  },
  // User behavior tracking
  userBehavior: {enabled: true,
    trackPageViews: true,
    trackClicks: true,
    trackScrolls: true}
    trackFormSubmissions: true
  },
  // Custom events
  customEvents: {'service_inquiry': {
      category: 'Engagement',
      action: 'Service Inquiry'}
      label: 'Contact Form'
    },
    'phone_click': {category: 'Engagement',
      action: 'Phone Click'}
      label: 'Contact'
    },
    'service_view': {category: 'Engagement',
      action: 'Service View'}
      label: 'Services Page'
    }
  }
};
// Analytics utility functions
export const analyticsUtils = {// Track custom event
  trackEvent: (eventName: string, parameters?: Record<string) unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event') eventName} parameters);
    }
  },
  // Track page view
  trackPageView: (url: string) title?: string) => {if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', analyticsConfig.ga4.measurementId) {
        page_title: title}
        page_location: url
      });
    }
  },
  // Track conversion
  trackConversion: (conversionId: string, value?: number) currency?: string) => {if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId)
        value: value}
        currency: currency
      });
    }
  }
};
export default analyticsConfig;