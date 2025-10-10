'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          // Add loading="lazy" for better performance
          if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for non-blocking image loading
          if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
        });
      };

      // Run immediately and on DOM changes
      optimizeImages();
      
      const observer = new MutationObserver(optimizeImages);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    }
  }, [enableImageOptimization]);

  useEffect(() => {
    // Lazy loading implementation
    if (enableLazyLoading) {
      const lazyLoadElements = () => {
        const lazyElements = document.querySelectorAll('[data-src]');
        
        const lazyObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const src = element.getAttribute('data-src');
              
              if (src) {
                if (element.tagName === 'IMG') {
                  (element as HTMLImageElement).src = src;
                } else if (element.tagName === 'IFRAME') {
                  (element as HTMLIFrameElement).src = src;
                }
                
                element.removeAttribute('data-src');
                element.classList.remove('lazy');
                lazyObserver.unobserve(element);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        lazyElements.forEach((element) => {
          lazyObserver.observe(element);
        });
      };

      // Run when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', lazyLoadElements);
      } else {
        lazyLoadElements();
      }
    }
  }, [enableLazyLoading]);

  useEffect(() => {
    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalResources = [
          { href: '/assets/index.css', as: 'style' },
          { href: '/assets/index.js', as: 'script' },
          { href: '/assets/vendor.js', as: 'script' }
        ];

        criticalResources.forEach(({ href, as }) => {
          // Check if already preloaded
          const existingLink = document.querySelector(`link[href="${href}"]`);
          if (!existingLink) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = as;
            if (as === 'style') {
              link.onload = () => {
                link.rel = 'stylesheet';
              };
            }
            document.head.appendChild(link);
          }
        });
      };

      preloadCriticalResources();
    }
  }, [enablePreloading]);

  useEffect(() => {
    // Code splitting optimization
    if (enableCodeSplitting) {
      // Preload next likely pages
      const preloadNextPages = () => {
        const nextPages = ['/about', '/services', '/contact'];
        
        nextPages.forEach((page) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        });
      };

      // Delay preloading to not interfere with critical resources
      const timeoutId = setTimeout(preloadNextPages, 3000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
    // Monitor page load performance
    const measurePageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.navigationStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.navigationStart;
          
          // Send to analytics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
            gtag('event', 'page_load_time', {
              load_time: Math.round(loadTime),
              dom_content_loaded: Math.round(domContentLoaded)
            });
          }
        }
      }
    };

    // Run after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;