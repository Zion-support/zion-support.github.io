'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const [optimizations, setOptimizations] = useState({
    images: false,
    lazyLoading: false,
    preloading: false,
    codeSplitting: false
  });

  const [isOptimizing, setIsOptimizing] = useState(false);

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    setOptimizations(prev => ({ ...prev, images: true }));
  }, [enableImageOptimization]);

  const optimizeLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    // Implement intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          if (element.dataset.src) {
            element.setAttribute('src', element.dataset.src);
            element.removeAttribute('data-src');
            observer.unobserve(element);
          }
        }
      });
    });

    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach((el) => observer.observe(el));

    setOptimizations(prev => ({ ...prev, lazyLoading: true }));
  }, [enableLazyLoading]);

  const optimizePreloading = useCallback(() => {
    if (!enablePreloading) return;

    // Preload critical resources
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

    setOptimizations(prev => ({ ...prev, preloading: true }));
  }, [enablePreloading]);

  const optimizeCodeSplitting = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Implement dynamic imports for non-critical components
    const lazyComponents = document.querySelectorAll('[data-lazy-component]');
    lazyComponents.forEach((element) => {
      const componentName = element.getAttribute('data-lazy-component');
      if (componentName) {
        import(`../components/${componentName}.tsx`).then((module) => {
          // Component loaded successfully
          console.log(`Lazy loaded component: ${componentName}`);
        }).catch((error) => {
          console.error(`Failed to load component: ${componentName}`, error);
        });
      }
    });

    setOptimizations(prev => ({ ...prev, codeSplitting: true }));
  }, [enableCodeSplitting]);

  useEffect(() => {
    const runOptimizations = async () => {
      setIsOptimizing(true);
      
      try {
        await Promise.all([
          optimizeImages(),
          optimizeLazyLoading(),
          optimizePreloading(),
          optimizeCodeSplitting()
        ]);
      } catch (error) {
        console.error('Performance optimization error:', error);
      } finally {
        setIsOptimizing(false);
      }
    };

    // Run optimizations after component mount
    const timer = setTimeout(runOptimizations, 100);
    return () => clearTimeout(timer);
  }, [optimizeImages, optimizeLazyLoading, optimizePreloading, optimizeCodeSplitting]);

  return (
    <div className="performance-optimizer">
      {children}
      
      {/* Development mode optimization status */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs">
          <div className="flex items-center space-x-2 mb-2">
            <Settings className="w-4 h-4" />
            <span className="font-semibold">Performance Optimizer</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              {optimizations.images ? (
                <CheckCircle className="w-3 h-3 text-green-400" />
              ) : (
                <AlertTriangle className="w-3 h-3 text-yellow-400" />
              )}
              <span>Images</span>
            </div>
            <div className="flex items-center space-x-2">
              {optimizations.lazyLoading ? (
                <CheckCircle className="w-3 h-3 text-green-400" />
              ) : (
                <AlertTriangle className="w-3 h-3 text-yellow-400" />
              )}
              <span>Lazy Loading</span>
            </div>
            <div className="flex items-center space-x-2">
              {optimizations.preloading ? (
                <CheckCircle className="w-3 h-3 text-green-400" />
              ) : (
                <AlertTriangle className="w-3 h-3 text-yellow-400" />
              )}
              <span>Preloading</span>
            </div>
            <div className="flex items-center space-x-2">
              {optimizations.codeSplitting ? (
                <CheckCircle className="w-3 h-3 text-green-400" />
              ) : (
                <AlertTriangle className="w-3 h-3 text-yellow-400" />
              )}
              <span>Code Splitting</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;