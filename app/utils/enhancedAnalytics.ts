export constenhancedAnalytics= {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page;
      })
    }
  },
  
  trackUserInteraction: (action: string, category: string, label?: string) => {
      window.gtag('event', action, {
        event_category: category,
        event_label: label;
      })
    }
  },
  
  trackUserEngagement: (engagementType: string, value?: number) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3e4e
      window.gtag('event', 'user_engagement', {
        engagement_type: engagementType,
        value: value;
      })
    }
  },
  
  trackPerformance: (metric: string, value: number) => {
<<<<<<< HEAD
    if (typeof window !== 'undefined' && window.gtag) {
=======
      window.gtag('event', 'performance_metric', {
        metric_name: metric,
        metric_value: value;
      })
    }
  }
}
