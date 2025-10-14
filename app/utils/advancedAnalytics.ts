export const advancedAnalytics = {
  trackPageView: (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
    }
  },
  
  trackEvent: (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value
      });
    }
  },
  
  setUserProperties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_properties: properties
      });
    }
  }
};