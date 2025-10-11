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

<<<<<<< HEAD
    // Only show in development or when performance monitoring is enabled
      const shouldMonitor = const shouldMonitor = process.env.NODE_ENV === 'development' ||;
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {;
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    }

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => updateMetrics({ cls: metric.value }));
        getFID((metric) => updateMetrics({ fid: metric.value }));
        getFCP((metric) => updateMetrics({ fcp: metric.value }));
        getLCP((metric) => updateMetrics({ lcp: metric.value }));
        getTTFB((metric) => updateMetrics({ ttfb: metric.value }));
      })
    }

    // Monitor performance with Performance Observer
    if ('PerformanceObserver' in window) {
      const observer = const observer = const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime })
          }
          if (entry.entryType === 'first-input') {
            updateMetrics({ fid: entry.processingStart - entry.startTime })
          }
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              updateMetrics({ fcp: entry.startTime })
            }
          }
        })
      })

      try {;
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'paint'] });
      } catch (e) {;
        console.warn('Performance Observer not supported:', e);
      }

      return () => observer.disconnect();
    }

    // Show performance panel after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
=======
    // Wait for page to load
    if (document.readyState === 'complete') {
      getPerformanceMetrics();
    } else {
      window.addEventListener('load', getPerformanceMetrics);
    }

    return () => {
      window.removeEventListener('load', getPerformanceMetrics);
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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

<<<<<<< HEAD
  return ()
=======
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <button
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
<<<<<<< HEAD
      <div className="space-y-1" /></div>
        {metrics.lcp && ()
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })} /></span>
              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
            </span>
          </div>
        )},
    {metrics.fid && ()
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })} /></span>
              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})
            </span>
          </div>
        )},
    {metrics.cls && ()
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })} /></span>
              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
            </span>
          </div>
        )},
    {metrics.fcp && ()
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })} /></span>
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
            </span>
          </div>
        )},
    {metrics.ttfb && ()
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })} /></span>
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
            </span>
          </div>
        )}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      </div>
    </div>
  );
};

export default PerformanceMonitor;