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
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  }, []);

  const getMetricColor = useCallback((value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (value === undefined) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Simulate performance metrics for demo
    const updateMetrics = () => {
      setMetrics({
        lcp: Math.random() * 2000 + 1000, // 1-3s
        fid: Math.random() * 100, // 0-100ms
        cls: Math.random() * 0.25, // 0-0.25
        fcp: Math.random() * 1500 + 500, // 0.5-2s
        ttfb: Math.random() * 200 + 50, // 50-250ms
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-2xl z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm flex items-center">
          <Activity className="w-4 h-4 mr-2 text-cyan-400" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP</span>
          <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {formatMetric(metrics.lcp)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID</span>
          <span className={getMetricColor(metrics.fid, { good: 100, poor: 300 })}>
            {formatMetric(metrics.fid)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS</span>
          <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {formatMetric(metrics.cls, '')}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP</span>
          <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {formatMetric(metrics.fcp)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB</span>
          <span className={getMetricColor(metrics.ttfb, { good: 200, poor: 500 })}>
            {formatMetric(metrics.ttfb)}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-white/10">
        <div className="flex items-center text-xs text-gray-400">
          <Clock className="w-3 h-3 mr-1" />
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
