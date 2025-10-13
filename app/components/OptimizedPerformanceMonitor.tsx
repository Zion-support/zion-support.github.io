import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface OptimizedPerformanceMonitorProps {
  showDetails?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const OptimizedPerformanceMonitor: React.FC<OptimizedPerformanceMonitorProps> = ({
  showDetails = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const updated = { ...prev, [metric]: value };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));

    // Show monitor in development
    if (showDetails && process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Performance optimization: Cleanup
    return () => {
      // Cleanup if needed
    };
  }, [updateMetric, showDetails]);

  // Don't render in production unless explicitly shown
  if (!isVisible && process.env.NODE_ENV === 'production') {
    return null;
  }

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

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">INP:</span>
          <span className={getScoreColor(metrics.inp, { good: 200, needsImprovement: 500 })}>
            {metrics.inp ? `${Math.round(metrics.inp)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '...'}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600">
        <div className="text-gray-400 text-xs">
          Overall: {metrics.lcp && metrics.inp && metrics.cls ? 
            (metrics.lcp <= 2500 && metrics.inp <= 200 && metrics.cls <= 0.1 ? 'Good' : 'Needs Improvement') : 
            'Measuring...'
          }
        </div>
      </div>
    </div>
  );
};

export default OptimizedPerformanceMonitor;