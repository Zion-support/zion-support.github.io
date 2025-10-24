import React from 'react'

// Analytics utilities for tracking user interactions and performance

interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
}

class Analytics {
  private events: AnalyticsEvent[] = []

  track(event: string, category: string, action: string, label?: string, value?: number) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value
    }
    
    this.events.push(analyticsEvent)
    
    // In a real app, you would send this to your analytics service
    console.log('Analytics Event:', analyticsEvent)
  }

  getEvents() {
    return this.events
  }

  clearEvents() {
    this.events = []
  }
}

const analytics = new Analytics()

export const useAnalytics = () => {
  const trackPageView = (path: string, title: string) => {
    analytics.track('page_view', 'navigation', 'view', path)
  }

  const trackClick = (element: string, action: string) => {
    analytics.track('click', 'interaction', 'click', element)
  }

  const trackCustomEvent = (event: string, category: string, action: string, label?: string, value?: number) => {
    analytics.track(event, category, action, label, value)
  }

  return {
    trackPageView,
    trackClick,
    trackCustomEvent
  }
}

export default analytics