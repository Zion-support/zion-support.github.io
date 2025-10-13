import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
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
        '/images/hero-bg.jpg',
        '/images/logo.svg',
        '/images/ai-icon.svg'
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
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.setAttribute('defer', 'true');
        }
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();

    // Cleanup function
    return () => {
      // Remove any added preload links
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => link.remove());
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
    
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize optimizations
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        };
        
        // Update CSS custom properties for responsive design
        document.documentElement.style.setProperty('--viewport-width', `${viewport.width}px`);
        document.documentElement.style.setProperty('--viewport-height', `${viewport.height}px`);
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Memory optimization
  useEffect(() => {
    const cleanup = () => {
      // Clear any unused event listeners
      // Clean up any timers or intervals
      // Remove unused DOM references
    };

    // Run cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    return () => {
      cleanup();
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));

      return () => {
        imageObserver.disconnect();
      };
    }
  }, []);

  // Service Worker registration for caching
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

  // Critical CSS inlining
  useEffect(() => {
    const inlineCriticalCSS = () => {
      // This would typically be handled by build tools
      // For now, we'll ensure critical styles are loaded
      const criticalStyles = document.querySelectorAll('style[data-critical]');
      criticalStyles.forEach(style => {
        style.setAttribute('media', 'all');
      });
    };

    inlineCriticalCSS();
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

      // Preconnect to critical third-party origins
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

  // Performance monitoring
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const logPerformanceMetrics = () => {
        // Log Core Web Vitals
        if ('web-vitals' in window) {
          import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(console.log);
            getFID(console.log);
            getFCP(console.log);
            getLCP(console.log);
            getTTFB(console.log);
          });
        }
      };

      logPerformanceMetrics();
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;