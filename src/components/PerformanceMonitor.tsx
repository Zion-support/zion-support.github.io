/**
 * Enhanced Performance Monitor Component
 * Monitors and reports on application performance metrics
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  networkLatency: number;
  errorCount: number;
  userInteractions: number;
  performanceScore: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showUI?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  reportInterval = 5000,
  onMetricsUpdate,
  showUI = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    networkLatency: 0,
    errorCount: 0,
    userInteractions: 0,
    performanceScore: 0
  });

  const [isVisible, setIsVisible] = useState(showUI);

  // Measure page load time
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    }
    return 0;
  }, []);

  // Measure memory usage
  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && (window as any).performance?.memory) {
      const memory = (window as any).performance.memory;
      return memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
    }
    return 0;
  }, []);

  // Measure network latency
  const measureNetworkLatency = useCallback(async () => {
    const start = performance.now();
    try {
      await fetch('/api/health', { method: 'HEAD' });
    } catch {
      // Fallback to a simple request
      try {
        await fetch(window.location.href, { method: 'HEAD' });
      } catch {
        // If all fails, return 0
      }
    }
    return performance.now() - start;
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;

    // Load time scoring (target: < 2 seconds)
    if (currentMetrics.loadTime > 2000) {
      score -= Math.min(30, (currentMetrics.loadTime - 2000) / 100);
    }

    // Memory usage scoring (target: < 50MB)
    if (currentMetrics.memoryUsage > 50) {
      score -= Math.min(20, (currentMetrics.memoryUsage - 50) / 5);
    }

    // Network latency scoring (target: < 500ms)
    if (currentMetrics.networkLatency > 500) {
      score -= Math.min(20, (currentMetrics.networkLatency - 500) / 50);
    }

    // Error count scoring
    if (currentMetrics.errorCount > 0) {
      score -= Math.min(30, currentMetrics.errorCount * 5);
    }

    return Math.max(0, Math.round(score));
  }, []);

  // Update metrics
  const updateMetrics = useCallback(async () => {
    if (!enabled) return;

    const loadTime = measureLoadTime();
    const memoryUsage = measureMemoryUsage();
    const networkLatency = await measureNetworkLatency();

    const newMetrics: PerformanceMetrics = {
      loadTime,
      renderTime: performance.now(),
      memoryUsage,
      bundleSize: metrics.bundleSize, // This would be set from build process
      networkLatency,
      errorCount: metrics.errorCount, // This would be tracked separately
      userInteractions: metrics.userInteractions, // This would be tracked separately
      performanceScore: 0
    };

    newMetrics.performanceScore = calculatePerformanceScore(newMetrics);
    
    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);
  }, [enabled, measureLoadTime, measureMemoryUsage, measureNetworkLatency, calculatePerformanceScore, onMetricsUpdate, metrics.bundleSize, metrics.errorCount, metrics.userInteractions]);

  // Track user interactions
  const trackUserInteraction = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      userInteractions: prev.userInteractions + 1
    }));
  }, []);

  // Track errors
  const trackError = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      errorCount: prev.errorCount + 1
    }));
  }, []);

  // Initialize monitoring
  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, reportInterval);

    // Track user interactions
    const events = ['click', 'keydown', 'scroll', 'resize'];
    events.forEach(event => {
      document.addEventListener(event, trackUserInteraction, { passive: true });
    });

    // Track errors
    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackError);

    return () => {
      clearInterval(interval);
      events.forEach(event => {
        document.removeEventListener(event, trackUserInteraction);
      });
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackError);
    };
  }, [enabled, reportInterval, updateMetrics, trackUserInteraction, trackError]);

  // Get performance status
  const getPerformanceStatus = (score: number): { status: string; color: string } => {
    if (score >= 90) return { status: 'Excellent', color: 'bg-green-500' };
    if (score >= 70) return { status: 'Good', color: 'bg-yellow-500' };
    if (score >= 50) return { status: 'Fair', color: 'bg-orange-500' };
    return { status: 'Poor', color: 'bg-red-500' };
  };

  const performanceStatus = getPerformanceStatus(metrics.performanceScore);

  if (!isVisible) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 p-4 bg-white dark:bg-gray-800 shadow-lg border z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        {/* Performance Score */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Performance Score</span>
          <div className="flex items-center gap-2">
            <Badge className={performanceStatus.color}>
              {metrics.performanceScore}/100
            </Badge>
            <span className="text-xs text-gray-500">{performanceStatus.status}</span>
          </div>
        </div>

        {/* Load Time */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Load Time</span>
          <span className="text-sm font-mono">
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>

        {/* Memory Usage */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Memory Usage</span>
          <span className="text-sm font-mono">
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
        </div>

        {/* Network Latency */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Network Latency</span>
          <span className="text-sm font-mono">
            {metrics.networkLatency.toFixed(0)}ms
          </span>
        </div>

        {/* Error Count */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Errors</span>
          <Badge variant={metrics.errorCount > 0 ? 'destructive' : 'secondary'}>
            {metrics.errorCount}
          </Badge>
        </div>

        {/* User Interactions */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Interactions</span>
          <span className="text-sm font-mono">{metrics.userInteractions}</span>
        </div>

        {/* Performance Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Performance</span>
            <span>{metrics.performanceScore}%</span>
          </div>
          <Progress 
            value={metrics.performanceScore} 
            className="h-2"
          />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={updateMetrics}
          className="w-full text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          Refresh Metrics
        </button>
      </div>
    </Card>
  );
};

// Hook for using performance metrics
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  const handleMetricsUpdate = useCallback((newMetrics: PerformanceMetrics) => {
    setMetrics(newMetrics);
  }, []);

  return { metrics, handleMetricsUpdate };
};

export default PerformanceMonitor;