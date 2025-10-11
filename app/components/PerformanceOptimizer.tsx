'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Preload critical resources
  useEffect(() => {
    if (!enablePreloading) return;

    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    preloadCriticalResources();
  }, [enablePreloading]);

  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization) return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });
    };

    optimizeImages();
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (!enableLazyLoading) return;

    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-lazy]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.lazy) {
              img.src = img.dataset.lazy;
              img.removeAttribute('data-lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    lazyLoadImages();
  }, [enableLazyLoading]);

  // Code splitting optimization
  useEffect(() => {
    if (!enableCodeSplitting) return;

    const optimizeCodeSplitting = () => {
      // Preload next route
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          link.addEventListener('mouseenter', () => {
            // Preload the route
            const linkElement = document.createElement('link');
            linkElement.rel = 'prefetch';
            linkElement.href = href;
            document.head.appendChild(linkElement);
          });
        }
      });
    };

    optimizeCodeSplitting();
  }, [enableCodeSplitting]);

  return <>{children}</>;
};

export default PerformanceOptimizer;