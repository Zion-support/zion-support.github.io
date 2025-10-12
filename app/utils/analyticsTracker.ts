// Analytics tracking utilities
export const trackEvent = (event: string, data?: any) => {
  // Track analytics events
  console.log('Event tracked:', event, data);
};

export const trackPageView = (page: string) => {
  // Track page views
  console.log('Page view tracked:', page);
};