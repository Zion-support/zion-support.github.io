export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
    }
  },
  
  trackClick: (element: string, location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {

      })
    }
  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {

      })
    }
  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {

      })
    }
  }
}