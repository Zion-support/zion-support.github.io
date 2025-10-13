import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/hero-bg.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Preconnect to external domains
    const preconnectExternalDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Load analytics asynchronously
      const analyticsScript = document.createElement('script');
      analyticsScript.async = true;
      analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(analyticsScript);
    };

    // Initialize optimizations
    preloadCriticalResources();
    preconnectExternalDomains();
    optimizeThirdPartyScripts();
  }, []);

  // Handle resize events efficiently
  const handleResize = useCallback(() => {
    // Debounce resize events
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Handle resize logic here
        window.dispatchEvent(new CustomEvent('optimized-resize'));
      }, 150);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Resource hints for better performance
  useEffect(() => {
    // DNS prefetch for external resources
    const dnsPrefetchDomains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Module preload for critical JavaScript
    const criticalModules = [
      '/assets/react-vendor',
      '/assets/main-pages'
    ];

    criticalModules.forEach(module => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = module;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images on mount
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Run after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(optimizeImages, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;