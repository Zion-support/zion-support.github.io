import React, { useEffect, useState } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

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

  useEffect(() => {
    // Only show performance monitor in development
    if (process.env.NODE_ENV !== 'development') return;

    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));
    };

    // Measure Web Vitals
    onCLS(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') return null;

  const getScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatValue = (value: number, unit: string = 'ms') => {
    return `${Math.round(value)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={getScoreColor(getScore(metrics.lcp, { good: 2500, poor: 4000 }))}>
              {formatValue(metrics.lcp)}
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={getScoreColor(getScore(metrics.fid, { good: 100, poor: 300 }))}>
              {formatValue(metrics.fid)}
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={getScoreColor(getScore(metrics.cls, { good: 0.1, poor: 0.25 }))}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getScoreColor(getScore(metrics.fcp, { good: 1800, poor: 3000 }))}>
              {formatValue(metrics.fcp)}
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={getScoreColor(getScore(metrics.ttfb, { good: 800, poor: 1800 }))}>
              {formatValue(metrics.ttfb)}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          <div>• Green: Good</div>
          <div>• Yellow: Needs Improvement</div>
          <div>• Red: Poor</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;