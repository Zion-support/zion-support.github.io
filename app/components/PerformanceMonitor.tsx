'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' ||
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => updateMetrics({ cls: metric.value }));
        getFID((metric) => updateMetrics({ fid: metric.value }));
        getFCP((metric) => updateMetrics({ fcp: metric.value }));
        getLCP((metric) => updateMetrics({ lcp: metric.value }));
        getTTFB((metric) => updateMetrics({ ttfb: metric.value }));
      });
    }
  }, [])

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      </div><div className="flex items-center justify-between mb-2">
        </div><h3 className="font-semibold text-cyan-400">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.lcp && (
          </div><div className="flex justify-between">
            </div><span>LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
            </span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            </div><span>FID:</span>
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            </div><span>CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
            </span>
          </div>
        )}
        {metrics.fcp && (
          <div className="flex justify-between">
            </div><span>FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
            </span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            </div><span>TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      {metrics ? (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
          <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        </div>
      ) : (
        <div>Measuring...</div>
      )}
    </div>
  )
}

export default PerformanceMonitor
