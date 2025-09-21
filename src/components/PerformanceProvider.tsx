'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { performanceMonitor, PerformanceOptimizer } from '../utils/performance';

interface PerformanceContextType {
  measureAsync: <T>(name: string, fn: () => Promise<T>) => Promise<T>;
  measureSync: <T>(name: string, fn: () => T) => T;
  getMetrics: () => any;
}

const PerformanceContext = createContext<PerformanceContextType | null>(null);

interface PerformanceProviderProps {
  children: ReactNode;
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  useEffect(() => {
    // Initialize performance optimizations
    PerformanceOptimizer.lazyLoadImages();
    PerformanceOptimizer.optimizeBundleLoading();

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/styles/globals.css',
    ];
    PerformanceOptimizer.preloadCriticalResources(criticalResources);

    // Set up performance monitoring
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Report metrics when page becomes hidden
        const metrics = performanceMonitor.getMetrics();
        if (Object.keys(metrics).length > 0) {
          console.log('Performance metrics on page hide:', metrics);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const contextValue: PerformanceContextType = {
    measureAsync: performanceMonitor.measureAsync.bind(performanceMonitor),
    measureSync: performanceMonitor.measureSync.bind(performanceMonitor),
    getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor),
  };

  return (
    <PerformanceContext.Provider value={contextValue}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
}

// Higher-order component for performance monitoring
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  return function PerformanceMonitoredComponent(props: P) {
    const { measureSync } = usePerformance();

    return measureSync(`render-${componentName}`, () => {
      return <Component {...props} />;
    });
  };
}

// Performance monitoring hook for custom metrics
export function usePerformanceMetrics() {
  const { getMetrics } = usePerformance();

  useEffect(() => {
    const interval = setInterval(() => {
      const metrics = getMetrics();
      if (Object.keys(metrics).length > 0) {
        // You can send metrics to analytics here
        console.log('Current performance metrics:', metrics);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [getMetrics]);

  return getMetrics;
}