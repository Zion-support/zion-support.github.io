import React, { useEffect, useState } from 'react';
import { trackPerformance } from '../utils/analytics';
import { PERFORMANCE_GOALS } from '../utils/seoConstants';

interface PerformanceMetrics {
  lcp: number | null;
  fcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
  inp: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fcp: null,
    cls: null,
    fid: null,
    ttfb: null,
    inp: null,
    loadTime: null,
    memoryUsage: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const initWebVitals = async () => {
      try {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
        
        const handleMetric = (metric: any) => {
          const { name, value, delta } = metric;
          
          setMetrics(prev => ({
            ...prev,
            [name.toLowerCase()]: value,
          }));

          // Track in analytics
          trackPerformance(name, value, {
            delta,
            rating: metric.rating,
            navigationType: metric.navigationType,
          });

          // Log in development
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] ${name}:`, {
              value: Math.round(value),
              rating: metric.rating,
              delta: Math.round(delta),
            });
          }
        };

        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
      trackPerformance('page_load_time', loadTime);
    };

    // Monitor memory usage
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
        trackPerformance('memory_usage', memoryUsage, {
          totalJSHeapSize: memory.totalJSHeapSize / 1024 / 1024,
          jsHeapSizeLimit: memory.jsHeapSizeLimit / 1024 / 1024,
        });
      }
    };

    // Monitor performance entries
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const ttfb = navEntry.responseStart - navEntry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
          trackPerformance('ttfb', ttfb);
        }
      }
    });

    // Initialize monitoring
    initWebVitals();
    window.addEventListener('load', handleLoad);
    observer.observe({ entryTypes: ['navigation'] });

    // Update memory usage periodically
    const memoryInterval = setInterval(updateMemoryUsage, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      observer.disconnect();
      clearInterval(memoryInterval);
    };
  }, []);

  // Performance recommendations
  const getRecommendations = (): string[] => {
    const recommendations: string[] = [];

    if (metrics.lcp && metrics.lcp > PERFORMANCE_GOALS.LCP) {
      recommendations.push(`LCP is ${Math.round(metrics.lcp)}ms (target: ${PERFORMANCE_GOALS.LCP}ms). Consider optimizing images and critical resources.`);
    }

    if (metrics.fcp && metrics.fcp > PERFORMANCE_GOALS.FCP) {
      recommendations.push(`FCP is ${Math.round(metrics.fcp)}ms (target: ${PERFORMANCE_GOALS.FCP}ms). Consider optimizing CSS and JavaScript.`);
    }

    if (metrics.cls && metrics.cls > PERFORMANCE_GOALS.CLS) {
      recommendations.push(`CLS is ${metrics.cls.toFixed(3)} (target: ${PERFORMANCE_GOALS.CLS}). Consider fixing layout shifts.`);
    }

    if (metrics.fid && metrics.fid > PERFORMANCE_GOALS.FID) {
      recommendations.push(`FID is ${Math.round(metrics.fid)}ms (target: ${PERFORMANCE_GOALS.FID}ms). Consider reducing JavaScript execution time.`);
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      recommendations.push(`Memory usage is ${Math.round(metrics.memoryUsage)}MB. Consider optimizing memory usage.`);
    }

    return recommendations;
  };

  // Show performance info in development
  if (process.env.NODE_ENV === 'development' && metrics.lcp !== null) {
    const recommendations = getRecommendations();
    
    return (
      <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm text-xs z-50">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
        <div className="space-y-1">
          {metrics.lcp && <div>LCP: {Math.round(metrics.lcp)}ms</div>}
          {metrics.fcp && <div>FCP: {Math.round(metrics.fcp)}ms</div>}
          {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
          {metrics.fid && <div>FID: {Math.round(metrics.fid)}ms</div>}
          {metrics.ttfb && <div>TTFB: {Math.round(metrics.ttfb)}ms</div>}
          {metrics.loadTime && <div>Load: {Math.round(metrics.loadTime)}ms</div>}
          {metrics.memoryUsage && <div>Memory: {Math.round(metrics.memoryUsage)}MB</div>}
        </div>
        {recommendations.length > 0 && (
          <div className="mt-2 pt-2 border-t border-slate-600">
            <div className="font-semibold text-yellow-400">Recommendations:</div>
            <ul className="mt-1 space-y-1">
              {recommendations.map((rec, index) => (
                <li key={index} className="text-yellow-300">• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;