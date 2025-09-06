<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { usePerformance } from '../hooks/usePerformance';

const PerformanceMonitor: React.FC = () => {
  const metrics = usePerformance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function PerformanceMonitor() {
  return (
<<<<<<< HEAD
    <div className="performance-monitor">
      <p>Performance Monitor</p>
    </div>
  );
}
        }
      }
;
    },;
,;
    // Initial tracking,;
    trackPageLoad(),;
    trackMemory(),;
    trackNetwork(),;
,;
    // Set up periodic tracking,;
    const interval = setInterval(() => {,;
      trackMemory(),;
      trackNetwork();
    }, 10000),;
,;
    // Track online/offline status,;
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnlin: e: true })),;
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnlin: e: false })),;
,;
    window.addEventListener('online', handleOnline),;
    window.addEventListener('offline', handleOffline),;
,;
    return () => {,;
      clearInterval(interval),;
      window.removeEventListener('online', handleOnline),;
      window.removeEventListener('offline', handleOffline);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;
=======
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-semibold">Performance</div>
      <div>Render: {metrics.renderTime}ms</div>
      <div>Load: {metrics.loadTime}ms</div>
      {metrics.memoryUsage && (
        <div>Memory: {metrics.memoryUsage}MB</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from 'react';

<<<<<<< HEAD
import React from 'react';
;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  return <>{children}</>;
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (!window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Web Vitals
      let firstInputDelay = 0;
      let cumulativeLayoutShift = 0;

      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        // For now, we'll use placeholder values
        firstInputDelay = 0;
        cumulativeLayoutShift = 0;
      }

      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        memoryUsage
      });
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const getPerformanceGrade = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const formatTime = (ms: number) => `${ms.toFixed(2)}ms`;
  const formatMemory = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(2)}MB`;

  if (!metrics) return null;

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white px-3 py-2 rounded text-sm hover:bg-gray-700"
        aria-label="Toggle performance metrics"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 w-80 border">
          <h3 className="font-semibold mb-3">Performance Metrics</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span className={getPerformanceGrade(metrics.loadTime, { good: 1000, needsImprovement: 3000 }) === 'good' ? 'text-green-600' : 'text-red-600'}>
                {formatTime(metrics.loadTime)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>First Contentful Paint:</span>
              <span className={getPerformanceGrade(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }) === 'good' ? 'text-green-600' : 'text-red-600'}>
                {formatTime(metrics.firstContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Largest Contentful Paint:</span>
              <span className={getPerformanceGrade(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }) === 'good' ? 'text-green-600' : 'text-red-600'}>
                {formatTime(metrics.largestContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>First Input Delay:</span>
              <span className={getPerformanceGrade(metrics.firstInputDelay, { good: 100, needsImprovement: 300 }) === 'good' ? 'text-green-600' : 'text-red-600'}>
                {formatTime(metrics.firstInputDelay)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Cumulative Layout Shift:</span>
              <span className={getPerformanceGrade(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }) === 'good' ? 'text-green-600' : 'text-red-600'}>
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory Usage:</span>
                <span>{formatMemory(metrics.memoryUsage)}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="mt-3 text-xs text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
