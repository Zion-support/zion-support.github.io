// Analytics hook for tracking events and page views

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window === 'undefined'
      (window as any).gtag('event'
    console.log('Analytics Event:'
    if (typeof window === 'undefined'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID'
    console.log('Page View:'