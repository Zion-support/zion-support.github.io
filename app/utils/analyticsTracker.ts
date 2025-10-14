export const analyticsTracker = {
  trackPageView: (_page: string, _title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page
      })
    }
  },
  
  trackClick: (_element: string, _location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: element,
        custom_parameter: location
      })
    }
  },
  
  trackFormSubmit: (_formName: string, _success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formName,
        value: success ? 1 : 0
      })
    }
  },
  
  trackConversion: (_conversionId: string, _value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value
      })
    }
  }
}