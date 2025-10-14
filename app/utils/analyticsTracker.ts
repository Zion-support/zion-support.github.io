export constanalyticsTracker= {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page
      })
    }
  },
  
  trackClick: (element: string, location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: element,
        custom_parameter: location
      })
    }
  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formName,
        value: success ? 1 : 0
      })
    }
  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value
      })
    }
  }
};