import React, { useState, useEffect } from 'react';
import { Activity, X, Eye, EyeOff } from 'lucide-react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls?: number;
  fid?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-monitor') === 'true';

    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onFID((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-lg transition-all duration-300 ${
        isMinimized ? 'w-12 h-12' : 'w-64'
      }`}>
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Activity className="w-5 h-5" />
          </button>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-white">Performance</span>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  title="Minimize"
                >
                  <EyeOff className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  title="Close"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              {metrics.cls && (
                <div className={`${metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>
                  CLS: {metrics.cls.toFixed(3)}
                </div>
              )}
              {metrics.fcp && (
                <div className={`${metrics.fcp > 3000 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
                  FCP: {Math.round(metrics.fcp)}ms
                </div>
              )}
              {metrics.lcp && (
                <div className={`${metrics.lcp > 4000 ? 'text-red-400' : metrics.lcp > 2500 ? 'text-yellow-400' : 'text-green-400'}`}>
                  LCP: {Math.round(metrics.lcp)}ms
                </div>
              )}
              {metrics.fid && (
                <div className={`${metrics.fid > 300 ? 'text-red-400' : metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}`}>
                  FID: {Math.round(metrics.fid)}ms
                </div>
              )}
              {metrics.ttfb && (
                <div className={`${metrics.ttfb > 800 ? 'text-red-400' : metrics.ttfb > 600 ? 'text-yellow-400' : 'text-green-400'}`}>
                  TTFB: {Math.round(metrics.ttfb)}ms
                </div>
              )}
            </div>

            <div className="mt-3 pt-2 border-t border-gray-700">
              <div className="text-xs text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Good</span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Needs Improvement</span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Poor</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;