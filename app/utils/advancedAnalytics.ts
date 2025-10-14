export const advancedAnalytics = {
  trackPageView: (page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  },
  
  trackEvent: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      })
    }
  },
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency
      })
    }
  },
  
  trackCustomEvent: (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: parameters
      })
    }
  }
}