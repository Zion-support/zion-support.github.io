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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
