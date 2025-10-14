export const advancedAnalytics = {
  trackPageView: (page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      })
    }
  },
  
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', eventName, parameters)
    }
  },
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency
      })
    }
  },
  
  setUserProperties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: properties
      })
    }
  }
}