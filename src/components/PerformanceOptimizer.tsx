import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enablePerformanceMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0,
    bundleSize: 0,
    networkRequests: 0,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    // Measure FPS
    let frameCount = 0;
    const measureFPS = () => {
      frameCount++;
      if (frameCount % 60 === 0) {
        setMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
      }
      requestAnimationFrame(measureFPS);
    };

    // Measure render time
    const renderStartTime = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - renderStartTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    });

    requestAnimationFrame(measureFPS);
  }, [enabled]);

  // Enhanced auto-optimization logic
  const performOptimizations = useCallback(async () => {
    if (isOptimizing) return;
    
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Check FPS and suggest optimizations
      if (metrics.fps < 30) {
        newOptimizations.push('Low FPS detected - Consider reducing animations');
      }

      // Check memory usage
      if (metrics.memoryUsage > 100) {
        newOptimizations.push('High memory usage - Consider implementing memory cleanup');
      }

      // Check load time
      if (metrics.loadTime > 3000) {
        newOptimizations.push('Slow load time - Consider implementing lazy loading');
      }

      setOptimizations(newOptimizations);
    } catch (error) {
      console.warn('Optimization analysis failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [metrics, isOptimizing]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (enableLazyLoading && enableIntersectionObserver && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                observer.unobserve(target);
              }
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      // Observe all images with data-src
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => observer.observe(img));

      return () => observer.disconnect();
    }
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Performance monitoring effect
  useEffect(() => {
    if (enabled && enablePerformanceMonitoring) {
      const interval = setInterval(measurePerformance, 5000);
      return () => clearInterval(interval);
    }
  }, [enabled, enablePerformanceMonitoring, measurePerformance]);

  // Auto-optimization effect
  useEffect(() => {
    if (enabled && autoOptimize) {
      const interval = setInterval(performOptimizations, 10000);
      return () => clearInterval(interval);
    }
  }, [enabled, autoOptimize, performOptimizations]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && enablePerformanceMonitoring && showMetrics && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Performance Monitor Active</div>
          <div>FPS: {metrics.fps}</div>
          <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
        </div>
      )}
    </>
  );
};
