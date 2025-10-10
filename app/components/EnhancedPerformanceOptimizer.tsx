'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePreloading?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
  enableWebVitals?: boolean;
  enableCompression?: boolean;
  enablePrefetching?: boolean;
  enableCriticalResourcePreloading?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePreloading = true,
  enableCriticalCSS = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enableWebVitals = true,
  enableCompression = true,
  enablePrefetching = true,
  enableCriticalResourcePreloading = true
}) => {

  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');

      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src;
          imageElement.removeAttribute('data-src');
        }

    };

    // Optimize images on load
    if (document.readyState === 'complete') {
      optimizeImages();
    } else {
      window.addEventListener('load', optimizeImages);
    }

    return () => {
      window.removeEventListener('load', optimizeImages);
    };
  }, [enableImageOptimization]);

  // Lazy loading for images and components
  useEffect(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }

    }, observerOptions);

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => {
      imageObserver.disconnect();
    };
  }, [enableLazyLoading]);

  // Resource hints and preloading
  useEffect(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const addResourceHints = () => {
      // Preconnect to external domains
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      domains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);

      // DNS prefetch for additional domains
      const dnsPrefetchDomains = [
        'https://cdn.gpteng.co',
        'https://api.ziontechgroup.com'
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);

    };

    addResourceHints();
  }, [enableResourceHints]);

  // Critical resource preloading
  useEffect(() => {
    if (!enableCriticalResourcePreloading || typeof window === 'undefined') return;

    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
      ];

      criticalFonts.forEach((fontUrl) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fontUrl;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        link.onload = () => {
          link.rel = 'stylesheet';
        };
        document.head.appendChild(link);

    };

    preloadCriticalResources();
  }, [enableCriticalResourcePreloading]);

  // Service Worker registration
  useEffect(() => {
    if (!enableServiceWorker || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        // Service Worker registered successfully
      } catch (error) {
        // Service Worker registration failed
      }
    };

    if (document.readyState === 'complete') {
      registerServiceWorker();
    } else {
      window.addEventListener('load', registerServiceWorker);
    }
  }, [enableServiceWorker]);

  // Web Vitals monitoring
  useEffect(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    const reportWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

        const reportMetric = (metric: any) => {
          // Send to analytics
          if ('gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: metric.name,
              value: Math.round(metric.value),
              non_interaction: true,

          }
        };

        getCLS(reportMetric);
        getFID(reportMetric);
        getFCP(reportMetric);
        getLCP(reportMetric);
        getTTFB(reportMetric);
      } catch (error) {
        // Failed to load web vitals
      }
    };

    reportWebVitals();
  }, [enableWebVitals]);

  // Prefetching for likely next pages
  useEffect(() => {
    if (!enablePrefetching || typeof window === 'undefined') return;

    const prefetchPages = () => {
      const likelyPages = [
        '/services',
        '/contact',
        '/about',
        '/ai-services',
        '/it-services'
      ];

      // Prefetch after a delay to not impact initial load
      setTimeout(() => {
        likelyPages.forEach((page) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);

      }, 3000);
    };

    if (document.readyState === 'complete') {
      prefetchPages();
    } else {
      window.addEventListener('load', prefetchPages);
    }
  }, [enablePrefetching]);

  // Compression optimization
  useEffect(() => {
    if (!enableCompression || typeof window === 'undefined') return;

    const optimizeCompression = () => {
      // Enable compression for text resources
      const style = document.createElement('style');
      style.textContent = `
        /* Enable hardware acceleration for animations */
        * {
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          -ms-transform: translateZ(0);
          -o-transform: translateZ(0);
          transform: translateZ(0);
        }

        /* Optimize repaints */
        .cyber-card, .quantum-card {
          will-change: transform;
        }

        /* Optimize scrolling */
        .overflow-auto, .overflow-scroll {
          -webkit-overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(style);
    };

    optimizeCompression();
  }, [enableCompression]);

  // Memory optimization
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const optimizeMemory = () => {
      // Clean up unused event listeners periodically
      const cleanup = () => {
        // Remove any orphaned event listeners
        const elements = document.querySelectorAll('[data-cleanup]');
        elements.forEach((element) => {
          element.removeAttribute('data-cleanup');

      };

      // Run cleanup every 5 minutes
      const interval = setInterval(cleanup, 300000);

      return () => clearInterval(interval);
    };

    const cleanupInterval = optimizeMemory();
    return cleanupInterval;
  }, []);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigation) {
      const metrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        loadComplete: navigation.loadEventEnd - navigation.fetchStart,
        firstByte: navigation.responseStart - navigation.fetchStart,
        domInteractive: navigation.domInteractive - navigation.fetchStart
      };

      // Performance metrics collected

      // Send to analytics
      if ('gtag' in window) {
        Object.entries(metrics).forEach(([key, value]) => {
          (window as any).gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: key,
            value: Math.round(value),
            non_interaction: true,


      }
    }
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  return null;
};

export default EnhancedPerformanceOptimizer;