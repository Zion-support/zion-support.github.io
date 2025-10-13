'use client';

import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  sampleRate: number;
  thresholds: {
    loadTime: number;
    renderTime: number;
    memoryUsage: number;
  };
}

export const useEnhancedPerformance = (config: PerformanceConfig = {
  enableMonitoring: true,
  sampleRate: 1.0,
  thresholds: {
    loadTime: 3000,
    renderTime: 100,
    memoryUsage: 50 * 1024 * 1024 // 50MB
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const measurePerformance = useCallback(() => {
    if (!config.enableMonitoring) return;

    const startTime = performance.now();
    
    // Measure load time
    const loadTime = performance.timing?.loadEventEnd - performance.timing?.navigationStart || 0;
    
    // Measure render time
    const renderTime = performance.now() - startTime;
    
    // Measure memory usage (if available)
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
    
    // Measure network latency (simplified)
    const networkLatency = performance.timing?.responseEnd - performance.timing?.requestStart || 0;

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage,
      networkLatency
    });
  }, [config.enableMonitoring]);

  const startMonitoring = useCallback(() => {
    if (!config.enableMonitoring) return;
    
    setIsMonitoring(true);
    
    // Initial measurement
    measurePerformance();
    
    // Set up periodic monitoring
    const interval = setInterval(measurePerformance, 5000);
    
    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, [config.enableMonitoring, measurePerformance]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { loadTime, renderTime, memoryUsage } = metrics;
    const { thresholds } = config;
    
    let score = 100;
    
    // Deduct points for exceeding thresholds
    if (loadTime > thresholds.loadTime) {
      score -= Math.min(30, (loadTime - thresholds.loadTime) / 100);
    }
    
    if (renderTime > thresholds.renderTime) {
      score -= Math.min(20, (renderTime - thresholds.renderTime) / 10);
    }
    
    if (memoryUsage > thresholds.memoryUsage) {
      score -= Math.min(25, (memoryUsage - thresholds.memoryUsage) / (1024 * 1024));
    }
    
    return Math.max(0, Math.round(score));
  }, [metrics, config]);

  const isPerformanceGood = useCallback(() => {
    return getPerformanceScore() >= 70;
  }, [getPerformanceScore]);

  useEffect(() => {
    if (config.enableMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [config.enableMonitoring, startMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    getPerformanceScore,
    isPerformanceGood,
    measurePerformance
  };
};