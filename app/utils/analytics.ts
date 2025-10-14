// Analytics utility functions
export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  console.log('Analytics Event:', event, properties)
}
export const trackPageView = (pageName: string) => {
  console.log('Page View:', pageName)
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
    (window as unknown as { gtag: (command: string, measurementId: string, config: { page_title: string; page_location: string }) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href,
    })
  }
}
