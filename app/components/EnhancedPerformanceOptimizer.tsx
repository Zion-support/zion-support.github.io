'use client';
import React, { useEffect, useCallback, memo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const imageLink = document.createElement('link');
      imageLink.rel = 'preload';
      imageLink.href = '/images/hero-bg.jpg';
      imageLink.as = 'image';
      document.head.appendChild(imageLink);
    }
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  useEffect(() => {
    optimizeImages();
  }, [optimizeImages]);

  // Route change optimization
  const handleRouteChange = useCallback(() => {
    // Clear unused resources
    if (typeof window !== 'undefined') {
      // Clear unused images from memory
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.complete) {
          img.src = '';
        }
      });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      handleRouteChange();
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleRouteChange]);

  return (
    <div className="performance-optimized">
      {children}
    </div>
  );
};

export default memo(EnhancedPerformanceOptimizer);