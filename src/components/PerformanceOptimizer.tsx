import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  bundleSize: number;
  lighthouseScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    coreWebVitals: {
      lcp: 0,
      fid: 0,
      cls: 0
    }
  });

  const [showMetrics, setShowMetrics] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Core Web Vitals
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
      // Bundle size estimation
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('index-')) {
          totalSize += 100; // Approximate size in KB
        }
      });

      setMetrics(prev => ({
        ...prev,
        loadTime: Math.round(loadTime),
        bundleSize: totalSize,
        coreWebVitals: {
          ...prev.coreWebVitals,
          lcp: lcp ? Math.round(lcp.startTime) : 0
        }
      }));
    }
  }, []);

  // Memory usage monitoring with optimization suggestions
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMemory = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      const totalMemory = Math.round(memory.totalJSHeapSize / 1024 / 1024);
      
      setMetrics(prev => ({
        ...prev,
        memoryUsage: usedMemory
      }));

      // Memory optimization suggestions
      if (usedMemory > 100) {
        setOptimizations(prev => [...prev, 'High memory usage detected. Consider implementing virtual scrolling for large lists.']);
      }
    }
  }, []);

  // Advanced resource optimization
  const optimizeResources = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      { rel: 'preload', href: '/fonts/orbitron-v16-latin-400.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/orbitron-v16-latin-600.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/images/hero-bg.jpg', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, resource);
        document.head.appendChild(linkElement);
      }
    });

    // DNS prefetch for external domains
    const externalDomains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    externalDomains.forEach(domain => {
      if (!document.querySelector(`link[href="//${domain}"]`)) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'dns-prefetch';
        linkElement.href = `//${domain}`;
        document.head.appendChild(linkElement);
      }
    });
  }, []);

  // Lazy loading with intersection observer
  const setupLazyLoading = useCallback(() => {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const lazyType = element.dataset.lazy;
          
          if (lazyType === 'image' && element.tagName === 'IMG') {
            const img = element as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
          } else if (lazyType === 'component') {
            element.classList.add('loaded');
          }
          
          lazyObserver.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px'
    });

    lazyElements.forEach(element => lazyObserver.observe(element));
  }, []);

  // Performance recommendations
  const generateRecommendations = useCallback(() => {
    const recommendations: string[] = [];
    
    if (metrics.loadTime > 3000) {
      recommendations.push('Page load time is slow. Consider implementing code splitting and lazy loading.');
    }
    
    if (metrics.bundleSize > 500) {
      recommendations.push('Bundle size is large. Implement tree shaking and code splitting.');
    }
    
    if (metrics.coreWebVitals.lcp > 2500) {
      recommendations.push('Largest Contentful Paint is slow. Optimize hero images and critical resources.');
    }
    
    setOptimizations(recommendations);
  }, [metrics]);

  useEffect(() => {
    // Run measurements after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        measurePerformance();
        measureMemory();
        optimizeResources();
        setupLazyLoading();
        generateRecommendations();
      }, 100);
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [measurePerformance, measureMemory, optimizeResources, setupLazyLoading, generateRecommendations]);

  // Performance monitoring interval
  useEffect(() => {
    const interval = setInterval(() => {
      measureMemory();
    }, 10000); // Check memory every 10 seconds

    return () => clearInterval(interval);
  }, [measureMemory]);

  if (!showMetrics) {
    return (
      <motion.button
        onClick={() => setShowMetrics(true)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <div className="w-6 h-6">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 w-80 max-h-96 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        <button
          onClick={() => setShowMetrics(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className={`font-mono text-sm ${metrics.loadTime > 3000 ? 'text-red-500' : 'text-green-500'}`}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Memory:</span>
          <span className={`font-mono text-sm ${metrics.memoryUsage > 100 ? 'text-yellow-500' : 'text-green-500'}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Bundle Size:</span>
          <span className={`font-mono text-sm ${metrics.bundleSize > 500 ? 'text-yellow-500' : 'text-green-500'}`}>
            ~{metrics.bundleSize}KB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={`font-mono text-sm ${metrics.coreWebVitals.lcp > 2500 ? 'text-red-500' : 'text-green-500'}`}>
            {metrics.coreWebVitals.lcp}ms
          </span>
        </div>
      </div>

      {optimizations.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">Optimization Tips:</h4>
          <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
            {optimizations.map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
