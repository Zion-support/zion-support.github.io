import React, { useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const PerformanceOptimizer: React.FC = () => {
  const reportMetric = useCallback((name: string, value: number) => {
    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: name,
        non_interaction: true,
      });
    }
    
    // Log for development
    console.log(`Performance Metric - ${name}:`, value);
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => reportMetric('CLS', metric.value));
    onINP((metric) => reportMetric('INP', metric.value));
    onFCP((metric) => reportMetric('FCP', metric.value));
    onLCP((metric) => reportMetric('LCP', metric.value));
    onTTFB((metric) => reportMetric('TTFB', metric.value));

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src;
          imageElement.removeAttribute('data-src');
        }
      });
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const src = element.dataset.lazy;
            if (src && element.tagName === 'IMG') {
              (element as HTMLImageElement).src = src;
              element.removeAttribute('data-lazy');
            }
            observer.unobserve(element);
          }
        });
      });

      lazyElements.forEach(el => observer.observe(el));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    lazyLoadResources();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, [reportMetric]);

  return null;
};

export default PerformanceOptimizer;