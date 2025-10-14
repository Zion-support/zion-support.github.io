export const advancedAnalytics = {
  trackPageView: (page: string) => {
    if (typeof window !== 'undefined'
      window.gtag('config', 'GA_MEASUREMENT_ID'
    if (typeof window !== 'undefined'
      window.gtag('event'
    if (typeof window !== 'undefined'
      window.gtag('event', 'conversion'
    if (typeof window !== 'undefined'
      window.gtag('config', 'GA_MEASUREMENT_ID'