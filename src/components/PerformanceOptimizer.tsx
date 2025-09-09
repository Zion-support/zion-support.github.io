import React, { memo, useEffect, useCallback } from 'react';
import { performanceMonitor, performanceUtils } from '../utils/performance';

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  children: React.ReactNode;
}

const PerformanceOptimizer = memo<PerformanceOptimizerProps>(({ 
  enableMonitoring = false, 
  children 
}) => {
  const measureRender = useCallback(() => {
    if (enableMonitoring) {
      return performanceMonitor.measureRenderTime('PerformanceOptimizer');
    }
    return () => {};
  }, [enableMonitoring]);

  useEffect(() => {
    const cleanup = measureRender();
    
    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Preload critical CSS
      const criticalCSS = document.querySelector('link[rel="preload"][as="style"]');
      if (!criticalCSS) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = '/assets/index.css';
        document.head.appendChild(link);
      }

      // Preload critical fonts
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];
      
      criticalFonts.forEach(fontUrl => {
        if (!document.querySelector(`link[href="${fontUrl}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'style';
          link.href = fontUrl;
          document.head.appendChild(link);
        }
      });
    }

    return cleanup;
  }, [measureRender]);

  // Optimize scroll performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const optimizedScrollHandler = performanceUtils.throttle(() => {
      // Handle scroll events efficiently
    }, 16); // ~60fps

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
    };
  }, []);

  // Optimize resize performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const optimizedResizeHandler = performanceUtils.debounce(() => {
      // Handle resize events efficiently
    }, 250);

    window.addEventListener('resize', optimizedResizeHandler);
    
    return () => {
      window.removeEventListener('resize', optimizedResizeHandler);
    };
  }, []);

  return <>{children}</>;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export { PerformanceOptimizer };