// Analytics utility functions
declare global {
  interface Window {
    gtag?: (..._args: unknown[]) => void;
  }
}
export const trackEvent = (eventName: string, _properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, _properties);
  }
};
export const trackPageView = (pageTitle: string, pageLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageTitle,
      page_location: pageLocation,
    });
  }
};