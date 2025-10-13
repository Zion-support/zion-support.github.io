import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
    };

    // Measure Core Web Vitals
    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));

    // Show performance panel if metrics are poor
    const checkPerformance = () => {
      const hasPoorMetrics = 
        (metrics.lcp && metrics.lcp > 4000) ||
        (metrics.inp && metrics.inp > 300) ||
        (metrics.cls && metrics.cls > 0.25);
      
      if (hasPoorMetrics) {
        setIsVisible(true);
      }
    };

    // Check performance after 5 seconds
    const timer = setTimeout(checkPerformance, 5000);
    return () => clearTimeout(timer);
  }, [metrics]);

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 4000) score -= 30;
    if (metrics.inp && metrics.inp > 300) score -= 25;
    if (metrics.cls && metrics.cls > 0.25) score -= 25;
    if (metrics.fcp && metrics.fcp > 3000) score -= 10;
    if (metrics.ttfb && metrics.ttfb > 1000) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const score = getPerformanceScore();

  if (!isVisible && score >= 90) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className={getScoreColor(score)}>{score}/100</span>
        </div>
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp > 4000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.inp && (
          <div className="flex justify-between">
            <span>INP:</span>
            <span className={metrics.inp > 300 ? 'text-red-400' : 'text-green-400'}>
              {metrics.inp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls > 0.25 ? 'text-red-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp > 3000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb > 1000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      
      {score < 70 && (
        <div className="mt-3 pt-2 border-t border-gray-700">
          <p className="text-xs text-yellow-400">
            Consider optimizing images and reducing JavaScript bundle size.
          </p>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;