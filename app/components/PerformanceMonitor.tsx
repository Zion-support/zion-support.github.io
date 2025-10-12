import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, INP: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });

    // Log performance data
    const logPerformance = () => {
      console.group('🚀 Performance Metrics');
      console.log('CLS (Cumulative Layout Shift):', metrics.CLS);
      console.log('INP (Interaction to Next Paint):', metrics.INP);
      console.log('FCP (First Contentful Paint):', metrics.FCP);
      console.log('LCP (Largest Contentful Paint):', metrics.LCP);
      console.log('TTFB (Time to First Byte):', metrics.TTFB);
      console.groupEnd();
    };

    // Log after a delay to allow metrics to populate
    const timeout = setTimeout(logPerformance, 3000);
    return () => clearTimeout(timeout);
  }, [metrics]);

  const getScore = (metric: number | null, thresholds: { good: number; needsImprovement: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (metric === null) return 'good';
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.needsImprovement) return 'needs-improvement';
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

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'Measuring...';
    return `${value.toFixed(2)}${unit}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-md border border-gray-700/50 rounded-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS</span>
          <span className={getScoreColor(getScore(metrics.CLS, { good: 0.1, needsImprovement: 0.25 }))}>
            {formatMetric(metrics.CLS)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">INP</span>
          <span className={getScoreColor(getScore(metrics.INP, { good: 200, needsImprovement: 500 }))}>
            {formatMetric(metrics.INP)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP</span>
          <span className={getScoreColor(getScore(metrics.FCP, { good: 1800, needsImprovement: 3000 }))}>
            {formatMetric(metrics.FCP)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP</span>
          <span className={getScoreColor(getScore(metrics.LCP, { good: 2500, needsImprovement: 4000 }))}>
            {formatMetric(metrics.LCP)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB</span>
          <span className={getScoreColor(getScore(metrics.TTFB, { good: 800, needsImprovement: 1800 }))}>
            {formatMetric(metrics.TTFB)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700/50">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Good: Green</span>
          <span>Needs Work: Yellow</span>
          <span>Poor: Red</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;