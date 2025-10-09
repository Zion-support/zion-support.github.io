'use client';
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, MemoryStick } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for performance API availability
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Measure page load time
    const measureLoadTime = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    };

    // Measure render time
    const measureRenderTime = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        setMetrics(prev => ({ ...prev, renderTime: fcp.startTime }));
      }
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Measure FPS
    let lastTime = performance.now();
    let frameCount = 0;
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(measureFPS);
    };

    // Initial measurements
    measureLoadTime();
    measureRenderTime();
    measureMemoryUsage();
    measureFPS();

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureMemoryUsage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) {
    return null;
  }

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 text-white text-xs z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-cyan-400 flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Dashboard
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-3 h-3 mr-2 text-yellow-400" />
            <span>Load Time:</span>
          </div>
          <span className={getPerformanceColor(metrics.loadTime, { good: 1000, warning: 3000 })}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Cpu className="w-3 h-3 mr-2 text-blue-400" />
            <span>Render Time:</span>
          </div>
          <span className={getPerformanceColor(metrics.renderTime, { good: 100, warning: 300 })}>
            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MemoryStick className="w-3 h-3 mr-2 text-purple-400" />
            <span>Memory:</span>
          </div>
          <span className={getPerformanceColor(metrics.memoryUsage, { good: 50, warning: 100 })}>
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="w-3 h-3 mr-2 text-green-400" />
            <span>FPS:</span>
          </div>
          <span className={getPerformanceColor(60 - metrics.fps, { good: 0, warning: 10 })}>
            {metrics.fps.toFixed(0)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceDashboard;