'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get performance metrics
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need to be measured separately
        cumulativeLayoutShift: 0 // Would need to be measured separately
      });
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      getPerformanceMetrics();
    } else {
      window.addEventListener('load', getPerformanceMetrics);
    }

    return () => {
      window.removeEventListener('load', getPerformanceMetrics);
    };
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-cyan-400">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>First Contentful Paint:</span>
          <span className="text-cyan-400">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Largest Contentful Paint:</span>
          <span className="text-cyan-400">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;