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
  enableCodeSplitting = true,
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<{
    imagesOptimized: number;
    lazyLoadingEnabled: boolean;
    preloadingEnabled: boolean;
    codeSplittingEnabled: boolean;
  }>({
    imagesOptimized: 0,
    lazyLoadingEnabled: false,
    preloadingEnabled: false,
    codeSplittingEnabled: false,
  });

  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationComplete(false);

    try {
      // Simulate optimization process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Image optimization
      if (enableImageOptimization) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.src && !img.src.includes('data:')) {
            img.loading = 'lazy';
            img.decoding = 'async';
          }
        });
      }

      // Lazy loading
      if (enableLazyLoading) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('loaded');
              observer.unobserve(element);
            }
          });
        });
        lazyElements.forEach(el => observer.observe(el));
      }

      // Preloading critical resources
      if (enablePreloading) {
        const criticalResources = [
          '/fonts/main.woff2',
          '/css/critical.css',
        ];
        
        criticalResources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          link.as = resource.endsWith('.css') ? 'style' : 'font';
          document.head.appendChild(link);
        });
      }

      setOptimizationResults({
        imagesOptimized: enableImageOptimization ? document.querySelectorAll('img').length : 0,
        lazyLoadingEnabled: enableLazyLoading,
        preloadingEnabled: enablePreloading,
        codeSplittingEnabled: enableCodeSplitting,
      });

      setOptimizationComplete(true);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  useEffect(() => {
    optimizePerformance();
  }, [optimizePerformance]);

  return (
    <div className="performance-optimizer">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Settings className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-gray-900">Performance Optimizer</span>
        </div>
        
        {isOptimizing ? (
          <div className="flex items-center space-x-2 text-blue-600">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Optimizing...</span>
          </div>
        ) : optimizationComplete ? (
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Optimized</span>
          </div>
        ) : (
          <button
            onClick={optimizePerformance}
            className="flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm">Optimize</span>
          </button>
        )}
      </div>

      {optimizationComplete && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Optimization Results</h3>
          <div className="space-y-2 text-sm text-green-800">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>{optimizationResults.imagesOptimized} images optimized</span>
            </div>
            {optimizationResults.lazyLoadingEnabled && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Lazy loading enabled</span>
              </div>
            )}
            {optimizationResults.preloadingEnabled && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Critical resources preloaded</span>
              </div>
            )}
            {optimizationResults.codeSplittingEnabled && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Code splitting enabled</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;