export const enhanced Analytics = {
  track Page View: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: page
      })
    }

  },
  track User Interaction: (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label
      })
    }

  },
  track User Engagement: (engagement Type: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'user_engagement', {
        engagement_type: engagement Type,
        value: value
      })
    }

  },
  track Performance: (metric: string, value: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_metric', {
        metric_name: metric,
        metric_value: value
      })
    }

  }

}
