import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Settings,
  BarChart3,
  Cpu,
  Memory,
  HardDrive,
  Gauge,
  Network
} from 'lucide-react';

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
      cls: 0
    }
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
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
  }, [location.pathname]);

  return <>{optimizedChildren}</>;
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

      // Check Core Web Vitals
      if (metrics.coreWebVitals.lcp > 2500) {
        newOptimizations.push('Poor LCP - Optimize largest contentful paint');
      }

      if (metrics.coreWebVitals.fid > 100) {
        newOptimizations.push('Poor FID - Reduce input delay');
      }

      if (metrics.coreWebVitals.cls > 0.1) {
        newOptimizations.push('Poor CLS - Reduce layout shifts');
      }

      setOptimizations(newOptimizations);
    } catch (error) {
      console.warn('Optimization analysis failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [metrics, isOptimizing]);

  // Auto-optimization effect
  useEffect(() => {
    if (enabled && enablePerformanceMonitoring) {
      const interval = setInterval(measurePerformance, 5000);
      return () => clearInterval(interval);
    }
  }, [enabled, enablePerformanceMonitoring, measurePerformance]);

  // Auto-optimization effect
  useEffect(() => {
    if (enabled && enablePerformanceMonitoring) {
      const interval = setInterval(performOptimizations, 10000);
      return () => clearInterval(interval);
    }
  }, [enabled, enablePerformanceMonitoring, performOptimizations]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && enablePerformanceMonitoring && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Performance Monitor Active</div>
          <div>Check console for metrics</div>
        </div>
      )}
    </>
  );
};
