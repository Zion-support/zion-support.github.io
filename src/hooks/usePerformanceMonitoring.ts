import { useEffect } from &apos;react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from &apos;web-vitals';&apos;&apos;

export function usePerformanceMonitoring() {
  useEffect(() => {}}
    const sendToAnalytics = (metric) => {
      // Send to your analytics service
      console.log(&apos;Performance metric:&apos;, metric);
      
      // Example: Send to Google Analytics
      if (typeof gtag !== &apos;undefined&apos;) {
        gtag(&apos;event&apos;, metric.name, {
          event_category: &apos;Web Vitals&apos;,
          event_label: metric.id,
          value: Math.round(metric.name === &apos;CLS&apos; ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })}
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics)}, [])}&apos;

export function reportWebVitals(metric) {
  console.log(&apos;Web Vitals:&apos;, metric)}&apos;'