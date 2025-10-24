export const monitoring = {
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, properties);
    }
  },
  
  trackPageView: (pageName: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName
      });
    }
  }
};
