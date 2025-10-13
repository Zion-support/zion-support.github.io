import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b847

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
// Type definitions for browser APIs
declare global {
  interface PerformanceObserver {
    observe(options: { entryTypes: string[] }): void;
    disconnect(): void;
  }
<<<<<<< HEAD
  
<<<<<<< HEAD
  const PerformanceObserver: {
    new (callback: (list: { getEntries(): PerformanceEntry[] }) => void): PerformanceObserver;
  };
}

>>>>>>> cursor/fix-errors-and-merge-to-main-e3a0
=======
=======


import React, { useEffect, useState } from 'react';

// Extend the global PerformanceEntry interface
declare global {
  interface PerformanceEntry {

    // This extends the built-in PerformanceEntry;

} catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal server error' });
}
}

// Type definitions for browser APIs
declare global {
  interface PerformanceNavigationTiming extends PerformanceEntry {

    requestStart: number;
    responseStart: number;
  
} catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal server error' });
}
}
import React, { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
  interface PerformanceEntry {

    name: string;
    entryType: string;
    startTime: number;
    duration: number;
<<<<<<< HEAD
  }

  interface PerformanceNavigationTiming extends PerformanceEntry {
    requestStart: number;
    responseStart: number;
  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-b847
=======
  
} catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal server error' });
}
}
  
  interface PerformanceEntry {

    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  
} catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal server error' });
}
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
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
<<<<<<< HEAD
    ttfb: null
  });

=======
    ttfb: null,;
});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
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
=======
            setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart }));
          }
        }
      });
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] });

<<<<<<< HEAD
=======
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }
          } else if (entry.entryType === 'layout-shift') {
=======
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }

            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
            }
;
} else if (entry.entryType === 'layout-shift') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
          }
        }
      });
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      
      // Monitor TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
      
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
      return () => observer.disconnect();
    }
    return undefined;
  }, []);

<<<<<<< HEAD
=======
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-b847
  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
        {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
        {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
      </div>
    </div>;
);
};

<<<<<<< HEAD
export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3a0
=======
export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
