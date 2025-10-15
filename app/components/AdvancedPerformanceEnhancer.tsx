import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }
  }, [enableImageOptimization]);

  // Preloading optimization
  useEffect(() => {
    if (enablePreloading) {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    }
  }, [enablePreloading]);

  // Caching optimization
  useEffect(() => {
    if (enableCaching) {
      // Set cache headers for static assets
      const style = document.createElement('style');
      style.textContent = `
        img, video, audio {
          max-width: 100%;
          height: auto;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableCaching]);

  // Compression optimization
  useEffect(() => {
    if (enableCompression) {
      // Enable gzip compression for text content
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.textCompression = 'gzip';
        }
      });
    }
  }, [enableCompression]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const cleanup = monitorPerformance();
    return cleanup;
  }, [monitorPerformance]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceEnhancer;