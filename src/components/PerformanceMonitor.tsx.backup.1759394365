<<<<<<< HEAD
import React, { useEffect } from 'react';
import { measurePerformance } from '../utils/performance';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const logPerformanceMetrics = () => {
      const metrics = measurePerformance();
      if (metrics) {
        console.log('Performance Metrics:', metrics);
        
        // Send to analytics service in production
        if (process.env.NODE_ENV === 'production') {
          // Example: sendToAnalytics('performance', metrics);
        }
      }
    };

    // Log performance after page load
    if (document.readyState === 'complete') {
      logPerformanceMetrics();
    } else {
      window.addEventListener('load', logPerformanceMetrics);
    }

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    return () => {
      window.removeEventListener('load', logPerformanceMetrics);
    };
  }, []);

  return null;
=======
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Database, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkSpeed?: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

      // Get Web Vitals if available
      const vitals = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint,
        firstContentfulPaint,
        largestContentfulPaint: 0, // Would need web-vitals library
        cumulativeLayoutShift: 0, // Would need web-vitals library
        firstInputDelay: 0, // Would need web-vitals library
        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        memoryUsage: (performance as any).memory?.usedJSHeapSize,
        networkSpeed: navigator.connection?.effectiveType || 'unknown'
      };

      setMetrics(vitals);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);

  const getPerformanceGrade = (metric: number, thresholds: { good: number; poor: number }) => {
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Performance Monitor"
      >
        <Activity className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border p-6 w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {metrics ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Load Time</span>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(getPerformanceGrade(metrics.loadTime, { good: 1000, poor: 3000 }))}`}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">First Paint</span>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(getPerformanceGrade(metrics.firstPaint, { good: 1000, poor: 3000 }))}`}>
              {metrics.firstPaint.toFixed(0)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Memory Usage</span>
            </div>
            <span className="text-xs text-gray-600">
              {metrics.memoryUsage ? `${(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wifi className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Network</span>
            </div>
            <span className="text-xs text-gray-600 capitalize">
              {metrics.networkSpeed}
            </span>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <Activity className="h-8 w-8 mx-auto mb-2 animate-pulse" />
          <p className="text-sm">Collecting metrics...</p>
        </div>
      )}
    </div>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bd1a
};

export default PerformanceMonitor;