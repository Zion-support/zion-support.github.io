import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart3, Zap, Clock, HardDrive, Wifi, WifiOff } from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  networkSpeed: number;
  isOnline: boolean;
  timestamp: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    networkSpeed: 0,
    isOnline: navigator.onLine,
    timestamp: Date.now()
  });
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.navigationStart;
          setMetrics(prev => ({
            ...prev,
            pageLoadTime: loadTime,
            timestamp: Date.now()
          }));
        }
      }
    };

    // Track memory usage
    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(usedMemory * 100) / 100
        }));
      }
    };

    // Track network status
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    // Track network speed (simplified)
    const trackNetworkSpeed = async () => {
      try {
        const startTime = performance.now();
        const response = await fetch('/api/health', { 
          method: 'HEAD',
          cache: 'no-cache'
        });
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        
        setMetrics(prev => ({
          ...prev,
          networkSpeed: Math.round(responseTime)
        }));
      } catch (error) {
        // Network request failed, likely offline
        setMetrics(prev => ({
          ...prev,
          networkSpeed: 0
        }));
      }
    };

    // Set up event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('load', trackPageLoad);

    // Initial tracking
    trackMemory();
    trackNetworkSpeed();

    // Periodic updates
    const interval = setInterval(() => {
      trackMemory();
      trackNetworkSpeed();
    }, 10000); // Update every 10 seconds

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('load', trackPageLoad);
      clearInterval(interval);
    };
  }, [location.pathname]);

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-400';
    if (value <= threshold * 1.5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMemoryColor = (usage: number) => {
    if (usage < 50) return 'text-green-400';
    if (usage < 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-zion-slate-dark/90 backdrop-blur-lg rounded-lg p-4 border border-zion-cyan/20 shadow-2xl min-w-[300px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-zion-cyan font-semibold flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-cyan/60 hover:text-zion-cyan transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-3 text-sm">
        {/* Page Load Time */}
        <div className="flex items-center justify-between">
          <span className="text-zion-slate-light flex items-center gap-2">
            <Clock className="w-3 h-3" />
            Load Time:
          </span>
          <span className={getPerformanceColor(metrics.pageLoadTime, 2000)}>
            {metrics.pageLoadTime > 0 ? `${Math.round(metrics.pageLoadTime)}ms` : 'N/A'}
          </span>
        </div>

        {/* Memory Usage */}
        <div className="flex items-center justify-between">
          <span className="text-zion-slate-light flex items-center gap-2">
            <HardDrive className="w-3 h-3" />
            Memory:
          </span>
          <span className={getMemoryColor(metrics.memoryUsage)}>
            {metrics.memoryUsage > 0 ? `${metrics.memoryUsage}MB` : 'N/A'}
          </span>
        </div>

        {/* Network Speed */}
        <div className="flex items-center justify-between">
          <span className="text-zion-slate-light flex items-center gap-2">
            <Zap className="w-3 h-3" />
            Response:
          </span>
          <span className={getPerformanceColor(metrics.networkSpeed, 100)}>
            {metrics.networkSpeed > 0 ? `${metrics.networkSpeed}ms` : 'N/A'}
          </span>
        </div>

        {/* Network Status */}
        <div className="flex items-center justify-between">
          <span className="text-zion-slate-light flex items-center gap-2">
            {metrics.isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
            Status:
          </span>
          <span className={metrics.isOnline ? 'text-green-400' : 'text-red-400'}>
            {metrics.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* Performance Score */}
        <div className="pt-2 border-t border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light">Performance Score:</span>
            <span className="text-zion-cyan font-semibold">
              {calculatePerformanceScore()}/100
            </span>
          </div>
          <div className="w-full bg-zion-slate-dark rounded-full h-2 mt-1">
            <div 
              className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${calculatePerformanceScore()}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-zion-cyan/60 text-center">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );

  function calculatePerformanceScore(): number {
    let score = 100;

    // Deduct points for slow page load
    if (metrics.pageLoadTime > 3000) score -= 20;
    else if (metrics.pageLoadTime > 2000) score -= 10;

    // Deduct points for high memory usage
    if (metrics.memoryUsage > 100) score -= 20;
    else if (metrics.memoryUsage > 50) score -= 10;

    // Deduct points for slow network
    if (metrics.networkSpeed > 500) score -= 20;
    else if (metrics.networkSpeed > 200) score -= 10;

    // Deduct points for offline status
    if (!metrics.isOnline) score -= 30;

    return Math.max(0, score);
  }
};

export default PerformanceMonitor;
