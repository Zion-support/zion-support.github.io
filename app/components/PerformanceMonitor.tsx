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
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (entry as any).value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'navigation') {
          setMetrics(prev => ({ ...prev, ttfb: (entry as any).responseStart - (entry as any).requestStart }));
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Show monitor after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScore = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
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
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;