'use client';

import { useState, useEffect, useCallback } from 'react';

interface PerformanceData {
  timestamp: number;
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

interface MonitorConfig {
  enabled: boolean;
  interval: number;
  maxSamples: number;
}

export const usePerformanceMonitor = (config: MonitorConfig = {
  enabled: true,
  interval: 1000,
  maxSamples: 100
}) => {
  const [data, setData] = useState<PerformanceData[]>([]);
  const [isActive, setIsActive] = useState(false);

  const collectMetrics = useCallback(() => {
    const now = performance.now();
    const timing = performance.timing;
    
    const metrics: PerformanceData = {
      timestamp: Date.now(),
      loadTime: timing ? timing.loadEventEnd - timing.navigationStart : 0,
      renderTime: now,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
      networkLatency: timing ? timing.responseEnd - timing.requestStart : 0
    };

    setData(prev => {
      const newData = [...prev, metrics];
      return newData.slice(-config.maxSamples);
    });
  }, [config.maxSamples]);

  const startMonitoring = useCallback(() => {
    if (!config.enabled) return;
    
    setIsActive(true);
    collectMetrics();
    
    const interval = setInterval(collectMetrics, config.interval);
    
    return () => {
      clearInterval(interval);
      setIsActive(false);
    };
  }, [config.enabled, config.interval, collectMetrics]);

  const stopMonitoring = useCallback(() => {
    setIsActive(false);
  }, []);

  const clearData = useCallback(() => {
    setData([]);
  }, []);

  const getAverageMetrics = useCallback(() => {
    if (data.length === 0) return null;
    
    const totals = data.reduce((acc, curr) => ({
      loadTime: acc.loadTime + curr.loadTime,
      renderTime: acc.renderTime + curr.renderTime,
      memoryUsage: acc.memoryUsage + curr.memoryUsage,
      networkLatency: acc.networkLatency + curr.networkLatency
    }), { loadTime: 0, renderTime: 0, memoryUsage: 0, networkLatency: 0 });

    const count = data.length;
    
    return {
      loadTime: totals.loadTime / count,
      renderTime: totals.renderTime / count,
      memoryUsage: totals.memoryUsage / count,
      networkLatency: totals.networkLatency / count
    };
  }, [data]);

  useEffect(() => {
    if (config.enabled) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [config.enabled, startMonitoring]);

  return {
    data,
    isActive,
    startMonitoring,
    stopMonitoring,
    clearData,
    getAverageMetrics
  };
};