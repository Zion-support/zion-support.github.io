'use client';
import React, { useEffect, useCallback } from 'react';

const AdvancedPerformanceOptimizer: React.FC = () => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/critical.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.png',
      '/images/ai-solutions.jpg'
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
    if (typeof window === 'undefined') return;

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

      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });
  }, []);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  // Implement resource hints
  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add resource hints for external domains
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
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

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }

    // Pause animations when page is not visible
    document.addEventListener('visibilitychange', () => {
      const animations = document.querySelectorAll('[data-animate]');
      animations.forEach(animation => {
        if (document.hidden) {
          animation.style.animationPlayState = 'paused';
        } else {
          animation.style.animationPlayState = 'running';
        }
      });
    });
  }, []);

  // Implement intersection observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Load background images
          const bgImage = element.dataset.bgImage;
          if (bgImage) {
            element.style.backgroundImage = `url(${bgImage})`;
            element.removeAttribute('data-bg-image');
          }

          // Load lazy images
          const img = element.querySelector('img[data-src]') as HTMLImageElement;
          if (img) {
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
          }

          // Add animation classes
          element.classList.add('animate-in');
          
          observer.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    // Observe elements with lazy loading
    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach(element => observer.observe(element));
  }, []);

  // Monitor Core Web Vitals
  const monitorWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      
      console.log('CLS:', clsValue);
      
      if ('gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000)
        });
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }, []);

  // Initialize all optimizations
  useEffect(() => {
    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        preloadCriticalResources();
        optimizeImages();
        optimizeThirdPartyScripts();
        addResourceHints();
        optimizeAnimations();
        setupIntersectionObserver();
        monitorWebVitals();
      });
    } else {
      preloadCriticalResources();
      optimizeImages();
      optimizeThirdPartyScripts();
      addResourceHints();
      optimizeAnimations();
      setupIntersectionObserver();
      monitorWebVitals();
    }
  }, [
    preloadCriticalResources,
    optimizeImages,
    optimizeThirdPartyScripts,
    addResourceHints,
    optimizeAnimations,
    setupIntersectionObserver,
    monitorWebVitals
  ]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceOptimizer;