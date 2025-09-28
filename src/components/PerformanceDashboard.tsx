/**
 * Performance Dashboard Component
 * Real-time performance monitoring and metrics display
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database, Wifi, Cpu, Monitor } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
  networkSpeed: string;
  cpuUsage: number;
  storageUsed: number;
}

interface PerformanceDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  isVisible = false, 
  onClose 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    memoryUsage: 0,
    bundleSize: 0,
    networkSpeed: 'Unknown',
    cpuUsage: 0,
    storageUsed: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !performance || !performance.getEntriesByType) return;

    // Web Vitals
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart
        }));
      }

      // First Contentful Paint
      if (performance.getEntriesByName) {
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          setMetrics(prev => ({
            ...prev,
            fcp: fcpEntry.startTime
          }));
        }
      }
    } catch (error) {
      console.warn('Performance metrics unavailable:', error);
    }

    // Largest Contentful Paint
    try {
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1];
        setMetrics(prev => ({
          ...prev,
          lcp: lcp.startTime
        }));
      }
    } catch (error) {
      console.warn('LCP metrics unavailable:', error);
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    }

    // Network information
    if ('connection' in navigator) {
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
      if (connection) {
        setMetrics(prev => ({
          ...prev,
          networkSpeed: connection.effectiveType || 'Unknown'
        }));
      }
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isMonitoring) {
      setIsMonitoring(true);
      updateMetrics();
      
      const interval = setInterval(updateMetrics, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isMonitoring, updateMetrics]);

  const getPerformanceGrade = (metric: number, thresholds: { good: number; poor: number }): string => {
    if (metric <= thresholds.good) return 'text-green-500';
    if (metric <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMetric = (value: number, unit: string): string => {
    return `${value.toFixed(1)}${unit}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Monitor className="w-6 h-6 mr-2 text-blue-500" />
            Performance Dashboard
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">Close</span>
              ✕
            </button>
          )}
        </div>

        <div className="p-6">
          {/* Web Vitals Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-green-500" />
              Web Vitals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">FCP</span>
                  <span className={getPerformanceGrade(metrics.fcp, { good: 1800, poor: 3000 })}>
                    {formatMetric(metrics.fcp, 'ms')}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">First Contentful Paint</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">LCP</span>
                  <span className={getPerformanceGrade(metrics.lcp, { good: 2500, poor: 4000 })}>
                    {formatMetric(metrics.lcp, 'ms')}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Largest Contentful Paint</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">FID</span>
                  <span className={getPerformanceGrade(metrics.fid, { good: 100, poor: 300 })}>
                    {formatMetric(metrics.fid, 'ms')}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">First Input Delay</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">CLS</span>
                  <span className={getPerformanceGrade(metrics.cls, { good: 0.1, poor: 0.25 })}>
                    {formatMetric(metrics.cls, '')}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Cumulative Layout Shift</p>
              </div>
            </div>
          </div>

          {/* System Resources Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-blue-500" />
              System Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Memory</span>
                  <Database className="w-4 h-4 text-blue-500" />
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatMetric(metrics.memoryUsage, ' MB')}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Network</span>
                  <Wifi className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {metrics.networkSpeed}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">TTFB</span>
                  <Clock className="w-4 h-4 text-purple-500" />
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatMetric(metrics.ttfb, ' ms')}
                </p>
              </div>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Performance Tips
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Optimize images and use modern formats (WebP, AVIF)</li>
              <li>• Minimize JavaScript bundles and use code splitting</li>
              <li>• Enable compression and caching headers</li>
              <li>• Use a Content Delivery Network (CDN)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;