import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  score: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    score: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // Load time scoring (0-40 points)
    if (metrics.loadTime > 3000) score -= 40;
    else if (metrics.loadTime > 2000) score -= 30;
    else if (metrics.loadTime > 1000) score -= 20;
    else if (metrics.loadTime > 500) score -= 10;
    
    // FPS scoring (0-30 points)
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 45) score -= 20;
    else if (metrics.fps < 55) score -= 10;
    
    // Memory usage scoring (0-20 points)
    if (metrics.memoryUsage > 100) score -= 20;
    else if (metrics.memoryUsage > 50) score -= 10;
    
    // Render time scoring (0-10 points)
    if (metrics.renderTime > 16) score -= 10;
    else if (metrics.renderTime > 8) score -= 5;
    
    return Math.max(0, score);
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();
    
    // Measure load time
    const loadTime = performance.timing ? 
      performance.timing.loadEventEnd - performance.timing.navigationStart : 
      Date.now() - performance.timeOrigin;

    // Measure memory usage
    const memoryUsage = (performance as any).memory ? 
      (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0;

    // Measure FPS
    let fps = 0;
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (enableRealTimeMonitoring) {
        requestAnimationFrame(measureFPS);
      }
    };

    if (enableRealTimeMonitoring) {
      requestAnimationFrame(measureFPS);
    }

    // Measure render time
    const renderTime = performance.now() - startTime;

    const newMetrics: PerformanceMetrics = {
      loadTime,
      renderTime,
      memoryUsage,
      fps: enableRealTimeMonitoring ? fps : 60, // Default to 60 if not measuring
      score: 0
    };

    newMetrics.score = calculatePerformanceScore(newMetrics);
    
    setMetrics(newMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }
  }, [calculatePerformanceScore, onMetricsUpdate, enableRealTimeMonitoring]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(() => {
      measurePerformance();
    }, 1000);

    // Periodic measurements
    const interval = setInterval(() => {
      measurePerformance();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [measurePerformance]);

  // Show/hide monitor with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 min-w-[300px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-lg"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className={`font-semibold ${getScoreColor(metrics.score)}`}>
            {metrics.score}/100 ({getScoreLabel(metrics.score)})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span>{metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span>{metrics.renderTime.toFixed(2)}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory Usage:</span>
          <span>{metrics.memoryUsage.toFixed(1)}MB</span>
        </div>
        
        <div className="flex justify-between">
          <span>FPS:</span>
          <span>{metrics.fps}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;