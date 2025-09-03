<<<<<<< HEAD

;,"});,"})
>>>>>>> pr-10728;,"});,"})
=======
<<<<<<< HEAD
=======
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

<<<<<<< HEAD
;
=======
<<<<<<< HEAD
const PerformanceMonitor: React.FC = () => {return null; // This is a placeholder component
=======
<<<<<<< HEAD
const PerformanceMonitor: React.FC = () => {
  return null; // This is a placeholder component, };

export default PerformanceMonitor;""
=======
interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetrics) => {
      // Send to analytics service
<<<<<<< HEAD
      if (typeof window !== 'undefined' && window.gtag) {
<<<<<<< HEAD
        window.gtag('event', metric.name, { event_category: 'Web Vitals',
=======
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals', event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,
=======
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
>>>>>>> main
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
>>>>>>> main
        });
      }
    };

<<<<<<< HEAD
    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });

    // Performance observer for custom metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
<<<<<<< HEAD
            console.log('Navigation timing:', { domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            });
=======
            // Navigation timing logged (removed console.log for production)
>>>>>>> main
          }
        }
      });

      observer.observe({ entryTypes: ['navigation']   });
    }
=======
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
>>>>>>> main
  }, []);

  return null;
>>>>>>> main
};

<<<<<<< HEAD
// Declare gtag for TypeScript
declare global {
  interface Window { gtag: (...args: any[]) => void
    }
}
=======
export default PerformanceMonitor;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
