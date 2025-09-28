import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
}

interface EnhancedPerformanceMonitorProps {
  showDashboard: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({ 
  showDashboard, 
  onMetricsUpdate 
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  const updateMetrics = useCallback(() => {
    const newMetrics: Partial<PerformanceMetrics> = {};

    // Get performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize;
      }
    }

    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics as PerformanceMetrics);
    }
  }, [onMetricsUpdate]);

  const calculatePerformanceScore = useCallback(() => {
    const scores = [];
    
    // FCP score (First Contentful Paint)
    if (metrics.fcp) {
      if (metrics.fcp <= 1800) scores.push(100);
      else if (metrics.fcp <= 3000) scores.push(75);
      else scores.push(50);
    }
    
    // LCP score (Largest Contentful Paint)
    if (metrics.lcp) {
      if (metrics.lcp <= 2500) scores.push(100);
      else if (metrics.lcp <= 4000) scores.push(75);
      else scores.push(50);
    }
    
    // FID score (First Input Delay)
    if (metrics.fid) {
      if (metrics.fid <= 100) scores.push(100);
      else if (metrics.fid <= 300) scores.push(75);
      else scores.push(50);
    }
    
    // CLS score (Cumulative Layout Shift)
    if (metrics.cls !== undefined) {
      if (metrics.cls <= 0.1) scores.push(100);
      else if (metrics.cls <= 0.25) scores.push(75);
      else scores.push(50);
    }
    
    const averageScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
    setPerformanceScore(averageScore);
  }, [metrics]);

  useEffect(() => {
    calculatePerformanceScore();
  }, [calculatePerformanceScore]);

  useEffect(() => {
    if (!showDashboard) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input': {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
            break;
          }
          case 'layout-shift': {
            const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
            if (!layoutShiftEntry.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (layoutShiftEntry.value || 0) 
              }));
            }
            break;
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [showDashboard, updateMetrics]);

  if (!showDashboard) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg max-w-sm border border-gray-600">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold">Enhanced Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {/* Performance Score */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-300">Performance Score</span>
          <span className={`text-sm font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore.toFixed(0)}/100
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              performanceScore >= 90 ? 'bg-green-500' : 
              performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </div>
      
      {isVisible && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp && metrics.fcp <= 1800 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.fcp?.toFixed(0) || 'N/A'}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp && metrics.lcp <= 2500 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.lcp?.toFixed(0) || 'N/A'}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid && metrics.fid <= 100 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.fid?.toFixed(0) || 'N/A'}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls && metrics.cls <= 0.1 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.cls?.toFixed(3) || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb && metrics.ttfb <= 600 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.ttfb?.toFixed(0) || 'N/A'}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage && metrics.memoryUsage / 1024 / 1024 <= 50 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.memoryUsage ? (metrics.memoryUsage / 1024 / 1024).toFixed(1) + 'MB' : 'N/A'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;