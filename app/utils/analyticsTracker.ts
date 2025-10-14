export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackClick: (element: string, location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  }
}