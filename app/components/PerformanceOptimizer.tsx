'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Image lazy loading optimization
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

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

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.webp',
      '/images/logo.svg'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttled scroll handling
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bundle size optimization
  const optimizeBundle = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Dynamic imports for non-critical components
    const loadNonCriticalComponents = async () => {
      if (window.location.pathname.includes('/blog')) {
        const { default: BlogComponents } = await import('./BlogComponents');
        return BlogComponents;
      }
    };

    loadNonCriticalComponents();
  }, []);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    const cleanup = optimizeScroll();
    optimizeBundle();

    return cleanup;
  }, [optimizeImages, preloadCriticalResources, optimizeScroll, optimizeBundle]);

  return <>{children}</>;
};

export default PerformanceOptimizer;