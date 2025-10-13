import React, { useEffect, useCallback, useMemo } from 'react';

interface AdvancedPerformanceOptimizerProps {
  children: React.ReactNode;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({ children }) => {
  // Memoize expensive calculations
  const performanceConfig = useMemo(() => ({
    enableIntersectionObserver: true,
    enablePreloading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enableServiceWorker: true,
  }), []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts with better loading strategy
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images with better optimization
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg',
        '/favicon.ico'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });

      // Preload critical JavaScript chunks
      const criticalChunks = [
        '/assets/react-vendor-',
        '/assets/main-pages-',
        '/assets/index-'
      ];

      criticalChunks.forEach(chunk => {
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = chunk;
        document.head.appendChild(link);
      });
    };

    if (performanceConfig.enablePreloading) {
      preloadCriticalResources();
    }
  }, [performanceConfig.enablePreloading]);

  // Optimize scroll performance with better throttling
  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Implement scroll-based optimizations
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Add scroll-based optimizations here
      if (scrollY > windowHeight * 0.8) {
        // Load more content or trigger animations
        document.documentElement.classList.add('scroll-triggered');
      } else {
        document.documentElement.classList.remove('scroll-triggered');
      }
      
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    if (performanceConfig.enableIntersectionObserver) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, performanceConfig.enableIntersectionObserver]);

  // Optimize resize performance with debouncing
  const handleResize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateLayout = () => {
      // Implement resize-based optimizations
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Update CSS custom properties for responsive design
      document.documentElement.style.setProperty('--viewport-width', `${width}px`);
      document.documentElement.style.setProperty('--viewport-height', `${height}px`);
      
      // Trigger layout optimizations
      if (width < 768) {
        document.documentElement.classList.add('mobile-view');
        document.documentElement.classList.remove('desktop-view');
      } else {
        document.documentElement.classList.add('desktop-view');
        document.documentElement.classList.remove('mobile-view');
      }
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateLayout, 150);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Implement intersection observer for lazy loading
  useEffect(() => {
    if (!performanceConfig.enableIntersectionObserver) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('in-view');
          
          // Load images or other resources
          const lazyImages = target.querySelectorAll('img[data-src]');
          lazyImages.forEach(img => {
            const image = img as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              image.classList.add('loaded');
            }
          });
        }
      });
    }, observerOptions);

    // Observe all elements with lazy-load class
    const lazyElements = document.querySelectorAll('.lazy-load');
    lazyElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [performanceConfig.enableIntersectionObserver]);

  // Implement service worker for caching
  useEffect(() => {
    if (!performanceConfig.enableServiceWorker || !('serviceWorker' in navigator)) return;

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    };

    registerServiceWorker();
  }, [performanceConfig.enableServiceWorker]);

  // Optimize memory usage
  useEffect(() => {
    const cleanup = () => {
      // Clean up event listeners and timers
      const timers = document.querySelectorAll('[data-timer]');
      timers.forEach(timer => {
        const timerId = timer.getAttribute('data-timer');
        if (timerId) {
          clearTimeout(parseInt(timerId));
        }
      });
    };

    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, []);

  return <>{children}</>;
};

export default AdvancedPerformanceOptimizer;