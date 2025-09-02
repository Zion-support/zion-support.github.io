import { useEffect } from 'react';"
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function usePerformanceMonitoring() {
  useEffect(() => {
    const sendToAnalytics = (metric) => {
      // Send to your analytics service"
      console.log('Performance metric:', metric);
      
      // Example: Send to Google Analytics"
      if (typeof gtag !== 'undefined') {"
        gtag('event', metric.name, {"
          event_category: 'Web Vitals',
          event_label: metric.id,"
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })}
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics)}, [])}

export function reportWebVitals(metric) {"
  console.log('Web Vitals:', metric)}"