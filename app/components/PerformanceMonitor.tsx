'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isOnline: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isOnline: true
  });

  useEffect(() => {
    // Monitor performance metrics
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory ? 
        Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0;

      setMetrics(prev => ({
        ...prev,
        loadTime: Math.round(loadTime),
        memoryUsage,
        isOnline: navigator.onLine
      }));
    };

    // Initial measurement
    updateMetrics();

    // Monitor online/offline status
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Only show in development or if explicitly enabled
  if (process.env.NODE_ENV === 'production' && !window.location.search.includes('debug=performance')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg text-xs font-mono z-50 border border-cyan-400/30">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-3 h-3 text-cyan-400" />
        <span className="text-cyan-400 font-semibold">Performance</span>
        <div className={`w-2 h-2 rounded-full ${metrics.isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-blue-400" />
          <span>Load: {metrics.loadTime}ms</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>Memory: {metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3 h-3 text-green-400" />
          <span>Status: {metrics.isOnline ? 'Online' : 'Offline'}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;