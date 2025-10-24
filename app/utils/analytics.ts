export const trackEvent = (eventName: string, properties: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && (window as Window & { gtag: Function }).gtag) {
    (window as Window & { gtag: Function }).gtag('event', eventName, properties);
  }
};

export const trackPageView = (pagePath: string) => {
  if (typeof window !== 'undefined' && (window as Window & { gtag: Function }).gtag) {
    (window as Window & { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
    });
  }
};