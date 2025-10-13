import React, { useState, useEffect, useRef } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  loadTime: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  enabled = true, 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    loadTime: 0,
    renderTime: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsRef = useRef<number[]>([]);

  useEffect(() => {
    if (!enabled) return;

    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-monitor') === 'true';

    if (!shouldShow) return;

    setIsVisible(true);

    const updateMetrics = () => {
      const now = performance.now();
      const delta = now - lastTime.current;
      
      frameCount.current++;
      
      if (delta >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / delta);
        fpsRef.current.push(fps);
        
        // Keep only last 10 FPS readings
        if (fpsRef.current.length > 10) {
          fpsRef.current.shift();
        }
        
        const avgFps = Math.round(
          fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length
        );
        
        setMetrics(prev => ({
          ...prev,
          fps: avgFps,
          memory: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
          loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
          renderTime: now - performance.timing.navigationStart
        }));
        
        frameCount.current = 0;
        lastTime.current = now;
      }
      
      requestAnimationFrame(updateMetrics);
    };

    updateMetrics();

    return () => {
      setIsVisible(false);
    };
  }, [enabled]);

  if (!isVisible) return null;

  const getPerformanceColor = (fps: number) => {
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
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-white text-xs font-mono">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-4 h-4 text-blue-400" />
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3" />
          <span>FPS: </span>
          <span className={getPerformanceColor(metrics.fps)}>
            {metrics.fps}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-3 h-3" />
          <span>Memory: </span>
          <span className={getMemoryColor(metrics.memory)}>
            {metrics.memory.toFixed(1)}MB
          </span>
        </div>
        
        {showDetails && (
          <>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>Load: {metrics.loadTime}ms</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>Render: {metrics.renderTime.toFixed(0)}ms</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;