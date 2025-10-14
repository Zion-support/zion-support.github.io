import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!enabled) return;

    const measurePerformance = () => {
      const now = performance.now();
      const deltaTime = now - lastTimeRef.current;
      
      frameCountRef.current++;
      
      if (deltaTime >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / deltaTime);
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        const newMetrics = {
          fps,
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          loadTime: Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart),
          renderTime: Math.round(deltaTime)
        };
        
        setMetrics(newMetrics);
        onMetricsUpdate?.(newMetrics);
        
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      
      animationFrameRef.current = requestAnimationFrame(measurePerformance);
    };

    animationFrameRef.current = requestAnimationFrame(measurePerformance);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, onMetricsUpdate]);

  if (!enabled) return null;

  const getFpsColor = (fps: number) => {
    if (fps >= 55) return 'text-green-400';
    if (fps >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMemoryColor = (memory: number) => {
    if (memory < 50) return 'text-green-400';
    if (memory < 100) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Monitor Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-black/90 text-white p-4 rounded-lg min-w-[200px] backdrop-blur-sm border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Performance
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">FPS:</span>
              <span className={getFpsColor(metrics.fps)}>
                {metrics.fps}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Memory:</span>
              <span className={getMemoryColor(metrics.memoryUsage)}>
                {metrics.memoryUsage} MB
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Load Time:</span>
              <span className="text-cyan-400">
                {metrics.loadTime}ms
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Render:</span>
              <span className="text-purple-400">
                {metrics.renderTime}ms
              </span>
            </div>
          </div>
          
          {metrics.fps < 30 && (
            <div className="mt-3 p-2 bg-red-500/20 rounded text-xs text-red-300 flex items-center">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Low FPS detected
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;