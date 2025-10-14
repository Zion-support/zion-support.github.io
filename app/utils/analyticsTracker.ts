export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: page
      })
    }

  },
  
  trackClick: (element: string, location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        element: element,
        location: location
      })
    }

  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {
        form_name: formName,
        success: success
      })
    }

  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        conversion_id: conversionId,
        value: value
      })
    }

  }

}
