// Analytics utility functions
  // In a real implementation, you would send this to your analytics service
  if (typeof window !== 'undefined'
    (window as { gtag: (command: string, eventName: string, properties?: Record<string, unknown>) => void }).gtag('event'
export const trackPageView  = (pageName: string) => {console.log('Page View:'
  if (typeof window !== 'undefined'
    (window as { gtag: (command: string, measurementId: string, config: { page_title: string page_location: string }) => void }).gtag('config', 'GA_MEASUREMENT_ID'