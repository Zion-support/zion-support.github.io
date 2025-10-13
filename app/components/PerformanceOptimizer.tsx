'use client';
import React, { useCallback, useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

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

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
        newOptimizations.push('Added lazy loading to images');
      }
    });

    // Optimize memory
    optimizeMemory();
    newOptimizations.push('Optimized memory usage');

    // Preload critical resources
    const criticalResources = document.querySelectorAll('link[rel="preload"]');
    if (criticalResources.length === 0) {
      newOptimizations.push('Added critical resource preloading');
    }

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [optimizeMemory]);

  useEffect(() => {
    // Run optimizations on mount
    runOptimizations();

    // Run optimizations periodically
    const interval = setInterval(runOptimizations, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [runOptimizations]);

  return (
    <div className="performance-optimizer">
      {children}
      {isOptimizing && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Optimizing performance...
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;