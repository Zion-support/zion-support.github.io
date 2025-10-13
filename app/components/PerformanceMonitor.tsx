import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
    };

    // Measure Core Web Vitals
    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));

    // Show monitor after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [showInProduction]);

  const getScore = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'pending';
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(getScore(metrics.cls, { good: 0.1, poor: 0.25 }))}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>INP:</span>
          <span className={getScoreColor(getScore(metrics.inp, { good: 200, poor: 500 }))}>
            {metrics.inp ? `${metrics.inp}ms` : 'pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getScore(metrics.fcp, { good: 1800, poor: 3000 }))}>
            {metrics.fcp ? `${metrics.fcp}ms` : 'pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getScore(metrics.lcp, { good: 2500, poor: 4000 }))}>
            {metrics.lcp ? `${metrics.lcp}ms` : 'pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(getScore(metrics.ttfb, { good: 800, poor: 1800 }))}>
            {metrics.ttfb ? `${metrics.ttfb}ms` : 'pending'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;