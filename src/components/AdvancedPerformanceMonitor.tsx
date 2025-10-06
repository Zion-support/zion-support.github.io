import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

interface AdvancedPerformanceMonitorProps {
  isMonitoring: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    fps: number;
    memoryUsage: number;
    renderTime: number;
    networkLatency: number;
  };
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  isMonitoring,
  onMetricsUpdate,
  threshold = {
    fps: 30,
    memoryUsage: 100,
    renderTime: 16,
    networkLatency: 100
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const measurePerformance = useCallback(() => {
    if (!isMonitoring) return;

    // Measure FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isMonitoring) {
        requestAnimationFrame(measureFPS);
      }
    };

    measureFPS();

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Measure render time
    const renderStart = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - renderStart;
      setMetrics(prev => ({ ...prev, renderTime }));
    });

    // Measure network latency
    const networkStart = performance.now();
    fetch('/api/ping', { method: 'HEAD' })
      .then(() => {
        const networkLatency = performance.now() - networkStart;
        setMetrics(prev => ({ ...prev, networkLatency }));
      })
      .catch(() => {
        setMetrics(prev => ({ ...prev, networkLatency: 0 }));
      });
  }, [isMonitoring]);

  useEffect(() => {
    if (isMonitoring) {
      measurePerformance();
    }
  }, [isMonitoring, measurePerformance]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  const getStatusColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-600';
    if (value <= threshold * 1.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isMonitoring) {
    return null;
  }

  return (
    <div className="performance-monitor bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Performance Monitor</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="metric">
          <div className="text-sm text-gray-600">FPS</div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.fps, threshold.fps)}`}>
            {metrics.fps}
          </div>
        </div>
        
        <div className="metric">
          <div className="text-sm text-gray-600">Memory Usage (MB)</div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.memoryUsage, threshold.memoryUsage)}`}>
            {metrics.memoryUsage}
          </div>
        </div>
        
        <div className="metric">
          <div className="text-sm text-gray-600">Render Time (ms)</div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.renderTime, threshold.renderTime)}`}>
            {metrics.renderTime.toFixed(2)}
          </div>
        </div>
        
        <div className="metric">
          <div className="text-sm text-gray-600">Network Latency (ms)</div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.networkLatency, threshold.networkLatency)}`}>
            {metrics.networkLatency.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;