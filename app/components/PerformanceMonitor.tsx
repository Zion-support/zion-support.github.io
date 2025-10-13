import React, { useState, useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  inp: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Don't show in production unless explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) return;

    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      console.log('CLS:', metric);
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
      console.log('INP:', metric);
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      console.log('FCP:', metric);
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      console.log('LCP:', metric);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      console.log('TTFB:', metric);
    });

    // Show monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showInProduction]);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2.5, poor: 4.0 })}>
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}s` : '...'} 
            <span className="ml-1 text-xs">
              ({getScoreText(metrics.lcp, { good: 2.5, poor: 4.0 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>INP:</span>
          <span className={getScoreColor(metrics.inp, { good: 200, poor: 500 })}>
            {metrics.inp ? `${metrics.inp.toFixed(0)}ms` : '...'} 
            <span className="ml-1 text-xs">
              ({getScoreText(metrics.inp, { good: 200, poor: 500 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'} 
            <span className="ml-1 text-xs">
              ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1.8, poor: 3.0 })}>
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}s` : '...'} 
            <span className="ml-1 text-xs">
              ({getScoreText(metrics.fcp, { good: 1.8, poor: 3.0 })})
            </span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'} 
            <span className="ml-1 text-xs">
              ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
            </span>
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/20">
        <div className="text-xs text-gray-400">
          Core Web Vitals monitoring
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;