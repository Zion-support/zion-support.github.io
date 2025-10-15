<<<<<<< HEAD
// Analytics utility functions

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = (event: AnalyticsEvent) => {
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

export const trackPageView = (pageName: string) => {
  if (typeof window === 'undefined') return;
  
  if ((window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
  
  console.log('Page View:', pageName);
};

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window === 'undefined') return;
  
  if ((window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: conversionId,
      value: value
    });
  }
};

export const trackError = (error: Error, context?: string) => {
  if (typeof window === 'undefined') return;
  
  if ((window as any).gtag) {
    (window as any).gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_map: {
        context: context || 'unknown'
      }
    });
  }
};
=======
/// Comment

export function analytics() {
  /// Comment
  return null;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
