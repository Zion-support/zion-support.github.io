import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  bundleSize: number;
  networkLatency: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        const navigationEntries = performance.getEntriesByType('navigation');
        
        if (navigation) {
          const newMetrics: PerformanceMetrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            cumulativeLayoutShift: 0,
            firstInputDelay: 0,
            timeToInteractive: navigation.domInteractive - navigation.fetchStart,
            bundleSize: 0,
            networkLatency: navigation.responseEnd - navigation.requestStart
          };

          // Get paint metrics
          paint.forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              newMetrics.firstContentfulPaint = entry.startTime;
            }
          });

          // Get Core Web Vitals
          if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                newMetrics.largestContentfulPaint = lastEntry.startTime;
              }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Cumulative Layout Shift
            const clsObserver = new PerformanceObserver((list) => {
              let clsValue = 0;
              for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                  clsValue += (entry as any).value;
                }
              }
              newMetrics.cumulativeLayoutShift = clsValue;
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                newMetrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
                break;
              }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
          }

          // Estimate bundle size
          const scripts = document.querySelectorAll('script[src]');
          let totalSize = 0;
          scripts.forEach(script => {
            const src = script.getAttribute('src');
            if (src && src.includes('js')) {
              // Rough estimation based on common patterns
              totalSize += 100; // KB
            }
          });
          newMetrics.bundleSize = totalSize;

          setMetrics(newMetrics);
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // Deduct points for poor performance
    if (metrics.firstContentfulPaint > 2000) score -= 20;
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
    if (metrics.firstInputDelay > 300) score -= 20;
    if (metrics.loadTime > 3000) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!metrics) return null;

  const score = getPerformanceScore();
  const scoreColor = getPerformanceColor(score);

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-40 p-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-20 left-4 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Score</span>
              <span className={`text-2xl font-bold ${scoreColor}`}>{score}/100</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {Math.round(metrics.loadTime)}ms
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-500" />
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {Math.round(metrics.firstContentfulPaint)}ms
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {Math.round(metrics.largestContentfulPaint)}ms
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-purple-500" />
              <span className="text-gray-600 dark:text-gray-400">CLS:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4 text-red-500" />
              <span className="text-gray-600 dark:text-gray-400">FID:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {Math.round(metrics.firstInputDelay)}ms
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-indigo-500" />
              <span className="text-gray-600 dark:text-gray-400">Bundle:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                ~{metrics.bundleSize}KB
              </span>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Recommendations:</h4>
            <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
              {score < 90 && (
                <>
                  {metrics.firstContentfulPaint > 2000 && (
                    <li>• Optimize First Contentful Paint</li>
                  )}
                  {metrics.largestContentfulPaint > 4000 && (
                    <li>• Improve Largest Contentful Paint</li>
                  )}
                  {metrics.cumulativeLayoutShift > 0.1 && (
                    <li>• Reduce Cumulative Layout Shift</li>
                  )}
                  {metrics.firstInputDelay > 300 && (
                    <li>• Optimize First Input Delay</li>
                  )}
                </>
              )}
              {score >= 90 && (
                <li>• Excellent performance! Keep it up!</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
