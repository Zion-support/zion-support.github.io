import React, { useEffect, useState } from 'react';
import { BarChart3 } from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  isOnline: boolean;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    isOnline: navigator.onLine,
  });

  useEffect(() => {
    const trackPageLoad = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, pageLoadTime: loadTime }));
    };

    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    const trackNetwork = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
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

  // Call the callback with performance data
  useEffect(() => {
    if (onPerformanceData) {
      onPerformanceData(metrics);
    }
  }, [metrics, onPerformanceData]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-white">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-auto text-white/60 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="space-y-2 text-xs text-white/80">
          <div>Load Time: {metrics.pageLoadTime.toFixed(0)}ms</div>
          <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
          <div>Status: {metrics.isOnline ? 'Online' : 'Offline'}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;