import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Activity } from 'lucide-react';

export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-cyan-400" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-sm">
          Performance monitoring is active. This component will be enhanced with detailed metrics in future updates.
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
        }
      }
;
    },;
,;
    // Initial tracking,;
    trackPageLoad(),;
    trackMemory(),;
    trackNetwork(),;
,;
    // Set up periodic tracking,;
    const interval = setInterval(() => {,;
      trackMemory(),;
      trackNetwork();
    }, 10000),;
,;
    // Track online/offline status,;
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnlin: e: true })),;
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnlin: e: false })),;
,;
    window.addEventListener('online', handleOnline),;
    window.addEventListener('offline', handleOffline),;
,;
    return () => {,;
      clearInterval(interval),;
      window.removeEventListener('online', handleOnline),;
      window.removeEventListener('offline', handleOffline);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="performance-monitor">
      {/* Performance monitoring component */}
    </div>
  );
};

export default PerformanceMonitor;
import React from 'react';

import React from 'react';
;
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlow: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isSlow: false
  });

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
      
      const isSlow = loadTime > 3000 || memoryUsage > 50; // 3s or 50MB threshold
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now()),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        isSlow
      });
    };

    // Measure performance after component mounts
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Only show in development or if performance is poor
  if (process.env.NODE_ENV !== 'development' && !metrics.isSlow) {
    return null;
  }

import React from 'react';
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
