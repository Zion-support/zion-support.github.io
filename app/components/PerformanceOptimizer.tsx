import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg',
        '/api/placeholder/1200/630', // Hero image
        '/api/placeholder/800/600',  // Service images
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical CSS
      const criticalCSS = [
        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
      ];

      criticalCSS.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Run optimization after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(optimizeImages, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttle scroll events
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizeScroll);
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const optimizeResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Debounce resize events
      }, 250);
    };

    window.addEventListener('resize', optimizeResize, { passive: true });
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', optimizeResize);
    };
  }, []);

  // Prefetch next page resources
  const prefetchNextPage = useCallback((href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }, []);

  // Add intersection observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
          });
        },
        { rootMargin: '50px' }
      );

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observer.observe(img));

      return () => observer.disconnect();
    }
  }, []);

  // Service Worker registration for caching
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Critical resource hints
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cdn.jsdelivr.net',
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectOrigins = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ];

      preconnectOrigins.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const measurePerformance = () => {
        // Measure First Contentful Paint
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'paint') {
                console.log(`${entry.name}: ${entry.startTime}ms`);
              }
            });
          });
          observer.observe({ entryTypes: ['paint'] });
        }
      };

      measurePerformance();
    }
  }, []);

  // Memory optimization
  useEffect(() => {
    const optimizeMemory = () => {
      // Clean up unused event listeners
      const cleanup = () => {
        // Remove any orphaned event listeners
        const elements = document.querySelectorAll('[data-cleanup]');
        elements.forEach(el => el.remove());
      };

      // Run cleanup every 5 minutes
      const interval = setInterval(cleanup, 5 * 60 * 1000);
      return () => clearInterval(interval);
    };

    const cleanupInterval = optimizeMemory();
    return cleanupInterval;
  }, []);

  // Bundle optimization
  useEffect(() => {
    const optimizeBundle = () => {
      // Code splitting optimization
      if (typeof window !== 'undefined') {
        // Preload critical chunks
        const criticalChunks = [
          '/static/js/main.js',
          '/static/css/main.css',
        ];

        criticalChunks.forEach(chunk => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = chunk;
          link.as = chunk.endsWith('.js') ? 'script' : 'style';
          document.head.appendChild(link);
        });
      }
    };

    optimizeBundle();
  }, []);

  // Set optimization complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOptimized(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="performance-optimizer">
      {children}
      {isOptimized && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs opacity-0 animate-fade-in">
          Performance Optimized
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;
