import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.warn('Navigation timing:', entry);
        }
        if (entry.entryType === 'paint') {
          console.warn('Paint timing:', entry);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'paint'] });

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS(console.warn);
        onFCP(console.warn);
        onLCP(console.warn);
        onTTFB(console.warn);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV ==='production') {
    return null;
  }

  // Development mode: show performance metrics

    const getScoreColor = (value: number | undefined, thresholds:{ good: number; poor: number }) => {
    if (!value) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };
  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className ={getScoreColor(metrics.fcp,{ good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` :'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className ={getScoreColor(metrics.lcp,{ good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` :'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className ={getScoreColor(metrics.fid,{ good: 100, poor: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` :'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className ={getScoreColor(metrics.cls,{ good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) :'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className ={getScoreColor(metrics.ttfb,{ good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` :'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;