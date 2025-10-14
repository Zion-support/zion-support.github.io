

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Basic analytics tracking
  console.log('Analytics Event:', eventName, properties);
  
  // In a real implementation, you would send this to your analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (pageName: string) => {
    console.log('Page View:', pageName);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href,
  });
  }
};