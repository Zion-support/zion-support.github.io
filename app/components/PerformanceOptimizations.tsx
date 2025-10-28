'use client';

import React, { useEffect, memo } from 'react';

interface PerformanceOptimizationsProps {
  children: React.ReactNode;
}

const PerformanceOptimizations: React.FC<PerformanceOptimizationsProps> = memo(({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.webp', as: 'image' },
        { href: '/images/logo.webp', as: 'image' },
      ];

      criticalResources.forEach(({ href, as, type, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
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
    };

    // Prefetch important links
    const prefetchImportantLinks = () => {
      const importantLinks = document.querySelectorAll('a[data-prefetch]');
      importantLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        script.setAttribute('defer', 'true');
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    prefetchImportantLinks();
    optimizeThirdPartyScripts();

    // Cleanup function
    return () => {
      // Cleanup any observers or timers if needed
    };
  }, []);

  return <>{children}</>;
});

PerformanceOptimizations.displayName = 'PerformanceOptimizations';

export default PerformanceOptimizations;