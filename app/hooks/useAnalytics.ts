// Analytics hook for tracking events and page views

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window === 'undefined') return;
    
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
    
    // Custom analytics
    console.log('Analytics Event:', event);
  };

  const trackPageView = (page: string) => {
    if (typeof window === 'undefined') return;
    
    if ((window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      });
    }
    
    console.log('Page View:', page);
  };

  return { trackEvent, trackPageView };
};

export default useAnalytics;