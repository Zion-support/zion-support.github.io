'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.png',
        '/hero-bg.jpg',
        '/og-image.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
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
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(img => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = imgElement.dataset.src || '';
        imgElement.classList.remove('lazy');
      });
    }
  }, []);

  // Debounce scroll events
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

  // Optimize scroll performance
  useEffect(() => {
    const handleScroll = debounce(() => {
      // Add scroll-based optimizations here
      const scrollY = window.scrollY;
      
      // Update navigation based on scroll
      const nav = document.querySelector('nav');
      if (nav) {
        if (scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debounce]);

  // Optimize resize events
  useEffect(() => {
    const handleResize = debounce(() => {
      // Add resize-based optimizations here
      const width = window.innerWidth;
      
      // Update responsive classes
      document.documentElement.classList.toggle('mobile', width < 768);
      document.documentElement.classList.toggle('tablet', width >= 768 && width < 1024);
      document.documentElement.classList.toggle('desktop', width >= 1024);
    }, 250);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [debounce]);

  // Optimize images on mount
  useEffect(() => {
    optimizeImages();
  }, [optimizeImages]);

  // Prefetch next page resources
  const prefetchNextPage = useCallback((href: string) => {
    if (href && href.startsWith('/')) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  // Add prefetch to navigation links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');
    
    const handleMouseEnter = (event: Event) => {
      const link = event.target as HTMLAnchorElement;
      prefetchNextPage(link.href);
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter, { once: true });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, [prefetchNextPage]);

  // Service Worker registration
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Memory management
  useEffect(() => {
    const cleanup = () => {
      // Clean up any global event listeners or timers
      // This runs when the component unmounts
    };

    return cleanup;
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Monitor performance in development
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} - ${entry.duration}ms`);
          }
        }
      });

      observer.observe({ entryTypes: ['measure'] });

      return () => observer.disconnect();
    }
  }, []);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;