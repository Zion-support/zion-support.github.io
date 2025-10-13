<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
<<<<<<< HEAD
    lcp: number | null;
  fid: number | null
  cls: number | null
  fcp: number | null,
  ttfb: number | null
  }
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
=======
  lcp: number | null
}
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null};
;
const PerformanceMonitor: React.FC = () => {
}
return (
;
const [metrics, setMetrics] = useState<PerformanceMetrics>
);
}({
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null});
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
<<<<<<< HEAD
    // Web Vitals measurement
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
=======
    // Web Vitals measurement;
const measureWebVitals = () => {
}
      // LCP - Largest Contentful Paint;
const lcpObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
<<<<<<< HEAD
      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
=======
      // FID - First Input Delay;
const fidObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
<<<<<<< HEAD
      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value,
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
=======
      // CLS - Cumulative Layout Shift;
let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }))};
        })});
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint;
const fcpObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))};
        })});
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte;
const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
<<<<<<< HEAD
        }));
      }
=======
        }))};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Cleanup observers
      return () => {
    lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
<<<<<<< HEAD
        fcpObserver.disconnect()
  }
    }
    const cleanup = measureWebVitals();
    // Send metrics to analytics (if available)
    const sendToAnalytics = (metrics: PerformanceMetrics) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag,
=======
        fcpObserver.disconnect()}};
;
const cleanup = measureWebVitals();
    // Send metrics to analytics (if available);
const sendToAnalytics = (metrics: PerformanceMetrics) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {;
const gtag = (window as any).gtag;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        if (metrics.lcp !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
<<<<<<< HEAD
            value: Math.round(metrics.lcp)});
        }
=======
            value: Math.round(metrics.lcp)})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        if (metrics.fid !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
<<<<<<< HEAD
            value: Math.round(metrics.fid)});
        }
=======
            value: Math.round(metrics.fid)})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        if (metrics.cls !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
<<<<<<< HEAD
            value: Math.round(metrics.cls * 1000) / 1000});
        }
      }
    }
    // Send metrics after a delay to allow all measurements to complete
    const timeoutId = setTimeout(() => {
    sendToAnalytics(metrics)
  }, 5000);
    return () => {
    cleanup?.();
      clearTimeout(timeoutId)
  }
  }, [metrics]);
  // Don't render anything in production
  if (process.env['NODE_ENV'] === 'production') {
    return null
  }
=======
            value: Math.round(metrics.cls * 1000) / 1000})};
      };
    };
    // Send metrics after a delay to allow all measurements to complete;
const timeoutId = setTimeout(() => {
      sendToAnalytics(metrics)}, 5000);
    return () => {
      cleanup?.();
      clearTimeout(timeoutId)}}, [metrics]);
  // Don't render anything in production
  if (process.env['NODE_ENV'] === 'production') {
    return null}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}</div>
      <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
      <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}</div>
      <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}</div>
    </div>
<<<<<<< HEAD
  );
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default PerformanceMonitor;
  </PerformanceMetrics>
=======
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackVital = (metric: any) => {
      // Send to analytics service (replace with your analytics)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log(metric);
      }
    };

    onCLS(trackVital);
    onINP(trackVital);
    onFCP(trackVital);
    onLCP(trackVital);
    onTTFB(trackVital);

    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          if (window.gtag) {
            window.gtag('event', 'page_load_time', {
              event_category: 'Performance',
              value: Math.round(loadTime),
            });
            
            window.gtag('event', 'dom_content_loaded', {
              event_category: 'Performance',
              value: Math.round(domContentLoaded),
            });
          }
        }
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const resources = window.performance.getEntriesByType('resource');
        const slowResources = resources.filter((resource: any) => resource.duration > 1000);
        
        if (slowResources.length > 0 && window.gtag) {
          window.gtag('event', 'slow_resources', {
            event_category: 'Performance',
            value: slowResources.length,
          });
        }
      }
    };

    // Track resource performance after a delay
    setTimeout(trackResourcePerformance, 5000);

    return () => {
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
