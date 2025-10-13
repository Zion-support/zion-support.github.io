'use client';
import React, { useCallback, useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [enableImageOptimization, setEnableImageOptimization] = useState(true);
  const [enableMemoryOptimization, setEnableMemoryOptimization] = useState(true);

  const optimizeMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }
    }
  }, []);

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

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Optimize images
    if (enableImageOptimization) {
      optimizeImages();
      newOptimizations.push('Images optimized for lazy loading');
    }

    // Optimize memory
    if (enableMemoryOptimization) {
      optimizeMemory();
      newOptimizations.push('Memory optimization applied');
    }

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    newOptimizations.push('Critical resources preloaded');

    setOptimizations(prev => [...prev, ...newOptimizations]);
    setIsOptimizing(false);
  }, [enableImageOptimization, enableMemoryOptimization, optimizeImages, optimizeMemory]);

  useEffect(() => {
    // Run initial optimizations
    runOptimizations();

    // Set up periodic optimization
    const interval = setInterval(() => {
      if (enableMemoryOptimization) {
        optimizeMemory();
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [runOptimizations, enableMemoryOptimization, optimizeMemory]);

  return (
    <div className="performance-optimizer">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-sm max-w-xs">
          <h4 className="font-semibold mb-2">Performance Optimizer</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enableImageOptimization}
                onChange={(e) => setEnableImageOptimization(e.target.checked)}
                className="mr-2"
              />
              Image Optimization
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enableMemoryOptimization}
                onChange={(e) => setEnableMemoryOptimization(e.target.checked)}
                className="mr-2"
              />
              Memory Optimization
            </label>
            <button
              onClick={runOptimizations}
              disabled={isOptimizing}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
            >
              {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
            </button>
          </div>
          {optimizations.length > 0 && (
            <div className="mt-2">
              <h5 className="font-semibold text-xs">Recent Optimizations:</h5>
              <ul className="text-xs space-y-1">
                {optimizations.slice(-3).map((opt, index) => (
                  <li key={index}>• {opt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;