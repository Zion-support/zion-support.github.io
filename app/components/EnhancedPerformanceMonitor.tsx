import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  networkLatency: number;
}

interface EnhancedPerformanceMonitorProps {
  showDetails?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  showDetails = true,
  autoRefresh = true,
  refreshInterval = 1000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    networkLatency: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const measurePerformance = () => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    
    // Memory usage (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

    // FPS calculation (simplified)
    let fps = 0;
    if (typeof requestAnimationFrame !== 'undefined') {
      let lastTime = performance.now();
      const countFrames = () => {
        const currentTime = performance.now();
        fps = 1000 / (currentTime - lastTime);
        lastTime = currentTime;
        requestAnimationFrame(countFrames);
      };
      requestAnimationFrame(countFrames);
    }

    // Network latency (simplified)
    const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage,
      fps: Math.round(fps),
      networkLatency
    });
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(measurePerformance, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  useEffect(() => {
    measurePerformance();
  }, []);

  const getPerformanceColor = (value: number, type: 'loadTime' | 'renderTime' | 'memoryUsage' | 'fps' | 'networkLatency') => {
    switch (type) {
      case 'loadTime':
        return value < 1000 ? 'text-green-500' : value < 3000 ? 'text-yellow-500' : 'text-red-500';
      case 'renderTime':
        return value < 100 ? 'text-green-500' : value < 300 ? 'text-yellow-500' : 'text-red-500';
      case 'memoryUsage':
        return value < 50 ? 'text-green-500' : value < 100 ? 'text-yellow-500' : 'text-red-500';
      case 'fps':
        return value > 55 ? 'text-green-500' : value > 30 ? 'text-yellow-500' : 'text-red-500';
      case 'networkLatency':
        return value < 100 ? 'text-green-500' : value < 500 ? 'text-yellow-500' : 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getPerformanceStatus = (value: number, type: 'loadTime' | 'renderTime' | 'memoryUsage' | 'fps' | 'networkLatency') => {
    switch (type) {
      case 'loadTime':
        return value < 1000 ? 'Excellent' : value < 3000 ? 'Good' : 'Needs Improvement';
      case 'renderTime':
        return value < 100 ? 'Excellent' : value < 300 ? 'Good' : 'Needs Improvement';
      case 'memoryUsage':
        return value < 50 ? 'Excellent' : value < 100 ? 'Good' : 'Needs Improvement';
      case 'fps':
        return value > 55 ? 'Excellent' : value > 30 ? 'Good' : 'Needs Improvement';
      case 'networkLatency':
        return value < 100 ? 'Excellent' : value < 500 ? 'Good' : 'Needs Improvement';
      default:
        return 'Unknown';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
        title="Show Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-600" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">Load Time</span>
          </div>
          <div className="text-right">
            <div className={`font-semibold ${getPerformanceColor(metrics.loadTime, 'loadTime')}`}>
              {metrics.loadTime.toFixed(0)}ms
            </div>
            <div className="text-xs text-gray-500">
              {getPerformanceStatus(metrics.loadTime, 'loadTime')}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">Render Time</span>
          </div>
          <div className="text-right">
            <div className={`font-semibold ${getPerformanceColor(metrics.renderTime, 'renderTime')}`}>
              {metrics.renderTime.toFixed(0)}ms
            </div>
            <div className="text-xs text-gray-500">
              {getPerformanceStatus(metrics.renderTime, 'renderTime')}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">Memory</span>
          </div>
          <div className="text-right">
            <div className={`font-semibold ${getPerformanceColor(metrics.memoryUsage, 'memoryUsage')}`}>
              {metrics.memoryUsage.toFixed(1)}MB
            </div>
            <div className="text-xs text-gray-500">
              {getPerformanceStatus(metrics.memoryUsage, 'memoryUsage')}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">FPS</span>
          </div>
          <div className="text-right">
            <div className={`font-semibold ${getPerformanceColor(metrics.fps, 'fps')}`}>
              {metrics.fps}
            </div>
            <div className="text-xs text-gray-500">
              {getPerformanceStatus(metrics.fps, 'fps')}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">Network</span>
          </div>
          <div className="text-right">
            <div className={`font-semibold ${getPerformanceColor(metrics.networkLatency, 'networkLatency')}`}>
              {metrics.networkLatency.toFixed(0)}ms
            </div>
            <div className="text-xs text-gray-500">
              {getPerformanceStatus(metrics.networkLatency, 'networkLatency')}
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={measurePerformance}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Refresh Metrics
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;