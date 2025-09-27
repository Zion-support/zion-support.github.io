import React, { useState, useEffect } from 'react';

interface SystemMetrics {
  performance: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
    timeToInteractive: number;
  };
  resources: {
    memoryUsage: number;
    cpuUsage: number;
    networkLatency: number;
    bundleSize: number;
    cacheHitRate: number;
  };
  userExperience: {
    bounceRate: number;
    sessionDuration: number;
    pageViews: number;
    uniqueVisitors: number;
    conversionRate: number;
  };
  errors: {
    total: number;
    critical: number;
    resolved: number;
    unresolved: number;
  };
}

interface ComprehensiveMonitoringDashboardProps {
  metrics: SystemMetrics;
  onMetricsUpdate?: (metrics: SystemMetrics) => void;
  refreshInterval?: number;
  isRealTime?: boolean;
  className?: string;
}

export const ComprehensiveMonitoringDashboard: React.FC<ComprehensiveMonitoringDashboardProps> = ({
  metrics,
  onMetricsUpdate,
  refreshInterval = 30000,
  isRealTime = false,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isRealTime && onMetricsUpdate) {
      const interval = setInterval(() => {
        setIsLoading(true);
        // Simulate metrics update
        setTimeout(() => {
          setIsLoading(false);
          onMetricsUpdate(metrics);
        }, 1000);
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  }, [isRealTime, onMetricsUpdate, refreshInterval, metrics]);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <div className="w-5 h-5 bg-blue-500 rounded" />
            <span>System Monitoring Dashboard</span>
          </h3>
          <p className="text-sm text-gray-600">Comprehensive system performance monitoring</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-600">Load Time</h4>
            <p className="text-2xl font-bold text-gray-900">
              {metrics.performance.loadTime}ms
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-600">Memory Usage</h4>
            <p className="text-2xl font-bold text-gray-900">
              {metrics.resources.memoryUsage}%
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-600">CPU Usage</h4>
            <p className="text-2xl font-bold text-gray-900">
              {metrics.resources.cpuUsage}%
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-600">Error Rate</h4>
            <p className="text-2xl font-bold text-red-600">
              {metrics.errors.total}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">First Contentful Paint</span>
                <span className="text-sm font-medium">{metrics.performance.firstContentfulPaint}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Largest Contentful Paint</span>
                <span className="text-sm font-medium">{metrics.performance.largestContentfulPaint}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cumulative Layout Shift</span>
                <span className="text-sm font-medium">{metrics.performance.cumulativeLayoutShift}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-4">User Experience</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-sm font-medium">{metrics.userExperience.bounceRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Session Duration</span>
                <span className="text-sm font-medium">{metrics.userExperience.sessionDuration}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Conversion Rate</span>
                <span className="text-sm font-medium">{metrics.userExperience.conversionRate}%</span>
              </div>
            </div>
          </div>
        </div>

        {isLoading && (
          <div className="mt-4 text-center">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-sm text-gray-600">Updating metrics...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveMonitoringDashboard;