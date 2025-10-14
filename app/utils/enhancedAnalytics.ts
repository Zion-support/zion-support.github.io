export const enhancedAnalytics = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined'
      window.gtag('event', 'page_view'
    if (typeof window !== 'undefined'
      window.gtag('event'
    if (typeof window !== 'undefined'
      window.gtag('event', 'user_engagement'