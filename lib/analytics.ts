<<<<<<< HEAD
// Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, data);
=======
if (typeof window !== 'undefined' && window && window.gtag) {
      page_path: url
      page_path: url,;
    });
  }
}
// Track events
export const trackEvent = (
  eventName: string
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag('event', eventName, properties);
>>>>>>> origin/chore/fix-lint-and-merge
  }
}
export const trackPageView = (url: string) => {
<<<<<<< HEAD
  if (typeof window !== 'undefined && window.gtag) {
    window.gtag(config', 'GA_MEASUREMENT_ID, {
      page_path: url});
  }
}
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    });
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
>>>>>>> origin/chore/fix-lint-and-merge

origin/cursor/automate-test-improve-and-merge-code-382a

      page_path: url,

ursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
      page_path: url});
  }

  if (typeof window !== undefined' && window && window.gtag) {
    window && window.gtag('config, GA_TRACKING_ID, {
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {

>>>>>>> origin/chore/fix-lint-and-merge
      page_path: url,

    });
  }
}

    });
  }
}

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

ursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {
  if (typeof window !== undefined' && 'performance in window) {
    const navigation = performance && performance.getEntriesByType(navigation')[0] as PerformanceNavigationTiming;
    return {

export const measurePerformance = () => {
  if (typeof window !== 'undefined && performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation)[0] as PerformanceNavigationTiming;
    return {

      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
      domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,
<<<<<<< HEAD
      firstPaint: performance && performance.getEntriesByName(first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0
    }
=======
      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
>>>>>>> origin/chore/fix-lint-and-merge

  }
  return null;
}
<<<<<<< HEAD
}

ursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {}
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/chore/fix-lint-and-merge

// Track events
// Declare global types
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }

pr-12325
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

origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243
  }
};

      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
<<<<<<< HEAD
}
=======
  return null;
};

// Web Vitals tracking

;
>>>>>>> origin/chore/fix-lint-and-merge
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD
}
    window.gtag (config', GA_TRACKING_ID, {
      page_path: url
    });
  }
}
export const measure_performance = () =>: any {
  // Check condition
if ( {) {
  $2
}
    const navigation = performance.getEntriesByType ('navigation)[0] as PerformanceNavigationTiming;
    return {load_time: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,first_paint: performance.getEntriesByName (first - paint')[0]?.start_time || 0,firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint)[0]?.start_time || 0;
    }}
  return null;firstContentfulPaint: performance.getEntriesByName (first - contentful - paint')[0]?.start_time || 0;
    }
  }
  return null;
}}}firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint)[0]?.start_time || 0;
    }
  }
  return null;interface WebVitalMetric  {name: string;
  value: number;
  id: string;
}value: Math.round(metric.value)event_category: Web Vitals';
      event_label: metric.id;
      non_interaction: true;
      value: Math.round(metric.value),event_category: 'Web Vitals,event_label: metric.id,non_interaction: true,event_category: Web Vitals',event_label: metric.id,non_interaction: true;
    })}non_interaction: true;
    })}
// Track events;
}// Track events;}// Track events;event_category: 'Web Vitals,event_label: metric.id,non_interaction: true;
    })}export const event = ({action;
  category;
  label;
  value;
}: {value: Math.round(metric.value),event_category: Web Vitals',event_label: metric.id,non_interaction: true})declare global {interface Window  {gtag: (command: string,targetId: string,config?: Record<string, unknown>;
    ) => void;}
}
// Track events;
export const event = ({action,category,label,value;
}: {value;
}: {ursor/fix-website-loading-errors-and-merge-6662;
  action: string;
  category: string;
  label?: string;
  value?: number;if (typeof window !== 'undefined && window && window.gtag) {window && window.gtag(event', action, {}) =>: any {if (typeof window !== 'undefined && window && window.gtag) {window && window.gtag(event', action, {}) =>: any {// Check condition;
if ( {) {$2;
}
    window.gtag ('event, action, {event_category: category,event_label: label,value: value;
    })}value: value;
    })}}export const measure_performance = () =>: any {// Check condition;
if ( {) {$2;
}
    const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;return {load_time: navigation.loadEventEnd - navigation.loadEventStart;domContentLoaded:;
      domContentLoaded:;domContentLoaded:;navigation && navigation.domContentLoadedEventEnd -;
        navigation && navigation.domContentLoadedEventStart,firstPaint:;
        performance && performance.getEntriesByName(first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance && performance.getEntriesByName(first-contentful-paint)[0]?.startTime ||';
        0;
        0;
}}
  return null}// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}// Declare global types;
export const trackWebVitals = (metric: WebVitalMetric) => {if (typeof window !== 'undefined && window && window.gtag) {;
    window && window.gtag('event', metric && metric.name, {;
      value: Math && Math.round(metric && metric.value)event_category: Web Vitals',';
      event_label: metric && metric.id;
      non_interaction: true;
      non_interaction: true;})}
}gtag: (...args: unknown[]) => void, dataLayer: unknown[];
  }
}// Declare global types;
    gtag: (...args: unknown[]) => void, dataLayer: unknown[];
  }
}// Declare global types;
    gtag: (...args: unknown[]) => void, dataLayer: unknown[];
  }
}
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} }export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== undefined && window.gtag) { window.gtag('config',GA_MEASUREMENT_ID,{ page_path: 'url'})} }export const measurePerformance = () => { if (typeof window !== undefined && 'performance' in window) { const navigation = performance.getEntriesByType( navigation )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName(first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: metric.id non_interaction: true })} }declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;
// Declare global types;
        navigation.domContentLoadedEventStart,first_paint:;
}
}
=======
>>>>>>> origin/chore/fix-lint-and-merge

}
;
}
;

}

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD


  }
  return null;
}
=======
pr-12243
>>>>>>> origin/chore/fix-lint-and-merge

interface WebVitalMetric {

  name: string;
  value: number;
  id: string;
}

      value: Math.round(metric.value)
      event_category: Web Vitals
      event_label: metric.id
      non_interaction: true
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
<<<<<<< HEAD
      non_interaction: true,
origin/cursor/expand-services-advertise-and-build-project-c28b




      event_category: Web Vitals,
=======
      non_interaction: true,;

export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,

'
      event_category: 'Web Vitals',
>>>>>>> origin/chore/fix-lint-and-merge
      event_label: metric.id,

      non_interaction: true});
  }
// Track events
}
// Track events;

<<<<<<< HEAD
      non_interaction: true});
  }
=======
}
;
// Track events;
>>>>>>> origin/chore/fix-lint-and-merge

origin/cursor/expand-services-advertise-and-build-project-c28b
export const event = ({
  action
  category
  label
  value
}: {
origin/cursor/expand-services-advertise-and-build-project-c28b

      value: Math.round(metric.value),

      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true});

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  }
}
// Track events;
export const event = ({}
  action,
  category,
  label,
<<<<<<< HEAD
  value
}: {
=======
  value,;
}: {;
>>>>>>> origin/chore/fix-lint-and-merge

  action: string;
  category: string;
  label?: string;
  value?: number;

<<<<<<< HEAD

// Track events
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window !== undefined && window.gtag) {
    window.gtag('event', eventName, properties);
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== undefined && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url})}
}

export const measurePerformance = () => {
  if (typeof window !== undefined && 'performance' in window) {
    const navigation = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0}
  }
  return null;
}

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(event, metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true});
  }
}

// Track events
export const event = ({
  action,
  category,
  label,
  value}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== undefined && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    }),
  }
};
;
export const measurePerformance = () => {;
  if (typeof window !== 'undefined' && 'performance' in window) {';
    const navigation = performance.getEntriesByType(;
      'navigation'';
    )[0] as PerformanceNavigationTiming;
;
    return {;
      loadTime: navigation.loadEventEnd - navigation.loadEventStart;
      domContentLoaded:;
        navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,;
      firstPaint:;
        performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;,
}}
  return null};
;
// Web Vitals tracking;
interface WebVitalMetric {;
  name: string;
  value: number;
  id: string}
;
export const trackWebVitals = (metric: WebVitalMetric) => {;
  if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('event', metric.name, {';
      value: Math.round(metric.value);
      event_category: 'Web Vitals',';
      event_label: metric.id;
      non_interaction: true;,
})}
};

// Declare global types
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined && window.gtag) { window.gtag('config',GA_MEASUREMENT_ID,{ page_path: 'url'})} } export const measurePerformance = () => { if (typeof window !== undefined && 'performance' in window) { const navigation = performance.getEntriesByType( navigation )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName(first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
}
;
export const measure_performance = () =>: any {}
  // Check condition'
if ( {') {};
  $2;
}
    const navigation = performance.getEntriesByType ('
      'navigation'')[0] as PerformanceNavigationTiming;
;
    return {}
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

origin/cursor/expand-services-advertise-and-build-project-c28b

// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}

ursor/integrate-build-improve-and-re-verify-8f7d
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
>>>>>>> origin/chore/fix-lint-and-merge
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b
// Declare global types

<<<<<<< HEAD
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
// Declare global types
// Declare global types
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined && window.gtag) { window.gtag('config',GA_MEASUREMENT_ID,{ page_path: 'url'})} } export const measurePerformance = () => { if (typeof window !== undefined && 'performance' in window) { const navigation = performance.getEntriesByType( navigation )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName(first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }




// Declare global types

export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
// Declare global types
        navigation.domContentLoadedEventStart,
      first_paint:;
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ;
      firstContentfulPaint:;
        performance.getEntriesByName (first - contentful - paint')[0]?.start_time ||';
        0;
        0;
        0;
=======
        navigation.domContentLoadedEventStart,
      first_paint:;'
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;'
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;,
>>>>>>> origin/chore/fix-lint-and-merge
}}
  return null}
;
// Web Vitals tracking;
interface WebVitalMetric {}
  name: string;
  value: number;
  id: string}
<<<<<<< HEAD
export const trackWebVitals = (metric: WebVitalMetric) =>: any {// Check condition;
if ( {) {$2;
}
    window.gtag (event', metric.name, {';
      value: Math.round (metric.value)event_category: Web Vitals, ';
=======
export const trackWebVitals = (metric: WebVitalMetric) =>: any {}
  // Check condition'
if ( {') {};
  $2;
}'
    window.gtag ('event', metric.name, {';
      value: Math.round (metric.value);'
      event_category: 'Web Vitals', ';
>>>>>>> origin/chore/fix-lint-and-merge
      event_label: metric.id;
      non_interaction: true;,
})}
}
<<<<<<< HEAD
=======

;
>>>>>>> origin/chore/fix-lint-and-merge
// Declare global types;

    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];

  }
}

}

    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
}
};
// Track events;
export const event = ({;
  action;
  category;
  label;
  value;
}: {;
  actio: n: string;
  categor: y: string;
  label?: string;
  value?: number;
}) => {;
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag('event', action, {;
      event_categor: y: category;
      event_labe: l: label;
      valu: e: value;
    });
  }
};
// Initialize Google Analytics;
export const initGA = () => {;
  if (typeof window !== 'undefined' && !window.gtag) {;
    const script = document.createElement('script');
    script.async = true;
    script.src = `http: s://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {;
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID);
  }
};
// Declare global types;
declare global {;
  interface Window {;
    gta: g: (...arg: s: any[]) => void;
    dataLaye: r: any[];
  }
}

origin/cursor/integrate-build-improve-and-re-verify-2156
}
<<<<<<< HEAD
      non_interaction: true;
})}
}// Declare global types;
declare global {interface Window  {gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}}}
}ursor/fix-website-loading-errors-and-merge-6662;
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}}// Analytics and performance monitoring utilities;
export const trackEvent = (eventName: string,properties?: Record<string, string | number | boolean>;
) => {if (typeof window !== 'undefined && window.gtag) {;
    window.gtag('event', eventName, properties)};
    window.gtag(event', eventName, properties)}';
    window.gtag(event, eventName, properties)}';
}export const trackPageView = (url: string) => {if (typeof window !== 'undefined && window.gtag) {;
=======
>>>>>>> origin/chore/fix-lint-and-merge

// Analytics and performance monitoring utilities;
export const trackEvent = (;
  eventName: string,
  properties?: Record<string, string | number | boolean>;
<<<<<<< HEAD
) => {
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag(event', eventName, properties)}';
}
export const trackPageView = (url: string) => {
  if (typeof window !== undefined && window.gtag) {';
    window.gtag('config, GA_MEASUREMENT_ID', {';
      page_path: url,page_path: url,page_path: url})}
}export const measurePerformance = () => {if (typeof window !== undefined && 'performance' in window) {;
    const navigation = performance.getEntriesByType(navigation'';
    )[0] as PerformanceNavigationTiming;return {loadTime: navigation.loadEventEnd - navigation.loadEventStart;
      domContentLoaded:;
        navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,firstPaint:;
        performance.getEntriesByName(first-paint)[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance.getEntriesByName('first-contentful-paint)[0]?.startTime ||;
        0;
        0;
        0;
=======
) => {;'
  if (typeof window !== 'undefined' && window.gtag) {';'
    window.gtag('event', eventName, properties)}';,
};
;
export const trackPageView = (url: string) => {;'
  if (typeof window !== 'undefined' && window.gtag) {';'
    window.gtag('config', 'GA_MEASUREMENT_ID', {';
      page_path: url,;,
})}
};
;
export const measurePerformance = () => {;'
  if (typeof window !== 'undefined' && 'performance' in window) {';
    const navigation = performance.getEntriesByType(;'
      'navigation'';
    )[0] as PerformanceNavigationTiming;
;
    return {;
      loadTime: navigation.loadEventEnd - navigation.loadEventStart;
      domContentLoaded:;
        navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,;
      firstPaint:;'
        performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;'
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;,
>>>>>>> origin/chore/fix-lint-and-merge
}}
  return null};
;
// Web Vitals tracking;
interface WebVitalMetric {;
  name: string;
  value: number;
<<<<<<< HEAD
  id: string}export const trackWebVitals = (metric: WebVitalMetric) => {if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag(event', metric.name, {';
      value: Math.round(metric.value)event_category: Web Vitals,';
=======
  id: string}
;
export const trackWebVitals = (metric: WebVitalMetric) => {;'
  if (typeof window !== 'undefined' && window.gtag) {';'
    window.gtag('event', metric.name, {';
      value: Math.round(metric.value);'
      event_category: 'Web Vitals',';
>>>>>>> origin/chore/fix-lint-and-merge
      event_label: metric.id;
      non_interaction: true;,
})}
};
;
declare global {;
  interface Window {;
    gtag: (;
      command: string,;
      targetId: string,;
      config?: Record<string, unknown>;
    ) => void}
<<<<<<< HEAD
}

export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }

export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }




export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
=======

export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

;
>>>>>>> origin/chore/fix-lint-and-merge
// Declare global types;
pr-12243
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
<<<<<<< HEAD
}
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }

main


export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} }export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} }declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} }export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} }declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} }export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} }declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} }export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} }declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }// Declare global types;
declare global {interface Window  {gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
}ursor/automate-test-improve-and-merge-code-646c;
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} }export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} }declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
=======
>>>>>>> origin/chore/fix-lint-and-merge
}