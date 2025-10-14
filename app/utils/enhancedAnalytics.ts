export const enhancedAnalytics = {
  trackPageView: (_page: string, _title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: _title,
        page_location: _page
      });
    }
  },
  
  trackUserInteraction: (action: string, _category: string, _label?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        category: _category,
        label: _label
      });
    }
  },
  
  trackUserEngagement: (_engagementType: string, _value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'user_engagement', {
        engagement_type: _engagementType,
        value: _value
      });
    }
  },
  
  trackPerformance: (_metric: string, _value: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_metric', {
        metric: _metric,
        value: _value
      });
    }
  }
};