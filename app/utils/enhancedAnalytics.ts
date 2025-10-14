export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page
      });
    }
  },
  
  trackEvent: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  },
  
  trackUserEngagement: (engagementType: string, duration?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_engagement', {
        engagement_type: engagementType,
        engagement_time_msec: duration
      });
    }
  }
};