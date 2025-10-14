export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
    }

  },
  
  trackUserInteraction: (action: string, category: string, label?: string) => {
      window.gtag('event', action, {

      })
    }

  },
  
  trackUserEngagement: (engagementType: string, value?: number) => {
      window.gtag('event', 'user_engagement', {

      })
    }

  },
  
  trackPerformance: (metric: string, value: number) => {
      window.gtag('event', 'performance_metric', {

      })
    }

  }

}
