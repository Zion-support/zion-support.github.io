// Analytics utility functions
export function fireEvent(eventName: string, properties?: Record<string, any>) {
  // In a real application, this would integrate with analytics services
  // like Google Analytics, Mixpanel, etc.
  console.log('Analytics Event:', eventName, properties);
  
  // Example integration with Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  
  // Example integration with Mixpanel
  if (typeof window !== 'undefined' && (window as any).mixpanel) {
    (window as any).mixpanel.track(eventName, properties);
}

export function trackPageView(pageName: string, properties?: Record<string, any>) {
  fireEvent('page_view', { page: pageName, ...properties });

export function trackUserAction(action: string, properties?: Record<string, any>) {
  fireEvent('user_action', { action, ...properties });

export function trackError(error: string, properties?: Record<string, any>) {
  fireEvent('error', { error, ...properties });