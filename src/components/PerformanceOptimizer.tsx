import React, { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tti: number;
}

interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

export function PerformanceOptimizer() {
  const location = useLocation();
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    tti: 0
  });

  // Enhanced resource preloading with priority hints
  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      { path: '/services', priority: 'high' },
      { path: '/ai-services', priority: 'high' },
      { path: '/contact', priority: 'medium' },
      { path: '/about', priority: 'medium' }
    ];

    criticalPaths.forEach(({ path, priority }) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      link.setAttribute('importance', priority);
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
    ];

    fontLinks.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'style';
      link.setAttribute('importance', 'high');
      document.head.appendChild(link);
    });
  }, []);

  // Enhanced Core Web Vitals monitoring with better thresholds
  const monitorCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const fcp = entry.startTime;
            metricsRef.current.fcp = fcp;
            
            // Enhanced FCP thresholds
            if (fcp < 1000) {
              console.log('🚀 FCP: Excellent (< 1s)');
            } else if (fcp < 1800) {
              console.log('✅ FCP: Good (< 1.8s)');
            } else if (fcp < 3000) {
              console.log('⚠️ FCP: Needs improvement (< 3s)');
            } else {
              console.log('❌ FCP: Poor (> 3s)');
            }
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          metricsRef.current.lcp = lcp;
          
          if (lcp < 1500) {
            console.log('🚀 LCP: Excellent (< 1.5s)');
          } else if (lcp < 2500) {
            console.log('✅ LCP: Good (< 2.5s)');
          } else if (lcp < 4000) {
            console.log('⚠️ LCP: Needs improvement (< 4s)');
          } else {
            console.log('❌ LCP: Poor (> 4s)');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          metricsRef.current.fid = fid;
          
          if (fid < 50) {
            console.log('🚀 FID: Excellent (< 50ms)');
          } else if (fid < 100) {
            console.log('✅ FID: Good (< 100ms)');
          } else if (fid < 300) {
            console.log('⚠️ FID: Needs improvement (< 300ms)');
          } else {
            console.log('❌ FID: Poor (> 300ms)');
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metricsRef.current.cls = clsValue;
        
        if (clsValue < 0.05) {
          console.log('🚀 CLS: Excellent (< 0.05)');
        } else if (clsValue < 0.1) {
          console.log('✅ CLS: Good (< 0.1)');
        } else if (clsValue < 0.25) {
          console.log('⚠️ CLS: Needs improvement (< 0.25)');
        } else {
          console.log('❌ CLS: Poor (> 0.25)');
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to Interactive (TTI) approximation
      const ttiObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'dom-interactive') {
            const tti = entry.startTime;
            metricsRef.current.tti = tti;
            
            if (tti < 2000) {
              console.log('🚀 TTI: Excellent (< 2s)');
            } else if (tti < 3500) {
              console.log('✅ TTI: Good (< 3.5s)');
            } else if (tti < 5000) {
              console.log('⚠️ TTI: Needs improvement (< 5s)');
            } else {
              console.log('❌ TTI: Poor (> 5s)');
            }
          }
        });
      });
      ttiObserver.observe({ entryTypes: ['measure'] });
    }
  }, []);

  // Enhanced image optimization with WebP support detection
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    const supportsWebP = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;

    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }

      // Add fetchpriority for critical images
      if (img.dataset.critical === 'true') {
        img.setAttribute('fetchpriority', 'high');
      }

      // Add WebP support if available
      if (supportsWebP && img.src && !img.src.includes('.webp')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)/i, '.webp');
        img.srcset = `${webpSrc} 1x, ${img.src} 1x`;
      }
    });
  }, []);

  // Enhanced intersection observer with better performance
  const setupIntersectionObserver = useCallback(() => {
    const observerOptions = {
      threshold: [0.1, 0.5, 0.9],
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add data-visible attribute for CSS animations
          entry.target.setAttribute('data-visible', 'true');
          
          // Unobserve after animation to improve performance
          if (entry.intersectionRatio > 0.9) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));
  }, []);

  // Resource timing analysis
  const analyzeResourceTiming = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const slowResources: ResourceTiming[] = [];
        
        entries.forEach((entry: any) => {
          if (entry.duration > 1000) { // Resources taking > 1s
            slowResources.push({
              name: entry.name,
              duration: entry.duration,
              size: entry.transferSize || 0,
              type: entry.initiatorType
            });
          }
        });

        if (slowResources.length > 0) {
          console.log('🐌 Slow resources detected:', slowResources);
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }, []);

  // Memory usage monitoring
  const monitorMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
      
      if (usedMB > totalMB * 0.8) {
        console.log('⚠️ High memory usage detected:', `${usedMB}MB / ${totalMB}MB`);
      }
    }
  }, []);

  // Route change optimization
  useEffect(() => {
    // Preload critical resources on route change
    preloadCriticalResources();
    
    // Optimize images on route change
    setTimeout(optimizeImages, 100);
    
    // Setup intersection observer
    setupIntersectionObserver();
    
    // Analyze resource timing
    analyzeResourceTiming();
    
    // Monitor memory usage
    monitorMemoryUsage();
  }, [location.pathname, preloadCriticalResources, optimizeImages, setupIntersectionObserver, analyzeResourceTiming, monitorMemoryUsage]);

  // Initial setup
  useEffect(() => {
    monitorCoreWebVitals();
    preloadCriticalResources();
    optimizeImages();
    setupIntersectionObserver();
    analyzeResourceTiming();
    monitorMemoryUsage();

    // Add performance monitoring to window for debugging
    (window as any).performanceMetrics = {
      getMetrics: () => metricsRef.current,
      getResourceTiming: () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return {
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.navigationStart,
          resourceCount: performance.getEntriesByType('resource').length
        };
      },
      getPerformanceScore: () => {
        const { fcp, lcp, fid, cls } = metricsRef.current;
        let score = 100;
        
        if (fcp > 3000) score -= 20;
        else if (fcp > 1800) score -= 10;
        
        if (lcp > 4000) score -= 20;
        else if (lcp > 2500) score -= 10;
        
        if (fid > 300) score -= 20;
        else if (fid > 100) score -= 10;
        
        if (cls > 0.25) score -= 20;
        else if (cls > 0.1) score -= 10;
        
        return Math.max(0, score);
      }
    };
  }, [monitorCoreWebVitals, preloadCriticalResources, optimizeImages, setupIntersectionObserver, analyzeResourceTiming, monitorMemoryUsage]);

  return null; // This component doesn't render anything
}
