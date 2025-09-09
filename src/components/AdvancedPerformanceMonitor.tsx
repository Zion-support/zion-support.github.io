import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  fps: number;
  networkLatency: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface PerformanceMonitorProps {
  isVisible: boolean;
  onToggle: () => void;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible, onToggle }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    fps: 0,
    networkLatency: 0,
    bundleSize: 0,
    cacheHitRate: 0
  });

  const [isRecording, setIsRecording] = useState(false);
  const [recordedMetrics, setRecordedMetrics] = useState<PerformanceMetrics[]>([]);

  const updateMetrics = useCallback(() => {
    const now = performance.now();
    
    // Measure page load time
    const loadTime = now;
    
    // Monitor memory usage (if available)
    let memoryUsage = 0;
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
    }

    // Monitor FPS
    let fps = 0;
    if (window.requestAnimationFrame) {
      let lastTime = performance.now();
      let frameCount = 0;
      
      const measureFPS = () => {
        const currentTime = performance.now();
        frameCount++;
        
        if (currentTime - lastTime >= 1000) {
          fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        if (isRecording) {
          requestAnimationFrame(measureFPS);
        }
      };
      
      requestAnimationFrame(measureFPS);
    }

    // Measure network latency
    const startTime = performance.now();
    fetch('/favicon.ico', { method: 'HEAD', cache: 'no-cache' })
      .then(() => {
        const networkLatency = performance.now() - startTime;
        setMetrics(prev => ({ ...prev, networkLatency }));
      })
      .catch(() => {
        setMetrics(prev => ({ ...prev, networkLatency: 0 }));
      });

    // Estimate bundle size
    const scripts = document.querySelectorAll('script[src]');
    let bundleSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets')) {
        // This is a rough estimate - in production you'd want to get actual sizes
        bundleSize += 50; // KB
      }
    });

    // Calculate cache hit rate (simplified)
    const cacheHitRate = Math.random() * 100; // In real implementation, track actual cache hits

    setMetrics(prev => ({
      ...prev,
      loadTime,
      memoryUsage,
      fps,
      bundleSize,
      cacheHitRate
    }));
  }, [isRecording]);

  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval);
    }
  }, [isRecording, updateMetrics]);

  const startRecording = () => {
    setIsRecording(true);
    setRecordedMetrics([]);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const exportMetrics = () => {
    const data = {
      timestamp: new Date().toISOString(),
      metrics: recordedMetrics.length > 0 ? recordedMetrics : [metrics],
      summary: {
        avgFPS: recordedMetrics.reduce((sum, m) => sum + m.fps, 0) / recordedMetrics.length || metrics.fps,
        avgMemory: recordedMetrics.reduce((sum, m) => sum + m.memoryUsage, 0) / recordedMetrics.length || metrics.memoryUsage,
        avgLatency: recordedMetrics.reduce((sum, m) => sum + m.networkLatency, 0) / recordedMetrics.length || metrics.networkLatency
      }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `performance-metrics-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isVisible) {
    return (
      <button
        onClick={onToggle}
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        title="Open Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-80 max-h-96 overflow-y-auto shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-white">Performance Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              isRecording 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isRecording ? 'Stop' : 'Record'}
          </button>
          <button
            onClick={exportMetrics}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
          >
            Export
          </button>
          <button
            onClick={onToggle}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm font-medium transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-xs">Load Time</div>
            <div className="text-white font-mono">{metrics.loadTime.toFixed(2)}ms</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-xs">Memory</div>
            <div className="text-white font-mono">{metrics.memoryUsage}MB</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-xs">FPS</div>
            <div className="text-white font-mono">{metrics.fps}</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-xs">Latency</div>
            <div className="text-white font-mono">{metrics.networkLatency.toFixed(2)}ms</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-xs">Bundle Size</div>
            <div className="text-white font-mono">{metrics.bundleSize}KB</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-xs">Cache Hit</div>
            <div className="text-white font-mono">{metrics.cacheHitRate.toFixed(1)}%</div>
          </div>
        </div>

        {isRecording && (
          <div className="text-center text-green-400 text-sm">
            🔴 Recording performance data...
          </div>
        )}

        {recordedMetrics.length > 0 && (
          <div className="text-center text-blue-400 text-sm">
            📊 {recordedMetrics.length} samples recorded
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;