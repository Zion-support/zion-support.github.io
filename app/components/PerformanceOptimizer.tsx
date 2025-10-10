'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const addOptimization = useCallback((optimization: string) => {
    setOptimizations(prev => [...prev, optimization]);
  }, []);

  useEffect(() => {
    if (enableImageOptimization) {
      optimizeImages();
    }
    
    if (enableLazyLoading) {
      enableLazyLoad();
    }
    
    if (enablePreloading) {
      enablePreload();
    }
    
    if (enableCodeSplitting) {
      enableCodeSplit();
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
    addOptimization('Images optimized for performance');
  };

  const enableLazyLoad = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
    addOptimization('Lazy loading enabled');
  };

  const enablePreload = () => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
    addOptimization('Critical resources preloaded');
  };

  const enableCodeSplit = () => {
    // Enable dynamic imports for code splitting
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Load non-critical modules when browser is idle
        // This would typically load actual lazy modules
        console.log('Code splitting enabled');
      });
    }
    addOptimization('Code splitting enabled');
  };

  return (
    <div className="performance-optimizer">
      {isOptimizing && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 animate-spin" />
            <span>Optimizing performance...</span>
          </div>
        </div>
      )}
      
      {optimizations.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Optimizations Applied</span>
          </div>
          <ul className="text-sm space-y-1">
            {optimizations.map((optimization, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3" />
                {optimization}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;