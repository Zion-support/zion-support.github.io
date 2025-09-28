import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

interface PerformanceData {
  loadTime: number;
  memoryUsage: number | null;
  renderCount: number;
  lastRenderTime: number;
  fps: number;
  isVisible: boolean;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showDetails?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showDetails = false,
  className = ''
}) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    memoryUsage: null,
    renderCount: 0,
    lastRenderTime: 0,
    fps: 0,
    isVisible: false
  });

  const [fps, setFps] = useState(0);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());

  const { metrics, memoryUsage } = usePerformanceOptimization({
    enableMemoryMonitoring: true,
    enableRenderTracking: true
  });

  // FPS calculation
  const calculateFPS = useCallback(() => {
    const now = performance.now();
    const delta = now - lastTime;
    
    if (delta >= 1000) {
      setFps(Math.round((frameCount * 1000) / delta));
      setFrameCount(0);
      setLastTime(now);
    } else {
      setFrameCount(prev => prev + 1);
    }
  }, [frameCount, lastTime]);

  // Update performance data
  useEffect(() => {
    if (!enabled) return;

    const updateData = () => {
      setPerformanceData(prev => ({
        ...prev,
        loadTime: metrics.loadTime,
        memoryUsage: memoryUsage?.used || null,
        renderCount: metrics.renderCount,
        lastRenderTime: metrics.lastRenderTime,
        fps: fps
      }));
    };

    updateData();
  }, [enabled, metrics, memoryUsage, fps]);

  // FPS monitoring
  useEffect(() => {
    if (!enabled) return;

    const rafId = requestAnimationFrame(() => {
      calculateFPS();
    });

    return () => cancelAnimationFrame(rafId);
  }, [enabled, calculateFPS]);

  // Memory usage formatting
  const formatMemory = useCallback((bytes: number | null) => {
    if (!bytes) return 'N/A';
    
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  }, []);

  // Performance status
  const performanceStatus = useMemo(() => {
    if (fps < 30) return { status: 'poor', color: 'text-red-500' };
    if (fps < 50) return { status: 'fair', color: 'text-yellow-500' };
    return { status: 'good', color: 'text-green-500' };
  }, [fps]);

  if (!enabled) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Performance Monitor
          </h3>
          <button
            onClick={() => setPerformanceData(prev => ({ ...prev, isVisible: !prev.isVisible }))}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {performanceData.isVisible ? '−' : '+'}
          </button>
        </div>

        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FPS:</span>
            <span className={`font-mono ${performanceStatus.color}`}>
              {fps}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Memory:</span>
            <span className="font-mono text-gray-900 dark:text-white">
              {formatMemory(performanceData.memoryUsage)}
            </span>
          </div>

          {showDetails && (
            <>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Renders:</span>
                <span className="font-mono text-gray-900 dark:text-white">
                  {performanceData.renderCount}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
                <span className="font-mono text-gray-900 dark:text-white">
                  {performanceData.loadTime.toFixed(2)}ms
                </span>
              </div>
            </>
          )}
        </div>

        {performanceData.isVisible && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <div>Status: <span className={performanceStatus.color}>{performanceStatus.status}</span></div>
              {memoryUsage && (
                <div>
                  Memory: {formatMemory(memoryUsage.used)} / {formatMemory(memoryUsage.limit)} 
                  ({memoryUsage.percentage?.toFixed(1)}%)
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;