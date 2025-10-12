<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

interface PerformanceMetrics {
=======
import { useState, useEffect, useCallback } from 'react';
export const useEnhancedPerformance = () => {
interface PerformanceMetrics {;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}
<<<<<<< HEAD

export const useEnhancedPerformance = () => {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });
<<<<<<< HEAD
  
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  const [isOptimized, setIsOptimized] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
<<<<<<< HEAD

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure render time
    const measureRenderTime = () => {
=======
    // Measure load time;
    const measureLoadTime = () => {;
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };
    // Measure render time;
    const measureRenderTime = () => {;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };
<<<<<<< HEAD

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Measure network latency
    const measureNetworkLatency = () => {
=======
    // Measure memory usage;
    const measureMemoryUsage = () => {
      if ('memory' in performance) {;
        const memory = (performance, as, any).memory;
const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB;
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };
    // Measure network latency;
    const measureNetworkLatency = () => {;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - start;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // Fallback if ping endpoint doesn't exist
          setMetrics(prev => ({ ...prev, networkLatency: 0 }));
        });
    };
<<<<<<< HEAD

    // Run measurements
=======
    // Run measurements;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    measureLoadTime();
    measureRenderTime();
    measureMemoryUsage();
    measureNetworkLatency();
<<<<<<< HEAD

    // Check if performance is optimized
    const checkOptimization = () => {
      const isOptimized =
        metrics.loadTime < 1000 && // Load time under 1 second
=======
    // Check if performance is optimized;
    const checkOptimization = () => {
      const isOptimized = ;
        metrics.loadTime < 1000 && // Load time under 1 second;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
        metrics.renderTime < 16 && // Render time under 16ms (60fps)
        metrics.memoryUsage < 100 && // Memory usage under 100MB
        metrics.networkLatency < 200; // Network latency under 200ms
      setIsOptimized(isOptimized);
    };
<<<<<<< HEAD

    // Check optimization after metrics are updated
    const timeoutId = setTimeout(checkOptimization, 1000);
    return () => clearTimeout(timeoutId);
  }, [metrics.loadTime, metrics.renderTime, metrics.memoryUsage, metrics.networkLatency]);

  const optimizePerformance = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
=======
    // Check optimization after metrics are updated;
    const timeoutId = setTimeout(checkOptimization, 1000);
    return () => clearTimeout(timeoutId);
  }, [metrics.loadTime, metrics.renderTime, metrics.memoryUsage, metrics.networkLatency]);
  const optimizePerformance = () => {;
    // Preload critical resources;
const criticalResources = [
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png',;
    ];
<<<<<<< HEAD
    
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
<<<<<<< HEAD

    // Optimize images
=======
    // Optimize images;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {;
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach((img) => imageObserver.observe(img));
<<<<<<< HEAD

    // Add performance optimizations
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optimize scroll performance
    let ticking = false;
    const updateScrollPosition = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll position
=======
    // Add performance optimizations;
    document.documentElement.style.scrollBehavior = 'smooth';
    // Optimize scroll performance;
    let ticking = false;
    const updateScrollPosition = () => {
      if (!ticking) {
        requestAnimationFrame(() => {;
          // Update scroll position;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
<<<<<<< HEAD
    
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

=======
    return () => window.removeEventListener('scroll', updateScrollPosition);
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  return {
    metrics,
    isOptimized,
    optimizePerformance,
  };
};