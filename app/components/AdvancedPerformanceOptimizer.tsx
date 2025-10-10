'use client';

import React, { useEffect } from 'react';

const AdvancedPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize third-party scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (script.getAttribute('src')?.includes('analytics')) {
        script.setAttribute('async', '');
      }
    });
  }, []);

  return null;
};

export default AdvancedPerformanceOptimizer;