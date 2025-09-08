<<<<<<< HEAD


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



=======

// Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, data);

  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {

      page_path: url});
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
origin/cursor/expand-services-advertise-and-build-project-c28b
    });
  }

  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {

      page_path: url,
      page_path: url

    });
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


      page_path: url,;

      page_path: url,

<<<<<<< HEAD

    });
  }
}



    });
  }
}




export const measurePerformance = () => {



      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
      domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,

      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };

};

=======



    });
  }
};




export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {


  }
  return null;
}

  }
  return null;
}

};

ursor/fix-website-loading-errors-and-merge-6662
export const measurePerformance = () => {
};
origin/cursor/expand-services-advertise-and-build-project-c28b



>>>>>>> origin/cursor/delete-old-data-records-6bba
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



  }
};

      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }

  return null;
};

// Web Vitals tracking

;

export const trackPageView = (url: string) =>: any {
  // Check condition
if ( {) {
  $2



  action: string;
  category: string;
  label?: string;
  value?: number;


=======


  }
  return null;
}
;

}
;
}
;

}
;

origin/cursor/expand-services-advertise-and-build-project-c28b


  }
  return null;
}

      non_interaction: true,;
origin/cursor/expand-services-advertise-and-build-project-c28b




      event_category: 'Web Vitals',
      event_label: metric.id,

      non_interaction: true,
    });
  }
// Track events
}
;
// Track events;


      non_interaction: true});
  }

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
// Track events
export const event = ({

  action,
  category,
  label,
  value

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export const trackEvent = ( eventName: string,properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(config,'GA_MEASUREMENT_ID',{ page_path: url})} } export const measurePerformance = () => { if (typeof window !== 'undefined' && performance in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName(first-contentful-paint)[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: Web Vitals,event_label: 'metric.id non_interaction: true' })} } declare global { interface Window { gtag: ( command: string,targetId: string,config?: Record<string,unknown> ) => void} } }
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== undefined && window.gtag) { window.gtag('event',eventName,properties)} } export const trackPageView = (url: string) => { if (typeof window !== undefined && window.gtag) { window.gtag('config',GA_MEASUREMENT_ID,{ page_path: 'url'})} } export const measurePerformance = () => { if (typeof window !== undefined && 'performance' in window) { const navigation = performance.getEntriesByType( navigation )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName(first-paint)[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null} interface WebVitalMetric { name: string; value: number; id: string; } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag(event,metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: metric.id non_interaction: true })} } declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }




// Declare global types


=======
      firstPaint:;
        performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;,
}}
  return null};

;
// Web Vitals tracking;
interface WebVitalMetric {name: string;
  value: number;
  id: string}

;
export const trackWebVitals = (metric: WebVitalMetric) => {;
  if (typeof window !== 'undefined' && window && window.gtag) {';
    window && window.gtag('event', metric && metric.name, {';
      value: Math && Math.round(metric && metric.value);
      event_category: 'Web Vitals',';
      event_label: metric && metric.id;
      non_interaction: true;,

})}
};

// Declare global types
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Declare global types
        navigation.domContentLoadedEventStart,
      first_paint:;
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;
<<<<<<< HEAD
        0;
        0;

=======
        navigation.domContentLoadedEventStart,
      first_paint:;'
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;'
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;,
>>>>>>> origin/cursor/delete-old-data-records-6bba
}}
  return null}
;
// Web Vitals tracking;
interface WebVitalMetric {}
  name: string;
  value: number;
  id: string}
<<<<<<< HEAD

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


;

// Declare global types;

declare global {
  interface Window {




=======
export const trackWebVitals = (metric: WebVitalMetric) =>: any {// Check condition;
if ( {') {$2;
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];

  }
<<<<<<< HEAD
}

}



// Analytics and performance monitoring utilities;
export const trackEvent = (;
  eventName: string,
  properties?: Record<string, string | number | boolean>;

=======
origin/cursor/integrate-build-improve-and-re-verify-2156
}
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}}
  return null};
;
// Web Vitals tracking;
interface WebVitalMetric {;
  name: string;
  value: number;
<<<<<<< HEAD

  id: string}
;
export const trackWebVitals = (metric: WebVitalMetric) => {;'
  if (typeof window !== 'undefined' && window.gtag) {';'
    window.gtag('event', metric.name, {';
      value: Math.round(metric.value);'
      event_category: 'Web Vitals',';

=======
  id: string}export const trackWebVitals = (metric: WebVitalMetric) => {if (typeof window !== 'undefined' && window.gtag) {';
    window.gtag('event', metric.name, {';
      value: Math.round(metric.value)event_category: 'Web Vitals',';
      event_label: metric.id;
      non_interaction: true;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

export const trackEvent = ( eventName: 'string',properties?: Record<string,string | number | boolean> ) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',eventName,properties)} }; export const trackPageView = (url: string) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('config','GA_MEASUREMENT_ID',{ page_path: 'url',})} }; export const measurePerformance = () => { if (typeof window !== 'undefined' && 'performance' in window) { const navigation = performance.getEntriesByType( 'navigation' )[0] as PerformanceNavigationTiming; return { loadTime: 'navigation.loadEventEnd - navigation.loadEventStart domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart',firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0 }} return null}; interface WebVitalMetric { name: 'string; value: number; id: string;' } } export const trackWebVitals = (metric: WebVitalMetric) => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',metric.name,{ value: Math.round(metric.value) event_category: 'Web Vitals',event_label: 'metric.id non_interaction: true' })} }; declare global { interface Window { gtag: ( command: string,targetId: 'string',config?: Record<string,unknown> ) => void} } }

<<<<<<< HEAD
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



=======




  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
