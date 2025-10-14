// Analytics utility functions:;
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) =>{
  // Basic analytics tracking:;
console.log('Analytics Event:', eventName, properties);
  
  // In a real implementation, you would send this to your analytics service:;
if (typeof window !== 'undefined' && (window as { gtag?: unknown }).gtag) {
    (window as { gtag: (command: string, eventName: string, properties?: Record<string, unknown>) =>void }).gtag('event', eventName, properties);
  }
};
;
export const trackPageView = (pageName: string) =>{;
console.log('Page View:', pageName);
  ;
if (typeof window !== 'undefined' && (window as { gtag?: unknown }).gtag) {
    (window as { gtag: (command: string, measurementId: string, config: { page_title: string; page_location: string }) =>void }).gtag('config', 'GA_MEASUREMENT_ID', {;
page_title: pageName,;
page_location: window.location.href,
    });
  }
};
  </div>
  </div>