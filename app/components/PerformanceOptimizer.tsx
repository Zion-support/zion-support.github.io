'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
}

interface OptimizationStatus {
  imagesOptimized: number;
  lazyImagesLoaded: number;
  resourcesPreloaded: number;
  hintsAdded: number;
  serviceWorkerRegistered: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true
}) => {
  const [optimizationStatus, setOptimizationStatus] = useState<OptimizationStatus>({
    imagesOptimized: 0,
    lazyImagesLoaded: 0,
    resourcesPreloaded: 0,
    hintsAdded: 0,
    serviceWorkerRegistered: false
  });

  useEffect(() => {
    if (enableImageOptimization) {
      optimizeImages();
    }
    if (enableLazyLoading) {
      setupLazyLoading();
    }
    if (enablePreloading) {
      preloadCriticalResources();
    }
    if (enableCodeSplitting) {
      setupCodeSplitting();
    }
    if (enableResourceHints) {
      addResourceHints();
    }
    if (enableServiceWorker) {
      registerServiceWorker();
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, enableResourceHints, enableServiceWorker]);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        // Add decoding="async" for better performance
        img.setAttribute('decoding', 'async');
        
        // Add fetchpriority="high" for above-the-fold images
        if (img.getBoundingClientRect().top <= window.innerHeight) {
          img.setAttribute('fetchpriority', 'high');
        }
        
        // Add proper alt text if missing
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', 'Image');
        }
      }
    });
    
    setOptimizationStatus(prev => ({
      ...prev,
      imagesOptimized: images.length
    }));
  };

  const setupLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });
      
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => observer.observe(img));
      
      setOptimizationStatus(prev => ({
        ...prev,
        lazyImagesLoaded: lazyImages.length
      }));
    }
  };

  const preloadCriticalResources = () => {
    const criticalResources = [
      { href: '/src/main.tsx', as: 'script' },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', as: 'style' }
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });

    setOptimizationStatus(prev => ({
      ...prev,
      resourcesPreloaded: criticalResources.length
    }));
  };

  const setupCodeSplitting = () => {
    // Code splitting is typically handled at build time
    setOptimizationStatus(prev => ({
      ...prev,
      codeSplittingEnabled: true
    }));
  };

  const addResourceHints = () => {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });

    setOptimizationStatus(prev => ({
      ...prev,
      hintsAdded: hints.length
    }));
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        setOptimizationStatus(prev => ({
          ...prev,
          serviceWorkerRegistered: true
        }));
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  };

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, []);

  const collectWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // Collect Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance metric:', entry.name, entry.value);
        }
      });
      
      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  const optimizeImagesCallback = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  const preloadCriticalResourcesCallback = useCallback(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical images
    const criticalImages = [
      '/logo.png',
      '/og-image.svg',
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  useEffect(() => {
    // Collect performance metrics after page load
    if (document.readyState === 'complete') {
      collectWebVitals();
    } else {
      window.addEventListener('load', collectWebVitals);
    }

    // Optimize images
    optimizeImagesCallback();

    // Preload critical resources
    preloadCriticalResourcesCallback();

    // Optimize third-party scripts
    optimizeThirdPartyScripts();

    return () => {
      window.removeEventListener('load', collectWebVitals);
    };
  }, [collectWebVitals, optimizeImagesCallback, preloadCriticalResourcesCallback, optimizeThirdPartyScripts]);

  return null;
};

export default PerformanceOptimizer;