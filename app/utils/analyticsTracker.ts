export const analyticsTracker = { trackPageView: (page: string, title?: string) => { if (typeof window !== 'undefined') { window.gtag('event', 'page_view', {
<<<<<<< HEAD page_title: title || document.title, page_location: window.location.href, page_path: page})
=======
<<<<<<< HEAD page_title: title || document.title;, page_location: window.location.href;, page_path: page
======= page_title: title || document.title, page_location: window.location.href, page_path: page;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05 })
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d } }, trackClick: (element: string, location: string) => { if (typeof window !== 'undefined') { window.gtag('event', 'click', {
<<<<<<< HEAD event_category: 'engagement', event_label: element, custom_parameter: location})
<<<<<<< HEAD event_category: 'engagement';, event_label: element;, custom_parameter: location
======= event_category: 'engagement', event_label: element, custom_parameter: location;
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d } }, trackFormSubmit: (formName: string, success: boolean) => { if (typeof window !== 'undefined') { window.gtag('event', 'form_submit', {
<<<<<<< HEAD event_category: 'engagement', event_label: formName, value: success ? 1 : 0})
<<<<<<< HEAD event_category: 'engagement';, event_label: formName;, value: success ? 1 : 0
======= event_category: 'engagement', event_label: formName, value: success ? 1 : 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d } }, trackConversion: (conversionId: string, value?: number) => { if (typeof window !== 'undefined') { window.gtag('event', 'conversion', {
<<<<<<< HEAD send_to: conversionId, value: value})
<<<<<<< HEAD send_to: conversionId;, value: value
======= send_to: conversionId, value: value;
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d } }
}