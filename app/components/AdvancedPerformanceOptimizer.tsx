'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    imagesOptimized: 0,
    scriptsOptimized: 0,
    cssOptimized: 0,
    totalSavings: 0
  });

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    
    let optimizedCount = 0;
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        optimizedCount++;
      }
      if (!img.decoding) {
        img.decoding = 'async';
        optimizedCount++;
      }
    });
    
    return optimizedCount;
  }, []);

  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    
    let optimizedCount = 0;
    const scripts = document.querySelectorAll('script[src]');
    
    scripts.forEach(script => {
      const scriptElement = script as any;
      if (!scriptElement.async && !scriptElement.defer) {
        scriptElement.defer = true;
        optimizedCount++;
      }
    });
    
    return optimizedCount;
  }, []);

  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    
    let optimizedCount = 0;
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    
    links.forEach(link => {
      const linkElement = link as any;
      if (!linkElement.media || linkElement.media === 'all') {
        linkElement.media = 'print';
        linkElement.onload = () => {
          linkElement.media = 'all';
        };
        optimizedCount++;
      }
    });
    
    return optimizedCount;
  }, []);

  useEffect(() => {
    if (!enableOptimizations) return;

    const runOptimizations = () => {
      const imagesOptimized = optimizeImages();
      const scriptsOptimized = optimizeScripts();
      const cssOptimized = optimizeCSS();
      
      setOptimizationMetrics({
        imagesOptimized,
        scriptsOptimized,
        cssOptimized,
        totalSavings: imagesOptimized + scriptsOptimized + cssOptimized
      });
      
      setIsOptimized(true);
    };

    // Run optimizations after component mount
    const timer = setTimeout(runOptimizations, 100);
    
    return () => clearTimeout(timer);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS]);

  return (
    <div className="performance-optimizer">
      {children}
      {isOptimized && (
        <div className="optimization-indicator fixed bottom-4 right-4 bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm">
          ✓ Performance optimized ({optimizationMetrics.totalSavings} improvements)
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;