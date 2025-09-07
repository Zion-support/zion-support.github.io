<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, data);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
<<<<<<< HEAD
      page_path: url,
    });
  }
};
=======
=======
=======
if (typeof window !== 'undefined' && window && window.gtag) {
      page_path: url
      page_path: url,;
    });
  }
=======
=======

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', 'GA_MEASUREMENT_ID', {
// Analytics utilities;
export const track_event = (event: string, data?: any) =>: any {
  // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('config', 'GA_MEASUREMENT_ID', {

<<<<<<< HEAD
      page_path: url,
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

origin/cursor/automate-test-improve-and-merge-code-382a

      page_path: url,;

ursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
      page_path: url,;

    });
=======
<<<<<<< HEAD
      page_path: url});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
<<<<<<< HEAD
      page_path: url,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {

>>>>>>> origin/chore/fix-lint-and-merge
      page_path: url,
<<<<<<< HEAD
      page_path: url

    });
  }
=======

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
=======
      page_path: url,;

=======
      page_path: url,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    });
  }
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
      page_path: url
    });
  }
}
      page_path: url,;
>>>>>>> merged-prs-20250907-203621
      page_path: url,
    });
  }
};

<<<<<<< HEAD
=======
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const measurePerformance = () => {
<<<<<<< HEAD
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
      domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,
<<<<<<< HEAD
      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
=======
<<<<<<< HEAD
      firstPaint: performance && performance.getEntriesByName(first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0
    }
=======
      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  }
  return null;
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  }
  return null;
}
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

ursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {
};
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
};

      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
}
=======
  return null;
};

// Web Vitals tracking

;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD
}
    window.gtag ('config', GA_TRACKING_ID, {
      page_path: url
    });
  }
;
export const measure_performance = () =>: any {
  // Check condition
if ( {) {
  $2
}
    const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;
    return {load_time: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,first_paint: performance.getEntriesByName ('first - paint')[0]?.start_time || 0,firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint')[0]?.start_time || 0;
    }}
  return null;firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint')[0]?.start_time || 0;
    }
  return null;
<<<<<<< HEAD
}}}firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint')[0]?.start_time || 0;
=======
<<<<<<< HEAD
}}}firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint)[0]?.start_time || 0;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  return null;interface WebVitalMetric  {name: string;
  value: number;
  id: string;
}value: Math.round(metric.value)event_category: 'Web Vitals';
      event_label: metric.id;
      non_interaction: true;
      value: Math.round(metric.value),event_category: 'Web Vitals',event_label: metric.id,non_interaction: true,event_category: 'Web Vitals',event_label: metric.id,non_interaction: true;
    })}non_interaction: true;
    })}
// Track events;
}// Track events;}// Track events;event_category: 'Web Vitals',event_label: metric.id,non_interaction: true;
    })}export const event = ({action;
  category;
  label;
  value;
}: {value: Math.round(metric.value),event_category: 'Web Vitals',event_label: metric.id,non_interaction: true})declare global {interface Window  {gtag: (command: string,targetId: string,config?: Record<string, unknown>;
    ) => void;}
}
// Track events;
export const event = ({action,category,label,value;
}: {value;
}: {ursor/fix-website-loading-errors-and-merge-6662;
  action: string;
  category: string;
  label?: string;
  value?: number;if (typeof window !== 'undefined' && window && window.gtag) {window && window.gtag('event', action, {}) =>: any {if (typeof window !== 'undefined' && window && window.gtag) {window && window.gtag('event', action, {}) =>: any {// Check condition;
if ( {) {$2;
}
    window.gtag ('event', action, {event_category: category,event_label: label,value: value;
    })}value: value;
    })}}export const measure_performance = () =>: any {// Check condition;
if ( {') {$2;
}
    const navigation = performance.getEntriesByType ('navigation'')[0] as PerformanceNavigationTiming;return {load_time: navigation.loadEventEnd - navigation.loadEventStart;domContentLoaded:;
      domContentLoaded:;domContentLoaded:;navigation && navigation.domContentLoadedEventEnd -;
        navigation && navigation.domContentLoadedEventStart,firstPaint:;
        performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;
}}
  return null}// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}// Declare global types;
export const trackWebVitals = (metric: WebVitalMetric) => {if (typeof window !== 'undefined' && window && window.gtag) {';
    window && window.gtag('event', metric && metric.name, {';
      value: Math && Math.round(metric && metric.value)event_category: 'Web Vitals',';
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
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;
// Declare global types;
        navigation.domContentLoadedEventStart,first_paint:;
}
;
}
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
;
}
;

}
;

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD


  }
  return null;
}
<<<<<<< HEAD
;
=======
=======
pr-12243
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface WebVitalMetric {

  name: string;
  value: number;
  id: string;
}

      value: Math.round(metric.value)
      event_category: 'Web Vitals'
      event_label: metric.id
      non_interaction: true
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
<<<<<<< HEAD
      non_interaction: true,;
=======
<<<<<<< HEAD
      non_interaction: true,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/expand-services-advertise-and-build-project-c28b




<<<<<<< HEAD
      event_category: 'Web Vitals',
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      event_label: metric.id,

      non_interaction: true,
    });
  }
// Track events
}
;
// Track events;

<<<<<<< HEAD
      non_interaction: true,
    });
=======
<<<<<<< HEAD
      non_interaction: true});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
      non_interaction: true,;

    });

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  }
<<<<<<< HEAD
// Track events
export const event = ({

=======
}
// Track events;
export const event = ({}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  action,
  category,
  label,
<<<<<<< HEAD
  value
<<<<<<< HEAD
}: {;


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


=======
}: {
=======
  value,;
}: {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  action: string;
  category: string;
  label?: string;
  value?: number;

<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
// Track events
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    }),
  }
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
  return null;
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

<<<<<<< HEAD
export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
<<<<<<< HEAD
    window.gtag('event', metric.name, {
=======
    window.gtag(event, metric.name, {
=======

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Track events
export const event = ({
<<<<<<< HEAD
  action,
  category,
  label,
<<<<<<< HEAD
  value,
}: {
=======
  value}: {
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  action: string;
  category: string;
  label?: string;
  value?: number;
<<<<<<< HEAD
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

// Declare global types
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
<<<<<<< HEAD

// Declare global types
=======

// Declare global types
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined && window.gtag) { window.gtag('config',GA_MEASUREMENT_ID,{ page_path: 'url'})} } export const measurePerformance = () => { if (typeof window !== undefined && 'performance' in window) { const navigation = performance.getEntriesByType( navigation )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName(first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}
<<<<<<< HEAD
=======

ursor/integrate-build-improve-and-re-verify-8f7d
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b
// Declare global types

<<<<<<< HEAD
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
// Declare global types
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
<<<<<<< HEAD
<<<<<<< HEAD
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
// Declare global types
// Declare global types
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined && window.gtag) { window.gtag('config',GA_MEASUREMENT_ID,{ page_path: 'url'})} } export const measurePerformance = () => { if (typeof window !== undefined && 'performance' in window) { const navigation = performance.getEntriesByType( navigation )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName(first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

})}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



// Declare global types
<<<<<<< HEAD

<<<<<<< HEAD
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Declare global types
        navigation.domContentLoadedEventStart,
      first_paint:;
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
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
if ( {') {$2;
}
<<<<<<< HEAD
    window.gtag ('event', metric.name, {';
      value: Math.round (metric.value)event_category: 'Web Vitals', ';
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      event_label: metric.id;
      non_interaction: true;,
})}
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======

;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Declare global types;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];

  }
<<<<<<< HEAD
=======
}

}
<<<<<<< HEAD

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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
) => {if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('event', eventName, properties)}';
}export const trackPageView = (url: string) => {if (typeof window !== 'undefined' && window.gtag) {';


    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }


}
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b



    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
=======
) => {if (typeof window !== 'undefined && window.gtag) {;
    window.gtag('event', eventName, properties)};
    window.gtag(event', eventName, properties)}';
    window.gtag(event, eventName, properties)}';
}export const trackPageView = (url: string) => {if (typeof window !== 'undefined && window.gtag) {;
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  eventName: string,;
  properties?: Record<string, string | number | boolean>;
<<<<<<< HEAD
) => {;
  if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('event', eventName, properties)}';
};
;
export const trackPageView = (url: string) => {;
  if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('config', 'GA_MEASUREMENT_ID', {';
=======
<<<<<<< HEAD
) => {
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag(event', eventName, properties)}';
}
export const trackPageView = (url: string) => {
  if (typeof window !== undefined && window.gtag) {';
    window.gtag('config, GA_MEASUREMENT_ID', {';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      page_path: url,page_path: url,page_path: url})}
}export const measurePerformance = () => {if (typeof window !== 'undefined' && 'performance' in window) {';
    const navigation = performance.getEntriesByType('navigation'';
    )[0] as PerformanceNavigationTiming;return {loadTime: navigation.loadEventEnd - navigation.loadEventStart;
      domContentLoaded:;
        navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,firstPaint:;
        performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
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
  id: string}export const trackWebVitals = (metric: WebVitalMetric) => {if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('event', metric.name, {';
      value: Math.round(metric.value)event_category: 'Web Vitals',';
      event_label: metric.id;
      non_interaction: true;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }




<<<<<<< HEAD
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }



;
=======
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined' && window.gtag) { window.gtag('config,GA_MEASUREMENT_ID',{ page_path: 'url})} } export const measurePerformance = () => { if (typeof window !== undefined' && 'performance in window) { const navigation = performance.getEntriesByType( navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName(first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals,event_label: metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: 'string,config?: Record<string,unknown> ) => void} } }
=======

export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Declare global types;
pr-12243
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
<<<<<<< HEAD
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
}
<<<<<<< HEAD
}
export const trackEvent = ( eventName: string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined && window.gtag) { window.gtag(config','GA_MEASUREMENT_ID,{ page_path: url'})} } export const measurePerformance = () => { if (typeof window !== 'undefined && performance' in window) { const navigation = performance.getEntriesByType( 'navigation )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined' && window.gtag) { window.gtag('event,metric.name,{ value: Math.round(metric.value) event_category: Web Vitals',event_label: 'metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: string',config?: Record<string,unknown> ) => void} } }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

main


export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }// Declare global types;
declare global {interface Window  {gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}ursor/automate-test-improve-and-merge-code-646c;
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url'})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

>>>>>>> merged-prs-20250907-203621
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
<<<<<<< HEAD
  }
=======
  }
=======
>>>>>>> origin/chore/fix-lint-and-merge
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
