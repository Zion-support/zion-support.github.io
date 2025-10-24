<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
  );
=======
'use client'
export const usePerformanceMonitoring = () => {/* TODO: Fix JSX expression */}
import { useEffect, useCallback } from 'react';

export const _usePerformanceMonitoring = () => {// TODO: Add content;}

}
  const reportWebVitals = useCallback((metri)
  c: any) => {/* TODO: Fix JSX expression */}
  O: Add content;}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
=======
'use client';
export const usePerformanceMonitoring = () => {
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
<<<<<<< HEAD
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(() => {
        // Analytics reporting failed
      });
    }
=======
      fetch(url, {body, method: 'POST', keepalive: true}).catch(console.error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: entry.name,
            value: entry.startTime,
            timestamp: Date.now()
          });
        }
      });
<<<<<<< HEAD
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
=======
      observer.observe({entryTypes: ['navigation', 'paint', 'largest-contentful-paint']});
 observer.disconnect();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  }, [reportWebVitals]);
  return {reportWebVitals};
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
