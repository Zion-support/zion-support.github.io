<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [isOptimized, setIsOptimized] = useState(false);
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
<<<<<<< HEAD
<<<<<<< HEAD
        '/og-image.svg'        '/og-image.svg',
=======
        '/og-image.svg'
=======
        '/og-image.svg',
        '/api/placeholder/1200/630', // Hero image
        '/api/placeholder/800/600',  // Service images
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

<<<<<<< HEAD
    preloadCriticalResources();
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Add scroll-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    let ticking = false;
    
    const updateLayout = () => {
      // Add resize-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateLayout);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
        '/api/placeholder/1200/630', // Hero image
        '/api/placeholder/800/600',  // Service images
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

<<<<<<< HEAD>>>>>>> cursor/analyze-improve-and-deploy-application-ad0b
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
    // Optimize images
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

    // Initialize optimizations
    preloadCriticalResources();
<<<<<<< HEAD
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Add scroll-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    let ticking = false;
    
    const updateLayout = () => {
      // Add resize-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateLayout);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

<<<<<<< HEAD>>>>>>> cursor/analyze-improve-and-deploy-application-ad0b
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!isOptimized) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add animation classes when element comes into view
          element.classList.add('animate-fade-in');
          
          // Unobserve after animation
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe elements with data-lazy attribute
    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isOptimized]);

  // Resource hints for better performance
  useEffect(() => {
    if (!isOptimized) return;

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
      link.href = `${module}.js`;
      document.head.appendChild(link);
    });
  }, [isOptimized]);

  return (
    <>
      {children}
      
      {/* Performance monitoring styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        /* Optimize font loading */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Inter'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
        }
        
        /* Critical CSS for above-the-fold content */
        .hero-section {
          contain: layout style paint;
        }
        
        .navigation {
          contain: layout style;
        }
        
        /* Optimize animations for better performance */
        .transition-transform {
          will-change: transform;
        }
        
        .transition-opacity {
          will-change: opacity;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return <>{children}</>;
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-ad0b
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
=======
    optimizeImages();
  }, []);

  return <>{children}</>;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
};

export default PerformanceOptimizer;
