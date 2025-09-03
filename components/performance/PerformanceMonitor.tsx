<<<<<<< HEAD
import React, { useEffect } from 'react';
import { User } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}



interface PerformanceMetrics {
  fcp?: number;
   lcp?: number;
   fid?: number;
   cls?: number;
   ttfb?: number;
   fmp?: number}
=======
import React, { useEffect }  from 'react';interface PerformanceMetrics {
  fcp?: number
   lcp?: number
   fid?: number
   cls?: number
   ttfb?: number
   fmp?: number
}

<<<<<<< HEAD
interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fmp?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {};
=======
>>>>>>> main
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in browser environment;
    if (typeof window === 'undefined') return;
    const metrics: PerformanceMetrics = {}
<<<<<<< HEAD
    // First Contentful Paint (FCP);
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          console.log('FCP: ', entry.startTime)}
=======
>>>>>>> main

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
<<<<<<< HEAD
          metrics.fcp = entry.startTime;
          console.log('FCP: ', entry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
      console.log('LCP: ', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
=======
          metrics.fcp = entry.startTime
          console.log('FCP: ', entry.startTime)
        }
>>>>>>> main
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })
    // Largest Contentful Paint (LCP);
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
      console.log('LCP: ', lastEntry.startTime)})
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
<<<<<<< HEAD
    // First Input Delay (FID);
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fid = (entry as unknown).processingStart - entry.startTime;
        console.log('FID: ', metrics.fid)}
=======
>>>>>>> main

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
<<<<<<< HEAD
        metrics.fid = (entry as any).processingStart - entry.startTime;
        console.log('FID: ', metrics.fid);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.cls = clsValue;
      console.log('CLS: ', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB: ', metrics.ttfb);
=======
        metrics.fid = (entry as any).processingStart - entry.startTime
        console.log('FID: ', metrics.fid)
      }
>>>>>>> main
    })
    fidObserver.observe({ entryTypes: ['first-input'] })
    // Cumulative Layout Shift (CLS);
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as unknown).hadRecentInput) {
          clsValue += (entry as unknown).value}
      }
      metrics.cls = clsValue;
      console.log('CLS: ', clsValue)})
    clsObserver.observe({ entryTypes: ['layout-shift'] })
    // Time to First Byte (TTFB);
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
<<<<<<< HEAD
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB: ', metrics.ttfb)}
    // First Meaningful Paint (FMP) - approximation;
    const fmpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-meaningful-paint') {
          metrics.fmp = entry.startTime;
          console.log('FMP: ', entry.startTime)}
      }
    })
    fmpObserver.observe({ entryTypes: ['paint'] })
    // Send metrics to analytics after page load;
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && (window as unknown).gtag) {
        // Send to Google Analytics;
        (window as unknown).gtag('event', 'web_vitals', {
          event_category: 'Performance', event_label: 'Core Web Vitals',
          custom_map: {
            metric_1: 'fcp', metric_2: 'lcp',
            metric_3: 'fid', metric_4: 'cls',
            metric_5: 'ttfb'}, value: Math.round(metrics.fcp || 0), non_interaction: true})}
      // Send to custom analytics endpoint;
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: {
=======
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      console.log('TTFB: ', metrics.ttfb)
>>>>>>> main
    }

    // First Meaningful Paint (FMP) - approximation
    const fmpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-meaningful-paint') {
<<<<<<< HEAD
          metrics.fmp = entry.startTime;
          console.log('FMP: ', entry.startTime);
        }
      }
    });
    fmpObserver.observe({ entryTypes: ['paint'] });
=======
          metrics.fmp = entry.startTime
          console.log('FMP: ', entry.startTime)
        }
      }
    })
    fmpObserver.observe({ entryTypes: ['paint'] })
>>>>>>> main

    // Send metrics to analytics after page load
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Send to Google Analytics
<<<<<<< HEAD
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            metric_1: 'fcp',
            metric_2: 'lcp',
            metric_3: 'fid',
            metric_4: 'cls',
            metric_5: 'ttfb'
          },
          value: Math.round(metrics.fcp || 0),
          non_interaction: true
        });
=======
        (window as any).gtag('event,web_vitals', {
          event_category: 'Performance', event_label: 'Core Web Vitals', custom_map: {
            metric_1: 'fcp', metric_2: 'lcp', metric_3: 'fid', metric_4: 'cls', metric_5: 'ttfb'
          }, value: Math.round(metrics.fcp || 0), non_interaction: true
        })
>>>>>>> main
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/performance', {
<<<<<<< HEAD
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            url: window.location.href,
            timestamp: Date.now(),
            metrics
          })
        }).catch(console.error);
      }
    };

    // Send metrics when page is about to unload
    window.addEventListener('beforeunload', sendMetrics);

    // Also send after a delay to capture late metrics
    setTimeout(sendMetrics, 5000);

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();
      window.removeEventListener('beforeunload', sendMetrics);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
=======
          method: 'POST', headers: {
>>>>>>> main
            'Content-Type': 'application/json'}, body: JSON.stringify({
            url: window.location.href, timestamp: Date.now(), metrics})}).catch(console.error)}
    }
    // Send metrics when page is about to unload;
    window.addEventListener('beforeunload', sendMetrics);
    // Also send after a delay to capture late metrics;
    setTimeout(sendMetrics, 5000);
    // Cleanup;
    return () => {
<<<<<<< HEAD
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();
      window.removeEventListener('beforeunload', sendMetrics)}
  }, []);
  return null // This component doesn&apos;t render unknownthing'}
;
export default PerformanceMonitor
=======
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      fmpObserver.disconnect()
      window.removeEventListener('beforeunload', sendMetrics)
    }
  }, [])

  return null // This component doesn&apos;t render anything'
}

export default PerformanceMonitor
>>>>>>> main
>>>>>>> main
