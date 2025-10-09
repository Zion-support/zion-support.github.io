'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
  timeToInteractive: number;
  renderTime: number;
  memoryUsage: number;
  isOnline: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const collectMetrics = () => {
      if (typeof window === 'undefined' || !('performance' in window)) {
        return;
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');

      const firstContentfulPaint = paintEntries.find(
        (entry) => entry.name === 'first-contentful-paint'
      )?.startTime || 0;

      const largestContentfulPaint = paintEntries.find(
        (entry) => entry.name === 'largest-contentful-paint'
      )?.startTime || 0;

      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      // Network status
      const isOnline = navigator.onLine;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need more complex measurement
        cumulativeLayoutShift: 0, // Would need more complex measurement
        totalBlockingTime: 0, // Would need more complex measurement
        speedIndex: 0, // Would need more complex measurement
        timeToInteractive: 0, // Would need more complex measurement
        renderTime,
        memoryUsage,
        isOnline
      });
    };

    // Collect metrics after page load
    const timer = setTimeout(collectMetrics, 1000);
    
    // Show monitor after a delay
    const visibilityTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!metrics || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-green-400">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="text-blue-400">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="text-purple-400">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className="text-yellow-400">{metrics.renderTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-red-400">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <span className={metrics.isOnline ? 'text-green-400' : 'text-red-400'}>
            {metrics.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;