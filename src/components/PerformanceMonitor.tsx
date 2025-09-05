import React, { useEffect, useState } from 'react';
import { BarChart3, X, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  isOnline: boolean;
  networkType?: string;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logMetrics = false,
  onThresholdExceeded
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    isOnline: navigator.onLine
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackPageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, pageLoadTime: loadTime }));
        
        if (logMetrics) {
          console.log('Page Load Time:', loadTime);
        }
      }
    };

    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
        
        if (logMetrics) {
          console.log('Memory Usage:', memoryUsage, 'MB');
        }
      }
    };

    const trackNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          networkType: connection.effectiveType || 'unknown' 
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
  }, [logMetrics]);

  // Show performance issues
  useEffect(() => {
    const hasPerformanceIssues =
      metrics.pageLoadTime > 3000 || // > 3 seconds
      metrics.memoryUsage > 100 || // > 100 MB
      !metrics.isOnline;

    if (hasPerformanceIssues) {
      setIsVisible(true);
      onThresholdExceeded?.(metrics);
      
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => setIsVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [metrics, onThresholdExceeded]);

  if (!isVisible || !showMetrics) return null;

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
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-3 h-3 text-yellow-400" />
            <span>Load Time: {metrics.pageLoadTime.toFixed(0)}ms</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-3 h-3 text-yellow-400" />
            <span>Memory: {metrics.memoryUsage.toFixed(1)}MB</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${metrics.isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
            <span>Status: {metrics.isOnline ? 'Online' : 'Offline'}</span>
          </div>
          {metrics.networkType && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Network: {metrics.networkType}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;