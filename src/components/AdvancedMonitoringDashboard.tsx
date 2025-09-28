/**
 * Advanced Monitoring Dashboard
 * Comprehensive monitoring and analytics dashboard for the Zion Tech Group website
 */

import React, { useState, useEffect, useCallback } from "react";
import { clsx } from "clsx";
import { performanceAnalytics } from "../utils/advancedPerformanceAnalytics";
import { seoManager } from "../utils/advancedSEOManager";
import { apiCache, imageCache, dataCache } from "../utils/advancedCacheManager";
import {
  PerformanceReport,
  SEOAuditResult,
  CacheStats,
} from "../types/comprehensive";

interface MonitoringDashboardProps {
  className?: string;
  showRealTime?: boolean;
  refreshInterval?: number;
}

interface DashboardMetrics {
  performance: PerformanceReport | null;
  seo: SEOAuditResult | null;
  cache: {
    api: CacheStats;
    image: CacheStats;
    data: CacheStats;
  };
  system: {
    memoryUsage: number;
    domNodes: number;
    activeConnections: number;
    uptime: number;
  };
}

export const AdvancedMonitoringDashboard: React.FC<
  MonitoringDashboardProps
> = ({ className, showRealTime = true, refreshInterval = 5000 }) => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    performance: null,
    seo: null,
    cache: {
      api: apiCache.getStats(),
      image: imageCache.getStats(),
      data: dataCache.getStats(),
    },
    system: {
      memoryUsage: 0,
      domNodes: 0,
      activeConnections: 0,
      uptime: 0,
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const updateMetrics = useCallback(async () => {
    try {
      setIsLoading(true);

      // Get performance metrics
      const performanceReport = performanceAnalytics.getLatestReport();

      // Get SEO audit results
      const seoAudit = seoManager.auditPage();

      // Get cache statistics
      const cacheStats = {
        api: apiCache.getStats(),
        image: imageCache.getStats(),
        data: dataCache.getStats(),
      };

      // Get system metrics
      const systemMetrics = {
        memoryUsage:
          (performance as { memory?: { usedJSHeapSize: number } }).memory
            ?.usedJSHeapSize || 0,
        domNodes: document.querySelectorAll("*").length,
        activeConnections: (
          navigator as { connection?: { effectiveType: string } }
        ).connection?.effectiveType
          ? 1
          : 0,
        uptime: performance.now(),
      };

      setMetrics({
        performance: performanceReport,
        seo: seoAudit,
        cache: cacheStats,
        system: systemMetrics,
      });

      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to update metrics:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    updateMetrics();

    if (showRealTime) {
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [updateMetrics, showRealTime, refreshInterval]);

  const getPerformanceScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  const getCacheHitRateColor = (hitRate: number) => {
    if (hitRate >= 80) return "text-green-500";
    if (hitRate >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <div className={clsx("p-6 bg-gray-900 text-white min-h-screen", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Advanced Monitoring Dashboard
          </h1>
          <p className="text-gray-400">
            Real-time performance, SEO, and system metrics
            {lastUpdated && (
              <span className="ml-2 text-sm">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            )}
          </p>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
            Updating metrics...
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Performance Score */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Performance Score</h3>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">P</span>
              </div>
            </div>
            <div
              className={clsx(
                "text-3xl font-bold mb-2",
                getPerformanceScoreColor(metrics.performance?.score || 0),
              )}
            >
              {metrics.performance?.score || 0}
            </div>
            <p className="text-gray-400 text-sm">Out of 100</p>
          </div>

          {/* SEO Score */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">SEO Score</h3>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">S</span>
              </div>
            </div>
            <div
              className={clsx(
                "text-3xl font-bold mb-2",
                getPerformanceScoreColor(metrics.seo?.score || 0),
              )}
            >
              {metrics.seo?.score || 0}
            </div>
            <p className="text-gray-400 text-sm">Out of 100</p>
          </div>

          {/* Memory Usage */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Memory Usage</h3>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">M</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-2 text-blue-500">
              {formatBytes(metrics.system.memoryUsage)}
            </div>
            <p className="text-gray-400 text-sm">JavaScript Heap</p>
          </div>

          {/* DOM Nodes */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">DOM Nodes</h3>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">D</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-2 text-orange-500">
              {metrics.system.domNodes.toLocaleString()}
            </div>
            <p className="text-gray-400 text-sm">Total Elements</p>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Performance Metrics */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            {metrics.performance ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">LCP:</span>
                  <span className="text-white">
                    {formatTime(metrics.performance.metrics.lcp)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">FID:</span>
                  <span className="text-white">
                    {formatTime(metrics.performance.metrics.fid)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CLS:</span>
                  <span className="text-white">
                    {metrics.performance.metrics.cls.toFixed(3)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">FCP:</span>
                  <span className="text-white">
                    {formatTime(metrics.performance.metrics.fcp)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TTFB:</span>
                  <span className="text-white">
                    {formatTime(metrics.performance.metrics.ttfb)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">No performance data available</p>
            )}
          </div>

          {/* Cache Statistics */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cache Statistics</h3>
            <div className="space-y-4">
              {Object.entries(metrics.cache).map(([name, stats]) => (
                <div
                  key={name}
                  className="border-b border-gray-700 pb-3 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 capitalize">
                      {name} Cache
                    </span>
                    <span
                      className={clsx(
                        "text-sm font-semibold",
                        getCacheHitRateColor(stats.hitRate),
                      )}
                    >
                      {stats.hitRate.toFixed(1)}% hit rate
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Size: {formatBytes(stats.size)}
                    </span>
                    <span className="text-gray-500">
                      Entries: {stats.entryCount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts and Issues */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Alerts */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Performance Alerts</h3>
            {metrics.performance?.alerts &&
            metrics.performance.alerts.length > 0 ? (
              <div className="space-y-2">
                {metrics.performance.alerts.slice(0, 5).map((alert: any) => (
                  <div
                    key={alert.id}
                    className={clsx(
                      "p-3 rounded-lg text-sm",
                      alert.type === "error" &&
                        "bg-red-900/20 border border-red-500/30",
                      alert.type === "warning" &&
                        "bg-yellow-900/20 border border-yellow-500/30",
                      alert.type === "info" &&
                        "bg-blue-900/20 border border-blue-500/30",
                    )}
                  >
                    <div className="font-medium">{alert.message}</div>
                    <div className="text-gray-400 text-xs mt-1">
                      {alert.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No performance alerts</p>
            )}
          </div>

          {/* SEO Issues */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">SEO Issues</h3>
            {metrics.seo?.issues && metrics.seo.issues.length > 0 ? (
              <div className="space-y-2">
                {metrics.seo.issues
                  .slice(0, 5)
                  .map((issue: any, index: number) => (
                    <div
                      key={index}
                      className={clsx(
                        "p-3 rounded-lg text-sm",
                        issue.type === "error" &&
                          "bg-red-900/20 border border-red-500/30",
                        issue.type === "warning" &&
                          "bg-yellow-900/20 border border-yellow-500/30",
                        issue.type === "info" &&
                          "bg-blue-900/20 border border-blue-500/30",
                      )}
                    >
                      <div className="font-medium">{issue.message}</div>
                      {issue.suggestion && (
                        <div className="text-gray-400 text-xs mt-1">
                          {issue.suggestion}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-gray-400">No SEO issues found</p>
            )}
          </div>
        </div>

        {/* Recommendations */}
        {(metrics.performance?.recommendations ||
          metrics.seo?.recommendations) && (
          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metrics.performance?.recommendations && (
                <div>
                  <h4 className="font-medium text-blue-400 mb-2">
                    Performance
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {metrics.performance.recommendations.map(
                      (rec: any, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {rec}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              {metrics.seo?.recommendations && (
                <div>
                  <h4 className="font-medium text-green-400 mb-2">SEO</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {metrics.seo.recommendations.map(
                      (rec: any, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {rec}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedMonitoringDashboard;
