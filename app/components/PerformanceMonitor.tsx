import React, { useState, useEffect, useCallback } from 'react';
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
  debug = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const updated = { ...prev, [name]: value };
      onMetricsUpdate?.(updated);
      
      if (debug) {
        console.log(`Performance metric updated - ${name}:`, value);
      }
      
      return updated;
    });
  }, [onMetricsUpdate, debug]);

  useEffect(() => {
    // Monitor Core Web Vitals
    onCLS((metric) => {
      updateMetric('cls', metric.value);
    });

    onINP((metric) => {
      updateMetric('inp', metric.value);
    });

    onFCP((metric) => {
      updateMetric('fcp', metric.value);
    });

    onLCP((metric) => {
      updateMetric('lcp', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('ttfb', metric.value);
    });

    // Monitor additional performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor memory usage
      const checkMemory = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          if (debug) {
            console.log('Memory usage:', {
              used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
              total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
              limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB',
            });
          }
        }
      };

      // Check memory every 30 seconds
      const memoryInterval = setInterval(checkMemory, 30000);
      
      // Monitor navigation timing
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        const loadTime = navigationTiming.loadEventEnd - navigationTiming.loadEventStart;
        if (debug) {
          console.log('Page load time:', loadTime + 'ms');
        }
      }

      return () => {
        clearInterval(memoryInterval);
      };
    }
  }, [updateMetric, debug]);

  // Performance optimization recommendations
  const getRecommendations = useCallback(() => {
    const recommendations: string[] = [];

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('LCP is above 2.5s - consider optimizing images and reducing server response time');
    }

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('FCP is above 1.8s - consider optimizing critical rendering path');
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('CLS is above 0.1 - consider fixing layout shifts');
    }

    if (metrics.inp && metrics.inp > 200) {
      recommendations.push('INP is above 200ms - consider optimizing JavaScript execution');
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('TTFB is above 600ms - consider optimizing server response time');
    }

    return recommendations;
  }, [metrics]);

  // Don't render anything in production unless debug is enabled
  if (!debug && process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="performance-monitor">
      {debug && (
        <div className="fixed top-4 left-4 z-50 bg-slate-800/95 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-white text-xs max-w-xs">
          <h3 className="font-semibold mb-2">Performance Metrics</h3>
          <div className="space-y-1">
            <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Loading...'}</div>
            <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Loading...'}</div>
            <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}</div>
            <div>INP: {metrics.inp ? `${metrics.inp.toFixed(0)}ms` : 'Loading...'}</div>
            <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Loading...'}</div>
          </div>
          
          {getRecommendations().length > 0 && (
            <div className="mt-3 pt-2 border-t border-white/20">
              <h4 className="font-semibold mb-1">Recommendations:</h4>
              <ul className="text-xs space-y-1">
                {getRecommendations().map((rec, index) => (
                  <li key={index} className="text-yellow-400">• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
