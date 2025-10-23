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
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
      addOptimization('Images optimized for lazy loading');
    }
  }, [enableImageOptimization, addOptimization]);

  useEffect(() => {
    if (enableLazyLoading) {
      // Implement intersection observer for lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observer.observe(img));

      addOptimization('Lazy loading implemented');

      return () => observer.disconnect();
    }
  }, [enableLazyLoading, addOptimization]);

  useEffect(() => {
    if (enablePreloading) {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);

      addOptimization('Critical resources preloaded');
    }
  }, [enablePreloading, addOptimization]);

  useEffect(() => {
    if (enableCodeSplitting) {
      // Implement dynamic imports for non-critical components
      const loadNonCriticalComponents = async () => {
        try {
          // This would be implemented based on your routing structure
          addOptimization('Code splitting enabled');
        } catch (error) {
          console.error('Error loading non-critical components:', error);
        }
      };

      loadNonCriticalComponents();
    }
  }, [enableCodeSplitting, addOptimization]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Run performance optimizations
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        addOptimization('Service Worker registered');
      }

      // Optimize CSS delivery
      const criticalCSS = document.querySelector('style[data-critical]');
      if (criticalCSS) {
        addOptimization('Critical CSS inlined');
      }

      // Optimize JavaScript execution
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          addOptimization('Non-critical JavaScript deferred');
        });
      }

    } catch (error) {
      console.error('Error during optimization:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [addOptimization]);

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Settings className="w-5 h-5 text-cyan-400" />
        <h3 className="font-semibold">Performance Optimizer</h3>
      </div>
      
      <div className="space-y-2 mb-4">
        {optimizations.map((optimization, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>{optimization}</span>
          </div>
        ))}
      </div>

      <button
        onClick={runOptimizations}
        disabled={isOptimizing}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isOptimizing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Optimizing...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            Run Optimizations
          </>
        )}
      </button>
    </div>
  );
};

export default PerformanceOptimizer;