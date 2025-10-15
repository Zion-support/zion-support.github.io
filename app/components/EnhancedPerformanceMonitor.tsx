import React, { useEffect, useState, useCallback } from 'react';
import { PerformanceMetrics, PerformanceConfig } from '../types/enhanced.types';

interface EnhancedPerformanceMonitorProps {
  config?: Partial<PerformanceConfig>;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  config = {},
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    firstMeaningfulPaint: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);

  const defaultConfig: PerformanceConfig = {
    enableLazyLoading: true,
    enablePreloading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableBundleAnalysis: false,
    enableServiceWorker: true,
    ...config
  };

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint > 3000) score -= 30;
    else if (metrics.firstContentfulPaint > 2000) score -= 20;
    else if (metrics.firstContentfulPaint > 1500) score -= 10;

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint > 4000) score -= 30;
    else if (metrics.largestContentfulPaint > 2500) score -= 20;
    else if (metrics.largestContentfulPaint > 2000) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 30;
    else if (metrics.cumulativeLayoutShift > 0.15) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;

    // FID scoring (0-100)
    if (metrics.firstInputDelay > 300) score -= 30;
    else if (metrics.firstInputDelay > 100) score -= 20;
    else if (metrics.firstInputDelay > 50) score -= 10;

    return Math.max(0, score);
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
    
    // Calculate CLS
    let cls = 0;
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            cls += (entry as any).value;
          }
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
    }

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: cls,
      firstInputDelay: 0, // Would need FID observer
      timeToInteractive: navigation.domInteractive - navigation.fetchStart,
      firstMeaningfulPaint: 0 // Would need FMP calculation
    };

    setMetrics(newMetrics);
    setPerformanceScore(calculatePerformanceScore(newMetrics));
    onMetricsUpdate?.(newMetrics);
  }, [calculatePerformanceScore, onMetricsUpdate]);

  useEffect(() => {
    // Measure performance after page load
    const measureAfterLoad = () => {
      setTimeout(measurePerformance, 1000);
    };

    if (document.readyState === 'complete') {
      measureAfterLoad();
    } else {
      window.addEventListener('load', measureAfterLoad);
    }

    return () => {
      window.removeEventListener('load', measureAfterLoad);
    };
  }, [measurePerformance]);

  // Performance optimizations
  useEffect(() => {
    if (defaultConfig.enableLazyLoading) {
      // Implement lazy loading for images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }

    if (defaultConfig.enablePreloading) {
      // Preload critical resources
      const criticalResources = [
        '/app/styles/futuristic.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        if (resource.includes('fonts.googleapis.com')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }
  }, [defaultConfig]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible && process.env.NODE_ENV === 'development') {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Show performance monitor"
      >
        📊
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-xl rounded-lg p-4 border border-gray-200 max-w-sm z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Close performance monitor"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        {/* Performance Score */}
        <div className="text-center">
          <div className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </div>
          <div className="text-sm text-gray-600">{getScoreLabel(performanceScore)}</div>
        </div>

        {/* Metrics */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Load Time:</span>
            <span className="font-mono">{metrics.loadTime.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">FCP:</span>
            <span className="font-mono">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">LCP:</span>
            <span className="font-mono">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">CLS:</span>
            <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">TTI:</span>
            <span className="font-mono">{metrics.timeToInteractive.toFixed(0)}ms</span>
          </div>
        </div>

        {/* Refresh Button */}
        <button
          onClick={measurePerformance}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;