'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enableCaching = true,
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }

    // Lazy loading
    if (enableLazyLoading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      });

      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }

    // Caching
    if (enableCaching) {
      // Add cache headers
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Cache-Control');
      meta.setAttribute('content', 'public, max-age=31536000');
      document.head.appendChild(meta);
    }
  }, [enableImageOptimization, enableLazyLoading, enableCaching]);

  const handleResourceLoad = useCallback((event: Event) => {
    const target = event.target as HTMLElement;
    if (target) {
      target.classList.add('loaded');
    }
  }, []);

  return (
    <div className="performance-optimizer">
      {children}
    </div>
  );
};

export default PerformanceOptimizer;
