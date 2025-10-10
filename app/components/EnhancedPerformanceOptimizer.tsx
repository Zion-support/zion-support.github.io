'use client';
import React, { useEffect, useCallback } from 'react';

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
    if (!enableLazyLoading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section, .card, .feature');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [enableLazyLoading]);

  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttled scroll handling
      const scrollY = window.scrollY;
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

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      optimizeThirdPartyScripts();
      setupResourceHints();
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
    setupResourceHints
  ]);

  return null; // This component doesn't render anything visible
};

export default EnhancedPerformanceOptimizer;