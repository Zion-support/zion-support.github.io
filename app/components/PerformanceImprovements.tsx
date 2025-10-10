'use client';
import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceImprovementsProps {
  children: React.ReactNode;
}

const PerformanceImprovements: React.FC<PerformanceImprovementsProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

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
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/hero-bg.jpg',
        '/og-image.svg'
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
    setIsLoaded(true);
  }, []);

  // Optimize images
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const image = img as HTMLImageElement;
        
        // Add loading="lazy" for non-critical images
        if (!image.hasAttribute('loading')) {
          image.loading = 'lazy';
        }

        // Add decoding="async" for better performance
        if (!image.hasAttribute('decoding')) {
          image.decoding = 'async';
        }

        // Add proper alt text if missing
        if (!image.alt) {
          image.alt = 'Zion Tech Group - AI and IT Solutions';
        }
      });
    };

    if (isLoaded) {
      optimizeImages();
    }
  }, [isLoaded]);

  // Optimize third-party scripts
  useEffect(() => {
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.defer = true;
        }
      });

      // Optimize Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        
        // Set up performance monitoring
        gtag('config', 'GA_MEASUREMENT_ID', {
          send_page_view: false,
          custom_map: {
            'custom_parameter_1': 'performance_metrics'
          }
        });
      }
    };

    if (isLoaded) {
      optimizeThirdPartyScripts();
    }
  }, [isLoaded]);

  // Add service worker for caching
  useEffect(() => {
    if ('serviceWorker' in navigator && isLoaded) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, [isLoaded]);

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

  // Add performance monitoring
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
              console.log('CLS:', entry.value);
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

        return () => observer.disconnect();
      }
    };

    if (isLoaded) {
      const cleanup = monitorPerformance();
      return cleanup;
    }
  }, [isLoaded]);

  return <>{children}</>;
};

export default PerformanceImprovements;