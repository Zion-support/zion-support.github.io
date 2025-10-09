import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
  timeToInteractive: number;
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

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need to be measured separately
        cumulativeLayoutShift: 0, // Would need to be measured separately
        totalBlockingTime: 0, // Would need to be measured separately
        speedIndex: 0, // Would need to be measured separately
        timeToInteractive: navigation.domInteractive - navigation.navigationStart,
      };

      setMetrics(performanceMetrics);
    };

    // Collect metrics after page load
    const timer = setTimeout(collectMetrics, 1000);

    // Show/hide with keyboard shortcut
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  const getScore = (value: number, thresholds: { good: number; needsImprovement: number }) => {
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

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-lg rounded-lg p-4 text-white text-xs font-mono max-w-sm z-50 border border-white/20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(getScore(metrics.loadTime, { good: 2000, needsImprovement: 4000 }))}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }))}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }))}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={getScoreColor(getScore(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 }))}>
            {metrics.timeToInteractive.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/20 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;