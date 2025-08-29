import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

interface LazyLoadConfig {
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0
  });
  
  const [isOptimizing, setIsOptimizing] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationFrameRef = useRef<number>();

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        renderTime: performance.now() - lastTimeRef.current
      }));
    }

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  // FPS monitoring
  const measureFPS = useCallback(() => {
    frameCountRef.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }
    
    animationFrameRef.current = requestAnimationFrame(measureFPS);
  }, []);

  // Auto-optimization based on performance metrics
  const autoOptimize = useCallback(() => {
    if (metrics.fps < 30 || metrics.memoryUsage > 100) {
      setIsOptimizing(true);
      
      // Implement automatic optimizations
      setTimeout(() => {
        // Clear unnecessary caches
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => {
              if (name.includes('temp') || name.includes('cache')) {
                caches.delete(name);
              }
            });
          });
        }
        
        // Force garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
        
        setIsOptimizing(false);
      }, 1000);
    }
  }, [metrics.fps, metrics.memoryUsage]);

  useEffect(() => {
    measurePerformance();
    measureFPS();
    
    // Set up performance monitoring interval
    const interval = setInterval(measurePerformance, 5000);
    
    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [measurePerformance, measureFPS]);

  useEffect(() => {
    autoOptimize();
  }, [autoOptimize]);

  // Intersection Observer for lazy loading
  const { ref: lazyRef, inView } = useInView({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  });

  // Virtual scrolling optimization
  const virtualScrollOptimizer = useCallback((items: any[], itemHeight: number, containerHeight: number) => {
    const visibleItems = Math.ceil(containerHeight / itemHeight) + 2; // Buffer
    return items.slice(0, visibleItems);
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add intersection observer for images
      if (!img.dataset.optimized) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.dataset.optimized = 'true';
                observer.unobserve(img);
              }
            }
          });
        });
        
        observer.observe(img);
      }
    });
  }, []);

  useEffect(() => {
    optimizeImages();
  }, [optimizeImages]);

  // Service Worker optimization
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        // Optimize service worker caching
        if ('caches' in window) {
          caches.open('performance-cache').then(cache => {
            // Cache critical resources
            cache.addAll([
              '/',
              '/static/js/main.js',
              '/static/css/main.css'
            ]);
          });
        }
      });
    }
  }, []);

  return (
    <div className="performance-optimizer" ref={lazyRef}>
      {inView && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg shadow-lg z-50">
          <div className="text-sm font-mono">
            <div>FPS: {metrics.fps}</div>
            <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
            <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
            {isOptimizing && <div className="text-yellow-400">Optimizing...</div>}
          </div>
        </div>
      )}
    </div>
  );
}

// Enhanced Lazy Loading Hook
export function useLazyLoad<T>(config: LazyLoadConfig = { threshold: 0.1, rootMargin: '50px', triggerOnce: true }) {
  const { ref, inView } = useInView(config);
  
  return {
    ref,
    inView,
    shouldLoad: inView
  };
}

// Virtual Scrolling Hook
export function useVirtualScroll<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  overscan: number = 5
) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + overscan,
      items.length
    );
    
    return items.slice(startIndex, endIndex);
  }, [items, itemHeight, containerHeight, overscan, scrollTop]);
  
  const totalHeight = items.length * itemHeight;
  const offsetY = Math.floor(scrollTop / itemHeight) * itemHeight;
  
  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop
  };
}

// Performance Monitoring Hook
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0
  });
  
  useEffect(() => {
    const measure = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          renderTime: performance.now()
        }));
      }
    };
    
    const interval = setInterval(measure, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return metrics;
}
