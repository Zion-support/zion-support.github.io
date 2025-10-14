export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
<<<<<<< HEAD
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page})
=======
        page_title: title || document.title;,
        page_location: window.location.href;,
        page_path: page
        page_path: page;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  },
  
  trackClick: (element: string, location: string) => {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: element,
        custom_parameter: location})
        event_category: 'engagement';,
        event_label: element;,
        custom_parameter: location
        custom_parameter: location;
  
  trackFormSubmit: (formName: string, success: boolean) => {
      window.gtag('event', 'form_submit', {
        event_label: formName,
        value: success ? 1 : 0})
        event_label: formName;,
        value: success ? 1 : 0
        value: success ? 1 : 0;
  
  trackConversion: (conversionId: string, value?: number) => {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value})
        send_to: conversionId;,
        value: value
        value: value;