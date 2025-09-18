import React, { useEffect, useCallback } from 'react';

<<<<<<< HEAD
interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Lazy load images
  const lazyLoadImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
=======
interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const startTime = performance.now();
    
    // Monitor memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;
    
    // Monitor network latency
    const networkLatency = performance.getEntriesByType('navigation')[0]?.responseEnd - 
                          performance.getEntriesByType('navigation')[0]?.requestStart || 0;
    
    // Calculate render time
    const renderTime = performance.now() - startTime;
    
    setMetrics({
      loadTime: performance.now(),
      memoryUsage,
      renderTime,
      networkLatency
    });

    // Optimize performance
    optimizePerformance();
  }, []);

  const optimizePerformance = () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
<<<<<<< HEAD
          img.classList.remove('lazy');
          observer.unobserve(img);
=======
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
<<<<<<< HEAD
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/src/index.css',
      '/src/components/RevolutionaryContentBanner2025.tsx',
      '/src/components/InteractiveTechShowcase2025.tsx'
=======

    // Preload critical resources
    const criticalResources = [
      '/src/index.css',
      '/src/main.tsx'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
<<<<<<< HEAD
      link.as = 'script';
=======
      link.as = resource.endsWith('.css') ? 'style' : 'script';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      document.head.appendChild(link);
    });
  }, []);

<<<<<<< HEAD
  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttle scroll events
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements
=======
    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttled scroll handling
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
          ticking = false;
        });
        ticking = true;
      }
    };
<<<<<<< HEAD

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Memory cleanup
  const cleanupMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove any unused event listeners
      window.removeEventListener('beforeunload', cleanup);
    };
    
    window.addEventListener('beforeunload', cleanup);
  }, []);

  useEffect(() => {
    // Initialize performance optimizations
    lazyLoadImages();
    preloadCriticalResources();
    const scrollCleanup = optimizeScrollPerformance();
    cleanupMemory();

    // Cleanup on unmount
    return () => {
      scrollCleanup();
    };
  }, [lazyLoadImages, preloadCriticalResources, optimizeScrollPerformance, cleanupMemory]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
=======

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    setIsOptimized(true);
  };

  if (!isOptimized) {
    return (
      <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Optimizing Performance...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      <div className="text-sm">
        <div className="font-semibold">Performance Optimized</div>
        {metrics && (
          <div className="text-xs opacity-90">
            Load: {metrics.loadTime.toFixed(0)}ms | 
            Memory: {metrics.memoryUsage.toFixed(1)}MB | 
            Network: {metrics.networkLatency.toFixed(0)}ms
          </div>
        )}
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
