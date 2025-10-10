'use client';
import React, { useEffect, useCallback } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const EnhancedPerformanceOptimizer: React.FC = () => {
  const { trackEvent } = useAnalytics();

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;
    
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
  }, []);

  const optimizeThirdPartyScripts = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.defer && !script.async) {
        script.defer = true;
      }
    });
  }, []);

  const trackPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          trackEvent('performance_metric', {
            metric: 'lcp',
            value: entry.startTime,
            category: 'performance'
          });
        }
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }, [trackEvent]);

  useEffect(() => {
    // Run optimizations after component mounts
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      optimizeThirdPartyScripts();
      trackPerformanceMetrics();
    }, 100);

    return () => clearTimeout(timer);
  }, [optimizeImages, preloadCriticalResources, optimizeThirdPartyScripts, trackPerformanceMetrics]);

  return null; // This component doesn't render anything
};

export default EnhancedPerformanceOptimizer;