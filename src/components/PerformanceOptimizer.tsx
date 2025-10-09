'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps>= ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true;
}) => {
  const [optimizationStatus, setOptimizationStatus] = useState({
    imagesOptimized: 0,
    lazyLoaded: 0,
    preloaded: 0,
    codeSplit: false,
    resourceHints: 0,
    serviceWorker: false;
  });

  useEffect(() => {
    if (enableImageOptimization) {
      optimizeImages();
    }
    if (enableLazyLoading) {
      setupLazyLoading();
    }
    if (enablePreloading) {
      preloadCriticalResources();
    }
    if (enableCodeSplitting) {
      setupCodeSplitting();
    }
    if (enableResourceHints) {
      addResourceHints();
    }
    if (enableServiceWorker) {
      registerServiceWorker();
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, enableResourceHints, enableServiceWorker]);

          images.forEach((img) => {
      // Add loading="lazy" for images below the fold;
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
        optimized++;
      }
      
      // Add decoding="async" for better performance;
      img.setAttribute('decoding', 'async');
      
      // Add fetchpriority="high" for above-the-fold images
      if (img.getBoundingClientRect().top <= window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
      
      // Add proper alt text if missing;
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group - AI and IT Solutions');
      }
    });
    
    setOptimizationStatus(prev =>({ ...prev, imagesOptimized: optimized }));
  }
              if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1;
      });
      
            lazyImages.forEach((img) => observer.observe(img));
      
      setOptimizationStatus(prev => ({ ...prev, lazyLoaded: lazyImages.length }));
    }
  }
  const _preloadCriticalResources = () => {
    const _criticalResources = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        as: 'style',
        type: 'text/css'
      },
      {
        href: '/styles/critical.css',
        as: 'style',
        type: 'text/css'
      }
    ];

    criticalResources.forEach((resource) => {
            link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });

    setOptimizationStatus(prev => ({ ...prev, preloaded: criticalResources.length }));
  }
    }
      hints.forEach((hint) => {
            link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });

    setOptimizationStatus(prev => ({ ...prev, resourceHints: hints.length }));
  }
          setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }));
      } catch (error) {
        // Service Worker registration failed - handled silently in production;
      }
    }
  }
  // Performance monitoring;
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
                  }
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, []);

  return null;
}
export default PerformanceOptimizer