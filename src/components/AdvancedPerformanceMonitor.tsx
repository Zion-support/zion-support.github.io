import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  bundleSize: number;
  loadTime: number;
  networkLatency: number;
}

interface PerformanceMonitorProps {
  isVisible?: boolean;
  onToggle?: () => void;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  isVisible = false,
  onToggle
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    bundleSize: 0,
    loadTime: 0,
    networkLatency: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure FPS
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime))
        }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isMonitoring) {
        requestAnimationFrame(measureFPS);
      }
    };

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }
    }

    // Measure render time
    const renderStart = performance.now();
    requestAnimationFrame(() => {
      const renderEnd = performance.now();
      setMetrics(prev => ({
        ...prev,
        renderTime: Math.round(renderEnd - renderStart)
      }));
    });

    // Measure network latency
    const startTime = performance.now();
    fetch('/api/health', { method: 'HEAD' })
      .then(() => {
        const endTime = performance.now();
        setMetrics(prev => ({
          ...prev,
          networkLatency: Math.round(endTime - startTime)
        }));
      })
      .catch(() => {
        setMetrics(prev => ({
          ...prev,
          networkLatency: 0
        }));
      });

    if (isMonitoring) {
      measureFPS();
    }
  }, [isMonitoring]);

  useEffect(() => {
    if (isMonitoring) {
      measurePerformance();
      const interval = setInterval(measurePerformance, 1000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, measurePerformance]);

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
    onToggle?.();
  };

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.warning) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getFPSColor = (fps: number) => {
    if (fps >= 55) return 'text-green-500';
    if (fps >= 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 right-4 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-2xl z-50 min-w-[300px]"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMonitoring}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                isMonitoring
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isMonitoring ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">FPS</span>
            <span className={`font-mono text-sm ${getFPSColor(metrics.fps)}`}>
              {metrics.fps}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">Memory</span>
            <span className={`font-mono text-sm ${getPerformanceColor(metrics.memoryUsage, { good: 50, warning: 100 })}`}>
              {metrics.memoryUsage} MB
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">Render Time</span>
            <span className={`font-mono text-sm ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}>
              {metrics.renderTime}ms
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">Network</span>
            <span className={`font-mono text-sm ${getPerformanceColor(metrics.networkLatency, { good: 100, warning: 300 })}`}>
              {metrics.networkLatency}ms
            </span>
          </div>

          <div className="pt-2 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-xs">Status</span>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className="text-gray-300 text-xs">
                  {isMonitoring ? 'Monitoring' : 'Idle'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdvancedPerformanceMonitor;