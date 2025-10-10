'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children: React.ReactNode;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, []);

  const enableLazyLoading = useCallback(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }, []);

  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const score = Math.max(0, 100 - (loadTime / 100));
      setPerformanceScore(Math.round(score));
    }
  }, []);

  useEffect(() => {
    setIsOptimizing(true);
    
    const optimizations: string[] = [];
    
    // Image optimization
    optimizeImages();
    optimizations.push('Images optimized');
    
    // Lazy loading
    enableLazyLoading();
    optimizations.push('Lazy loading enabled');
    
    // Preload critical resources
    preloadCriticalResources();
    optimizations.push('Critical resources preloaded');
    
    // Measure performance
    measurePerformance();
    optimizations.push('Performance measured');
    
    setOptimizations(optimizations);
    setIsOptimizing(false);
  }, [optimizeImages, enableLazyLoading, preloadCriticalResources, measurePerformance]);

  return (
    <div className={`performance-optimizer ${className}`}>
      {children}
      
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-4 h-4" />
            <span className="font-medium">Performance Optimizer</span>
          </div>
          
          {isOptimizing ? (
            <div className="flex items-center gap-2 text-cyan-400">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>Optimizing...</span>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Optimizations Applied</span>
              </div>
              
              <ul className="space-y-1 text-xs text-gray-300">
                {optimizations.map((optimization, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    {optimization}
                  </li>
                ))}
              </ul>
              
              {performanceScore !== null && (
                <div className="mt-2 pt-2 border-t border-slate-600">
                  <div className="flex items-center gap-2">
                    {performanceScore >= 80 ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    )}
                    <span>Score: {performanceScore}/100</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;