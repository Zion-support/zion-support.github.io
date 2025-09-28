import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Cpu, HardDrive, Network, Zap, Trash2, Download } from 'lucide-react';
import { serviceWorkerPerformanceMonitor, ServiceWorkerMetrics } from '../utils/serviceWorkerPerformance';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkRequests: number;
  cacheHitRate: number;
  bundleSize: number;
  lighthouseScore: number;
  swCacheSize: number;
  offlineTime: number;
}

export const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0,
    cacheHitRate: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    swCacheSize: 0,
    offlineTime: 0
  });

  useEffect(() => {
    // Subscribe to service worker performance metrics
    const unsubscribe = serviceWorkerPerformanceMonitor.subscribe((swMetrics: ServiceWorkerMetrics) => {
      setMetrics(prev => ({
        ...prev,
        swCacheSize: swMetrics.cacheSize,
        offlineTime: swMetrics.offlineTime,
        cacheHitRate: swMetrics.cacheHitRate,
        networkRequests: swMetrics.networkRequests,
        loadTime: swMetrics.loadTime
      }));
    });

    // Simulate other performance metrics
    const updateMetrics = () => {
      setMetrics(prev => ({
        ...prev,
        renderTime: Math.random() * 100 + 10,
        memoryUsage: Math.random() * 50 + 10,
        bundleSize: Math.random() * 500 + 200,
        lighthouseScore: Math.random() * 20 + 80
      }));
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Toggle Performance Dashboard"
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed bottom-4 right-20 z-40 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Performance
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Load Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">Load Time</span>
                </div>
                <span className="text-sm font-medium">
                  {metrics.loadTime.toFixed(0)}ms
                </span>
              </div>

              {/* Memory Usage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Memory</span>
                </div>
                <span className="text-sm font-medium">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>

              {/* Network Requests */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">Requests</span>
                </div>
                <span className="text-sm font-medium">
                  {metrics.networkRequests}
                </span>
              </div>

              {/* Cache Hit Rate */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">Cache Hit</span>
                </div>
                <span className="text-sm font-medium">
                  {metrics.cacheHitRate.toFixed(1)}%
                </span>
              </div>

              {/* Lighthouse Score */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm text-gray-600">Lighthouse</span>
                </div>
                <span className={`text-sm font-medium ${getScoreColor(metrics.lighthouseScore)}`}>
                  {metrics.lighthouseScore.toFixed(0)}
                </span>
              </div>

              {/* Performance Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Performance Score</span>
                  <span>{metrics.lighthouseScore.toFixed(0)}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getScoreBgColor(metrics.lighthouseScore)}`}
                    style={{ width: `${metrics.lighthouseScore}%` }}
                  />
                </div>
              </div>

              {/* Service Worker Cache */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm text-gray-600">SW Cache</span>
                </div>
                <span className="text-sm font-medium">
                  {metrics.swCacheSize} items
                </span>
              </div>

              {/* Offline Time */}
              {metrics.offlineTime > 0 && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">Offline</span>
                  </div>
                  <span className="text-sm font-medium">
                    {(metrics.offlineTime / 1000).toFixed(1)}s
                  </span>
                </div>
              )}

              {/* Bundle Size */}
              <div className="text-xs text-gray-500 pt-2 border-t">
                Bundle Size: {metrics.bundleSize.toFixed(0)}KB
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => serviceWorkerPerformanceMonitor.clearCache()}
                  className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 text-xs py-2 px-3 rounded transition-colors flex items-center justify-center gap-1"
                  title="Clear Cache"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear Cache
                </button>
                <button
                  onClick={() => {
                    const urls = ['/', '/about', '/services', '/contact'];
                    serviceWorkerPerformanceMonitor.preloadResources(urls);
                  }}
                  className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs py-2 px-3 rounded transition-colors flex items-center justify-center gap-1"
                  title="Preload Resources"
                >
                  <Download className="w-3 h-3" />
                  Preload
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};