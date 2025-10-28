'use client';

import React, { useEffect } from 'react';

// Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.png', as: 'image' },
      ];

      criticalResources.forEach(({ href, as, type, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.1
        });

        images.forEach((img) => imageObserver.observe(img));
      }
    };

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              // LCP measurement
            } else if (entry.entryType === 'first-input') {
              const fidEntry = entry as PerformanceEventTiming;
              // FID measurement
            } else if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                // CLS measurement
              }
            }
          }
        });

        try {
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch (error) {
          // Error handled
        }
      }
    };

    preloadCriticalResources();
    optimizeImages();
    addPerformanceMonitoring();
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;