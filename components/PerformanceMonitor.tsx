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

interface PerformanceNavigationTiming extends PerformanceEntry {;

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      measurePerformance();
    } else {;
      window && window.addEventListener('load', measurePerformance);
    }

    return () => {;
      window && window.removeEventListener('load', measurePerformance);
    };

=======
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
=======    </div>;
  );
}
export default PerformanceMonitor;
};
export default PerformanceMonitor;

};
export default PerformanceMonitor;=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
