import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  errors: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    errors: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !showInProduction) {
      return;
    }

    const startTime = performance.now();
    let frameCount = 0;
    let lastTime = startTime;

    const measurePerformance = () => {
      const currentTime = performance.now();
      const loadTime = currentTime - startTime;
      
      // Calculate FPS
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        setMetrics(prev => ({
          ...prev,
          loadTime,
          fps,
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
        }));
      }
    };

    const measureRenderTime = () => {
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };

    // Initial measurement
    measurePerformance();
    measureRenderTime();

    // Set up performance monitoring
    const interval = setInterval(measurePerformance, 1000);
    
    // Monitor errors
    const errorHandler = () => {
      setMetrics(prev => ({ ...prev, errors: prev.errors + 1 }));
    };
    
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', errorHandler);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, [showInProduction]);

  // Don't render if not in development and not explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !showInProduction) {
    return null;
  }

  const formatMemory = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized && (
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-xl min-w-[280px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
            </div>
            <div className="flex space-x-1">
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                −
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Load Time:</span>
              <span className={getPerformanceColor(metrics.loadTime, { good: 1000, warning: 3000 })}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Render Time:</span>
              <span className={getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}>
                {metrics.renderTime.toFixed(1)}ms
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">FPS:</span>
              <span className={getPerformanceColor(60 - metrics.fps, { good: 0, warning: 10 })}>
                {metrics.fps}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Memory:</span>
              <span className="text-cyan-400">
                {formatMemory(metrics.memoryUsage)}
              </span>
            </div>
            
            {metrics.errors > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Errors:</span>
                <span className="text-red-400 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {metrics.errors}
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-700">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Status: {metrics.fps >= 55 ? 'Good' : metrics.fps >= 30 ? 'Fair' : 'Poor'}</span>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${
                  metrics.fps >= 55 ? 'bg-green-400' : 
                  metrics.fps >= 30 ? 'bg-yellow-400' : 'bg-red-400'
                }`} />
              </div>
            </div>
          </div>
        </div>
      )}

      {isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-2 shadow-xl hover:bg-slate-700/90 transition-colors"
        >
          <Activity className="w-4 h-4 text-cyan-400" />
        </button>
      )}
    </div>
  );
};

export default PerformanceMonitor;
