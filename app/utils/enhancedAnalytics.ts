export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackUserInteraction: (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackUserEngagement: (engagementType: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'user_engagement', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackPerformance: (metric: string, value: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_metric', {

      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  }
}