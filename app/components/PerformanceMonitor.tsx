import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const isDebugMode = process.env.NODE_ENV === 'development' || 
                       localStorage.getItem('debug-performance') === 'true';
    
    if (!isDebugMode) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    getFID((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
    });

    getFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    getLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    getTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 border border-slate-600 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'} 
            <span className="ml-1">
              ({getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'} 
            <span className="ml-1">
              ({getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'} 
            <span className="ml-1">
              ({getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'} 
            <span className="ml-1">
              ({getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'} 
            <span className="ml-1">
              ({getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })})
            </span>
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600">
        <p className="text-gray-400 text-xs">
          Core Web Vitals are measured automatically. 
          <br />
          Green = Good, Yellow = Needs Improvement, Red = Poor
        </p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;