import React, { useEffect, useCallback } from 'react';
import { performanceMonitor, ResourceOptimizer } from '../../app/lib/performance';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enablePreloading?: boolean;
  enableMonitoring?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  enablePreloading = true, 
  enableMonitoring = true 
}) => {
  const optimizePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Preload critical resources
    if (enablePreloading) {
      // Preload critical fonts
      ResourceOptimizer.preloadCriticalFonts([
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ]);

      // Preload critical images
      ResourceOptimizer.preloadCriticalImages([
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ]);
    }

    // Enable performance monitoring
    if (enableMonitoring) {
      // Report metrics after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          performanceMonitor.reportMetrics();
        }, 2000);
      });
    }
  }, [enablePreloading, enableMonitoring]);

  useEffect(() => {
    optimizePerformance();

    // Cleanup on unmount
    return () => {
      performanceMonitor.cleanup();
    };
  }, [optimizePerformance]);

  return <>{children}</>;
};

export default PerformanceOptimizer;