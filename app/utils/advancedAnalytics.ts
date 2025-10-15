// Global gtag function declaration
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const advancedAnalytics = {
  trackPageView: (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      });
    }
  },
  trackEvent: (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency
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

export default advancedAnalytics;