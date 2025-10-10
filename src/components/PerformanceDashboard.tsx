'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}

interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0;
      
      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      
      // Measure memory usage
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      
      // Measure FPS (simplified)
      let fps = 0;
      if ('requestAnimationFrame' in window) {
        let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = (currentTime: number) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }
      
      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps
      });
    };

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            updateMetrics();
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
      return () => observer.disconnect();
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, []);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return null;
};

export default PerformanceDashboard;