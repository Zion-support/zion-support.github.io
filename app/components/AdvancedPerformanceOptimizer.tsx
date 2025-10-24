'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true,
}) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    imagesOptimized: 0,
    scriptsOptimized: 0,
    cssOptimized: 0,
    totalSavings: 0,
  });

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      }
      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);

  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return;
    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;
    scripts.forEach((script) => {
      // Add defer attribute if not already present
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);

  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return;
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;
    links.forEach((link) => {
      // Add media attribute for non-critical CSS
      if (!link.hasAttribute('media')) {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);

  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return;

    const imagesOptimized = optimizeImages();
    const scriptsOptimized = optimizeScripts();
    const cssOptimized = optimizeCSS();
    const totalSavings = imagesOptimized + scriptsOptimized + cssOptimized;

    setOptimizationMetrics({
      imagesOptimized,
      scriptsOptimized,
      cssOptimized,
      totalSavings,
    });

    setIsOptimized(true);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS]);

  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  return (
    <div className="performance-optimizer">
      {children}
      {isOptimized && (
        <div className="optimization-status">
          <h3>Performance Optimizations Applied</h3>
          <div className="metrics">
            <div className="metric">
              <span>Images Optimized: {optimizationMetrics.imagesOptimized}</span>
            </div>
            <div className="metric">
              <span>Scripts Optimized: {optimizationMetrics.scriptsOptimized}</span>
            </div>
            <div className="metric">
              <span>CSS Optimized: {optimizationMetrics.cssOptimized}</span>
            </div>
            <div className="metric">
              <span>Total Optimizations: {optimizationMetrics.totalSavings}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;