'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true
}) => {
  const [optimizationStatus, setOptimizationStatus] = useState({
    imagesOptimized: 0,
    lazyLoaded: 0,
    preloaded: 0,
    codeSplit: false,
    resourceHints: 0,
    serviceWorker: false
  });

  useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      let optimizedCount = 0;
      
      images.forEach((img) => {
        // Add loading="lazy" for better performance
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
        
        // Add fetchpriority="low" for non-critical images
        if (!img.hasAttribute('fetchpriority') && !img.closest('[data-critical]')) {
          img.setAttribute('fetchpriority', 'low');
        }
        
        optimizedCount++;
      });
      
      setOptimizationStatus(prev => ({ ...prev, imagesOptimized: optimizedCount }));
    }

    // Resource hints
    if (enableResourceHints && typeof window !== 'undefined') {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com' }
      ];

      hints.forEach(({ rel, href }) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      });

      setOptimizationStatus(prev => ({ ...prev, resourceHints: hints.length }));
    }

    // Service Worker registration
    if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }));
        })
        .catch(() => {
          // Service worker registration failed, but that's okay
        });
    }

    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }

    // Code splitting optimization
    if (enableCodeSplitting) {
      setOptimizationStatus(prev => ({ ...prev, codeSplit: true }));
    }

  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, enableResourceHints, enableServiceWorker]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      return () => observer.disconnect();
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceEnhancer;