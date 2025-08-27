import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, HardDrive, Wifi, WifiOff } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
  networkSpeed?: number;
  isOnline: boolean;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  onMetricsUpdate,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    fps: 0,
    isOnline: navigator.onLine
  });
  const [isVisible, setIsVisible] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      // Memory usage
      let memoryUsage: number | undefined;
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      // FPS calculation
      let fps = 0;
      if (typeof requestAnimationFrame !== 'undefined') {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const countFrames = () => {
          frameCount++;
          const currentTime = performance.now();
          
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          
          requestAnimationFrame(countFrames);
        };
        
        requestAnimationFrame(countFrames);
      }

      // Network speed estimation
      let networkSpeed: number | undefined;
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && connection.effectiveType) {
          const speedMap: { [key: string]: number } = {
            'slow-2g': 0.5,
            '2g': 1,
            '3g': 3,
            '4g': 10
          };
          networkSpeed = speedMap[connection.effectiveType] || 5;
        }
      }

      const newMetrics: PerformanceMetrics = {
        loadTime,
        renderTime: performance.now(),
        memoryUsage,
        fps,
        networkSpeed,
        isOnline: navigator.onLine
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    }
  }, [onMetricsUpdate]);

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Performance measurement interval
  useEffect(() => {
    const interval = setInterval(measurePerformance, 2000);
    return () => clearInterval(interval);
  }, [measurePerformance]);

  // Initial measurement
  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  if (!showMetrics) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-white text-sm z-50 ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-cyan-400" />
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-blue-400" />
          <span>Load: {metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>FPS: {metrics.fps}</span>
        </div>
        
        {metrics.memoryUsage && (
          <div className="flex items-center gap-2">
            <HardDrive className="w-3 h-3 text-green-400" />
            <span>Memory: {metrics.memoryUsage.toFixed(1)}MB</span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          {metrics.isOnline ? (
            <Wifi className="w-3 h-3 text-green-400" />
          ) : (
            <WifiOff className="w-3 h-3 text-red-400" />
          )}
          <span>{metrics.isOnline ? 'Online' : 'Offline'}</span>
        </div>
        
        {metrics.networkSpeed && (
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-purple-400" />
            <span>Speed: {metrics.networkSpeed}G</span>
          </div>
        )}
      </div>
      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3 pt-3 border-t border-slate-600 text-xs text-slate-300"
        >
          <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
          <div>User Agent: {navigator.userAgent.substring(0, 30)}...</div>
        </motion.div>
      )}
    </motion.div>
  );
};
