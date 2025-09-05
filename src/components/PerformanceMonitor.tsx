import React, { useState, useEffect } from 'react';
import { BarChart3, X, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  isOnline: boolean;
  timestamp: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    isOnline: true,
    timestamp: Date.now()
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackPageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          timestamp: Date.now()
        }));
      }
    };

    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024), // Convert to MB
          timestamp: Date.now()
        }));
      }
    };

    const trackNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({
          ...prev,
          isOnline: navigator.onLine,
          timestamp: Date.now()
        }));
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
  }, []);

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
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-2 text-xs text-white/80">
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={metrics.pageLoadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.pageLoadTime.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage > 100 ? 'text-red-400' : 'text-green-400'}>
              {metrics.memoryUsage}MB
            </span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span className={metrics.isOnline ? 'text-green-400' : 'text-red-400'}>
              {metrics.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>

        {(metrics.pageLoadTime > 3000 || metrics.memoryUsage > 100 || !metrics.isOnline) && (
          <div className="mt-3 flex items-center gap-2 text-xs text-yellow-400">
            <AlertTriangle className="w-3 h-3" />
            <span>Performance issues detected</span>
          </div>
        )}
      </div>
    </div>
  );
};