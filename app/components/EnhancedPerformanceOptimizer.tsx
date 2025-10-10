import React, { useEffect, useCallback } from 'react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const { metrics, isSlowConnection } = usePerformanceMonitor();

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter-var.woff2';
      fontPreload.as = 'font';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize images based on connection speed
  useEffect(() => {
    if (isSlowConnection) {
      // Reduce image quality for slow connections
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
          // Add quality parameter for slow connections
          img.setAttribute('src', `${src}?q=60&w=800`);
        }
      });
    }
  }, [isSlowConnection]);

  // Lazy load non-critical components
  const LazyComponent = useCallback(({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [hasLoaded, setHasLoaded] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [hasLoaded]);

    return (
      <div ref={ref}>
        {isVisible ? children : (fallback || <div className="animate-pulse bg-gray-200 h-32 rounded" />)}
      </div>
    );
  }, []);

  // Optimize animations based on performance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || metrics.fps < 30) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [metrics.fps]);

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

  // Resource hints for better performance
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  // Performance monitoring and optimization
  useEffect(() => {
    const optimizePerformance = () => {
      // Debounce scroll events
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Scroll-based optimizations
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Hide non-visible elements
          const elements = document.querySelectorAll('[data-lazy]');
          elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top > windowHeight + scrollY || rect.bottom < scrollY) {
              element.classList.add('opacity-0');
            } else {
              element.classList.remove('opacity-0');
            }
          });
        }, 16); // ~60fps
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    const cleanup = optimizePerformance();
    return cleanup;
  }, []);

  return (
    <div className="performance-optimized">
      {children}
      
      {/* Performance Debug Panel (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs z-50">
          <div>FPS: {metrics.fps.toFixed(1)}</div>
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
          <div>Slow Connection: {isSlowConnection ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceOptimizer;