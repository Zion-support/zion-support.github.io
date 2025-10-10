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
  const [metrics setMetrics] = useState<PerformanceMetrics | null>(null);
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
      loadTime: Math.round(loadTime)
      memoryUsage,
      connectionSpeed,
      renderTime: Math.round(renderTime)
    };
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
          className="text-gray-400 hover: text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
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
            Render Time: </span>
          <span className="text-blue-400">{metrics.renderTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Database className="w-3 h-3 mr-1" />
            Memory: </span>
          <span className="text-yellow-400">{metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Activity className="w-3 h-3 mr-1" />
            Connection: </span>
          <span className="text-purple-400">{metrics.connectionSpeed}</span>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
