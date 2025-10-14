export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: page
      });
    }
  },
  
  trackUserInteraction: (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  },
  
  trackUserEngagement: (engagementType: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'user_engagement', {
        engagement_type: engagementType,
        value: value
      });
    }
  },
  
  trackPerformance: (metric: string, value: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_metric', {
        metric_name: metric,
        value: value
      });
    }
  }
};