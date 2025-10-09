'use client';

/**
 * System Monitor Component
 * Real-time monitoring dashboard for performance, errors, and system health
 */

import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { errorHandler } from '../utils/enhancedErrorHandler';

// Collect basic performance metrics
const collectPerformanceMetrics = () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation.loadEventEnd - navigation.navigationStart,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
  };
};

// Helper functions
const calculatePerformanceScore = (metrics: any) => {
  if (!metrics) return 0;
  
  let score = 100;
  
  // Deduct points for slow load times
  if (metrics.loadTime > 3000) score -= 30;
  else if (metrics.loadTime > 2000) score -= 20;
  else if (metrics.loadTime > 1000) score -= 10;
  
  // Deduct points for slow FCP
  if (metrics.firstContentfulPaint > 2000) score -= 25;
  else if (metrics.firstContentfulPaint > 1500) score -= 15;
  else if (metrics.firstContentfulPaint > 1000) score -= 10;
  
  return Math.max(0, score);
};

const SystemMonitor: React.FC = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [errorStats, setErrorStats] = useState<any>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Memory usage monitoring
  const getMemoryInfo = () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
      };
    }
    return null;
  };

  // Network information
  const getNetworkInfo = () => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      };
    }
    return null;
  };

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    const updateMetrics = () => {
      const metrics = collectPerformanceMetrics();
      const score = calculatePerformanceScore(metrics);
      const memoryInfo = getMemoryInfo();
      const networkInfo = getNetworkInfo();
      
      setPerformanceMetrics(metrics);
      setPerformanceScore(score);
      setErrorStats({
        errors: 0, // This would be tracked by error handler
        warnings: 0,
        memory: memoryInfo,
        network: networkInfo,
      });
    };

    // Initial update
    updateMetrics();
    
    // Update every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Auto-start monitoring on mount
  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">System Monitor</h2>
        <div className="flex space-x-2">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-4 py-2 rounded ${
              isMonitoring 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isMonitoring ? 'Stop' : 'Start'} Monitoring
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Performance Score */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Performance Score</h3>
          <div className="text-3xl font-bold text-green-400">
            {performanceScore}
          </div>
          <div className="text-sm text-gray-400">/ 100</div>
        </div>

        {/* Load Time */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Load Time</h3>
          <div className="text-2xl font-bold text-blue-400">
            {performanceMetrics?.loadTime ? `${Math.round(performanceMetrics.loadTime)}ms` : 'N/A'}
          </div>
        </div>

        {/* First Contentful Paint */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">First Contentful Paint</h3>
          <div className="text-2xl font-bold text-purple-400">
            {performanceMetrics?.firstContentfulPaint ? `${Math.round(performanceMetrics.firstContentfulPaint)}ms` : 'N/A'}
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Memory Usage</h3>
          <div className="text-2xl font-bold text-yellow-400">
            {errorStats?.memory ? `${errorStats.memory.used}MB` : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">
            {errorStats?.memory ? `of ${errorStats.memory.total}MB` : ''}
          </div>
        </div>
      </div>

      {/* Network Information */}
      {errorStats?.network && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Network Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-400">Connection Type</div>
              <div className="text-lg font-semibold">{errorStats.network.effectiveType}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Download Speed</div>
              <div className="text-lg font-semibold">{errorStats.network.downlink} Mbps</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Round Trip Time</div>
              <div className="text-lg font-semibold">{errorStats.network.rtt} ms</div>
            </div>
          </div>
        </div>
      )}

      {/* Error Statistics */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Error Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">Errors</div>
            <div className="text-2xl font-bold text-red-400">{errorStats?.errors || 0}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Warnings</div>
            <div className="text-2xl font-bold text-yellow-400">{errorStats?.warnings || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;