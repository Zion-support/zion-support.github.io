export const advancedAnalytics = {
  trackPageView: (_page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: _page
      })
    }
  },
  
  trackEvent: (_category: string, _action: string, _label?: string, _value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', _action, {
        event_category: _category,
        event_label: _label,
        value: _value
      })
    }
  },
  
  trackConversion: (_conversionId: string, _value?: number, _currency?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: _conversionId,
        value: _value,
        currency: _currency
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