
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
