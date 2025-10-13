import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  memoryUsage: number;
  bundleSize: number;
  networkRequests: number;
}

interface PerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const resourceEntries = performance.getEntriesByType('resource');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
    
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1048576) : 0;

    const newMetrics: PerformanceMetrics = {
      fcp: fcp ? fcp.startTime : 0,
      lcp: lcp ? lcp.startTime : 0,
      fid: 0, // Would need PerformanceObserver
      cls: 0, // Would need PerformanceObserver
      ttfb: navigation.responseStart - navigation.requestStart,
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      memoryUsage,
      bundleSize: 0, // Would need to calculate from loaded resources
      networkRequests: resourceEntries.length,
    };

    setMetrics(newMetrics);
    setLastUpdated(new Date());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isVisible) {
      measurePerformance();
    }
  }, [isVisible, measurePerformance]);

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'warning';
    return 'poor';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'poor':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  if (!isVisible || !metrics) {
    return null;
  }

  const fcpStatus = getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpStatus = getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 });
  const ttfbStatus = getMetricStatus(metrics.ttfb, { good: 800, poor: 1800 });
  const loadTimeStatus = getMetricStatus(metrics.loadTime, { good: 1000, poor: 3000 });
  const memoryStatus = getMetricStatus(metrics.memoryUsage, { good: 50, poor: 100 });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Performance Dashboard</h2>
              <p className="text-sm text-gray-500">
                {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString()}` : 'Loading...'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
          >
            <XCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading performance data...</span>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Core Web Vitals */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">First Contentful Paint</span>
                      {getStatusIcon(fcpStatus)}
                    </div>
                    <div className={`text-2xl font-bold ${getStatusColor(fcpStatus)}`}>
                      {metrics.fcp.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {fcpStatus === 'good' ? 'Good' : fcpStatus === 'warning' ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Largest Contentful Paint</span>
                      {getStatusIcon(lcpStatus)}
                    </div>
                    <div className={`text-2xl font-bold ${getStatusColor(lcpStatus)}`}>
                      {metrics.lcp.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {lcpStatus === 'good' ? 'Good' : lcpStatus === 'warning' ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Time to First Byte</span>
                      {getStatusIcon(ttfbStatus)}
                    </div>
                    <div className={`text-2xl font-bold ${getStatusColor(ttfbStatus)}`}>
                      {metrics.ttfb.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {ttfbStatus === 'good' ? 'Good' : ttfbStatus === 'warning' ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Load Time</span>
                      {getStatusIcon(loadTimeStatus)}
                    </div>
                    <div className={`text-2xl font-bold ${getStatusColor(loadTimeStatus)}`}>
                      {metrics.loadTime.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {loadTimeStatus === 'good' ? 'Good' : loadTimeStatus === 'warning' ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resource Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Resource Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Memory Usage</span>
                      {getStatusIcon(memoryStatus)}
                    </div>
                    <div className={`text-2xl font-bold ${getStatusColor(memoryStatus)}`}>
                      {metrics.memoryUsage}MB
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {memoryStatus === 'good' ? 'Good' : memoryStatus === 'warning' ? 'High' : 'Very High'}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Network Requests</span>
                      <Activity className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {metrics.networkRequests}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Total requests made
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Bundle Size</span>
                      <Clock className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {metrics.bundleSize}KB
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Estimated size
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Tips */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                  Performance Tips
                </h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Optimize images by using WebP format and proper sizing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Enable compression for text-based resources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Use lazy loading for non-critical content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Minimize JavaScript bundle size with code splitting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Implement service worker for better caching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={measurePerformance}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Refresh Metrics
          </button>
          <div className="text-xs text-gray-500">
            Performance data is collected locally and not shared
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;