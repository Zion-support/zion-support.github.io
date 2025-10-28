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
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Initializing...');

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }, []);

  // Optimize scripts
  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      // Add defer attribute for non-critical scripts
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  // Optimize CSS
  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return;

    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((link) => {
      const linkElement = link as any;
      // Add media="print" for non-critical CSS
      if (!linkElement.hasAttribute('media') && !linkElement.href.includes('critical')) {
        linkElement.setAttribute('media', 'print');
        linkElement.setAttribute('onload', "this.media='all'");
      }
    });
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach((link) => {
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'font');
      link.setAttribute('crossorigin', 'anonymous');
    });
  }, []);

  // Enable service worker
  const enableServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }, []);

  // Run all optimizations
  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return;

    setOptimizationStatus('Optimizing images...');
    optimizeImages();

    setOptimizationStatus('Optimizing scripts...');
    optimizeScripts();

    setOptimizationStatus('Optimizing CSS...');
    optimizeCSS();

    setOptimizationStatus('Preloading resources...');
    preloadCriticalResources();

    setOptimizationStatus('Enabling service worker...');
    enableServiceWorker();

    setOptimizationStatus('Optimization complete!');
    setIsOptimized(true);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS, preloadCriticalResources, enableServiceWorker]);

  // Run optimizations on mount
  useEffect(() => {
    if (enableOptimizations) {
      runOptimizations();
    }
  }, [enableOptimizations, runOptimizations]);

  return (
    <div className="performance-optimizer">
      {enableOptimizations && (
        <div className="optimization-status">
          <div className="status-indicator">
            <div className={`status-dot ${isOptimized ? 'optimized' : 'optimizing'}`} />
            <span className="status-text">{optimizationStatus}</span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;