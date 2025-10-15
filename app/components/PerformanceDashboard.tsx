import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, Database, Wifi, Cpu } from 'lucide-react';
import { logger } from '../utils/logger';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  memoryUsage?: number;
  networkLatency?: number;
  bundleSize?: number;
}

interface PerformanceDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  isVisible = false, 
  onClose 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Get performance metrics
  const getPerformanceMetrics = useCallback((): PerformanceMetrics | null => {
    if (typeof window === 'undefined' || !window.performance) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
    
    // Get memory usage if available
    const memory = (performance as any).memory;
    
    // Calculate bundle size (approximate)
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const bundleSize = scripts.reduce((total, script) => {
      const src = (script as HTMLScriptElement).src;
      return total + (src ? 50 : 0); // Approximate KB per script
    }, 0);

    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: 0, // Would need to be calculated separately
      firstInputDelay: 0, // Would need to be calculated separately
      memoryUsage: memory ? memory.usedJSHeapSize / 1024 / 1024 : undefined,
      networkLatency: navigation ? navigation.responseEnd - navigation.requestStart : undefined,
      bundleSize,
    };
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint' || entry.entryType === 'largest-contentful-paint') {
            setMetrics(getPerformanceMetrics());
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }

    // Update metrics periodically
    const interval = setInterval(() => {
      setMetrics(getPerformanceMetrics());
    }, 1000);

    return () => {
      observer?.disconnect();
      clearInterval(interval);
    };
  }, [getPerformanceMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Initialize monitoring
  useEffect(() => {
    if (isVisible) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isVisible, startMonitoring]);

  // Log performance data
  useEffect(() => {
    if (metrics) {
      logger.info('Performance metrics updated', metrics);
    }
  }, [metrics]);

  if (!isVisible) return null;

  const formatTime = (ms: number) => `${ms.toFixed(2)}ms`;
  const formatSize = (kb: number) => `${kb.toFixed(1)}KB`;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-slate-800 rounded-lg shadow-lg border border-slate-700 z-50">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-400" />
          Performance Monitor
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              isMonitoring 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isMonitoring ? 'Stop' : 'Start'}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {metrics ? (
          <>
            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-400">FCP</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {formatTime(metrics.firstContentfulPaint)}
                  </div>
                </div>

                <div className="bg-slate-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">LCP</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {formatTime(metrics.largestContentfulPaint)}
                  </div>
                </div>

                <div className="bg-slate-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-gray-400">Load Time</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {formatTime(metrics.loadTime)}
                  </div>
                </div>

                <div className="bg-slate-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Database className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-400">Bundle</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {formatSize(metrics.bundleSize || 0)}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            {(metrics.memoryUsage || metrics.networkLatency) && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Additional Metrics</h4>
                
                <div className="space-y-2">
                  {metrics.memoryUsage && (
                    <div className="flex items-center justify-between bg-slate-700 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300">Memory Usage</span>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {metrics.memoryUsage.toFixed(1)}MB
                      </span>
                    </div>
                  )}

                  {metrics.networkLatency && (
                    <div className="flex items-center justify-between bg-slate-700 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-gray-300">Network Latency</span>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {formatTime(metrics.networkLatency)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Performance Score */}
            <div className="bg-slate-700 p-3 rounded">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Performance Score</span>
                <span className="text-sm font-medium text-white">
                  {Math.round(
                    Math.max(0, 100 - (metrics.loadTime / 10) - (metrics.firstContentfulPaint / 10))
                  )}
                  /100
                </span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${Math.min(100, Math.max(0, 100 - (metrics.loadTime / 10) - (metrics.firstContentfulPaint / 10)))}%` 
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-400 py-8">
            <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No performance data available</p>
            <p className="text-xs">Start monitoring to see metrics</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDashboard;