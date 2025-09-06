<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React, { useEffect } from 'react';
import {Star} from 'lucide-react';

;
interface PerformanceData {
  domContentLoaded: number,
  load_complete: number,
  totalLoadTime: number,
  first_paint: number,
  firstContentfulPaint: number,
  resource_count: number,

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  memory: {
    used: number
    total: number
    limit: number
  } | null;
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import React, { useEffect } from 'react';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
import React, { useEffect } from 'react';

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface PerformanceMonitorProps {
  onPerformanceData?: (data: any) => void;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {

        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();

    }
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
=======
interface Performance {
  getEntriesByType (type: string): PerformanceEntry[];
  now (): number;
}
interface PerformanceEntry {

interface PerformanceData {;
  domContentLoaded: number,;
  loadComplete: number,;
  totalLoadTime: number,;
  firstPaint: number,;
  firstContentfulPaint: number,;
  resourceCount: number,;
  memory: {;
    used: number,;
    total: number,;
    limit: number,;
  } | null;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React, { useEffect, useState } from 'react'
interface PerformanceMetrics {
import React, { useEffect, useState } from 'react' from 'react'';interface PerformanceMetrics {'
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}

interface PerformanceMonitorProps {;
  onPerformanceData?: (data: PerformanceData) => void,;
}

// Extend the Window interface to include performance;
declare global {;
  interface Window {;

    performance: Performance,;
  }

  interface Performance {;
    getEntriesByType(type: string): PerformanceEntry[],;
    memory?: {;
      usedJSHeapSize: number, totalJSHeapSize: number,;
      jsHeapSizeLimit: number,;
    };
  }

  interface PerformanceEntry {;
    name: string, startTime: number,;
    duration: number,;
  }

  interface PerformanceNavigationTiming extends PerformanceEntry {;
    domContentLoadedEventStart: number, domContentLoadedEventEnd: number,;
    loadEventStart: number, loadEventEnd: number,;
    fetchStart: number,;
  }

// Define Performance types if not available;
interface PerformanceEntry {;
  name: string,;
  entryType: string,;
  startTime: number,;
  duration: number,;
}

interface Performance {;
  getEntriesByType(type: string): PerformanceEntry[],;
}

interface PerformanceNavigationTiming extends PerformanceEntry {;
  loadEventEnd: number,;
  loadEventStart: number,;
  domContentLoadedEventEnd: number,;
  domContentLoadedEventStart: number,;
  responseEnd: number,;
  responseStart: number,;
  requestStart: number,;
  navigationStart: number,;
}

// Define Performance types if not available;
interface Performance {;
  getEntriesByType(type: string): PerformanceEntry[];
  now(): number;
}

interface PerformanceEntry {;
  name: string;
  entry_type: string;
  start_time: number;
  duration: number;
}
  readonly connectEnd: number;
  readonly connectStart: number;
  readonly domComplete: number;
interface PerformanceNavigationTiming extends PerformanceEntry {
  readonly connect_end: number;
  readonly connect_start: number;
  readonly dom_complete: number;
  readonly domContentLoadedEventEnd: number;
  readonly domContentLoadedEventStart: number;
  readonly dom_interactive: number;
  readonly dom_loading: number;
  readonly domainLookupEnd: number;
  readonly domainLookupStart: number;
  readonly fetch_start: number;
  readonly loadEventEnd: number;
  readonly loadEventStart: number;
  readonly navigation_start: number;
  readonly redirect_count: number;
  readonly redirect_end: number;
  readonly redirect_start: number;
  readonly request_start: number;
  readonly response_end: number;
  readonly response_start: number;
  readonly secureConnectionStart: number;
  readonly transfer_size: number;
  readonly type: string;
  readonly unloadEventEnd: number;
  readonly unloadEventStart: number;
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
      const navigationEntries = window.performance.getEntriesByType('navigation');
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
        // Paint timing
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime |0
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime |0
        // Resource timing
        resourceCount: window.performance.getEntriesByType('resource').length
// Memory usage (if available)
ursor/fix-syntax-push-and-merge-to-main-7db5
        memory: (window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.usedJSHeapSize
          total: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.totalJSHeapSize
          limit: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit
      }
      if (onPerformanceData) {
        onPerformanceData(performanceData);
      }
      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
         
        console.log('Performance Metrics:', performanceData);
      }
    }
    // Measure performance after page load
    if (document.readyState === 'complete') {
origin/cursor/automate-test-improve-and-merge-code-2533
      measurePerformance();
    } else {;
      window && window.addEventListener('load', measurePerformance);
    }
  }, [onPerformanceData]);
  return null;
}
const PerformanceMonitor: React.FC < PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect (() => {
// Only run on client side;
    // Check condition
if (return) {
  $2
}
    const measure_performance = () =>: any {
      const navigation_entries = window.performance.getEntriesByType ('navigation');
      const navigation = navigation_entries[0] as PerformanceNavigationTiming;
      const paint_entries = window.performance.getEntriesByType ('paint');
      const performance_data = {
        // Navigation timing;
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        load_complete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetch_start,
        // Paint timing;
        first_paint: paint_entries.find (entry => entry.name === 'first - paint')?.start_time || 0,
        firstContentfulPaint: paint_entries.find (entry => entry.name === 'first - contentful - paint')?.start_time || 0,
        // Resource timing;
        resource_count: window.performance.getEntriesByType ('resource').length,
// Memory usage (if available);
        memory: (window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.usedJSHeapSize,
          total: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.totalJSHeapSize,
          limit: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit;
      },
      // Check condition
if ( {) {
  $2
}
        onPerformanceData (performance_data);
      }
      // Log performance data in development;
      // Check condition
if ( {) {
  $2
}
        // eslint - disable - next - line no - console;
        console.log ('Performance Metrics:', performance_data);
      }
    }
;
    // Measure performance after page load;
    // Check condition
if ( {) {
  $2
}
      measure_performance ();
    } else {
      window.addEventListener ('load', measure_performance);
    }
    return () => {
      window.removeEventListener ('load', measure_performance);
    }
  }, [onPerformanceData]);
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return null;
<<<<<<< HEAD
}
;
export default PerformanceMonitor;
import React, { useEffect, useState } from 'react;
interface PerformanceMetrics {fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}
}));
}
            break;
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry && entry.responseStart - entry && entry.requestStart }));'            break;'        }});
});
    // Observe different types of performance entries;
'    } catch (e) {'      // Fallback for browsers that don&apos;t support all entry types;
      observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
'    }';
    // Show metrics after 3 seconds;
    const timer = setTimeout(() => {setIsVisible(true);
}, 3000);
      clearTimeout(timer);
}
}, []);
  if (!isVisible) return null;
    return 'Poor;
};';
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs>      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>"      "      <div className="space-y-2 text-xs>        {metrics && metrics.fcp && ("          <div className="flex justify-between>            <span className="text-gray-600">FCP: </span>"            <span className={getScoreColor(metrics && metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math && Math.round(metrics && metrics.fcp)}ms ({getScoreText(metrics && metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>;
        )}
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
const PerformanceMonitor: React.FC = () => {
  const [metrics, set_metrics] = useState < PerformanceMetrics>({});
  const [is_visible, setIsVisible] = useState (false);
  useEffect (() => {
// Check condition
if (return) {
  $2
}
    // Only show in development or for admin users;
    const is_dev = process.env.NODE_ENV === 'development;
    const is_admin = local_storage.get_item ('admin_mode') === 'true;
    '    // Check condition
if (return) {
  $2
}
    const observer = new PerformanceObserver ((list) => {const entries = list.get_entries ();
;
      entries.for_each ((entry) => {
        switch (entry.entry_type) {
case 'paint': if ( {'              set_metrics (prev => ({ ...prev, fcp: entry.start_time }))) {
  $2
}'            }
            break;
          case 'largest - contentful - paint': set_metrics (prev => ({ ...prev, lcp: entry.start_time }));'            break;'          case 'first - input': set_metrics (prev => ({ ...prev, fid: entry.processing_start - entry.start_time }));'            break;'          case 'layout - shift': // Check condition
if (.hadRecentInput) {'              set_metrics (prev => ({ '                ...prev, cls: (prev.cls || 0) + (entry as any).value ) {
  $2
}
}));
}
            break;
          case 'navigation': set_metrics (prev => ({ ...prev, ttfb: entry.response_start - entry.request_start }));'            break;'        }});
});
    // Observe different types of performance entries;
    try {
observer.observe ({ entry_types: ['paint', 'largest - contentful - paint', 'first - input', 'layout - shift', 'navigation'] });
'    } catch (e) {'      // Fallback for browsers that don & apos;t support all entry types;
      observer.observe ({ entry_types: ['paint', 'largest - contentful - paint'] });
'    }';
    // Show metrics after 3 seconds;
    const timer = set_timeout (() => {setIsVisible (true);
}, 3000);
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof performance === 'undefined') {
      return;
    if (typeof window === 'undefined') return
    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === 'development'
    const isAdmin = localStorage.getItem('admin_mode') === 'true'
    if (!isDev && !isAdmin) return
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'paint': if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input': setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
            break
          case 'layout-shift': if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev, cls: (prev.cls || 0) + (entry as any).value
              }))
            }
            break
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }))
            break
        }
      })
    })
    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: [
        'paint', 'largest-contentful-paint',
        'first-input', 'layout-shift',
        'navigation'
      ] })
    } catch (e) {
      // Fallback for browsers that don&apos;t support all entry types''
      observer.observe({ entryTypes: [
        'paint', 'largest-contentful-paint'
      ] })
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    }

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Resource timing
        resourceCount: performance.getEntriesByType('resource').length,
        
        // Memory usage (if available)
        memory: (performance as any).memory ? {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize,
          limit: (performance as any).memory.jsHeapSizeLimit
        } : null
      };
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}



const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
      const metrics: PerformanceMetrics = {};

      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            metrics.lcp = entry.startTime;
            // Send to analytics in production
            if (process.env.NODE_ENV === 'production') {
              // gtag('event', 'web_vitals', {
              //   name: 'LCP',
              //   value: Math.round(entry.startTime),
              //   event_category: 'Web Vitals'
              // });
            }
          }
        }
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support LCP
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            metrics.fid = fid;
            if (process.env.NODE_ENV === 'production') {
              // gtag('event', 'web_vitals', {
              //   name: 'FID',
              //   value: Math.round(fid),
              //   event_category: 'Web Vitals'
              // });
            }
          }
origin/cursor/analyze-improve-and-deploy-application-347d
        }
      });
main

      observer.observe({ entryTypes: ['navigation'] });

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceData);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return () => {
<<<<<<< HEAD
      observer.disconnect ();
      clear_timeout (timer);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
if (typeof window ===, undefined
  ') return'    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV ===
  'development'
   const isAdmin = localStorage.getItem(
  'admin_mode') ===
  'true''    if (!isDev && !isAdmin) return'
    const observer = new PerformanceObserver((list) => {;const entries = list.getEntries()

      entries.forEach((entry) => {
        switch (entry.entryType) {
case 'paint'
  ': if (entry.name === 'first-contentful-paint
  ') {              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))'            }
            break
          case
  'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry.startTime }))'            break'          case
  'first-input': setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
  break'          case'
  'layout-shift': if (!(entry as any).hadRecentInput) {
  '              setMetrics(prev => ({                ...prev, cls: (prev.cls || 0) + (entry as any).value'
              }))
            }
            break
          case
  'navigation': setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }))
  break'        }})'
    })

    // Observe different types of performance entries
    try {
observer.observe({ entryTypes: [
  'paint,  , largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })'    } catch (e) {'
  '      // Fallback for browsers that don&apos;t support all entry types''      observer.observe({ entryTypes: ['
  'paint, 'largest-contentful-paint'] })'    }
  ''
    // Show metrics after 3 seconds
    const timer = setTimeout(() => {;setIsVisible(true)
    }, 3000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null
  const getScoreColor = (value: number, thresholds: { good: number poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }
  const getScoreText = (value: number, thresholds: { good: number poor: number }) => {
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.poor) return 'Needs Improvement'
    return 'Poor'
  }
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs">
      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>
      
      <div className="space-y-2 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span className="text-gray-600">FCP: </span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
            </span>
          </div>
        )}
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span className="text-gray-600">LCP: </span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span className="text-gray-600">FID: </span>
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span className="text-gray-600">CLS: </span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span className="text-gray-600">TTFB: </span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700"
        >
          Hide
        </button>
      </div>
    </div>
  const getScoreColor = (value: number, thresholds: { good: number poor: number }) => {
if (value <= thresholds.good) return 'text-green-600'
  
   if (value <= thresholds.poor) return
  'text-yellow-600'
   return
  'text-red-600'
 }''
  const getScoreText = (value: number, thresholds: { good: number poor: number }) => {
    if (value <= thresholds.good) return
  'Good'
   if (value <= thresholds.poor) return
  'Needs Improvement'
   return
  'Poor'
 }''
  return (
    <div className='fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs'>'      <h3 className='text-sm font-semibold mb-3 text-gray-900'>Performance Metrics</h3>'      '      <div className='space-y-2 text-xs'>'        {metrics.fcp && ('          <div className='flex justify-between'>'            <span className='text-gray-600'>FCP: </span>'            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>'              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})</span>
          </div>
        )}

        {metrics.lcp && (
<div className='flex justify-between'>'            <span className='text-gray-600'>LCP: </span>'            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>'              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})</span>'
          </div>
        )}

        {metrics.fid && (
<div className='flex justify-between'>'            <span className='text-gray-600'>FID: </span>'            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>'              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})</span>'
          </div>
        )}

        {metrics.cls && (
<div className='flex justify-between'>'            <span className='text-gray-600'>CLS: </span>'            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>'              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})</span>'
          </div>
        )}

        {metrics.ttfb && (
<div className='flex justify-between'>'            <span className='text-gray-600'>TTFB: </span>'            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>'              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})</span>'
          </div>
        )}
      </div>
<div className='mt-3 pt-2 border-t border-gray-200'>'        <button'          onClick={() => setIsVisible(false)}
          className='text-xs text-gray-500 hover: text-gray-700''        >'          Hide</button>
      </div>
    </div>
  )
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}
}, []);
  // Check condition
if (return null) {
  $2
}
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) =>: any {
// Check condition
if (return 'text - green - 600) {
  $2
}
    // Check condition
if (return 'text - yellow - 600) {
  $2
}
    return 'text - red - 600;
}';
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) =>: any {
    // Check condition
if (return 'Good) {
  $2
}
    // Check condition
if (return 'Needs Improvement) {
  $2
}
    return 'Poor;
}';
  return (
    <div className="fixed bottom - 4 left - 4 bg - white shadow - lg rounded - lg p - 4 border z - 50 max - w-xs>      <h3 className="text - sm font - semibold mb - 3 text - gray - 900">Performance Metrics</h3>"      "      <div className="space - y-2 text - xs>        {metrics.fcp && ("          <div className="flex justify - between>            <span className="text - gray - 600">FCP: </span>"            <span className={getScoreColor (metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math.round (metrics.fcp)}ms ({getScoreText (metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>)}
        {metrics.lcp && (
<div className="flex justify - between>            <span className="text - gray - 600">LCP: </span>"            <span className={getScoreColor (metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math.round (metrics.lcp)}ms ({getScoreText (metrics.lcp, { good: 2500, poor: 4000 })})</span>;
          </div>)}
        {metrics.fid && (
<div className="flex justify - between>            <span className="text - gray - 600">FID: </span>"            <span className={getScoreColor (metrics.fid, { good: 100, poor: 300 })}>"              {Math.round (metrics.fid)}ms ({getScoreText (metrics.fid, { good: 100, poor: 300 })})</span>;
          </div>)}
        {metrics.cls && (
<div className="flex justify - between>            <span className="text - gray - 600">CLS: </span>"            <span className={getScoreColor (metrics.cls, { good: 0.1, poor: 0.25 })}>"              {metrics.cls.to_fixed (3)} ({getScoreText (metrics.cls, { good: 0.1, poor: 0.25 })})</span>;
          </div>)}
        {metrics.ttfb && (
<div className="flex justify - between>            <span className="text - gray - 600">TTFB: </span>"            <span className={getScoreColor (metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math.round (metrics.ttfb)}ms ({getScoreText (metrics.ttfb, { good: 800, poor: 1800 })})</span>;
          </div>)}
      </div>;
<div className="mt - 3 pt - 2 border - t border - gray - 200>        <button"          on_click={() => setIsVisible (false)}
          className="text - xs text - gray - 500 hover: text - gray - 700        >"          Hide</button>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<<<<<<< HEAD
=======
=======
      window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);

      return () => observer.disconnect();
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metrics.cls = clsValue;
        if (process.env.NODE_ENV === 'production') {
          // gtag('event', 'web_vitals', {
          //   name: 'CLS',
          //   value: Math.round(clsValue * 1000),
          //   event_category: 'Web Vitals'
          // });
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support CLS
      }

      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            metrics.fcp = entry.startTime;
          }
        }
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Fallback for browsers that don't support FCP
      }

      // Monitor Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
origin/cursor/analyze-improve-and-deploy-application-347d
    }
  }, []);
main

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
};

export default PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
