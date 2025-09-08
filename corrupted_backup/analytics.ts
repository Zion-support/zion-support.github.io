<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export type UserType = 'freelancer' | 'b2b' | 'hiring manager' | 'guest';
export async function trackEvent (payload: TrackEventPayload) {
  try {

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  "eventName": string,"
  properties?: Record<string, any>;
</string>
  properties?: Record<string, string | number | boolean>;
      config?: Record<string, unknown>;
    ) => void}
}

<<<<<<< HEAD
=======
export const trackPageView = ("url": string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; "page_path": 'url',;,;})} }'

export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {;"

}

const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; "loadTime": 'navigation.loadEventEnd - navigation.loadEventStart',; "domContentLoaded": 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; "firstPaint": "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,; "firstContentfulPaint": "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null}"

interface WebVitalMetric {; "name": 'string; valu',; "e": 'number; i'} "d": 'string,'
} ;

export const trackWebVitals = ("metric": WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; "value": Math.round(metric.value),; "event_category": "Web Vitals",; "event_label": 'metric.id',; "non_interaction": 'true,'
});,;} } declare global {;

}

interface Window {; "gtag": (void) => $3; "gtag": (; "command": string,; "targetId": 'string',; config?: Record<string,unknown> } ) => void} } ""
export const trackEvent = (; "eventName": string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties)} }"

export const trackPageView = ("url": string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; "page_path": url,})} }"

export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {;"

}

const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; "loadTime": navigation.loadEventEnd - navigation.loadEventStart,"domContentLoaded": navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,"firstPaint": "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,"firstContentfulPaint": "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null}"

interface WebVitalMetric {; "name": string; valu,"e": number; i,"d": strin
} ;

export const trackWebVitals = ("metric": WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; "value": Math.round(metric.value),"event_category": "Web Vitals","event_label": metric.id,"non_interaction": tru,"
})} } declare global {;

}

interface Window {; "gtag": (void) => $3; "gtag": (; "command": string,"targetId": string,config?: Record<string,unknown>; ) => void} } ""
export const trackEvent = (; "eventName": string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties)} }"

export const trackPageView = ("url": string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; "page_path": url,})} }"

export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {;"

}


interface WebVitalMetric {; "name": string; valu,"e": number; i,"d": strin
} ;

export const trackWebVitals = ("metric": WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; "value": Math.round(metric.value),"event_category": "Web Vitals","event_label": metric.id,"non_interaction": tru,"
})} } declare global {;

}

interface Window {; "gtag": (void) => $3; "gtag": (; "command": string,"targetId": string,config?: Record<string,unknown>; ) => void} } ""
export const trackEvent = (; "eventName": string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties)} }"

export const trackPageView = ("url": string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; "page_path": url,})} }"

export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {;"

}


interface WebVitalMetric {; "name": string; valu,"e": number; i,"d": strin
} ;

export const trackWebVitals = ("metric": WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; "value": Math.round(metric.value),"event_category": "Web Vitals","event_label": metric.id,"non_interaction": tru,"
})} } declare global {;

}

interface Window {; "gtag": (void) => $3; "gtag": (; "command": string,"targetId": string,config?: Record<string,unknown>; ) => void} } ""
export const trackEvent = (; "eventName": string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties)} }"

export const trackPageView = ("url": string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; "page_path": url,})} }"

export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {;"

}


interface WebVitalMetric {; "name": string; valu,"e": number; i,"d": strin
} ;

export const trackWebVitals = ("metric": WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; "value": Math.round(metric.value),"event_category": "Web Vitals","event_label": metric.id,"non_interaction": tru,"
})} } declare global {;

}

interface Window {; "gtag": (void) => $3; "gtag": (; "command": string,"targetId": string,config?: Record<string,unknown>; ) => void} } ""
export type UserType = 'freelancer' | 'b2b' | 'hiring manager' | 'guest';'

export async function trackEvent() {
  }
=======
"
export const trackEvent = (; eventName: 'string'; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url';;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart'; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart'; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu'; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value); event_category: "Web Vitals"; event_label: 'metric.id'; non_interaction: 'true'});;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string; targetId: 'string'; config?: Record<string,unknown> } ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: 'string',; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);,;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url',;,;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu',; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),; event_category: "Web Vitals",; event_label: 'metric.id',; non_interaction: 'true'});,;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,; targetId: 'string',; config?: Record<string,unknown> } ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } "
export type UserType = 'freelancer' | 'b2b' | 'hiring manager' | 'guest';
export async function trackEvent (payload: TrackEventPayload) {
>>>>>>> origin/chore/fix-lint-and-merge
  try {
    await fetch('/api/analytics/events/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true as any,
    });
  } catch (e) {
    // swallow
  }
}
  await fetch ('/api/analytics/events/track', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify (payload);
}
</string>)"
export const trackEvent = (; eventName: 'string',; properties?: Record<string,any> properties?: Record<string,string | number | boolean> ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties);,;,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: 'url',;,;,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: 'navigation.loadEventEnd - navigation.loadEventStart',; domContentLoaded: 'navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart',; firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,; firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: 'string; valu',; e: 'number; i',} d: 'string'} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),; event_category: "Web Vitals",; event_label: 'metric.id',; non_interaction: 'true'});,;,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,; targetId: 'string',; config?: Record<string,unknown> } ) => void} } ""
</string>"
export const trackEvent = (; eventName: string,properties?: Record<string,any>; properties?: Record<string,string | number | boolean>; ) => {; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",eventName,properties),,} } export const trackPageView = (url: string) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("config","GA_MEASUREMENT_ID",{; page_path: url,,,})} } export const measurePerformance = () => {"; if (typeof window !== "undefined" && "performance" in window) {; const navigation = performance.getEntriesByType("; "navigation"; )[0] as PerformanceNavigationTiming; return {; loadTime: navigation.loadEventEnd - navigation.loadEventStart,domContentLoaded: navigation.domContentLoadedEventEnd -; navigation.domContentLoadedEventStart,firstPaint: "; performance.getEntriesByName("first-paint")[0]?.startTime || 0,firstContentfulPaint: "; performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||; 0} } return null} interface WebVitalMetric {; name: string; valu,e: number; i,d: string} ; export const trackWebVitals = (metric: WebVitalMetric) => {"; if (typeof window !== "undefined" && window.gtag) {"; window.gtag("event",metric.name,{; value: Math.round(metric.value),event_category: "Web Vitals",event_label: metric.id,non_interaction: true}),,} } declare global {; interface Window {; gtag: (void) => $3; gtag: (; command: string,targetId: string,config?: Record<string,unknown>; ) => void} } ""
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
