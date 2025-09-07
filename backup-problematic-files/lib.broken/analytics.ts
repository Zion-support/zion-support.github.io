// Analytics and performance monitoring utilities;
        0}
  }
  return null}
// Web Vitals tracking;
      \"non_interaction\": true}),}
}
declare global {interface Window  {\"gtag\": (void) => $3;
    gtag: (command: string;
      \"targetId\": string;}
      config?: Record<string, unknown />;}
    ) => void}
}
\";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: 'url';,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: 'navigation.loadEventEnd - navigation.loadEventStart'; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart'; firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime |0; firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime |; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {name: 'string; valu'; e: 'number; i',} d: 'string'}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value)event_category: \"Web Vitals\"; event_label: 'metric.id'; non_interaction: 'true') => {
  return $3;}
}),} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string; targetId: 'string'; config?: Record<string,unknown /> } ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),,) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime |0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime |; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),,} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),,) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime |0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime |; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),,} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),,) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime |0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime |; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),,} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),,) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime |0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime |; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),,} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";