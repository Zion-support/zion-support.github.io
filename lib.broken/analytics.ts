<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/main
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======






export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  "eventName": string,"
  properties?: Record<string, any>;
</string>
  properties?: Record<string, string | number | boolean>;
<<<<<<< HEAD
) => {;
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("event", eventName, properties),}
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const trackPageView = ("url": string) => {";
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("config", "GA_MEASUREMENT_ID", {;
      "page_path": url,,})}
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const measurePerformance = () => {";
  if (typeof window !== "undefined" && "performance" in window) {;
    const navigation = performance.getEntriesByType(";
      "navigation";
=======
      config?: Record<string, unknown>;
</string>)"
export const trackEvent = (; eventName: 'string',; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);,;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url',;,;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu',; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),; event_category: "Web Vitals",; event_label: 'metric.id',; non_interaction: 'true'});,;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,; targetId: 'string',; config?: Record<string,unknown> } ) => void} } ""
</string>"
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } ""
pr-12325
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  if (typeof window !== \"undefined\" && window.gtag) {\";) => {
  return $3;}
}
    window.gtag(\"event\", eventName, properties)}
}
export const trackPageView = (\";
  if (typeof window !== \"undefined\" && window.gtag) {\";
    window.gtag(\"config\", \"GA_MEASUREMENT_ID\", {;) => {
  return $3;}
}
      \"page_path\": url,})}
}
export const measurePerformance = (\";
  if (typeof window !== \"undefined\" && \"performance\" in window) {;
    const navigation = performance.getEntriesByType(\";
      \"navigation\";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    )[0] as PerformanceNavigationTiming;
    return {;
      \"loadTime\": navigation.loadEventEnd - navigation.loadEventStart,
      \"domContentLoaded\": navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,
      \"firstPaint\": \";
        performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,
      \"firstContentfulPaint\": \";
        performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||;) => {
  return $3;}
}
        0}
  }
  return null}
// Web Vitals tracking;
interface WebVitalMetric {;
  \"name\": string;
  valu,
    \"e\": number;}
  i,}
    \"d\": string}
;
<<<<<<< HEAD
export const trackWebVitals = ("metric": WebVitalMetric) => {";
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("event", metric.name, {;
      "value": Math.round(metric.value),
      "event_category": "Web Vitals",
      "event_label": metric.id,
      "non_interaction": true}),}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
export const trackWebVitals = (\";
  if (typeof window !== \"undefined\" && window.gtag) {\";
    window.gtag(\"event\", metric.name, {;
      \"value\": Math.round(metric.value),
      \"event_category\": \"Web Vitals\",
      \"event_label\": metric.id,) => {
  return $3;}
}
      \"non_interaction\": true})}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
declare global {;
  interface Window {;
    \"gtag\": (void) => $3;
    gtag: (;
      command: string,
      \"targetId\": string,}
      config?: Record<string, unknown />;}
    ) => void}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
"
<<<<<<< HEAD
export const trackEvent = (; eventName: 'string'; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url';;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart'; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart'; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu'; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value); event_category: "Web Vitals"; event_label: 'metric.id'; non_interaction: 'true'});;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string; targetId: 'string'; config?: Record<string,unknown> } ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
=======
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
=======
export const trackEvent = (; eventName: 'string',; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);,;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url',;,;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu',; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),; event_category: "Web Vitals",; event_label: 'metric.id',; non_interaction: 'true'});,;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,; targetId: 'string',; config?: Record<string,unknown> } ) => void} } "
<<<<<<< HEAD
=======
}
"
export const trackEvent = (; eventName: 'string',; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);,;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url',;,;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu',; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),; event_category: "Web Vitals",; event_label: 'metric.id',; non_interaction: 'true'});,;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,; targetId: 'string',; config?: Record<string,unknown> } ) => void} } "
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
=======
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> main
=======
>>>>>>> main
>>>>>>> main
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> main
=======
<<<<<<< HEAD
=======
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
"
export const trackEvent = (; eventName: 'string'; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url';;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart'; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart'; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu'; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value); event_category: "Web Vitals"; event_label: 'metric.id'; non_interaction: 'true'});;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string; targetId: 'string'; config?: Record<string,unknown> } ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "



export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "



export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "



export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "












export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "



export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
ursor/integrate-build-improve-and-re-verify-8f7d
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d


export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "








export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "



export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
<<<<<<< HEAD
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
ursor/integrate-build-improve-and-re-verify-8f7d
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> main
=======
>>>>>>> main
>>>>>>> main
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======



export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "




export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

\"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties);,;) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: 'url',;,;) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,; firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: 'string; valu',; e: 'number; i'} d: 'string'} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),; event_category: \"Web Vitals\",; event_label: 'metric.id',; non_interaction: 'true') => {
  return $3;}
});,;} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,; targetId: 'string',; config?: Record<string,unknown /> } ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"

;
;
// Analytics and performance monitoring utilities;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\";) => {
  return $3;}
}
    window.gtag(\"event\", eventName, properties)}
    window.gtag(\"event\", eventName, properties)}
}
export const trackPageView = (\";
  if (typeof window !== \"undefined\" && window.gtag) {\";) => {
  return $3;}
}
    window.gtag(\"config\", \"GA_MEASUREMENT_ID\", {\"page_path\": url})}
      \"page_path\": url})}
}
export const measurePerformance = (\";
  if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\";
      \"navigation\";
    )[0] as PerformanceNavigationTiming;
    return {\"loadTime\": navigation.loadEventEnd - navigation.loadEventStart,\"domContentLoaded\": navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,\"firstPaint\": \";
        performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,\"firstContentfulPaint\": \";
        performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||;) => {
  return $3;}
}
        0}
  }
  return null}
// Web Vitals tracking;
interface WebVitalMetric  {\"name\": string;}
  valu,\"e\": number;}
  i,\"d\": string}export const trackWebVitals = (\";
  if (typeof window !== \"undefined\" && window.gtag) {\";) => {
  return $3;}
}
    window.gtag(\"event\", metric.name, {\"value\": Math.round(metric.value),\"event_category\": \"Web Vitals\",\"event_label\": metric.id,\"non_interaction\": true})}
      \"non_interaction\": true})}
}
declare global {interface Window  {\"gtag\": (void) => $3;}
    gtag: (command: string,\"targetId\": string,config?: Record<string, unknown />;}
    ) => void}
}
\";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: 'url';) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',
  domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: 'string; valu',}
  e: 'number; i'} d: 'string'}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: 'metric.id',
  non_interaction: 'true') => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: 'string',config?: Record<string,unknown /> } ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
ursor/fix-syntax-push-and-merge-to-main-40de;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: 'url',) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',
  domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: 'string; valu',}
  e: 'number; i'} d: 'string'}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: 'metric.id',
  non_interaction: 'true') => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: 'string',config?: Record<string,unknown /> } ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties)) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{page_path: url,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric  {name: string; valu,e: number; i,d: string}export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
})} } declare global {interface Window  {gtag: (void) => $3; gtag: (command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \";
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"

export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"

export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"

export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"

export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
export const trackEvent = (; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",eventName,properties),) => {
  return $3;}
} } export const trackPageView = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"config\",\"GA_MEASUREMENT_ID\",{; page_path: url,,) => {
  return $3;}
})} } export const measurePerformance = (\"; if (typeof window !== \"undefined\" && \"performance\" in window) {; const navigation = performance.getEntriesByType(\"; \"navigation\"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: \"; performance.getEntriesByName(\"first-paint\")[0]?.startTime || 0,firstContentfulPaint: \"; performance.getEntriesByName(\"first-contentful-paint\")[0]?.startTime ||; 0) => {
  return $3;}
} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (\"; if (typeof window !== \"undefined\" && window.gtag) {\"; window.gtag(\"event\",metric.name,{; value: Math.round(metric.value),event_category: \"Web Vitals\",event_label: metric.id,non_interaction: true) => {
  return $3;}
}),} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown />; ) => void} } \"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
