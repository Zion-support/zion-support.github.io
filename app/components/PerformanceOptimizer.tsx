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
        '/css/critical.css',
        '/css/components.css'
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
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Add error handling
        img.addEventListener('error', () => {
          img.style.display = 'none';
        });
      });
    };

    // Run optimization after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
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
        // Handle resize optimization
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        };
        
        // Update CSS custom properties for responsive design
        document.documentElement.style.setProperty('--viewport-width', `${viewport.width}px`);
        document.documentElement.style.setProperty('--viewport-height', `${viewport.height}px`);
      }, 100);
    };

    window.addEventListener('resize', optimizeResize);
    return () => {
      window.removeEventListener('resize', optimizeResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Memory optimization
  useEffect(() => {
    const cleanup = () => {
      // Clear unused event listeners
      const unusedListeners = document.querySelectorAll('[data-cleanup="true"]');
      unusedListeners.forEach(element => {
        element.remove();
      });
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, []);

  // Performance monitoring
  useEffect(() => {
    const monitorPerformance = () => {
      if ('performance' in window) {
        // Monitor Core Web Vitals
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              console.log('CLS:', (entry as any).value);
            }
          });
        });

        try {
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch (e) {
          console.warn('Performance Observer not supported');
        }
      }
    };

    monitorPerformance();
  }, []);

  // Resource hints
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cdnjs.cloudflare.com'
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
        'https://fonts.gstatic.com'
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

  // Mark as optimized
  useEffect(() => {
    setIsOptimized(true);
  }, []);

  return (
    <div className="performance-optimizer" data-optimized={isOptimized}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;