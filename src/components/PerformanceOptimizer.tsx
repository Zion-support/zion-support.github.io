import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime)
        }));
      }
    };

    // Memory usage monitoring
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }
    };

    // CPU usage monitoring
    const measureCPU = () => {
      if ('getEntriesByType' in performance) {
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          setMetrics(prev => ({
            ...prev,
            cpuUsage: Math.round(fcp.startTime)
          }));
        }
      }
    };

    // Run measurements after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        measurePerformance();
        measureMemory();
        measureCPU();
      }, 100);
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Performance optimization features
  useEffect(() => {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/orbitron-v16-latin-400.woff2', as: 'font', type: 'font/woff2' },
      { rel: 'preload', href: '/fonts/orbitron-v16-latin-600.woff2', as: 'font', type: 'font/woff2' }
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-cyan-400/50 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-bold text-cyan-400 mb-2">Performance Monitor</h3>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.loadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 100 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.cpuUsage > 2000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cpuUsage}ms
          </span>
        </div>
      </div>
      
      {/* Performance tips */}
      <div className="mt-3 pt-2 border-t border-cyan-400/30">
        <div className="text-xs text-cyan-300">
          {metrics.loadTime > 3000 && (
            <div className="mb-1">⚠️ Consider code splitting</div>
          )}
          {metrics.memoryUsage > 100 && (
            <div className="mb-1">⚠️ Memory usage high</div>
          )}
          {metrics.cpuUsage > 2000 && (
            <div>⚠️ Optimize rendering</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
