export const analyticsTracker = {
  trackPageView: (page: string, title?: string) => {
    if (typeof window !== &apos;undefined&apos;) {
      window.gtag(&apos;event&apos;, &apos;page_view&apos;, {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page
      })
    }
  },
  
  trackClick: (element: string, location: string) => {
    if (typeof window !== &apos;undefined&apos;) {
      window.gtag(&apos;event&apos;, &apos;click&apos;, {
        event_category: &apos;engagement&apos;,
        event_label: element,
        custom_parameter: location
      })
    }
  },
  
  trackFormSubmit: (formName: string, success: boolean) => {
    if (typeof window !== &apos;undefined&apos;) {
      window.gtag(&apos;event&apos;, &apos;form_submit&apos;, {
        event_category: &apos;engagement&apos;,
        event_label: formName,
        value: success ? 1 : 0
      })
    }
  },
  
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== &apos;undefined&apos;) {
      window.gtag(&apos;event&apos;, &apos;conversion&apos;, {
        send_to: conversionId,
        value: value
      })
    }
  }
}