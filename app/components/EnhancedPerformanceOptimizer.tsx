'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  children
}) => {
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      // Add image optimization logic here
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (enableLazyLoading && typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('animate-fade-in');
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('[data-lazy]');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [enableLazyLoading]);

  // Preloading critical resources
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/styles/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);
    }
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // Add code splitting optimization logic here
      const script = document.createElement('script');
      script.src = '/js/performance-optimizer.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;