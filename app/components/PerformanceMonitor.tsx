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
    ttfb: null,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Get Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
          getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
          getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
          getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
          getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-xs z-50 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-cyan-400 font-semibold">Performance Monitor</h3>
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
          <span className={metrics.lcp && metrics.lcp > 2.5 ? 'text-red-400' : 'text-green-400'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}s` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid && metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp > 1.8 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}s` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;