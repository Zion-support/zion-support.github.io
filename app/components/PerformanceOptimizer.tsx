'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enableCriticalCSS = true,
  enableResourceHints = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        // Add fetchpriority for above-the-fold images
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.setAttribute('fetchpriority', 'high');
        }
      });
    }

    // Prefetch critical resources
    if (enablePrefetching) {
      const prefetchLinks = [
        '/services',
        '/contact',
        '/ai-solutions',
        '/it-services',
        '/about',
        '/blog',
      ];

      prefetchLinks.forEach((href) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = href;
          document.head.appendChild(link);
        }
      });
    }

    // Add resource hints
    if (enableResourceHints) {
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cdnjs.cloudflare.com',
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const existingLink = document.querySelector(`link[href="//${domain}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = `//${domain}`;
          document.head.appendChild(link);
        }
      });
    }

    // Preload critical fonts
    if (enableCriticalCSS) {
      const fontPreloads = [
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          as: 'style',
        },
      ];

      fontPreloads.forEach((font) => {
        const existingLink = document.querySelector(`link[href="${font.href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = font.href;
          link.as = font.as;
          document.head.appendChild(link);
        }
      });
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }
  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePrefetching, enableCriticalCSS, enableResourceHints]);

  return null;
};

export default PerformanceOptimizer;
