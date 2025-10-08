import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetricsUpdate, 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    if (currentMetrics.lcp && currentMetrics.lcp > 2500) score -= 15;
    if (currentMetrics.fid && currentMetrics.fid > 100) score -= 20;
    if (currentMetrics.cls && currentMetrics.cls > 0.1) score -= 10;
    return Math.max(0, score);
  };

  const updateMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const newMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
    };

    // Get LCP (Largest Contentful Paint)
    try {
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        const lcpEntry = lcpEntries[lcpEntries.length - 1] as PerformanceEntry;
        newMetrics.lcp = lcpEntry.startTime;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error getting LCP:', error);
    }

    // Get FID (First Input Delay)
    try {
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fidEntry = fidEntries[0] as any;
        newMetrics.fid = fidEntry.processingStart - fidEntry.startTime;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error getting FID:', error);
    }

    // Get CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      for (const entry of clsEntries) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      newMetrics.cls = clsValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error getting CLS:', error);
    }

    // Get FCP (First Contentful Paint)
    try {
      const fcpEntries = performance.getEntriesByType('paint');
      const fcpEntry = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        newMetrics.fcp = fcpEntry.startTime;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error getting FCP:', error);
    }

    // Get TTFB (Time to First Byte)
    try {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as any;
        newMetrics.ttfb = navEntry.responseStart - navEntry.requestStart;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error getting TTFB:', error);
    }

    setMetrics(newMetrics);
    
    const score = getPerformanceScore(newMetrics);
    setPerformanceScore(score);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    // Initial metrics collection
    const timer = setTimeout(updateMetrics, 1000);
    
    // Set up observer for performance entries
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(() => {
        updateMetrics();
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Error setting up performance observer:', error);
      }
      
      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [updateMetrics]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!showDetails && !isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
        >
          Performance: {performanceScore}/100
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">Overall Score</span>
          <div className="flex items-center space-x-2">
            <span className={`font-bold ${getScoreColor(performanceScore)}`}>
              {performanceScore}/100
            </span>
            <span className="text-xs text-gray-500">
              {getScoreLabel(performanceScore)}
            </span>
          </div>
        </div>
        
        {metrics.lcp !== null && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">LCP</span>
            <span className={`text-sm ${metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}`}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
        
        {metrics.fid !== null && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">FID</span>
            <span className={`text-sm ${metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}`}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">CLS</span>
            <span className={`text-sm ${metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}`}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.fcp !== null && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">FCP</span>
            <span className={`text-sm ${metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}`}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">TTFB</span>
            <span className={`text-sm ${metrics.ttfb > 600 ? 'text-red-500' : 'text-green-500'}`}>
              {Math.round(metrics.ttfb)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;