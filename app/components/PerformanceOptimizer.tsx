<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
import React, { useEffect, useState, useCallback } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb

interface PerformanceOptimizerProps {
  children: React.ReactNode;
=======
import React, { useEffect, useState } from 'react'

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    // Performance optimization logic
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    }
  }, []);

  return <>{children}</>;
=======
  const [isOptimized, setIsOptimized] = useState(false);
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

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

    // Preconnect to external domains
    const preconnectExternalDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
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
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.setAttribute('defer', 'true');
        }
      });
    };

    // Initialize optimizations
    const initializeOptimizations = () => {
      preloadCriticalResources();
      preconnectExternalDomains();
      optimizeImages();
      optimizeThirdPartyScripts();
      setIsOptimized(true);
    };

    // Run optimizations after component mount
    const timer = setTimeout(initializeOptimizations, 100);

    return () => clearTimeout(timer);
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
};

<<<<<<< HEAD
export default PerformanceOptimizer;
=======
    // Lazy load non-critical components
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              element.classList.add('loaded')
              observer.unobserve(element)
            }
          })
        },
        { threshold: 0.1 }
      )

      const lazyElements = document.querySelectorAll('[data-lazy]')
      lazyElements.forEach(el => observer.observe(el))
    }

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        onFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        onFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        onLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        onTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      }).catch(() => {
        // Silently fail if web-vitals is not available
      })
    }

      }

      window.addEventListener('scroll', updateScrollPosition, { passive: true })
      
      return () => window.removeEventListener('scroll', updateScrollPosition)
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    lazyLoadComponents()
    monitorWebVitals()
    const cleanupScroll = optimizeScroll()

    // Cleanup
    return () => {
      cleanupScroll()
    }
  }, [])

  // Log performance metrics in development
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'development' && Object.values(metrics).some(val => val !== null)) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  return null
}

export default PerformanceOptimizer
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  fcp: number | null
  ttfb: number | null
    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false
      
      const updateScrollPosition = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-dependent elements
            ticking = false
          })
          ticking = true
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
