import React, { useEffect, useState } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  enableReporting = true 
}) => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!enableReporting) return;

    // Initialize performance monitoring
    performanceOptimizer.initialize();
    setIsMonitoring(true);

    // Set up performance metrics collection
    const collectMetrics = () => {
      const currentMetrics = performanceOptimizer.getMetrics();
      setMetrics(currentMetrics);
    };

    // Collect metrics immediately
    collectMetrics();

    // Set up interval for regular metric collection
    const interval = setInterval(collectMetrics, 5000);

    // Set up Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const vitals = performanceOptimizer.measurePageLoad();
      if (vitals) {
        performanceOptimizer.reportWebVitals(vitals);
      }
    }

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, [enableReporting]);

  // Report performance issues in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isMonitoring) {
      const slowComponents = metrics.slowComponents || 0;
      const averageRenderTime = metrics.averageRenderTime || 0;

      if (slowComponents > 0) {
        console.warn(`Performance Warning: ${slowComponents} slow components detected`);
      }

      if (averageRenderTime > 16) {
        console.warn(`Performance Warning: Average render time is ${averageRenderTime.toFixed(2)}ms (target: <16ms)`);
      }
    }
  }, [metrics, isMonitoring]);

  return (
    <div data-performance-monitor={isMonitoring}>
      {children}
    </div>
  );
};

export default PerformanceMonitor;