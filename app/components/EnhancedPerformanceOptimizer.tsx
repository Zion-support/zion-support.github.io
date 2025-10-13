import React, { useEffect, useCallback, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  connectionSpeed?: string;
}

interface PerformanceOptimizerProps {
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enablePreloading = true,
  enableImageOptimization = true,
  enableCodeSplitting = true,
  enableCaching = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  const updateMetric = useCallback((metric: any) => {
    setMetrics(prev => ({
      ...prev,
      [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
       metric.name === 'INP' ? 'interactionToNextPaint' :
       metric.name === 'FCP' ? 'firstContentfulPaint' :
       metric.name === 'LCP' ? 'largestContentfulPaint' :
       metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime']: metric.value
    }));
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    setOptimizations(prev => [...prev, 'Critical resources preloaded']);
  }, [enablePreloading]);

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" to non-critical images
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add proper alt text if missing
      if (!img.alt) {
        img.alt = 'Zion Tech Group - Technology Solutions';
      }
    });

    setOptimizations(prev => [...prev, 'Images optimized']);
  }, [enableImageOptimization]);

  // Enable service worker for caching
  const enableServiceWorker = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined') return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
          setOptimizations(prev => [...prev, 'Service Worker enabled']);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, [enableCaching]);

  // Monitor memory usage
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    if (memory) {
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  // Detect connection speed
  const detectConnectionSpeed = useCallback(() => {
    if (typeof window === 'undefined' || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      const speed = connection.effectiveType || 'unknown';
      setMetrics(prev => ({
        ...prev,
        connectionSpeed: speed
      }));
    }
  }, []);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });

    setOptimizations(prev => [...prev, 'Third-party scripts optimized']);
  }, []);

  // Implement intersection observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          if (element.dataset.src) {
            element.style.backgroundImage = `url(${element.dataset.src})`;
            element.removeAttribute('data-src');
            observer.unobserve(element);
          }
        }
      });
    });

    // Observe elements with data-src attribute
    document.querySelectorAll('[data-src]').forEach(el => {
      observer.observe(el);
    });

    setOptimizations(prev => [...prev, 'Intersection Observer setup']);
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    enableServiceWorker();
    monitorMemoryUsage();
    detectConnectionSpeed();
    optimizeThirdPartyScripts();
    setupIntersectionObserver();

    // Measure performance after page load
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => ({
        ...prev,
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
      }));
    };

    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [
    updateMetric,
    preloadCriticalResources,
    optimizeImages,
    enableServiceWorker,
    monitorMemoryUsage,
    detectConnectionSpeed,
    optimizeThirdPartyScripts,
    setupIntersectionObserver
  ]);

  // Performance recommendations
  const getRecommendations = useCallback(() => {
    if (!metrics) return [];

    const recommendations = [];

    if (metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500) {
      recommendations.push('Consider optimizing images and reducing server response time');
    }

    if (metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Add size attributes to images and avoid inserting content above existing content');
    }

    if (metrics.interactionToNextPaint && metrics.interactionToNextPaint > 200) {
      recommendations.push('Reduce JavaScript execution time and optimize event handlers');
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      recommendations.push('Consider implementing memory management and cleanup unused objects');
    }

    return recommendations;
  }, [metrics]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const recommendations = getRecommendations();

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Performance Optimizer
        </h3>
        
        <div className="space-y-2 text-sm">
          <div className="text-gray-600">
            <strong>Optimizations Applied:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              {optimizations.map((opt, index) => (
                <li key={index} className="text-green-600">{opt}</li>
              ))}
            </ul>
          </div>

          {metrics && (
            <div className="text-gray-600">
              <strong>Current Metrics:</strong>
              <div className="mt-1 space-y-1">
                {metrics.largestContentfulPaint && (
                  <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
                )}
                {metrics.cumulativeLayoutShift !== undefined && (
                  <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
                )}
                {metrics.memoryUsage && (
                  <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
                )}
                {metrics.connectionSpeed && (
                  <div>Connection: {metrics.connectionSpeed}</div>
                )}
              </div>
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="text-gray-600">
              <strong>Recommendations:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {recommendations.map((rec, index) => (
                  <li key={index} className="text-yellow-600">{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceOptimizer;