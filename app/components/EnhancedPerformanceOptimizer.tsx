'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" for better performance
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add error handling
        img.addEventListener('error', () => {
          img.style.display = 'none';
        });
      });
    }
  }, [enableImageOptimization, enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadLinks = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { href: '/css/critical.css', as: 'style' }
      ];

      preloadLinks.forEach((link) => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = link.href;
        linkElement.as = link.as;
        if (link.type) linkElement.type = link.type;
        if (link.crossorigin) linkElement.crossOrigin = link.crossorigin;
        document.head.appendChild(linkElement);
      });
    }
  }, [enablePreloading]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.duration);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  // Debounced scroll handler for performance
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Optimize scroll events
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = debounce(() => {
        // Handle scroll events here
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Add any scroll-based optimizations
      }, 16); // ~60fps

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [debounce]);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;