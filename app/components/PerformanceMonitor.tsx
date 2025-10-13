import React from 'react';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when debug mode is enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Web Vitals measurement
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }
    };

    // Start measuring after a short delay to ensure page is loaded
    const timeoutId = setTimeout(measureWebVitals, 1000);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 border border-slate-600 rounded-lg p-4 shadow-xl z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-lg"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {/* FCP */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span>
          <div className="flex items-center gap-2">
            <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
              {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
            </span>
          </div>
        </div>

        {/* LCP */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <div className="flex items-center gap-2">
            <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
              {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
            </span>
          </div>
        </div>

        {/* FID */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span>
          <div className="flex items-center gap-2">
            <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
              {getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })}
            </span>
          </div>
        </div>

        {/* CLS */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span>
          <div className="flex items-center gap-2">
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
            </span>
          </div>
        </div>

        {/* TTFB */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:</span>
          <div className="flex items-center gap-2">
            <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
              {getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
            </span>
          </div>
        </div>

        {/* Load Time */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Load Time:</span>
          <span className="text-cyan-400">
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-600">
        <p className="text-gray-400 text-xs">
          Press <kbd className="bg-slate-700 px-1 rounded">Ctrl+Shift+P</kbd> to toggle
        </p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
