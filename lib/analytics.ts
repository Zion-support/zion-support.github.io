
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
;
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('config', 'GA_MEASUREMENT_ID', {

      page_path: url,

      page_path: url,;

    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
      page_path: url,

    });
  }
}

      page_path: url,;

      page_path: url,
    });
  }
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
      domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,
      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };

  }
  return null;
}
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

}
;

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}


      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

}
;
// Track events;

export const event = ({
  action
  category
  label
  value
}: {

      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,;

    });
  }
}
// Track events
export const event = ({

  action,
  category,
  label,
  value,
}: {;

  action: string;
  category: string;
  label?: string;
  value?: number;

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', action, {
}) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('event', action, {

      event_category: category,
      event_label: label,
      value: value,
    });
  }

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

      domContentLoaded:;

        navigation && navigation.domContentLoadedEventEnd -;
        navigation && navigation.domContentLoadedEventStart,;
      firstPaint:;
        performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;,
}}
  return null};


// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}


export const trackWebVitals = (metric: WebVitalMetric) => {;
  if (typeof window !== 'undefined' && window && window.gtag) {';
    window && window.gtag('event', metric && metric.name, {';
      value: Math && Math.round(metric && metric.value);
      event_category: 'Web Vitals',';
      event_label: metric && metric.id;
      non_interaction: true;,

})}
}


    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}


// Declare global types
    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
// Declare global types
        navigation.domContentLoadedEventStart,
      first_paint:;
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;,
}}
  return null}
;
// Web Vitals tracking;
interface WebVitalMetric {
  name: string;
  value: number;
  id: string}
export const trackWebVitals = (metric: WebVitalMetric) =>: any {
  // Check condition
if ( {') {
  $2
}
    window.gtag ('event', metric.name, {';
      value: Math.round (metric.value);
      event_category: 'Web Vitals', ';
      event_label: metric.id;
      non_interaction: true;,
})}
}
;
// Declare global types;
declare global {
  interface Window {




    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
}
 Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window != 'undefined'
    window && window.gtag('event'
  if (typeof window != 'undefined'
    window.gtag('config', 'GA_MEASUREMENT_ID'
  if (typeof window != 'undefined'
    window && window.gtag('event'
  if (typeof window != 'undefined'
    window.gtag('config'
  if (typeof window != 'undefined' && 'performance'
    const navigation = performance && performance.getEntriesByType('navigation'
      firstPaint: performance.getEntriesByName('first-paint'
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint'
  if (typeof window != 'undefined'
    window && window.gtag('event'
  if (typeof window != 'undefined'
    window && window.gtag('config'
  if (typeof window != 'undefined' && 'performance'
    const navigation = performance && performance.getEntriesByType('navigation'
      firstPaint: performance && performance.getEntriesByName('first-paint'
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint'
    window.gtag ('config'
    const navigation = performance.getEntriesByType ('navigation'
      first_paint: performance.getEntriesByName ('first - paint'
      firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint'
  if (typeof window != 'undefined'
    window.gtag('event'
      event_category: any
  if (typeof window != 'undefined'
    window && window.gtag('event'
      event_category: any
  if (typeof window != 'undefined'
    window.gtag('event'
    window.gtag ('event'
      event_category: any
  if (typeof window != 'undefined'
    window.gtag('event'
export const measurePerformance = () => {if (typeof window != 'undefined' && 'performance' in window) {'
      'navigation''
  if (typeof window != 'undefined' && 'performance' in window) {'
      'navigation''
if ( {'
      'navigation''
        performance.getEntriesByName('first-paint')[0]?.startTime |0,'
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime |'
export const trackWebVitals = (metric: WebVitalMetric) => {if (typeof window != 'undefined' && window.gtag) {'
    window.gtag('event', metric.name, {'
      event_category: 'Web Vitals','
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, '
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||'
if ( {'
    window.gtag ('event', metric.name, {'
      event_category: 'Web Vitals', '
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window != 'undefined' && window.gtag) { window.gtag('event',eventName,properties)}; export const trackPageView = (url: string) => { if (typeof window != 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})}; export const measurePerformance = () => { if (typeof window != 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 } return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window != 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })}; declare global { interface Window { gtag: ( command: string,targetId: any
