import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  networkLatency: number;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableMonitoring?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  enableMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    networkLatency: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Measure page load time
  useEffect(() => {
    if (!enableMonitoring) return;

    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
      return () => window.removeEventListener('load', measureLoadTime);
    }
  }, [enableMonitoring]);

  // Measure render performance
  const measureRenderTime = useCallback(() => {
    if (!enableMonitoring) return;

    const start = performance.now();
    requestAnimationFrame(() => {
      const end = performance.now();
      const renderTime = end - start;
      setMetrics(prev => ({ ...prev, renderTime }));
    });
  }, [enableMonitoring]);

  // Monitor memory usage
  const measureMemoryUsage = useCallback(() => {
    if (!enableMonitoring || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
    setMetrics(prev => ({ ...prev, memoryUsage }));
  }, [enableMonitoring]);

  // Monitor FPS
  const measureFPS = useCallback(() => {
    if (!enableMonitoring) return;

    let lastTime = performance.now();
    let frameCount = 0;

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }, [enableMonitoring]);

  // Measure network latency
  const measureNetworkLatency = useCallback(async () => {
    if (!enableMonitoring) return;

    const start = performance.now();
    try {
      await fetch('/api/ping', { method: 'HEAD' });
    } catch {
      // Fallback to measuring a simple resource
      await fetch(window.location.href, { method: 'HEAD' });
    }
    const end = performance.now();
    const networkLatency = end - start;
    setMetrics(prev => ({ ...prev, networkLatency }));
  }, [enableMonitoring]);

  // Update metrics periodically
  useEffect(() => {
    if (!enableMonitoring) return;

    const interval = setInterval(() => {
      measureRenderTime();
      measureMemoryUsage();
    }, 1000);

    measureFPS();
    measureNetworkLatency();

    return () => clearInterval(interval);
  }, [enableMonitoring, measureRenderTime, measureMemoryUsage, measureFPS, measureNetworkLatency]);

  // Notify parent component of metrics updates
  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance optimization suggestions
  const getOptimizationSuggestions = () => {
    const suggestions = [];

    if (metrics.memoryUsage > 100) {
      suggestions.push('High memory usage detected. Consider optimizing components.');
    }

    if (metrics.fps < 30) {
      suggestions.push('Low FPS detected. Check for performance bottlenecks.');
    }

    if (metrics.renderTime > 16) {
      suggestions.push('Slow render time. Consider code splitting or lazy loading.');
    }

    if (metrics.networkLatency > 1000) {
      suggestions.push('High network latency. Consider caching strategies.');
    }

    return suggestions;
  };

  const suggestions = getOptimizationSuggestions();

  if (!enableMonitoring) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        title="Performance Monitor"
      >
        📊
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-black/90 backdrop-blur-sm rounded-lg p-4 w-80 border border-white/20 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Load Time:</span>
              <span className="text-white">{metrics.loadTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Render Time:</span>
              <span className="text-white">{metrics.renderTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Memory:</span>
              <span className="text-white">{metrics.memoryUsage.toFixed(2)}MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">FPS:</span>
              <span className={`${metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.fps}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Network:</span>
              <span className="text-white">{metrics.networkLatency.toFixed(2)}ms</span>
            </div>
          </div>

          {suggestions.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <h4 className="text-yellow-400 font-semibold mb-2">Suggestions:</h4>
              <ul className="space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-xs text-yellow-300">
                    • {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-white/20">
            <button
              onClick={() => {
                setMetrics({
                  loadTime: 0,
                  renderTime: 0,
                  memoryUsage: 0,
                  fps: 0,
                  networkLatency: 0
                });
              }}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-xs transition-colors"
            >
              Reset Metrics
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;