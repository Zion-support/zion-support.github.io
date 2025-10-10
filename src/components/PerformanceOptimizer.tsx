<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect, memo, useCallback } from 'react';
>>>>>>> cursor/analyze-improve-and-deploy-application-fdcc

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
=======
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({ children }) => {
  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    const criticalResources = [
      { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' },
      { href: 'https://www.google-analytics.com', rel: 'preconnect' },
      { href: 'https://www.googletagmanager.com', rel: 'preconnect' }
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        const link = document.createElement('link');
        Object.entries(resource).forEach(([key, value]) => {
          link.setAttribute(key, value as string);
        });
        document.head.appendChild(link);
      }
    });
  }, []);

  // Critical CSS inlining
  const inlineCriticalCSS = useCallback(() => {
    const criticalCSS = `
      .hero-section { opacity: 0; animation: fadeIn 0.6s ease-out forwards; }
      @keyframes fadeIn { to { opacity: 1; } }
      .loading { display: none; }
      .loaded .loading { display: none; }
      .loaded .content { display: block; }
    `;

    if (!document.querySelector('#critical-css')) {
      const style = document.createElement('style');
      style.id = 'critical-css';
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    }
  }, []);

>>>>>>> cursor/analyze-improve-and-deploy-application-fdcc
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
<<<<<<< HEAD
        '/logo.png',
        '/og-image.png'
=======
        '/images/hero-bg.webp',
        '/images/logo.webp',
        '/images/og-image.webp'
>>>>>>> cursor/analyze-improve-and-deploy-application-fdcc
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', '');
      });
    };

    preloadCriticalResources();
    optimizeImages();
<<<<<<< HEAD
    deferNonCriticalScripts();
=======
    enableServiceWorker();
    setupIntersectionObserver();
    optimizeResourceHints();
    inlineCriticalCSS();
    const cleanupScroll = optimizeScroll();
>>>>>>> cursor/analyze-improve-and-deploy-application-fdcc

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, [setupIntersectionObserver, optimizeResourceHints, inlineCriticalCSS]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
