<<<<<<< HEAD
'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics service
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Track FID (First Input Delay)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Web Vitals',
            });
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Track CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals',
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });

      // Track FCP (First Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FCP:', entry.startTime);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FCP',
              value: Math.round(entry.startTime),
              event_category: 'Web Vitals',
            });
          }
        });
      }).observe({ entryTypes: ['paint'] });
    };

    // Track page load performance
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };

          console.log('Page Load Metrics:', metrics);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_load', {
              dom_content_loaded: Math.round(metrics.domContentLoaded),
              load_complete: Math.round(metrics.loadComplete),
              total_load_time: Math.round(metrics.totalLoadTime),
              event_category: 'Performance',
            });
          }
        }
      });
    };

    trackWebVitals();
    trackPageLoad();

    // Track resource loading performance
    const trackResourcePerformance = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Log slow resources (>1s)
              console.warn('Slow resource:', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize,
              });
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
    };

    trackResourcePerformance();
  }, []);

  return null; // This component doesn't render anything
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
=======
import React, { useEffect, useState } from 'react;
interface PerformanceMetrics {fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
if (typeof window === 'undefined') return;
    // Only show in development or for admin users;
    const isDev = process.env.NODE_ENV === 'development;
    const isAdmin = localStorage.getItem('admin_mode') === 'true;
    '    if (!isDev && !isAdmin) return;
    const observer = new PerformanceObserver((list) => {;const entries = list.getEntries();

      entries.forEach((entry) => {;
        switch (entry.entryType) {;
case 'paint': if (entry.name === 'first-contentful-paint') {'              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));'            }
            break;
          case 'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry.startTime }));'            break;'          case 'first-input': setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));'            break;'          case 'layout-shift': if (!(entry as any).hadRecentInput) {'              setMetrics(prev => ({ '                ...prev, cls: (prev.cls || 0) + (entry as any).value ;
}));
}
            break;
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));'            break;'        }});
});
    // Observe different types of performance entries;
    try {;
observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
'    } catch (e) {'      // Fallback for browsers that don&apos;t support all entry types;
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
'    }';
    // Show metrics after 3 seconds;
    const timer = setTimeout(() => {;setIsVisible(true);
}, 3000);
    return () => {;
      observer.disconnect();
      clearTimeout(timer);
};
}, []);
  if (!isVisible) return null;
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {;
if (value <= thresholds.good) return 'text-green-600;
    if (value <= thresholds.poor) return 'text-yellow-600;
    return 'text-red-600;
};';
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {;
    if (value <= thresholds.good) return 'Good;
    if (value <= thresholds.poor) return 'Needs Improvement;
    return 'Poor;
};';
  return (;
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs>      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>"      "      <div className="space-y-2 text-xs>        {metrics.fcp && ("          <div className="flex justify-between>            <span className="text-gray-600">FCP: </span>"            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>;
        )}

        {metrics.lcp && (;
<div className="flex justify-between>            <span className="text-gray-600">LCP: </span>"            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})</span>;
          </div>;
        )}

        {metrics.fid && (;
<div className="flex justify-between>            <span className="text-gray-600">FID: </span>"            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>"              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})</span>;
          </div>;
        )}

        {metrics.cls && (;
<div className="flex justify-between>            <span className="text-gray-600">CLS: </span>"            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>"              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})</span>;
          </div>;
        )}

        {metrics.ttfb && (;
<div className="flex justify-between>            <span className="text-gray-600">TTFB: </span>"            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})</span>;
          </div>;
        )}
      </div>;
<div className="mt-3 pt-2 border-t border-gray-200>        <button"          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700        >"          Hide</button>;
      </div>;
    </div>;
  );
};
export default PerformanceMonitor;
>>>>>>> origin/automation-fixes
