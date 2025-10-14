export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
    }

  },
  
  trackClick: (element: string, location: string) => {
      window.gtag('event', 'click', {

      })
    }

  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
      window.gtag('event', 'form_submit', {

      })
    }

  },
  
  trackConversion: (conversionId: string, value?: number) => {
      window.gtag('event', 'conversion', {

      })
    }

  }

}
