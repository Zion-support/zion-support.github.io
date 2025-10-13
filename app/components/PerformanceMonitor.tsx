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
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  debug?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  debug = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = (metric: any) => {
      setMetrics(prev => {
        const newMetrics = {
          ...prev,
          [metric.name.toLowerCase()]: metric.value,
        };
        
        onMetricsUpdate?.(newMetrics);
        
        if (debug) {
          console.log(`[Performance] ${metric.name}:`, metric.value);
        }
        
        return newMetrics;
      });
    };

    // Measure Core Web Vitals
    onCLS(updateMetrics, { reportAllChanges: true });
    onINP(updateMetrics);
    onFCP(updateMetrics);
    onLCP(updateMetrics, { reportAllChanges: true });
    onTTFB(updateMetrics);

    // Monitor resource loading
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (debug) {
            console.log('[Performance] Resource:', entry.name, entry.duration);
          }
        }
      });

      observer.observe({ entryTypes: ['resource', 'navigation', 'paint'] });

      return () => observer.disconnect();
    }
  }, [onMetricsUpdate, debug]);

  // Performance score calculation
  const getPerformanceScore = () => {
    const scores = [];
    
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) scores.push(100);
      else if (metrics.lcp <= 4000) scores.push(80);
      else scores.push(60);
    }
    
    if (metrics.inp !== null) {
      if (metrics.inp <= 100) scores.push(100);
      else if (metrics.inp <= 300) scores.push(80);
      else scores.push(60);
    }
    
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) scores.push(100);
      else if (metrics.cls <= 0.25) scores.push(80);
      else scores.push(60);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  };

  const performanceScore = getPerformanceScore();

  // Debug panel toggle
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!debug && !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className={`font-semibold ${
            performanceScore >= 90 ? 'text-green-400' :
            performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {performanceScore}/100
          </span>
        </div>
        
        {metrics.lcp !== null && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.inp !== null && (
          <div className="flex justify-between">
            <span>INP:</span>
            <span className={metrics.inp <= 100 ? 'text-green-400' : 'text-red-400'}>
              {metrics.inp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.fcp !== null && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-red-400'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-red-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;