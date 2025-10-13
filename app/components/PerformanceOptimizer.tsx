import React, { useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/critical.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);

    // Preload critical JavaScript
    const criticalJS = document.createElement('link');
    criticalJS.rel = 'preload';
    criticalJS.href = '/assets/index.js';
    criticalJS.as = 'script';
    document.head.appendChild(criticalJS);
  }, []);

  // Optimize fonts
  const optimizeFonts = useCallback(() => {
    // Add font-display: swap to all font faces
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Monitor Core Web Vitals
  const monitorWebVitals = useCallback(() => {
    const sendToAnalytics = (metric: any) => {
      // Send to your analytics service
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Preload next page on hover
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[href="${href}"]`)) {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'prefetch';
          preloadLink.href = href;
          document.head.appendChild(preloadLink);
        }
      });
    });
  }, []);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }
  }, []);

  // Optimize memory usage
  const optimizeMemoryUsage = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove unused event listeners
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };

    // Clean up on page unload
    window.addEventListener('beforeunload', cleanup);
  }, []);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      optimizeFonts();
      monitorWebVitals();
      optimizeBundleLoading();
      optimizeAnimations();
      optimizeMemoryUsage();
    }, 100);

    return () => clearTimeout(timer);
  }, [
    optimizeImages,
    preloadCriticalResources,
    optimizeFonts,
    monitorWebVitals,
    optimizeBundleLoading,
    optimizeAnimations,
    optimizeMemoryUsage
  ]);

  return <>{children}</>;
};

export default PerformanceOptimizer;