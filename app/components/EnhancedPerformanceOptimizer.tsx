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

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const { trackEvent } = useAnalytics();

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical images
    const criticalImages = [
      '/favicon.svg',
      '/og-image.svg'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', 'true');
      }
    });
  }, []);

  const setupIntersectionObserver = useCallback(() => {
    if (!enableLazyLoading) return () => {};
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Add animation classes when elements come into view
            element.classList.add('animate-fade-in');
            
            // Track visibility for analytics
            trackEvent('element_viewed', {
              category: 'engagement',
              label: element.id || element.className
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section, .card, .feature');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [enableLazyLoading, trackEvent]);

  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      // Throttled scroll handling
      const scrollY = window.scrollY;
      
      // Update navigation based on scroll position
      const nav = document.querySelector('nav');
      if (nav) {
        if (scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setupResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const domains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.google-analytics.com'
    ];

    domains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }, []);

  const trackPerformanceMetrics = useCallback(() => {
    // Track Core Web Vitals
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null
    };

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      trackEvent('page_load_time', {
        category: 'performance',
        value: loadTime
      });
    });

    // Track resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          trackEvent('resource_load', {
            category: 'performance',
            label: entry.name,
            value: Math.round(entry.duration)
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }, [trackEvent]);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      optimizeThirdPartyScripts();
      setupResourceHints();
      trackPerformanceMetrics();
    }, 100);

    const cleanup = setupIntersectionObserver();
    const scrollCleanup = optimizeScrollPerformance();

    return () => {
      clearTimeout(timer);
      cleanup();
      scrollCleanup();
    };
  }, [
    optimizeImages,
    preloadCriticalResources,
    optimizeThirdPartyScripts,
    setupIntersectionObserver,
    optimizeScrollPerformance,
    setupResourceHints,
    trackPerformanceMetrics
  ]);

  return null;
};

export default EnhancedPerformanceOptimizer;