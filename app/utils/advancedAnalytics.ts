export const advancedAnalytics = {
  trackPageView: (_page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: _page
      })
    }
  },
  
  trackEvent: (eventName: string, parameters: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  },
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        conversion_id: conversionId,
        value: value,
        currency: currency
      });
    }
  },
  
  setUserProperties: (_properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {

      })
    }
  }
}