export const analyticsTracker = {
  trackPageView: (_page: string, _title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: _title,
        page_location: _page
      })
    }
  },
  
  trackClick: (_element: string, _location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        element: _element,
        location: _location
      })
    }
  },
  
  trackFormSubmit: (_formName: string, _success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {
        form_name: _formName,
        success: _success
      })
    }
  },
  
  trackConversion: (_conversionId: string, _value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        conversion_id: _conversionId,
        value: _value
      })
    }
  }
}