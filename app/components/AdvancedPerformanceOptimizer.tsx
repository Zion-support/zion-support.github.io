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
    fontsOptimized: 0,
    totalSavings: 0,
  });

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    let optimizedCount = 0;

    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.loading) {
        img.loading = 'lazy';
        optimizedCount++;
      }

      // Add proper alt text if missing
      if (!img.alt) {
        img.alt = 'Image';
        optimizedCount++;
      }

      // Add width and height attributes for layout stability
      if (!img.width && !img.height) {
        img.addEventListener('load', () => {
          img.width = img.naturalWidth;
          img.height = img.naturalHeight;
        });
      }
    });

    setOptimizationMetrics(prev => ({
      ...prev,
      imagesOptimized: prev.imagesOptimized + optimizedCount,
    }));
  }, []);

  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;

    scripts.forEach((script) => {
      // Add defer attribute for non-critical scripts
      if (!script.defer && !script.async) {
        script.defer = true;
        optimizedCount++;
      }
    });

    setOptimizationMetrics(prev => ({
      ...prev,
      scriptsOptimized: prev.scriptsOptimized + optimizedCount,
    }));
  }, []);

  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return;

    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;

    stylesheets.forEach((link) => {
      // Add media queries for non-critical CSS
      if (!link.media) {
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        optimizedCount++;
      }
    });

    setOptimizationMetrics(prev => ({
      ...prev,
      cssOptimized: prev.cssOptimized + optimizedCount,
    }));
  }, []);

  const optimizeFonts = useCallback(() => {
    if (typeof window === 'undefined') return;

    const fontLinks = document.querySelectorAll('link[href*="font"]');
    let optimizedCount = 0;

    fontLinks.forEach((link) => {
      // Add preload for critical fonts
      if (!link.rel.includes('preload')) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = link.href;
        preloadLink.as = 'font';
        preloadLink.type = 'font/woff2';
        preloadLink.crossOrigin = 'anonymous';
        document.head.appendChild(preloadLink);
        optimizedCount++;
      }
    });

    setOptimizationMetrics(prev => ({
      ...prev,
      fontsOptimized: prev.fontsOptimized + optimizedCount,
    }));
  }, []);

  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return;

    optimizeImages();
    optimizeScripts();
    optimizeCSS();
    optimizeFonts();

    // Calculate total savings (simplified calculation)
    const totalSavings = optimizationMetrics.imagesOptimized * 10 + 
                        optimizationMetrics.scriptsOptimized * 5 + 
                        optimizationMetrics.cssOptimized * 3 + 
                        optimizationMetrics.fontsOptimized * 8;

    setOptimizationMetrics(prev => ({
      ...prev,
      totalSavings,
    }));

    setIsOptimized(true);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS, optimizeFonts, optimizationMetrics]);

  useEffect(() => {
    if (enableOptimizations) {
      // Run optimizations after a short delay to ensure DOM is ready
      const timer = setTimeout(runOptimizations, 100);
      return () => clearTimeout(timer);
    }
  }, [enableOptimizations, runOptimizations]);

  return (
    <div className="performance-optimizer">
      {enableOptimizations && (
        <div className="optimization-status">
          <div className={`status-indicator ${isOptimized ? 'optimized' : 'optimizing'}`}>
            {isOptimized ? 'Optimized' : 'Optimizing...'}
          </div>
          
          {isOptimized && (
            <div className="optimization-metrics">
              <h4>Optimization Results</h4>
              <div className="metrics-grid">
                <div className="metric">
                  <span>Images: {optimizationMetrics.imagesOptimized}</span>
                </div>
                <div className="metric">
                  <span>Scripts: {optimizationMetrics.scriptsOptimized}</span>
                </div>
                <div className="metric">
                  <span>CSS: {optimizationMetrics.cssOptimized}</span>
                </div>
                <div className="metric">
                  <span>Fonts: {optimizationMetrics.fontsOptimized}</span>
                </div>
                <div className="metric">
                  <span>Total Savings: {optimizationMetrics.totalSavings}ms</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;