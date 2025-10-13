import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const formatMetric = useCallback((value: number | undefined, unit: string = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    if (unit === '') return value.toFixed(4);
    return `${value.toFixed(0)}${unit}`;
  }, []);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Get performance metrics
    const getMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime;
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const ttfb = navigation?.responseStart - navigation?.requestStart;
      
      setMetrics({
        lcp,
        fcp,
        ttfb,
        fid: 0, // FID requires user interaction
        cls: 0  // CLS requires more complex calculation
      });
    };

    // Get metrics after page load
    if (document.readyState === 'complete') {
      getMetrics();
    } else {
      window.addEventListener('load', getMetrics);
    }

    return () => {
      window.removeEventListener('load', getMetrics);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs z-50">
      <div className="flex items-center mb-2">
        <Activity className="w-4 h-4 text-cyan-400 mr-2" />
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={metrics.lcp && metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
            {formatMetric(metrics.lcp)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={metrics.fcp && metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}>
            {formatMetric(metrics.fcp)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}>
            {formatMetric(metrics.ttfb)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;