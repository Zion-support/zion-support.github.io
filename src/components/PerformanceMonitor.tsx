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
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
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

    // Track network speed
    const trackNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType) {
          const speedMap: { [key: string]: number } = {
            'slow-2g': 0.5,
            '2g': 1,
            '3g': 3,
            '4g': 10,
            '5g': 100
          };
          setMetrics(prev => ({
            ...prev,
            networkSpeed: speedMap[connection.effectiveType] || 0
          }));
        }
      }
    };

    // Initial tracking
    trackPageLoad();
    trackMemory();
    trackNetwork();

    // Set up periodic tracking
    const interval = setInterval(() => {
      trackMemory();
      trackNetwork();
    }, 10000);

    // Track online/offline status
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [location.pathname]);

  // Show performance issues
  useEffect(() => {
    const hasPerformanceIssues = 
      metrics.pageLoadTime > 3000 || // > 3 seconds
      metrics.memoryUsage > 100 || // > 100 MB
      !metrics.isOnline;

    if (hasPerformanceIssues) {
      setIsVisible(true);
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => setIsVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [metrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-white">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-auto text-white/60 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-400" />
            <span className="text-white">
              Load: {metrics.pageLoadTime > 0 ? `${Math.round(metrics.pageLoadTime)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-yellow-400" />
            <span className="text-white">
              Memory: {metrics.memoryUsage > 0 ? `${metrics.memoryUsage}MB` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {metrics.isOnline ? (
              <>
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-white">
                  Network: {metrics.networkSpeed > 0 ? `${metrics.networkSpeed}Mbps` : 'N/A'}
                </span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-red-400" />
                <span className="text-white text-red-400">Offline</span>
              </>
            )}
          </div>

          {metrics.pageLoadTime > 3000 && (
            <div className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
              ⚠️ Slow page load detected
            </div>
          )}

          {metrics.memoryUsage > 100 && (
            <div className="text-xs text-orange-400 bg-orange-400/10 p-2 rounded">
              ⚠️ High memory usage
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;