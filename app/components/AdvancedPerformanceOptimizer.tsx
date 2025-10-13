import React, { useEffect, useCallback, useMemo } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Performance metrics collection
  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts with display=swap
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg',
        '/images/hero-bg.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });

      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/assets/index-DEg1_9da.css';
      criticalCSS.as = 'style';
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance with passive listeners
  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Implement intersection observer for lazy loading
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

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img);
      });

      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    let ticking = false;
    
    const updateLayout = () => {
      // Debounce resize events
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateLayout);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Memory optimization
  useEffect(() => {
    const cleanup = () => {
      // Clean up event listeners and observers
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    };

    return cleanup;
  }, [handleScroll, handleResize]);

  // Service Worker registration
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            // Service worker registered successfully
          })
          .catch((error) => {
            // Service worker registration failed
          });
      });
    }
  }, []);

  // Resource hints optimization
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  return <>{children}</>;
};

export default AdvancedPerformanceOptimizer;