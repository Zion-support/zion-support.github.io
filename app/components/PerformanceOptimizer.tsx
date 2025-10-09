'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
  enableResourceHints?: boolean;
  enableCriticalCSS?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enableResourceHints = true,
  enableCriticalCSS = true,
}) => {
  // Optimize images with intersection observer
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (!img.loading) {
            img.loading = 'lazy';
          }
          if (!img.decoding) {
            img.decoding = 'async';
          }
          // Add WebP support detection
          if (img.src && !img.src.includes('webp')) {
            const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            const webpImg = new Image();
            webpImg.onload = () => {
              img.src = webpSrc;
            };
            webpImg.src = webpSrc;
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, [enableImageOptimization]);

  // Add resource hints for better performance
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        document.head.appendChild(link);
      }
    });
  }, [enableResourceHints]);

  // Prefetch critical resources
  const prefetchCriticalResources = useCallback(() => {
    if (!enablePrefetching || typeof window === 'undefined') return;

    const criticalResources = [
      '/services',
      '/contact',
      '/ai-services',
      '/it-services',
      '/about',
      '/pricing',
    ];

    // Use requestIdleCallback for non-critical prefetching
    const prefetchResource = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    };

    if ('requestIdleCallback' in window) {
      criticalResources.forEach((href) => {
        requestIdleCallback(() => prefetchResource(href));
      });
    } else {
      criticalResources.forEach((href) => {
        setTimeout(() => prefetchResource(href), 0);
      });
    }
  }, [enablePrefetching]);

  // Add critical CSS optimization
  const optimizeCriticalCSS = useCallback(() => {
    if (!enableCriticalCSS || typeof window === 'undefined') return;

    // Add critical CSS for above-the-fold content
    const criticalCSS = `
      .cyber-grid, .neon-text, .cyber-button {
        will-change: transform;
      }
      .futuristic-glow {
        transform: translateZ(0);
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }, [enableCriticalCSS]);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;
    const updateScrollElements = () => {
      const elements = document.querySelectorAll('.cyber-card, .quantum-card');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-in');
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollElements);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Initialize all optimizations
    optimizeImages();
    addResourceHints();
    prefetchCriticalResources();
    optimizeCriticalCSS();
    const cleanup = optimizeScrollPerformance();

    // Cleanup on unmount
    return cleanup;
  }, [optimizeImages, addResourceHints, prefetchCriticalResources, optimizeCriticalCSS, optimizeScrollPerformance]);

  return null;
};

export default PerformanceOptimizer;
