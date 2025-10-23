'use client';

/**
 * System Monitor Component
 * Real-time monitoring dashboard for performance, errors, and system health
 */

import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { errorHandler } from '../utils/enhancedErrorHandler';

import { errorHandler } from '../utils/enhancedErrorHandler';

// Collect basic performance metrics
const _collectPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const _navigation = window.performance.timing;
  const _paint = window.performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation.loadEventEnd - navigation.navigationStart,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
  };
};

// Helper functions
const calculatePerformanceScore = () => {
  const _metrics = performanceOptimizer.getMetrics();
  if (!metrics) return 0;
  
  let _score = 100;
  
  // Deduct points for slow load times
  if (metrics.loadTime > 3000) score -= 20;
  if (metrics.loadTime > 5000) score -= 30;
  
  // Deduct points for slow paint times
  if (metrics.firstContentfulPaint && metrics.firstContentfulPaint > 2000) score -= 15;
  if (metrics.firstContentfulPaint && metrics.firstContentfulPaint > 3000) score -= 25;
  
  return Math.max(0, score);
};

// Network connection interface
interface NetworkConnection {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkConnection;
  mozConnection?: NetworkConnection;
  webkitConnection?: NetworkConnection;
}

interface SystemMetrics {
  performance: {
    score: number;
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  };
  errors: {
    total: number;
    byType: Record<string, number>;
    byCategory: Record<string, number>;
    bySeverity: Record<string, number>;
    recent: Array<{
      id: string;
      message: string;
      type: string;
      severity: string;
      timestamp: string;
    }>;
  };
  memory: {
    used: number;
    total: number;
    limit: number;
    percentage: number;
  };
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
}

interface SystemMonitorProps {
  refreshInterval?: number;
  showDetails?: boolean;
  enableExport?: boolean;
  className?: string;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  refreshInterval = 5000,
  showDetails = true,
  enableExport = true,
  className = '',
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  // Update metrics
  const updateMetrics = useCallback(() => {
    try {
      const _performanceMetrics = performanceOptimizer.getMetrics();
      const _performanceScore = calculatePerformanceScore();
      const _errorStats = errorHandler.getErrorStatistics();

      // Get memory info
      const _memoryInfo = getMemoryInfo();

      // Get network info
      const _networkInfo = getNetworkInfo();

      const newMetrics: SystemMetrics = {
        performance: {
          score: performanceScore,
          loadTime: performanceMetrics?.loadTime || 0,
          firstContentfulPaint: performanceMetrics?.firstContentfulPaint || 0,
          largestContentfulPaint: 0, // Not available in current metrics
          firstInputDelay: 0, // Not available in current metrics
          cumulativeLayoutShift: 0, // Not available in current metrics
        },
        errors: {
          total: errorStats.totalErrors,
          byType: errorStats.errorsByType,
          byCategory: errorStats.errorsByCategory,
          bySeverity: errorStats.errorsBySeverity,
          recent: errorStats.recentErrors.map(error => ({
            id: error.id,
            message: error.message,
            type: error.type,
            severity: error.severity,
            timestamp: error.context.timestamp,
          })),
        },
        memory: memoryInfo,
        network: networkInfo,
      };

      setMetrics(newMetrics);
      setLastUpdate(new Date());
    } catch (error) {

    }
  }, []);

  // Initialize monitoring
  useEffect(() => {
    const initializeMonitoring = () => {
      // Start monitoring (placeholder - implement as needed)
      setIsMonitoring(true);
      updateMetrics();
    };

    initializeMonitoring();

    return () => {
      // Stop monitoring (placeholder - implement as needed)
      setIsMonitoring(false);
    };
  }, [updateMetrics]);

  // Update metrics periodically
  useEffect(() => {
    if (!isMonitoring) return;

    const _interval = setInterval(updateMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [isMonitoring, refreshInterval, updateMetrics]);

  // Get memory information
  const getMemoryInfo = () => {
    if ('memory' in performance) {
      const _memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      const used = memory.usedJSHeapSize / 1024 / 1024; // MB
      const total = memory.totalJSHeapSize / 1024 / 1024; // MB
      const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
      const _percentage = (used / limit) * 100;

      return { used, total, limit, percentage };
    }

    return { used: 0, total: 0, limit: 0, percentage: 0 };
  };

  // Get network information
  const getNetworkInfo = () => {
    if ('connection' in navigator) {
      const _nav = navigator as NavigatorWithConnection;
      const _connection = nav.connection;
      return {
        effectiveType: connection?.effectiveType || 'unknown',
        downlink: connection?.downlink || 0,
        rtt: connection?.rtt || 0,
        saveData: connection?.saveData || false,
      };
    }

    return {
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false,
    };
  };

  // Export data
  const handleExport = () => {
    if (!metrics) return;

    const exportData = {
      metrics,
      performanceData: performanceOptimizer.getMetrics(),
      errorData: errorHandler.exportErrorData(),
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const _url = URL.createObjectURL(blob);
    const _a = document.createElement('a');
    a.href = url;
    a.download = `system-metrics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Get performance score color
  const getPerformanceScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!metrics) {
    return (
      <div className={`p-4 bg-gray-100 rounded-lg ${className}`}>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading system metrics...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">System Monitor</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {isMonitoring ? 'Monitoring' : 'Stopped'}
            </span>
          </div>
          {enableExport && (
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Export Data
            </button>
          )}
        </div>
      </div>

      {lastUpdate && (
        <p className="text-sm text-gray-500 mb-4">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </p>
      )}

      {/* Performance Metrics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Performance Score</span>
              <span className={`text-2xl font-bold ${getPerformanceScoreColor(metrics.performance.score)}`}>
                {metrics.performance.score}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Load Time</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.loadTime.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">FCP</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">LCP</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">FID</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.firstInputDelay.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">CLS</span>
              <span className="text-lg font-semibold text-gray-900">
                {metrics.performance.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Error Metrics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Errors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Total Errors</span>
              <span className="text-2xl font-bold text-red-600">
                {metrics.errors.total}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Critical</span>
              <span className="text-lg font-semibold text-red-600">
                {metrics.errors.bySeverity.critical || 0}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">High</span>
              <span className="text-lg font-semibold text-red-500">
                {metrics.errors.bySeverity.high || 0}
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Medium</span>
              <span className="text-lg font-semibold text-yellow-600">
                {metrics.errors.bySeverity.medium || 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Memory and Network */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Memory Usage</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used</span>
                <span>{metrics.memory.used.toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total</span>
                <span>{metrics.memory.total.toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Limit</span>
                <span>{metrics.memory.limit.toFixed(2)} MB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    metrics.memory.percentage > 80 ? 'bg-red-500' :
                    metrics.memory.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(metrics.memory.percentage, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Network</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Connection</span>
                <span>{metrics.network.effectiveType}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Downlink</span>
                <span>{metrics.network.downlink} Mbps</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>RTT</span>
                <span>{metrics.network.rtt} ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Save Data</span>
                <span>{metrics.network.saveData ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Errors */}
      {showDetails && metrics.errors.recent.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Errors</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {metrics.errors.recent.map((error) => (
              <div key={error.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{error.message}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(error.severity)}`}>
                    {error.severity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{error.type}</span>
                  <span>{new Date(error.timestamp).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Distribution */}
      {showDetails && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">By Type</h4>
              <div className="space-y-1">
                {Object.entries(metrics.errors.byType).map(([type, count]) => (
                  <div key={type} className="flex justify-between text-sm">
                    <span className="capitalize">{type}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">By Category</h4>
              <div className="space-y-1">
                {Object.entries(metrics.errors.byCategory).map(([category, count]) => (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="capitalize">{category}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemMonitor;