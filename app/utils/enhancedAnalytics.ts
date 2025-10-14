export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
<<<<<<< HEAD
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page})
=======
        page_title: title || document.title;,
        page_location: window.location.href;,
        page_path: page
        page_path: page;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackUserInteraction: (action: string, category: string, label?: string) => {
      window.gtag('event', action, {
        event_category: category,
        event_label: label})
        event_category: category;,
        event_label: label
        event_label: label;
  
  trackUserEngagement: (engagementType: string, value?: number) => {
      window.gtag('event', 'user_engagement', {
        engagement_type: engagementType,
        value: value})
        engagement_type: engagementType;,
        value: value
        value: value;
  
  trackPerformance: (metric: string, value: number) => {
      window.gtag('event', 'performance_metric', {
        metric_name: metric,
        metric_value: value})
        metric_name: metric;,
        metric_value: value
        metric_value: value;