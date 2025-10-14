export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
<<<<<<< HEAD
        page_title: title || document.title;,
        page_location: window.location.href;,
        page_path: page
=======
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
    }
  },
  
  trackUserInteraction: (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
<<<<<<< HEAD
        event_category: category;,
        event_label: label
=======
        event_category: category,
        event_label: label;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
    }
  },
  
  trackUserEngagement: (engagementType: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'user_engagement', {
<<<<<<< HEAD
        engagement_type: engagementType;,
        value: value
=======
        engagement_type: engagementType,
        value: value;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
    }
  },
  
  trackPerformance: (metric: string, value: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_metric', {
<<<<<<< HEAD
        metric_name: metric;,
        metric_value: value
=======
        metric_name: metric,
        metric_value: value;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
    }
  }
}