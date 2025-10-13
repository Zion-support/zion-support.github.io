import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  // Performance monitoring
  useEffect(() => {
    const startTime = performance.now();
    
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Memory usage monitoring
    const checkMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Initial memory check
    checkMemoryUsage();

    // Check memory usage periodically
    const memoryInterval = setInterval(checkMemoryUsage, 5000);

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(memoryInterval);
    };
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }, []);

  // Initialize optimizations
  useEffect(() => {
    const initializeOptimizations = () => {
      optimizeImages();
      preloadCriticalResources();
      optimizeAnimations();
      setIsOptimized(true);
    };

    // Run optimizations after initial render
    const timeoutId = setTimeout(initializeOptimizations, 100);
    
    return () => clearTimeout(timeoutId);
  }, [optimizeImages, preloadCriticalResources, optimizeAnimations]);

  // Resource hints
  useEffect(() => {
    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Bundle size optimization
  useEffect(() => {
    // Lazy load non-critical components
    const lazyLoadComponents = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const componentName = element.dataset.lazy;
            if (componentName) {
              // Dynamic import for lazy loading
              import(`./${componentName}.tsx`).then((module) => {
                element.innerHTML = module.default;
              });
            }
            observer.unobserve(element);
          }
        });
      });

      lazyElements.forEach((element) => observer.observe(element));
    };

    // Run lazy loading after a delay
    const timeoutId = setTimeout(lazyLoadComponents, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Performance debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Optimizer initialized');
      console.log('Performance Metrics:', performanceMetrics);
    }
  }, [performanceMetrics]);

  return (
    <div className="performance-optimizer">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-2 rounded text-xs opacity-50">
          Perf: {performanceMetrics.memoryUsage.toFixed(1)}MB
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;