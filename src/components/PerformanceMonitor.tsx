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
        const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationTiming) {
          const loadTime = navigationTiming.loadEventEnd - navigationTiming.responseEnd;
          setMetrics(prev => ({ ...prev, pageLoadTime: parseFloat(loadTime.toFixed(2)) }));
        }
      }
    };

    // Track memory usage (non-standard, Chrome only)
    const trackMemoryUsage = () => {
      if ('performance' in window && 'memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: parseFloat((memory.usedJSHeapSize / 1024 / 1024).toFixed(2)) }));
      }
    };

    // Track network speed (estimation)
    const trackNetworkSpeed = () => {
      if ('connection' in navigator && (navigator.connection as any).downlink) {
        setMetrics(prev => ({ ...prev, networkSpeed: (navigator.connection as any).downlink }));
      }
    };

    // Track online status
    const handleOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    window.addEventListener('load', trackPageLoad);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    const intervalId = setInterval(() => {
      trackMemoryUsage();
      trackNetworkSpeed();
      setMetrics(prev => ({ ...prev, timestamp: Date.now() }));
    }, 5000); // Update every 5 seconds

    return () => {
      window.removeEventListener('load', trackPageLoad);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
      clearInterval(intervalId);
    };
  }, [location.pathname]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleVisibility}
        className="bg-zion-purple text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle Performance Monitor"
      >
        <BarChart3 className="h-6 w-6" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-lg p-4 shadow-xl text-white text-sm w-64 space-y-2">
          <h3 className="font-bold text-lg text-zion-cyan mb-2">Performance Metrics</h3>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Page Load: {metrics.pageLoadTime} ms</span>
          </div>
          <div className="flex items-center">
            <HardDrive className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Memory: {metrics.memoryUsage} MB</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Network: {metrics.networkSpeed} Mbps</span>
          </div>
          <div className="flex items-center">
            {metrics.isOnline ? (
              <Wifi className="h-4 w-4 mr-2 text-green-400" />
            ) : (
              <WifiOff className="h-4 w-4 mr-2 text-red-400" />
            )}
            <span>Status: {metrics.isOnline ? 'Online' : 'Offline'}</span>
          </div>
          <div className="text-xs text-zion-slate-light mt-2">
            Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
