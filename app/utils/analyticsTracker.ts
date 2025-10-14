export const analyticsTracker = {
  trackPageView: (_page: string, _title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
    }
  },
  
  trackClick: (_element: string, _location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {

      })
    }
  },
  
  trackFormSubmit: (_formName: string, _success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {

      })
    }
  },
  
  trackConversion: (_conversionId: string, _value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {

      })
    }
  }
}