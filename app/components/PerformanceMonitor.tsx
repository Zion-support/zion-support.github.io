'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Simulate other metrics for demo purposes
      const firstInputDelay = Math.random() * 100;
      const cumulativeLayoutShift = Math.random() * 0.1;
      const timeToInteractive = loadTime + Math.random() * 1000;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        timeToInteractive
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

  const getPerformanceScore = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800/90 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-2 text-white text-sm hover:bg-slate-700/90 transition-colors"
      >
        Performance
      </button>

      {isVisible && (
        <div className="absolute bottom-12 left-0 bg-slate-800/95 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 w-80 shadow-xl">
          <h3 className="text-white font-semibold mb-3">Performance Metrics</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Load Time:</span>
              <span className={getScoreColor(getPerformanceScore(metrics.loadTime, { good: 1000, needsImprovement: 3000 }))}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">First Contentful Paint:</span>
              <span className={getScoreColor(getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }))}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Largest Contentful Paint:</span>
              <span className={getScoreColor(getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }))}>
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">First Input Delay:</span>
              <span className={getScoreColor(getPerformanceScore(metrics.firstInputDelay, { good: 100, needsImprovement: 300 }))}>
                {metrics.firstInputDelay.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Cumulative Layout Shift:</span>
              <span className={getScoreColor(getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }))}>
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Time to Interactive:</span>
              <span className={getScoreColor(getPerformanceScore(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 }))}>
                {metrics.timeToInteractive.toFixed(0)}ms
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;