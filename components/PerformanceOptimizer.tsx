'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Optimize scripts
    const optimizeScripts = () => {
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        const htmlScript = script as HTMLScriptElement;
        if (!htmlScript.async && !htmlScript.defer) {
          htmlScript.defer = true;
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeScripts();
  }, []);

  return <>{children}</>;
}