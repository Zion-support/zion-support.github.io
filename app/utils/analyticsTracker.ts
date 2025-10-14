export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: page
      });
    }
  },
  
  trackClick: (element: string, location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        element_name: element,
        location: location
      });
    }
  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: form Name,
        success: success
      });
    }
  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value
      });
    }
  }
};