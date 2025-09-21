
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  timestamp: number;
  memory: number;
  cpu: number;
  fps: number;
  network: number;
}

export const RealTimePerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const collectMetrics = () => {
      const memoryInfo = (performance as any).memory;
      const memory = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;
      
      // Simulate CPU usage (in real app, you'd use performance.now() calculations)
      const cpu = Math.random() * 100;
      
      // Simulate FPS
      const fps = 60 - Math.random() * 10;
      
      // Simulate network latency
      const network = Math.random() * 200;
      
      const newMetric: PerformanceMetrics = {
        timestamp: Date.now(),
        memory,
        cpu,
        fps,
        network
      };
      
      setMetrics(prev => [...prev.slice(-19), newMetric]);
    };

    if (isVisible) {
      intervalRef.current = setInterval(collectMetrics, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  // Keyboard shortcut to toggle
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!isVisible) return null;

  const currentMetric = metrics[metrics.length - 1];
  if (!currentMetric) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 bg-black/95 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-xs font-mono z-50 min-w-[300px]"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-green-400 font-bold">Real-time Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-green-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      {/* Current Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="text-center">
          <div className="text-green-400 font-bold">{currentMetric.memory.toFixed(1)} MB</div>
          <div className="text-gray-400 text-xs">Memory</div>
        </div>
        <div className="text-center">
          <div className="text-blue-400 font-bold">{currentMetric.fps.toFixed(0)} FPS</div>
          <div className="text-gray-400 text-xs">Frame Rate</div>
        </div>
        <div className="text-center">
          <div className="text-yellow-400 font-bold">{currentMetric.cpu.toFixed(1)}%</div>
          <div className="text-gray-400 text-xs">CPU Usage</div>
        </div>
        <div className="text-center">
          <div className="text-purple-400 font-bold">{currentMetric.network.toFixed(0)}ms</div>
          <div className="text-gray-400 text-xs">Network</div>
        </div>
      </div>

      {/* Mini Charts */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Memory Trend:</span>
          <div className="flex space-x-1 h-4">
            {metrics.slice(-10).map((metric, index) => (
              <motion.div
                key={metric.timestamp}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="w-1 bg-green-400"
                style={{ height: `${(metric.memory / 100) * 100}%` }}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">FPS Trend:</span>
          <div className="flex space-x-1 h-4">
            {metrics.slice(-10).map((metric, index) => (
              <motion.div
                key={metric.timestamp}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="w-1 bg-blue-400"
                style={{ height: `${(metric.fps / 60) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700 text-center">
        <span className="text-gray-500 text-xs">Press Ctrl+Shift+M to toggle</span>
      </div>
    </motion.div>
  );
};

export default RealTimePerformanceMonitor;
