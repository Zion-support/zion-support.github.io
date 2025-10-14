<<<<<<< HEAD
import React, { useEffect, useState, ReactNode } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  children: ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null
  });

>>>>>>> origin/main
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      // Get Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                fcp: entry.startTime
              }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              lcp: entry.startTime
            }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({
              ...prev,
              fid: (entry as any).processingStart - entry.startTime
            }));
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({
              ...prev,
              cls: (prev?.cls || 0) + (entry as any).value
            }));
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Get TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        }));
      }

<<<<<<< HEAD
      return () => observer.disconnect();
    };

    const cleanup = measurePerformance();

    // Show performance monitor after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      if (cleanup) cleanup();
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible || !showDetails) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono border border-cyan-500/20 z-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-cyan-400 font-semibold">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="space-y-1">
          {metrics?.fcp && (
            <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
          )}
          {metrics?.lcp && (
            <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
          )}
          {metrics?.fid && (
            <div>FID: {metrics.fid.toFixed(2)}ms</div>
          )}
          {metrics?.cls && (
            <div>CLS: {metrics.cls.toFixed(4)}</div>
          )}
          {metrics?.ttfb && (
            <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PerformanceMonitor;
=======
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
          }
        });
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
    ttfb: null,
    loadTime: null
  }
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return";
    // Get performance metrics
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";
      const paintEntries = performance.getEntriesByType('paint')";
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')";
      const lcp = performance.getEntriesByType('largest-contentful-paint')";
      setMetrics({
        cls: 0, // Would need to be calculated with observer
        inp: 0, // Would need to be calculated with observer
        fcp: fcp ? fcp.startTime : null,
        lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : null
      }
    // Wait for page load
<<<<<<< HEAD
    if (document.readyState === 'complete') {'
      getPerformanceMetrics()
    } else {window.addEventListener('load', getPerformanceMetrics)"}"
    return () => {window.removeEventListener('load', getPerformanceMetrics)"}"
  }, [])
  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {if (value === null) return "text-gray-500"
    if (value <= thresholds.good) return "text-green-500"
    if (value <= thresholds.poor) return "text-yellow-500"
    return 'text-red-500'"}"
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {'
    return null}
  return (
    <div className="fixed bottom-4 right-4 z-50">"
      <button
        onClick={() => setIsVisible(!isVisible)
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors""
=======
  return (
    <div className="fixed bottom-4 right-4 z-50">"
      <button
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
      >
        Performance
      </button>
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">"
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>"
          <div className="space-y-2 text-xs">"
            <div className="flex justify-between">"
              <span>FCP:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}"`"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>LCP:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}"`"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}"`"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>Load Time:</span>
              <span className={getScoreColor(metrics.loadTime, { good: 3000, poor: 5000 })}>
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}"`"`
              </span>
            </div>
          </div>
        </div>
    }
    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000)
    return () => clearTimeout(timer)
  }, [])
  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
<<<<<<< HEAD
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {'
        setIsVisible(!isVisible)
    window.addEventListener('keydown', handleKeyPress)";
    return () => window.removeEventListener('keydown', handleKeyPress)";
  }, [isVisible])
  // Don't render in production'
  if (process.env.NODE_ENV === 'production') {'
    return null}
  if (!isVisible) {return null}
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg z-50 max-w-xs">"
      <div className="flex items-center justify-between mb-3">"
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>"
        <button
          onClick={() => setIsVisible(false)
          className="text-gray-400 hover:text-white text-xs""
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
      }
    };

    measurePerformance();

    // Set up keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
<<<<<<< HEAD
  }, [isVisible]);
  // Don't render in production
  if (process.env.NODE_ENV === 'production') { return null; }
  if (!isVisible) { return null; }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
<<<<<<< HEAD
          onClick={ () => setIsVisible(false) }
          className="text-gray-400 hover:text-white text-xs"
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
        >
          ×
        </button>
      </div>
<<<<<<< HEAD

      <div className="space-y-2 text-sm"></div>"
        <div className="flex justify-between"></div>
          <span>Load Time:</span>"
          <span className="text-cyan-400">
            {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>FCP:</span>"
          <span className="text-green-400">
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>LCP:</span>"
          <span className="text-yellow-400">
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>FID:</span>"
          <span className="text-orange-400">
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>CLS:</span>"
          <span className="text-red-400">
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
          </span>
        </div>
      </div>
"
      <div className="mt-2 text-xs text-gray-400"></div>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
=======
import React from 'react';
const PerformanceMonitor: React.FC = () => { return null; }
>>>>>>> origin/main
export default PerformanceMonitor;
      )
    </div>
<<<<<<< HEAD
  )
export default PerformanceMonitor;
=======
export default PerformanceMonitor;
      )
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
};

export default PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
