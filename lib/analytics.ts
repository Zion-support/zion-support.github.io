<<<<<<< HEAD
=======

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', 'GA_MEASUREMENT_ID', {
// Analytics utilities;
export const track_event = (event: string, data?: any) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('event', event, data);
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('config', 'GA_MEASUREMENT_ID', {

<<<<<<< HEAD
      page_path: url,;

    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
      page_path: url,

    });
  }
      page_path: url,
    });
  }
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
// Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag('event', event, data);
  }
}
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url
      page_path: url,;
    });
  }
}
=======
      page_path: url,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      page_path: url,;

      page_path: url,

<<<<<<< HEAD
=======
    });
  }
}
=======

      page_path: url,;

=======
      page_path: url,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });
  }
};

<<<<<<< HEAD
      page_path: url
    });
  }
}
      page_path: url,;
      page_path: url,
    });
  }
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {
<<<<<<< HEAD
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
      domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,
      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
<<<<<<< HEAD
  }
  return null;
}
=======

  }
  return null;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
// Track events
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
}
;
// Track events;
export const track_event = (
  event_name: string,
  properties?: Record < string, string | number | boolean>) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('event', event_name, properties);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
;
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}
;
export const measure_performance = () =>: any {
  // Check condition
if ( {) {
  $2
}
    const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;
    return {
      load_time: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      first_paint: performance.getEntriesByName ('first - paint')[0]?.start_time || 0,
      firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint')[0]?.start_time || 0,
    }
  }
  return null;
<<<<<<< HEAD
}
;
=======

}
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}


<<<<<<< HEAD
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', metric && metric.name, {
      value: Math && Math.round(metric && metric.value),
      event_category: 'Web Vitals',
      event_label: metric && metric.id,
      non_interaction: true,
export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value)
      event_category: 'Web Vitals'
      event_label: metric.id
      non_interaction: true
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,;
    });
  }
}
export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
export const trackWebVitals = (metric: WebVitalMetric) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('event', metric.name, {
      value: Math.round (metric.value),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
<<<<<<< HEAD
}
;
// Track events;
=======

}
;
// Track events;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const event = ({
  action
  category
  label
  value
}: {
<<<<<<< HEAD
=======
=======

      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,;

    });
  }
}
// Track events
export const event = ({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  action,
  category,
  label,
  value,
}: {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  action: string;
  category: string;
  label?: string;
  value?: number;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', action, {
}) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('event', action, {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      event_category: category,
      event_label: label,
      value: value,
    });
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
;
export const measure_performance = () =>: any {
  // Check condition
if ( {') {
  $2
}
    const navigation = performance.getEntriesByType (
      'navigation'')[0] as PerformanceNavigationTiming;
;
    return {
      load_time: navigation.loadEventEnd - navigation.loadEventStart;
<<<<<<< HEAD
      domContentLoaded:;
=======

      domContentLoaded:;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        navigation && navigation.domContentLoadedEventEnd -;
        navigation && navigation.domContentLoadedEventStart,;
      firstPaint:;
        performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;,
}}
  return null};
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const trackWebVitals = (metric: WebVitalMetric) => {;
  if (typeof window !== 'undefined' && window && window.gtag) {';
    window && window.gtag('event', metric && metric.name, {';
      value: Math && Math.round(metric && metric.value);
      event_category: 'Web Vitals',';
      event_label: metric && metric.id;
      non_interaction: true;,
<<<<<<< HEAD
=======

})}
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}

// Analytics and performance monitoring utilities;
export const trackEvent = (;

// Declare global types
<<<<<<< HEAD
})}
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}
ursor/integrate-build-improve-and-re-verify-8f7d
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
// Declare global types
        navigation.domContentLoadedEventStart,
      first_paint:;
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;,
}}
  return null}// Web Vitals tracking;
interface WebVitalMetric {
  name: string;
export const trackWebVitals = (metric: WebVitalMetric) => {";
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("event", metric.name, {
      value: Math.round(metric.value),;
      event_category: "Web Vitals",;
      event_label: metric.id,;
      non_interaction: true})}
}
declare global {
  interface Window {


<<<<<<< HEAD
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
origin/main
}
}
    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }


    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
}
}
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
