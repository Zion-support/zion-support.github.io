export const advancedAnalytics = {
  trackPageView: (_page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
<<<<<<< HEAD
        page_title: document.title,
        page_location: window.location.href
=======
<<<<<<< HEAD
        page_title: document.title;,
        page_location: window.location.href
=======
        page_title: document.title,
        page_location: window.location.href;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  
<<<<<<< HEAD
  trackEvent: (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  },

  trackCustomEvent: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
=======
  trackEvent: (_eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', _eventName, parameters);
  trackEvent: (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
  trackEvent: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
<<<<<<< HEAD
        event_category: category;,
        event_label: label;,
        value: value
=======
        event_category: category,
        event_label: label,
        value: value;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
<<<<<<< HEAD
        send_to: conversionId,
        value: value,
        currency: currency
=======
<<<<<<< HEAD
        send_to: conversionId;,
        value: value;,
        currency: currency
=======
        send_to: conversionId,
        value: value,
        currency: currency;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  },
  
  setUserProperties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
<<<<<<< HEAD
        user_properties: properties
=======
        user__properties: _properties
      });
        custom_map: parameters;
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      })
    }
  }
}