'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          // Add loading="lazy" if not already present
          if (enableLazyLoading && !img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for better performance
          if (!img.getAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
          
          // Add fetchpriority="low" for non-critical images
          if (!img.getAttribute('fetchpriority') && !img.closest('[data-critical]')) {
            img.setAttribute('fetchpriority', 'low');
          }
        });
      };

      // Run immediately and on DOM changes
      optimizeImages();
      
      const observer = new MutationObserver(optimizeImages);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    }
  }, [enableImageOptimization, enableLazyLoading]);

  useEffect(() => {
    if (typeof window === 'undefined' || !enablePreloading) return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.querySelector('link[rel="stylesheet"]');
      if (criticalCSS) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'style';
        preloadLink.href = criticalCSS.getAttribute('href') || '';
        document.head.appendChild(preloadLink);
      }

      // Preload critical fonts
      const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];
      
      fontPreloads.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = fontUrl;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, [enablePreloading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, but that's okay
      });
    }

    // Resource hints for external domains
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  // Web Vitals monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            // Send to analytics
            if ('gtag' in window) {
              const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
              gtag('event', 'web_vitals', {
                event_category: 'performance',
                event_label: 'LCP',
                value: Math.round(lastEntry.startTime)
              });
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observation not supported');
        }

        // FID - First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              const fid = entry.processingStart - entry.startTime;
              
              if ('gtag' in window) {
                const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
                gtag('event', 'web_vitals', {
                  event_category: 'performance',
                  event_label: 'FID',
                  value: Math.round(fid)
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observation not supported');
        }

        // CLS - Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                
                if ('gtag' in window) {
                  const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
                  gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'CLS',
                    value: Math.round(clsValue * 1000) // Convert to integer
                  });
                }
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observation not supported');
        }
      }
    };

    measureWebVitals();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;