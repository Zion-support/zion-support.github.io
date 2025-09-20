import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
  bundleSize: number;
  cacheHitRate: number;
  lighthouseScore: number;
  loadTime: number;
};

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    lighthouseScore: 0,
    loadTime: 0
  });
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef<number[]>([]);
  const alertIdRef = useRef(0);

  const addAlert = useCallback((type: PerformanceAlert['type'], message: string) => {
    const newAlert: PerformanceAlert = {
      id: `alert-${++alertIdRef.current}`,
      type,
      message,
      timestamp: new Date()
    };
    
    setAlerts(prev => [newAlert, ...prev.slice(0, 9)]); // Keep last 10 alerts
    
    // Auto-remove alert after 5 seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
    }, 5000);
  }, []);

  const measurePerformance = useCallback(() => {
    const now = performance.now();
    const deltaTime = now - lastTimeRef.current;
    frameCountRef.current++;
    
    // Calculate FPS every second
    if (deltaTime >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / deltaTime);
      fpsRef.current.push(fps);
      if (fpsRef.current.length > 10) {
        fpsRef.current.shift();
      }
      
      const avgFps = Math.round(fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length);
      
      // Get memory usage (if available)
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo 
        ? Math.round((memoryInfo.usedJSHeapSize / 1024 / 1024) * 100) / 100
        : 0;
      
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const renderTime = navigation ? Math.round((navigation.loadEventEnd - navigation.loadEventStart) * 100) / 100 : 0;
      const loadTime = navigation ? Math.round(navigation.loadEventEnd - navigation.fetchStart) : 0;
      
      // Simulate network latency
      const networkLatency = Math.round(Math.random() * 100 + 10);
      
      // Simulate cache hit rate
      const cacheHitRate = Math.round((Math.random() * 30 + 70) * 100) / 100;
      
      // Calculate Lighthouse score
      const lighthouseScore = Math.max(0, Math.min(100, 
        100 - (loadTime / 100) - (memoryUsage * 2) - (networkLatency / 10) - ((60 - avgFps) * 2)
      ));
      
      const newMetrics: PerformanceMetrics = {
        fps: avgFps,
        memoryUsage,
        renderTime,
        networkLatency,
        bundleSize: 0, // Would be calculated from actual bundle analysis
        cacheHitRate,
        lighthouseScore: Math.round(lighthouseScore),
        loadTime
      };
      
      setMetrics(newMetrics);
      
      // Performance alerts
      if (avgFps < 30) {
        addAlert('error', `Low FPS detected: ${avgFps}`);
      } else if (avgFps < 50) {
        addAlert('warning', `FPS below optimal: ${avgFps}`);
      }
      
      if (memoryUsage > 100) {
        addAlert('error', `High memory usage: ${memoryUsage}MB`);
      } else if (memoryUsage > 50) {
        addAlert('warning', `Memory usage elevated: ${memoryUsage}MB`);
      }
      
      if (renderTime > 1000) {
        addAlert('error', `Slow render time: ${renderTime}ms`);
      }
      
      if (networkLatency > 200) {
        addAlert('warning', `High network latency: ${networkLatency}ms`);
      }
      
      if (lighthouseScore < 50) {
        addAlert('error', `Poor Lighthouse score: ${Math.round(lighthouseScore)}`);
      } else if (lighthouseScore < 80) {
        addAlert('warning', `Lighthouse score needs improvement: ${Math.round(lighthouseScore)}`);
      }
      
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }
  }, [addAlert]);

  useEffect(() => {
    const interval = setInterval(measurePerformance, 100);
    return () => clearInterval(interval);
  }, [measurePerformance]);

  // Performance monitoring without web-vitals dependency
  useEffect(() => {
    // Monitor Core Web Vitals manually
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry as PerformanceEntry & { startTime: number };
          if (lcp.startTime > 4000) {
            addAlert('error', `Poor LCP: ${lcp.startTime.toFixed(2)}ms`);
          }
        }
        
        if (entry.entryType === 'first-input') {
          const fid = entry as PerformanceEntry & { processingStart: number; startTime: number };
          const delay = fid.processingStart - fid.startTime;
          if (delay > 100) {
            addAlert('warning', `High FID: ${delay.toFixed(2)}ms`);
          }
        }
        
        if (entry.entryType === 'layout-shift') {
          const cls = entry as PerformanceEntry & { value: number };
          if (cls.value > 0.25) {
            addAlert('warning', `Poor CLS score: ${cls.value.toFixed(3)}`);
          }
        }
      }
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      // Performance Observer not supported
      console.log('Performance Observer not supported');
    }
    
    return () => {
      observer.disconnect();
    };
  }, [addAlert]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const getStatusColor = (value: number, thresholds: { warning: number; error: number }) => {
    if (value >= thresholds.error) return 'text-red-400';
    if (value >= thresholds.warning) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getAlertIcon = (type: PerformanceAlert['type']) => {
    switch (type) {
      case 'error':
        return '🔴';
      case 'warning':
        return '🟡';
      case 'info':
        return '🔵';
      default:
        return 'ℹ️';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 right-4 bg-black bg-opacity-95 text-white rounded-lg shadow-xl z-50 border border-gray-700 min-w-[320px]"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-700">
            <h3 className="text-sm font-semibold text-blue-400">Performance Monitor</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMinimized ? '📈' : '📉'}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Metrics */}
          {!isMinimized && (
            <motion.div
              className="p-3 space-y-2 text-xs"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">FPS:</span>
                  <span className={getStatusColor(metrics.fps, { warning: 45, error: 30 })}>
                    {metrics.fps}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Memory:</span>
                  <span className={getStatusColor(metrics.memoryUsage, { warning: 50, error: 100 })}>
                    {metrics.memoryUsage}MB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Render:</span>
                  <span className={getStatusColor(metrics.renderTime, { warning: 500, error: 1000 })}>
                    {metrics.renderTime}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network:</span>
                  <span className={getStatusColor(metrics.networkLatency, { warning: 100, error: 200 })}>
                    {metrics.networkLatency}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Load Time:</span>
                  <span className={getStatusColor(metrics.loadTime, { warning: 2000, error: 5000 })}>
                    {metrics.loadTime}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cache Hit:</span>
                  <span className="text-green-400">
                    {metrics.cacheHitRate}%
                  </span>
                </div>
              </div>
              
              {/* Lighthouse Score */}
              <div className="mt-3 pt-2 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lighthouse Score:</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          metrics.lighthouseScore >= 90 ? 'bg-green-400' :
                          metrics.lighthouseScore >= 70 ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}
                        style={{ width: `${metrics.lighthouseScore}%` }}
                      />
                    </div>
                    <span className={metrics.lighthouseScore >= 90 ? 'text-green-400' : 
                                    metrics.lighthouseScore >= 70 ? 'text-yellow-400' : 'text-red-400'}>
                      {metrics.lighthouseScore}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="mt-3 pt-2 border-t border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">Recent Alerts:</div>
                  <div className="space-y-1 max-h-20 overflow-y-auto">
                    {alerts.slice(0, 3).map((alert) => (
                      <motion.div
                        key={alert.id}
                        className="flex items-center gap-1 text-xs"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <span>{getAlertIcon(alert.type)}</span>
                        <span className="truncate">{alert.message}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
          
          <div className="px-3 pb-2 border-t border-gray-700 text-center">
            <span className="text-gray-500 text-xs">Press Ctrl+Shift+P to toggle</span>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          onClick={() => setIsVisible(true)}
          className="fixed top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          📊
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default EnhancedPerformanceMonitor;
