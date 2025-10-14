export const advancedAnalytics = {
  trackPageView: (_page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
<<<<<<< HEAD
        page_title: document.title,
        page_location: window.location.href
=======
        page_title: document.title;,
        page_location: window.location.href;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  
  trackEvent: (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)

  trackCustomEvent: (action: string, category: string, label?: string, value?: number) => {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
  trackEvent: (_eventName: string, parameters: Record<string, unknown> = {}) => {
      window.gtag('event', _eventName, parameters);
      window.gtag('event', eventName, parameters);
  trackEvent: (action: string, category: string, label?: string, value?: number) => {
        event_category: category;,
        event_label: label;,
        value: value;
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency
        send_to: conversionId;,
        value: value;,
        currency: currency;
  
  setUserProperties: (properties: Record<string, unknown>) => {
        user_properties: properties
        user__properties: _properties
      });
        custom_map: parameters;