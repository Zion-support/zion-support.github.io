import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  children: React.ReactNode;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ children }) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/critical.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const interFont = document.createElement('link');
    interFont.rel = 'preload';
    interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    interFont.as = 'style';
    interFont.crossOrigin = 'anonymous';
    document.head.appendChild(interFont);

    // Preload critical images
    const criticalImages = [
      '/logo.svg',
      '/og-image.jpg',
      '/hero-bg.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
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
  }, []);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  // Add resource hints
  const addResourceHints = useCallback(() => {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
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

  // Memory management
  const optimizeMemoryUsage = useCallback(() => {
    // Clean up unused event listeners periodically
    const cleanup = () => {
      // Remove unused event listeners
      // This is a simplified version - in a real app, you'd track listeners
    };

    const interval = setInterval(cleanup, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Service Worker registration
  const registerServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalResources();
    addResourceHints();
    optimizeImages();
    optimizeThirdPartyScripts();
    registerServiceWorker();

    // Set up performance monitoring
    const scrollCleanup = optimizeScrollPerformance();
    const memoryCleanup = optimizeMemoryUsage();

    // Cleanup on unmount
    return () => {
      scrollCleanup();
      memoryCleanup();
    };
  }, [
    preloadCriticalResources,
    addResourceHints,
    optimizeImages,
    optimizeThirdPartyScripts,
    optimizeScrollPerformance,
    optimizeMemoryUsage,
    registerServiceWorker
  ]);

  return <>{children}</>;
};

export default PerformanceEnhancer;
