'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface ConsolidatedPerformanceProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

const ConsolidatedPerformance: React.FC<ConsolidatedPerformanceProps> = memo(({ 
  enableImageOptimization = true,
  enablePreloading = true,
  enableResourceHints = true
}) => {
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined' || !enablePreloading) return;

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
  }, [enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return;

    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    domains.forEach((domain) => {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = `https://${domain}`;
      preconnect.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(preconnect);
    });
  }, [enableResourceHints]);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    addResourceHints();
  }, [optimizeImages, preloadCriticalResources, addResourceHints]);

  return null;
});

ConsolidatedPerformance.displayName = 'ConsolidatedPerformance';

export default ConsolidatedPerformance;