<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
import {Star} from 'lucide-react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
import React, { useEffect } from 'react';
import {Star} from 'lucide-react';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
interface PerformanceData {
  domContentLoaded: number,
  load_complete: number,
  totalLoadTime: number,
  first_paint: number,
  firstContentfulPaint: number,
  resource_count: number,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  memory: {
    used: number
    total: number
    limit: number
  } | null;
}
interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Extend the Window interface to include performance;
declare global {
  interface Window {
    performance: Performance,
  }
  interface Performance {
    getEntriesByType (type: string): PerformanceEntry[],
    memory?: {
      usedJSHeapSize: number, totalJSHeapSize: number,
      jsHeapSizeLimit: number,
    }
  }
  interface PerformanceEntry {
    name: string, start_time: number,
    duration: number,
  }
  interface PerformanceNavigationTiming extends PerformanceEntry {
    domContentLoadedEventStart: number, domContentLoadedEventEnd: number,
    loadEventStart: number, loadEventEnd: number,
    fetch_start: number,
  }
// Define Performance types if not available;
interface PerformanceEntry {
  name: string,
  entry_type: string,
  start_time: number,
  duration: number,
}
interface Performance {
  getEntriesByType (type: string): PerformanceEntry[],
}
interface PerformanceNavigationTiming extends PerformanceEntry {
  loadEventEnd: number,
  loadEventStart: number,
  domContentLoadedEventEnd: number,
  domContentLoadedEventStart: number,
  response_end: number,
  response_start: number,
  request_start: number,
  navigation_start: number,
}
// Define Performance types if not available;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
interface PerformanceNavigationTiming extends PerformanceEntry {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface PerformanceNavigationTiming extends PerformanceEntry {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {;
  useEffect(() => {;
    // Only run on client side;
    if (typeof window === 'undefined' || typeof window && window.performance === 'undefined') return;
    const measurePerformance = () => {;
      const navigationEntries = window && window.performance.getEntriesByType('navigation');
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window && window.performance.getEntriesByType('paint');
      const performanceData = {;
        // Navigation timing;
        domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,;
        loadComplete: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,;
        totalLoadTime: navigation && navigation.loadEventEnd - navigation && navigation.fetchStart,;
        // Paint timing;
        firstPaint: paintEntries && paintEntries.find(entry => entry && entry.name === 'first-paint')?.startTime || 0,;
        firstContentfulPaint: paintEntries && paintEntries.find(entry => entry && entry.name === 'first-contentful-paint')?.startTime || 0,;
        // Resource timing;
        resourceCount: window && window.performance.getEntriesByType('resource').length,;
        // Memory usage (if available);
        memory: (window && window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {;
          used: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.usedJSHeapSize,;
          total: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.totalJSHeapSize,;
          limit: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.jsHeapSizeLimit;
      },;
      if (onPerformanceData) {;
        onPerformanceData(performanceData);
      }
      // Log performance data in development;
      if (process && process.env.NODE_ENV === 'development') {;
        // eslint-disable-next-line no-console;
        console && console.log('Performance Metrics:', performanceData);
      }
    };
    // Measure performance after page load;
    if (document && document.readyState === 'complete') {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      measurePerformance();
    } else {;
      window && window.addEventListener('load', measurePerformance);
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return () => {;
      window && window.removeEventListener('load', measurePerformance);
    };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    return () => {;
      window && window.removeEventListener('load', measurePerformance);
    };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return null;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const observer = new PerformanceObserver((list) => {;const entries = list && list.getEntries();
      entries && entries.forEach((entry) => {;
        switch (entry && entry.entryType) {;
case 'paint': if (entry && entry.name === 'first-contentful-paint') {'              setMetrics(prev => ({ ...prev, fcp: entry && entry.startTime }));'            }
            break;
          case 'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry && entry.startTime }));'            break;'          case 'first-input': setMetrics(prev => ({ ...prev, fid: entry && entry.processingStart - entry && entry.startTime }));'            break;'          case 'layout-shift': if (!(entry as any).hadRecentInput) {'              setMetrics(prev => ({ '                ...prev, cls: (prev && prev.cls || 0) + (entry as any).value ;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}));
}
            break;
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry && entry.responseStart - entry && entry.requestStart }));'            break;'        }});
});
    // Observe different types of performance entries;
<<<<<<< HEAD
<<<<<<< HEAD
    try {;
observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    try {;
observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
'    } catch (e) {'      // Fallback for browsers that don&apos;t support all entry types;
      observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
'    }';
    // Show metrics after 3 seconds;
    const timer = setTimeout(() => {setIsVisible(true);
}, 3000);
<<<<<<< HEAD
<<<<<<< HEAD
    return () => {;
      observer && observer.disconnect();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    return () => {;
      observer && observer.disconnect();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      clearTimeout(timer);
}
}, []);
  if (!isVisible) return null;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {;
if (value <= thresholds && thresholds.good) return 'text-green-600;
    if (value <= thresholds && thresholds.poor) return 'text-yellow-600;
    return 'text-red-600;
};';
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {;
    if (value <= thresholds && thresholds.good) return 'Good;
    if (value <= thresholds && thresholds.poor) return 'Needs Improvement;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return 'Poor;
};';
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs>      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>"      "      <div className="space-y-2 text-xs>        {metrics && metrics.fcp && ("          <div className="flex justify-between>            <span className="text-gray-600">FCP: </span>"            <span className={getScoreColor(metrics && metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math && Math.round(metrics && metrics.fcp)}ms ({getScoreText(metrics && metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {metrics && metrics.lcp && (;
<div className="flex justify-between>            <span className="text-gray-600">LCP: </span>"            <span className={getScoreColor(metrics && metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math && Math.round(metrics && metrics.lcp)}ms ({getScoreText(metrics && metrics.lcp, { good: 2500, poor: 4000 })})</span>;
          </div>;
        )}
        {metrics && metrics.fid && (;
<div className="flex justify-between>            <span className="text-gray-600">FID: </span>"            <span className={getScoreColor(metrics && metrics.fid, { good: 100, poor: 300 })}>"              {Math && Math.round(metrics && metrics.fid)}ms ({getScoreText(metrics && metrics.fid, { good: 100, poor: 300 })})</span>;
          </div>;
        )}
        {metrics && metrics.cls && (;
<div className="flex justify-between>            <span className="text-gray-600">CLS: </span>"            <span className={getScoreColor(metrics && metrics.cls, { good: 0 && 0.1, poor: 0 && 0.25 })}>"              {metrics && metrics.cls.toFixed(3)} ({getScoreText(metrics && metrics.cls, { good: 0 && 0.1, poor: 0 && 0.25 })})</span>;
          </div>;
        )}
        {metrics && metrics.ttfb && (;
<div className="flex justify-between>            <span className="text-gray-600">TTFB: </span>"            <span className={getScoreColor(metrics && metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math && Math.round(metrics && metrics.ttfb)}ms ({getScoreText(metrics && metrics.ttfb, { good: 800, poor: 1800 })})</span>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        )}
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
    return () => {
      observer.disconnect ();
      clear_timeout (timer);
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

    </div>);
}
export default PerformanceMonitor;
;

<<<<<<< HEAD
};
export default PerformanceMonitor;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
}
export default PerformanceMonitor;
};
export default PerformanceMonitor;

<<<<<<< HEAD
}
}
=======
=======

};
export default PerformanceMonitor;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
