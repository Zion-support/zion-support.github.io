'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  loadTime: number | null;
}

interface PerformanceRecommendation {
  type: 'warning' | 'error' | 'info';
  message: string;
  impact: 'high' | 'medium' | 'low';
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };


  const generateRecommendations = (metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recs.push({
        type: 'warning',
        message: 'First Contentful Paint is slow. Consider optimizing critical CSS and reducing render-blocking resources.',
        impact: 'high'
      });
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recs.push({
        type: 'error',
        message: 'Largest Contentful Paint is poor. Optimize images and lazy load non-critical content.',
        impact: 'high'
      });
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recs.push({
        type: 'warning',
        message: 'Cumulative Layout Shift is high. Ensure images have dimensions and avoid dynamic content insertion.',
        impact: 'medium'
      });
    }

    if (metrics.fid && metrics.fid > 100) {
      recs.push({
        type: 'warning',
        message: 'First Input Delay is high. Reduce JavaScript execution time and use code splitting.',
        impact: 'medium'
      });
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      recs.push({
        type: 'info',
        message: 'Memory usage is high. Consider implementing memory optimization techniques.',
        impact: 'low'
      });
    }

    return recs;
  };

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev.cls || 0) + (entry as any).value 
            }));
          }
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure TTFB
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
      }));
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  useEffect(() => {
    const newRecommendations = generateRecommendations(metrics);
    setRecommendations(newRecommendations);
  }, [metrics]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2"
        aria-label="Toggle performance metrics"
      >
        <Activity className="w-4 h-4" />
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-96 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-blue-500" />
            Performance Metrics
          </h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${metrics.fid ? getMetricColor(metrics.fid, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cls ? getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Memory:</span>
              <span className={`font-mono ${metrics.memoryUsage ? getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 }) : 'text-gray-400'}`}>
                {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
              </span>
            </div>
          </div>

          {recommendations.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                Recommendations
              </h4>
              <div className="space-y-2">
                {recommendations.map((rec, index) => (
                  <div key={index} className={`p-2 rounded text-xs ${
                    rec.type === 'error' ? 'bg-red-50 text-red-700' :
                    rec.type === 'warning' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-blue-50 text-blue-700'
                  }`}>
                    <div className="flex items-start">
                      {rec.type === 'error' ? <AlertTriangle className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" /> :
                       rec.type === 'warning' ? <AlertTriangle className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" /> :
                       <CheckCircle className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />}
                      <span>{rec.message}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div className="flex items-center mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Good
              </div>
              <div className="flex items-center mb-1">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Needs Improvement
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Poor
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;