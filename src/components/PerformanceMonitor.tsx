import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
}

interface PerformanceRecommendations {
  type: 'good' | 'needs-improvement' | 'poor';
  message: string;
  action: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendations[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!('hadRecentInput' in entry) || !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // First Meaningful Paint (estimated)
      const paintEntries = performance.getEntriesByType('paint');
      const fmp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fmp) {
        setMetrics(prev => ({ ...prev, fmp: fmp.startTime }));
      }
    }

    // Show monitor after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (metrics) {
      const newRecommendations: PerformanceRecommendations[] = [];

      // FCP recommendations
      if (metrics.fcp > 2000) {
        newRecommendations.push({
          type: 'poor',
          message: 'First Contentful Paint is too slow',
          action: 'Optimize critical rendering path and reduce server response time'
        });
      } else if (metrics.fcp > 1000) {
        newRecommendations.push({
          type: 'needs-improvement',
          message: 'First Contentful Paint could be faster',
          action: 'Consider image optimization and CSS minification'
        });
      }

      // LCP recommendations
      if (metrics.lcp > 4000) {
        newRecommendations.push({
          type: 'poor',
          message: 'Largest Contentful Paint is very slow',
          action: 'Optimize images, implement lazy loading, and improve server performance'
        });
      } else if (metrics.lcp > 2500) {
        newRecommendations.push({
          type: 'needs-improvement',
          message: 'Largest Contentful Paint needs improvement',
          action: 'Optimize hero images and critical resources'
        });
      }

      // FID recommendations
      if (metrics.fid > 300) {
        newRecommendations.push({
          type: 'poor',
          message: 'First Input Delay is too high',
          action: 'Reduce JavaScript execution time and optimize event handlers'
        });
      }

      // CLS recommendations
      if (metrics.cls > 0.25) {
        newRecommendations.push({
          type: 'poor',
          message: 'Cumulative Layout Shift is too high',
          action: 'Set explicit dimensions for images and avoid layout shifts'
        });
      } else if (metrics.cls > 0.1) {
        newRecommendations.push({
          type: 'needs-improvement',
          message: 'Cumulative Layout Shift could be improved',
          action: 'Reserve space for dynamic content and optimize loading'
        });
      }

      setRecommendations(newRecommendations);
    }
  }, [metrics]);

  const getScoreColor = (type: string) => {
    switch (type) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getScoreBg = (type: string) => {
    switch (type) {
      case 'good': return 'bg-green-100 dark:bg-green-900/20';
      case 'needs-improvement': return 'bg-yellow-100 dark:bg-yellow-900/20';
      case 'poor': return 'bg-red-100 dark:bg-red-900/20';
      default: return 'bg-gray-100 dark:bg-gray-900/20';
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 p-4 z-50"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>

      {metrics && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-50 dark:bg-slate-700 p-2 rounded">
              <div className="text-gray-600 dark:text-gray-400">FCP</div>
              <div className="font-mono">{Math.round(metrics.fcp)}ms</div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700 p-2 rounded">
              <div className="text-gray-600 dark:text-gray-400">LCP</div>
              <div className="font-mono">{Math.round(metrics.lcp)}ms</div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700 p-2 rounded">
              <div className="text-gray-600 dark:text-gray-400">FID</div>
              <div className="font-mono">{Math.round(metrics.fid)}ms</div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700 p-2 rounded">
              <div className="text-gray-600 dark:text-gray-400">CLS</div>
              <div className="font-mono">{metrics.cls.toFixed(3)}</div>
            </div>
          </div>

          {recommendations.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Recommendations
              </h4>
              <div className="space-y-2">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${getScoreBg(rec.type)}`}
                  >
                    <div className={`text-sm font-medium ${getScoreColor(rec.type)} mb-1`}>
                      {rec.message}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {rec.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-700">
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded-md transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;