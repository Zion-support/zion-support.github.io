import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-717a
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
// Type definitions for browser APIs
declare global {
  interface PerformanceObserver {
    observe(options: { entryTypes: string[] }): void;
    disconnect(): void;
  }
<<<<<<< HEAD
=======


import React, { useEffect, useState } from 'react';

// Extend the global PerformanceEntry interface
declare global {
  interface PerformanceEntry {
    // This extends the built-in PerformanceEntry
  }
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8341

// Type definitions for browser APIs
declare global {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
  interface PerformanceNavigationTiming extends PerformanceEntry {
    requestStart: number;
    responseStart: number;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const PerformanceObserver: {
    new (callback: (list: { getEntries(): PerformanceEntry[] }) => void): PerformanceObserver;
  };
  const performance: {
    getEntriesByType(type: string): PerformanceEntry[];
  };
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529c
}
import React, { useEffect, useState } from 'react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1911
=======
=======

// Type definitions for browser APIs
declare global {
>>>>>>> cursor/fix-errors-and-merge-to-main-fb5a
  interface PerformanceEntry {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  }
  
  interface PerformanceNavigationTiming extends PerformanceEntry {
    requestStart: number;
    responseStart: number;
  }
  
  interface PerformanceObserver {
    observe(options: { entryTypes: string[] }): void;
    disconnect(): void;
  }
  
  const PerformanceObserver: {
    new (callback: (list: { getEntries(): PerformanceEntry[] }) => void): PerformanceObserver;
  };
  const performance: {
    getEntriesByType(type: string): PerformanceEntry[];
  };
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-717a
=======
  
  interface PerformanceEntry {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-8341
=======
  interface PerformanceEntry {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-fb5a
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-ba71
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const inputEntry = entry as any;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }

            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }

            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-529c
=======
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }
>>>>>>> cursor/fix-errors-and-merge-to-main-717a
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-8341
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
=======
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }
>>>>>>> cursor/fix-errors-and-merge-to-main-fb5a
=======
            setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
>>>>>>> cursor/fix-errors-and-merge-to-main-ba71
          } else if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + layoutShiftEntry.value }));
            }
          }
        }
      });

<<<<<<< HEAD
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
=======
      // Observe different entry types
      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        observer.observe({ entryTypes: ['paint'] });
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-ba71

      // Monitor TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

<<<<<<< HEAD
      return () => observer.disconnect();
=======
      return () => {
        observer.disconnect();
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-ba71
    }
    return undefined;
  }, []);

<<<<<<< HEAD
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
=======
  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-ba71

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">First Contentful Paint</p>
          <p className="text-lg font-mono text-cyan-400">{formatMetric(metrics.fcp)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Largest Contentful Paint</p>
          <p className="text-lg font-mono text-cyan-400">{formatMetric(metrics.lcp)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">First Input Delay</p>
          <p className="text-lg font-mono text-cyan-400">{formatMetric(metrics.fid)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Cumulative Layout Shift</p>
          <p className="text-lg font-mono text-cyan-400">{formatMetric(metrics.cls)}</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-400">Time to First Byte</p>
          <p className="text-lg font-mono text-cyan-400">{formatMetric(metrics.ttfb)}</p>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
export default PerformanceMonitor;
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
=======

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-fb5a
=======

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-ba71
