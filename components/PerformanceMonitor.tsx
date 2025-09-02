<<<<<<< HEAD
import React, { useEffect, useState } from 'react';''interface PerformanceMetrics {
=======
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined') return;''    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === 'development';'    const isAdmin = localStorage.getItem('admin_mode') === 'true';'    '    if (!isDev && !isAdmin) return;

    const observer = new PerformanceObserver((list) => {;
=======
    if (typeof window === 'undefined') return;

    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === 'development';
    const isAdmin = localStorage.getItem('admin_mode') === 'true';
    
    if (!isDev && !isAdmin) return;

    const observer = new PerformanceObserver((list) => {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        switch (entry.entryType) {
<<<<<<< HEAD
          case 'paint': if (entry.name === 'first-contentful-paint') {'              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));'            }
            break;
          case 'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry.startTime }));'            break;'          case 'first-input': setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));'            break;'          case 'layout-shift': if (!(entry as any).hadRecentInput) {'              setMetrics(prev => ({ '                ...prev, cls: (prev.cls || 0) + (entry as any).value 
              }));
            }
            break;
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));'            break;'        }
=======
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (entry as any).value 
              }));
            }
            break;
          case 'navigation':
            setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            break;
        }
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      });
    });

    // Observe different types of performance entries
    try {
<<<<<<< HEAD
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });'    } catch (e) {'      // Fallback for browsers that don&apos;t support all entry types''      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });'    }'
    // Show metrics after 3 seconds
    const timer = setTimeout(() => {;
=======
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }

    // Show metrics after 3 seconds
    const timer = setTimeout(() => {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      setIsVisible(true);
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
<<<<<<< HEAD
    if (value <= thresholds.good) return 'text-green-600';'    if (value <= thresholds.poor) return 'text-yellow-600';'    return 'text-red-600';'  };'
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';'    if (value <= thresholds.poor) return 'Needs Improvement';'    return 'Poor';'  };'
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs">"      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>"      "      <div className="space-y-2 text-xs">"        {metrics.fcp && ("          <div className="flex justify-between">"            <span className="text-gray-600">FCP: </span>"            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
=======
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs">
      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>
      
      <div className="space-y-2 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span className="text-gray-600">FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
            </span>
          </div>
        )}
        
        {metrics.lcp && (
<<<<<<< HEAD
          <div className="flex justify-between">"            <span className="text-gray-600">LCP: </span>"            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
=======
          <div className="flex justify-between">
            <span className="text-gray-600">LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
            </span>
          </div>
        )}
        
        {metrics.fid && (
<<<<<<< HEAD
          <div className="flex justify-between">"            <span className="text-gray-600">FID: </span>"            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>"              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})
=======
          <div className="flex justify-between">
            <span className="text-gray-600">FID:</span>
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
            </span>
          </div>
        )}
        
        {metrics.cls && (
<<<<<<< HEAD
          <div className="flex justify-between">"            <span className="text-gray-600">CLS: </span>"            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>"              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
=======
          <div className="flex justify-between">
            <span className="text-gray-600">CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
<<<<<<< HEAD
          <div className="flex justify-between">"            <span className="text-gray-600">TTFB: </span>"            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
=======
          <div className="flex justify-between">
            <span className="text-gray-600">TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
            </span>
          </div>
        )}
      </div>
      
<<<<<<< HEAD
      <div className="mt-3 pt-2 border-t border-gray-200">"        <button"          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700""        >"          Hide
=======
      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Hide
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;