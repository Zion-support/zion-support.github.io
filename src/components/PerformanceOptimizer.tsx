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
  children?: React.ReactNode;
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
      cls: 0
    }
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    const startTime = performance.now();
    
    // Measure FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Measure Core Web Vitals
    const measureLCP = () => {
      return new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } else {
          resolve(0);
        }
      });
    };

    const measureFID = () => {
      return new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstEntry = entries[0];
            resolve(firstEntry.processingStart - firstEntry.startTime);
          });
          observer.observe({ entryTypes: ['first-input'] });
        } else {
          resolve(0);
        }
      });
    };

    const measureCLS = () => {
      return new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          let cls = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                cls += (entry as any).value;
              }
            }
            resolve(cls);
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        } else {
          resolve(0);
        }
      });
    };

    try {
      const [lcp, fid, cls] = await Promise.all([
        measureLCP(),
        measureFID(),
        measureCLS()
      ]);

      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      const networkRequests = performance.getEntriesByType('resource').length;
      const bundleSize = performance.getEntriesByType('navigation')[0]?.transferSize || 0;

      setMetrics(prev => ({
        ...prev,
        loadTime,
        bundleSize,
        memoryUsage,
        networkRequests,
        coreWebVitals: { lcp, fid, cls }
      }));
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }));
    }

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
