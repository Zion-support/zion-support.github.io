'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children?: ReactNode;
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
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));

      return () => {
        imageObserver.disconnect();
      };
    }
  }, [enableImageOptimization]);

  // Preload critical resources
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/styles/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const font = document.createElement('link');
      font.rel = 'preload';
      font.href = '/fonts/inter-var.woff2';
      font.as = 'font';
      font.type = 'font/woff2';
      font.crossOrigin = 'anonymous';
      document.head.appendChild(font);

      return () => {
        document.head.removeChild(criticalCSS);
        document.head.removeChild(font);
      };
    }
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // Prefetch next route
      const prefetchNextRoute = () => {
        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach(link => {
          link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && !document.querySelector(`link[href="${href}"]`)) {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              document.head.appendChild(prefetchLink);
            }
          });
        });
      };

      prefetchNextRoute();
    }
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // Resource hints
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      // Preconnect to critical third-party origins
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);

      return () => {
        document.head.removeChild(dnsPrefetch);
        document.head.removeChild(preconnect);
      };
    }
  }, []);

  return <>{children}</>;
};

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;