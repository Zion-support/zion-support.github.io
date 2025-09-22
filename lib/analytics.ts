<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Analytics and performance monitoring utilities

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

      page_path: url,

      page_path: url,;
=======

=======
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  eventName: string,;
  properties?: Record<string, string | number | boolean>;
) => {;
  if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('event', eventName, properties)}';,
};
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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
  }
}
export const trackPageView = (url: string) => {
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, data);
  }
};



// Analytics and performance monitoring utilities

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

      page_path: url,

      page_path: url,;

      page_path: url,;


      page_path: url,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-382a

      page_path: url,;

ursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======

      page_path: url,;

      page_path: url,;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD



      page_path: url,;


    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {'
    window && window.gtag('config', GA_TRACKING_ID, {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      page_path: url,

    });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
      page_path: url,
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    });
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
  }
  return null;
}
};
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
pr-12243
=======

=======
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
};
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
  }
}

;
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
}
    window.gtag ('config', GA_TRACKING_ID, {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243
  }
};

<<<<<<< HEAD
// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Measure performance metrics
};

export const trackPageView = (url: string) => {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });

pr-12325
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
<<<<<<< HEAD
=======
      first_paint: performance.getEntriesByName ('first - paint')[0]?.start_time || 0,
      firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint')[0]?.start_time || 0,
    }
  }
  return null;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
  return null;
};

// Web Vitals tracking
=======
=======
  }
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
;
export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
}
;

}
;

origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243
<<<<<<< HEAD
interface WebVitalMetric {
=======
export const measurePerformance = () => {};
// Track events;
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {}
  }
};
;
export const trackPageView = (url: string) =>: any {};
  // Check condition;
if ( {) {}
  $2;
}'
    window.gtag ('config', GA_TRACKING_ID, {}
      page_path: url,
    });
  }
}
;
export const measure_performance = () =>: any {};
  // Check condition;
if ( {) {}
  $2;
}'
    const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;
    return {}
      load_time: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,'
      first_paint: performance.getEntriesByName ('first - paint')[0]?.start_time || 0,'
      firstContentfulPaint: performance.getEntriesByName ('first - contentful - paint')[0]?.start_time || 0,
    }
<<<<<<< HEAD

  }
  return null;

<<<<<<< HEAD
interface WebVitalMetric {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
  }
  return null;
}
;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  return null;

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface WebVitalMetric {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  name: string;
  value: number;
  id: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
=======

export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {

export const trackWebVitals = (metric: WebVitalMetric) => {
pr-12325
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Declare global types
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      value: Math.round(metric.value)
      event_category: 'Web Vitals'
      event_label: metric.id
      non_interaction: true
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,;
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
<<<<<<< HEAD
<<<<<<< HEAD
      non_interaction: true,
    });
  }
};

// Declare global types
      value: Math.round(metric.value)
      event_category: 'Web Vitals'
      event_label: metric.id
      non_interaction: true
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,;
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
      event_category: 'Web Vitals',
      event_label: metric.id,
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      non_interaction: true,
    });
  }
// Track events
}
;
// Track events;

}
;
// Track events;

origin/cursor/expand-services-advertise-and-build-project-c28b
export const event = ({
  action
  category
  label
  value
}: {
origin/cursor/expand-services-advertise-and-build-project-c28b

      value: Math.round(metric.value),
=======
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      non_interaction: true,
    });
  }

<<<<<<< HEAD
export const event = ({};
  action;
  category;
  label;
  value;
}: {}
      value: Math.round(metric.value),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
      non_interaction: true,
    });
  }
// Track events
}
;
// Track events;
export const event = ({
  action
  category
  label
  value
}: {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

      value: Math.round(metric.value),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,;

    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}
// Track events;
export const event = ({}
  action,
  category,
  label,
  value,;
}: {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  action: string;
  category: string;
  label?: string;
  value?: number;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
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

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
      domContentLoaded:;
      domContentLoaded:;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      domContentLoaded:;
      domContentLoaded:;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
      domContentLoaded:;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Declare global types
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Declare global types
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



<<<<<<< HEAD

=======
    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
// Declare global types
    gtag: (...args: unknown[]) => void, dataLayer: unknown[],
  }
}
<<<<<<< HEAD
=======
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
ursor/integrate-build-improve-and-re-verify-8f7d
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b
// Declare global types
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Declare global types;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
// Declare global types
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        navigation.domContentLoadedEventStart,
      first_paint:;'
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;'
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;,
}}
  return null}
;
// Web Vitals tracking;
interface WebVitalMetric {}
  name: string;
  value: number;
  id: string}
export const trackWebVitals = (metric: WebVitalMetric) =>: any {}
  // Check condition'
if ( {') {};
  $2;
}'
    window.gtag ('event', metric.name, {';
      value: Math.round (metric.value);'
      event_category: 'Web Vitals', ';
      event_label: metric.id;
      non_interaction: true;,
})}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
// Declare global types;
<<<<<<< HEAD
declare global {
  interface Window {
<<<<<<< HEAD
=======
declare global {}
  interface Window {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];

  }
}


=======
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}



<<<<<<< HEAD
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/automation-improvements-final
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/automation-improvements-final
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  eventName: string,;
  properties?: Record<string, string | number | boolean>;
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
}}
  return null};
;
// Web Vitals tracking;
interface WebVitalMetric {;
  name: string;
  value: number;
  id: string}
;
export const trackWebVitals = (metric: WebVitalMetric) => {;'
  if (typeof window !== 'undefined' && window.gtag) {';'
    window.gtag('event', metric.name, {';
      value: Math.round(metric.value);'
      event_category: 'Web Vitals',';
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
}'
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
<<<<<<< HEAD
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
=======
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
// Declare global types;
pr-12243
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
}
<<<<<<< HEAD
}
main
pr-12243
=======
'
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }


<<<<<<< HEAD



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





}
main
pr-12243
      non_interaction: true,
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
