<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
interface PerformanceOptimizerProps {
  children: React.ReactNode;
=======
<<<<<<< HEAD
'use client;
=======
'use client';
<<<<<<< HEAD
import React from 'react';
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

import React, { useEffect, useState, useCallback } from 'react;

import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react;

interface PerformanceOptimizerProps {}
  enableImageOptimization?: boolean;

  enableLazyLoading?: boolean;

  enablePreloading?: boolean;

  enableCodeSplitting?: boolean;

>>>>>>> origin/cursor/ad-creation-and-management-f267
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/icons/sprite.svg'
      ];
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        
        // Set proper 'as' attribute based on file type
        if (resource.endsWith('.woff2')) {
          link.as = 'font';
          link.crossOrigin = 'anonymous';
        } else if (resource.endsWith('.jpg') || resource.endsWith('.jpeg') || resource.endsWith('.png') || resource.endsWith('.webp')) {
          link.as = 'image';
        } else if (resource.endsWith('.svg')) {
          link.as = 'image';
        } else {
          link.as = 'fetch';
        }
        
        document.head.appendChild(link);
      });
      // Optimize images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img['src'] = img.dataset['src'] || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      images.forEach(img => imageObserver.observe(img));
      // Add performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          // Send performance data to analytics instead of console logging
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_load_time', {
              value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
              custom_parameter: 'performance_optimizer'
            });
          }
        });
      }
<<<<<<< HEAD
    };
    optimizePerformance();
    return () => {
      // Cleanup if needed
    };
  }, []);
  return <>{children}</>;
=======

    }

  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;

=======
import React, { useEffect } from 'react';
=======
import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f

interface PerformanceOptimizerProps {
  children: React.ReactNode;
=======
import React, { useEffect, useState } from 'react'

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
<<<<<<< HEAD
    // Performance optimization logic
=======
import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
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

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Optimize images
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
<<<<<<< HEAD
      });
    };

    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }
    };

    optimizeImages();
    optimizeAnimations();
  }, []);

  return <>{children}</>;
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
};
export default PerformanceOptimizer;
=======
    // Initial optimization
    optimizeImages();
    
    // Re-optimize on route changes
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [optimizeImages]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
  const optimizeMemory = useCallback(() => {if ('memory' in performance) {
  const runOptimizations = useCallback(async () => {setIsOptimizing(true);
    const newOptimizations: string[] = [],
    // Optimize images;
  return(<div className="performance-optimizer">)</div>
      {children}{/* Performance Status Indicator (only in development) */}
      {process.env['NODE_ENV'] === 'development' && (
  );

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true;}) => {useEffect(() => {
    // Preload critical resources;
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts;
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload),

      // Preload critical images;
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ]

<<<<<<< HEAD
      criticalImages.forEach(src => {)
    // Intersection Observer for lazy loading;
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {)
          if (entry.isIntersecting) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
=======
      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'image'
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous'
        }
        document.head.appendChild(link)
      })
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      images.forEach(img => {
        const imageElement = img as HTMLImageElement
        if (imageElement.dataset['src']) {
          imageElement['src'] = imageElement.dataset['src']
          imageElement.removeAttribute('data-src')
        }
      })
    }

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa

        // Add error handling
        img.addEventListener('error', () => {
          img['src'] = '/placeholder-image.jpg';
        });
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();

    // Re-run optimizations on DOM changes
    const observer = new MutationObserver(() => {
      optimizeImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
