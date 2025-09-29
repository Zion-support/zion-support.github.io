import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export default function PerformanceOptimizer({ 
  showMetrics = false, 
  autoOptimize = true 
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure performance metrics
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const largestContentfulPaint = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
        
        const newMetrics: PerformanceMetrics = {
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint,
          cumulativeLayoutShift: 0, // Would need web-vitals library for accurate measurement
          firstInputDelay: 0 // Would need web-vitals library for accurate measurement
        };
        
        setMetrics(newMetrics);
        
        // Auto-optimize if enabled
        if (autoOptimize) {
          applyOptimizations(newMetrics);
        }
      };

      // Wait for page to fully load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }

      return () => {
        window.removeEventListener('load', measurePerformance);
      };
    }
  }, [autoOptimize]);

  const applyOptimizations = (currentMetrics: PerformanceMetrics) => {
    const newOptimizations: string[] = [];
    
    // Image optimization
    if (currentMetrics.largestContentfulPaint > 2500) {
      newOptimizations.push('🖼️ Lazy loading images for faster LCP');
      lazyLoadImages();
    }
    
    // Preload critical resources
    if (currentMetrics.firstContentfulPaint > 1500) {
      newOptimizations.push('⚡ Preloading critical resources');
      preloadCriticalResources();
    }
    
    // Defer non-critical JavaScript
    if (currentMetrics.loadTime > 3000) {
      newOptimizations.push('📦 Deferring non-critical JavaScript');
      deferNonCriticalJS();
    }
    
    setOptimizations(newOptimizations);
  };

  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
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

    images.forEach(img => imageObserver.observe(img));
  };

  const preloadCriticalResources = () => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : resource.endsWith('.js') ? 'script' : 'font';
      document.head.appendChild(link);
    });
  };

  const deferNonCriticalJS = () => {
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      script.setAttribute('defer', 'true');
    });
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value === 0) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  const getPerformanceGrade = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1500) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
    if (metrics.firstInputDelay > 100) score -= 20;
    
    if (score >= 90) return { grade: 'A', color: 'text-green-600' };
    if (score >= 80) return { grade: 'B', color: 'text-blue-600' };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-600' };
    return { grade: 'D', color: 'text-red-600' };
  };

  if (!showMetrics && optimizations.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
        {metrics && (
          <span className={`text-xl font-bold ${getPerformanceGrade(metrics).color}`}>
            {getPerformanceGrade(metrics).grade}
          </span>
        )}
      </div>
      
      {metrics && (
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Load Time:</span>
            <span className="font-medium">{formatMetric(metrics.loadTime)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">FCP:</span>
            <span className="font-medium">{formatMetric(metrics.firstContentfulPaint)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">LCP:</span>
            <span className="font-medium">{formatMetric(metrics.largestContentfulPaint)}</span>
          </div>
        </div>
      )}
      
      {optimizations.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Applied Optimizations:</h4>
          <ul className="space-y-1">
            {optimizations.map((optimization, index) => (
              <li key={index} className="text-xs text-gray-600">
                {optimization}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <button
        onClick={() => setOptimizations([])}
        className="mt-3 text-xs text-blue-600 hover:text-blue-800 underline"
      >
        Clear optimizations
      </button>
    </div>
  );
}

// Hook for using performance metrics in components
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const measureMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0
        });
      };
      
      if (document.readyState === 'complete') {
        measureMetrics();
      } else {
        window.addEventListener('load', measureMetrics);
      }
      
      return () => window.removeEventListener('load', measureMetrics);
    }
  }, []);
  
  return metrics;
}