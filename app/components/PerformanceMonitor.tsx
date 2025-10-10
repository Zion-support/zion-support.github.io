<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { X, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  connectionSpeed: string;
}

interface PerformanceMonitorProps {
  data?: PerformanceMetrics;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ data }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(data || null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

        const connection = (navigator as any).connection;
        const connectionSpeed = connection ? 
          `${connection.effectiveType || 'unknown'} (${Math.round(connection.downlink || 0)}Mbps)` : 
          'unknown';

        const performanceMetrics: PerformanceMetrics = {
          loadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),
          firstContentfulPaint: fcp ? Math.round(fcp.startTime) : 0,
          largestContentfulPaint: lcp ? Math.round(lcp.startTime) : 0,
          firstInputDelay: 0,
          cumulativeLayoutShift: 0,
          connectionSpeed
        };

        setMetrics(performanceMetrics);
        setIsVisible(true);

        // Store metrics in localStorage
        localStorage.setItem('performance-metrics', JSON.stringify({
          ...performanceMetrics,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const getPerformanceColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-4 h-4" />
=======
'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  connectionSpeed: string;
  renderTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure page load time
    const loadTime = performance.now();

    // Get memory usage (if available)
    const memoryUsage = (performance as any).memory 
      ? Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)
      : 0;

    // Estimate connection speed
    const connection = (navigator as any).connection;
    const connectionSpeed = connection 
      ? `${connection.downlink}Mbps`
      : 'Unknown';

    // Measure render time
    const renderTime = performance.now() - loadTime;

    setMetrics({
      loadTime: Math.round(loadTime),
      memoryUsage,
      connectionSpeed,
      renderTime: Math.round(renderTime)
    });
  }, []);

  useEffect(() => {
    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  // Show/hide performance monitor with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 min-w-[200px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold flex items-center">
          <Activity className="w-4 h-4 mr-1" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
>>>>>>> origin/resolve-merge-conflicts
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
<<<<<<< HEAD
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Load Time:</span>
          <span className={getPerformanceColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">First Paint:</span>
          <span className={getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Largest Paint:</span>
          <span className={getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Connection:</span>
          <div className="flex items-center space-x-1">
            <Wifi className="w-3 h-3 text-cyan-400" />
            <span className="text-cyan-400 text-xs">{metrics.connectionSpeed}</span>
          </div>
        </div>
      </div>
=======
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Load Time:
          </span>
          <span className="text-green-400">{metrics.loadTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            Render Time:
          </span>
          <span className="text-blue-400">{metrics.renderTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Database className="w-3 h-3 mr-1" />
            Memory:
          </span>
          <span className="text-yellow-400">{metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Activity className="w-3 h-3 mr-1" />
            Connection:
          </span>
          <span className="text-purple-400">{metrics.connectionSpeed}</span>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
>>>>>>> origin/resolve-merge-conflicts
    </div>
  );
};

export default PerformanceMonitor;
