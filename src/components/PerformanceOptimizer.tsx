import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
  bundleSize: number;
  networkRequests: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

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
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0,
    bundleSize: 0,
    networkRequests: 0,
    coreWebVitals: {
      lcp: 0,
      fid: 0,
      cls: 0,
    },
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // FPS measurement
  const measureFPS = useCallback(() => {
    if (!enabled) return;
    
    let lastTime = performance.now();
    let frameCount = 0;
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (enabled) {
        requestAnimationFrame(countFrames);
      }
    };
    
    requestAnimationFrame(countFrames);
  }, [enabled]);

  // Performance monitoring
  useEffect(() => {
    if (!enabled) return;

    // Measure initial load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Start FPS monitoring
    measureFPS();

    // Memory usage monitoring
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
      }));
    }

    // Network monitoring
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setMetrics(prev => ({
        ...prev,
        networkLatency: connection.rtt || 0,
      }));
    }
  }, [enabled, measureFPS]);

  // Lazy loading setup
  useEffect(() => {
    if (!enableLazyLoading || !enableIntersectionObserver) return;

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
  }, [enableLazyLoading, enableIntersectionObserver]);

  return (
    <>
      {children}
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && enablePerformanceMonitoring && showMetrics && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>FPS: {metrics.fps}</div>
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        </div>
      )}
    </>
  );
};