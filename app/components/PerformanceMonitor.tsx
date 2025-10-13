import React, { useState, useEffect } from 'react';
import { BarChart3, Zap, Clock, Eye, MousePointer, Download } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const measurePerformance = () => {
      // Get Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              lcp: entry.startTime
            }));
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure other metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          fcp: navigation.domContentLoadedEventEnd - navigation.navigationStart
        }));
      }

      return () => observer.disconnect();
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !localStorage.getItem('debug-performance')) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* LCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">LCP</span>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${getScoreColor(metrics?.lcp, { good: 2500, poor: 4000 })}`}>
                  {metrics?.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-gray-400">
                  {getScoreText(metrics?.lcp, { good: 2500, poor: 4000 })}
                </div>
              </div>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MousePointer className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">FID</span>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${getScoreColor(metrics?.fid, { good: 100, poor: 300 })}`}>
                  {metrics?.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-gray-400">
                  {getScoreText(metrics?.fid, { good: 100, poor: 300 })}
                </div>
              </div>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">CLS</span>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${getScoreColor(metrics?.cls, { good: 0.1, poor: 0.25 })}`}>
                  {metrics?.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </div>
                <div className="text-xs text-gray-400">
                  {getScoreText(metrics?.cls, { good: 0.1, poor: 0.25 })}
                </div>
              </div>
            </div>

            {/* FCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">FCP</span>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${getScoreColor(metrics?.fcp, { good: 1800, poor: 3000 })}`}>
                  {metrics?.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-gray-400">
                  {getScoreText(metrics?.fcp, { good: 1800, poor: 3000 })}
                </div>
              </div>
            </div>

            {/* TTFB */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">TTFB</span>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${getScoreColor(metrics?.ttfb, { good: 800, poor: 1800 })}`}>
                  {metrics?.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-gray-400">
                  {getScoreText(metrics?.ttfb, { good: 800, poor: 1800 })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="text-xs text-gray-400 text-center">
              Performance monitoring is enabled for development
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
