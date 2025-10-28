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
    const images = document.querySelectorAll('img');
    let optimized = 0;
    
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        optimized++;
      }
    });
    
    return optimized;
  }, []);

  const optimizeScripts = useCallback(() => {
    const scripts = document.querySelectorAll('script[src]');
    let optimized = 0;
    
    scripts.forEach(script => {
      const scriptElement = script as any;
      if (!scriptElement.async && !scriptElement.defer) {
        scriptElement.defer = true;
        optimized++;
      }
    });
    
    return optimized;
  }, []);

  const optimizeCSS = useCallback(() => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    let optimized = 0;
    
    links.forEach(link => {
      const linkElement = link as any;
      if (!linkElement.media || linkElement.media === 'all') {
        linkElement.media = 'print';
        linkElement.onload = () => { linkElement.media = 'all'; };
        optimized++;
      }
    });
    
    return optimized;
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

    const timer = setTimeout(runOptimizations, 100);
    
    return () => clearTimeout(timer);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS]);

  return (
    <div className="performance-optimizer">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="optimization-indicator">
          Optimizations: {optimizationMetrics.totalSavings}
        </div>
      )}
    </div>
  );

export default AdvancedPerformanceOptimizer;