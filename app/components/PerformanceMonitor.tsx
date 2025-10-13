import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcp = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;

      // Get FID
      const fidEntries = performance.getEntriesByType('first-input');
      const fid = fidEntries.length > 0 ? fidEntries[0].processingStart - fidEntries[0].startTime : null;

      // Get CLS
      let cls = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });

      // Get FCP
      const fcpEntries = performance.getEntriesByType('paint');
      const fcp = fcpEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;

      // Get TTFB
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;

      setMetrics({
        lcp: lcp ? Math.round(lcp) : null,
        fid: fid ? Math.round(fid) : null,
        cls: Math.round(cls * 1000) / 1000,
        fcp: fcp ? Math.round(fcp) : null,
        ttfb: Math.round(ttfb)
      });
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics on visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateMetrics();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Show monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp ? `${metrics.lcp}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid ? `${metrics.fid}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp ? `${metrics.fcp}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb ? `${metrics.ttfb}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-white/10">
        <div className="text-xs text-gray-400">
          {metrics.lcp && metrics.fid && metrics.cls !== null ? (
            <span>
              Overall: {getScoreLabel(
                Math.max(metrics.lcp, metrics.fid, metrics.cls * 1000),
                { good: 2500, needsImprovement: 4000 }
              )}
            </span>
          ) : (
            <span>Collecting metrics...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
