// Preload hint: react
'use client';

import React, { useEffect, useCallback } from 'react';

const PerformanceOptimizer: React.FC = React.memo((props) => {
  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add alt attribute if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
      
      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, []);

  // Optimize links
  const optimizeLinks = useCallback(() => {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach((link) => {
      // Add rel="noopener noreferrer" for external links
      if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
      
      // Add target="_blank" for external links
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
    });
  }, []);

  // Optimize forms
  const optimizeForms = useCallback(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      // Add autocomplete attributes
      const inputs = form.querySelectorAll('input');
      inputs.forEach((input) => {
        if (input.type === 'email' && !input.hasAttribute('autocomplete')) {
          input.setAttribute('autocomplete', 'email');
        }
        if (input.type === 'text' && input.name === 'name' && !input.hasAttribute('autocomplete')) {
          input.setAttribute('autocomplete', 'name');
        }
      });
    });
  }, []);

  // Add performance monitoring
  const addPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration + 'ms');
          }
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });
  }, []);

  // Add intersection observer for lazy loading
  const addIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (element.dataset.src) {
              element.style.backgroundImage = `url(${element.dataset.src})`;
              element.removeAttribute('data-src');
              observer.unobserve(element);
            }
          }
        });
      });

      // Observe elements with data-src attribute
      const lazyElements = document.querySelectorAll('[data-src]');
      lazyElements.forEach((element) => observer.observe(element));
    }
  }, []);

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add scroll-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add service worker for caching
  const addServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  useEffect(() => {
    // Run optimizations after DOM is ready
    const runOptimizations = () => {
      optimizeImages();
      optimizeLinks();
      optimizeForms();
      addIntersectionObserver();
      addServiceWorker();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runOptimizations);
    } else {
      runOptimizations();
    }

    // Add performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      addPerformanceMonitoring();
    }

    // Optimize scroll performance
    const cleanupScroll = optimizeScroll();

    return () => {
      document.removeEventListener('DOMContentLoaded', runOptimizations);
      if (cleanupScroll) cleanupScroll();
    };
  }, [optimizeImages, optimizeLinks, optimizeForms, addIntersectionObserver, addServiceWorker, addPerformanceMonitoring, optimizeScroll]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;