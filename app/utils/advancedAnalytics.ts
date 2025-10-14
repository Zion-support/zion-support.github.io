export const advancedAnalytics = {
  trackPageView: (_page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {

>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  

>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
      window.gtag('event', 'conversion', {

>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  
  setUserProperties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {

      })
    }
  }
}