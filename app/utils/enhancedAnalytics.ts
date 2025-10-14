export const enhancedAnalytics = {
  trackPageView: (_page: string, _title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {

      })
    }
  },
  
  trackUserInteraction: (action: string, _category: string, _label?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {

      })
    }
  },
  
  trackUserEngagement: (_engagementType: string, _value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'user_engagement', {

      })
    }
  },
  
  trackPerformance: (_metric: string, _value: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_metric', {

      })
    }
  }
}