<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
<<<<<<< HEAD
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/logo.png',
        '/og-image.png'
      ];
=======
  const location = useLocation();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/src/styles/futuristic.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

<<<<<<< HEAD
    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
=======
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    fontPreload.as = 'style';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // Preload critical images
    const criticalImages = [
      '/og-image.jpg',
      '/logo.png',
      '/hero-bg.jpg'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Optimize images on scroll
  const optimizeImagesOnScroll = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Debounce scroll events
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Update scroll-dependent elements
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Update progress bar if exists
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        const progress = (scrollY / (documentHeight - windowHeight)) * 100;
        (progressBar as HTMLElement).style.width = `${Math.min(progress, 100)}%`;
      }
      
      ticking = false;
    };

<<<<<<< HEAD
    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', '');
      });
    };

    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();

    // Cleanup
    return () => {
      // Cleanup if needed
=======
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    const debouncedScroll = debounce(requestTick, 16); // ~60fps
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [debounce]);

  // Optimize resize performance
  const optimizeResizePerformance = useCallback(() => {
    const handleResize = debounce(() => {
      // Update responsive elements
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 250);

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [debounce]);

  // Prefetch next page resources
  const prefetchNextPage = useCallback(() => {
    const links = document.querySelectorAll('a[href^="/"]');
    const prefetchedPages = new Set();

    const prefetchPage = (url: string) => {
      if (prefetchedPages.has(url)) return;
      
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
      prefetchedPages.add(url);
    };

    const handleLinkHover = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.startsWith(window.location.origin)) {
        const path = new URL(target.href).pathname;
        prefetchPage(path);
      }
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover, { passive: true });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
      });
    };
  }, []);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }

    // Pause animations when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
      } else {
        document.body.style.animationPlayState = 'running';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up unused event listeners periodically
    const cleanup = () => {
      // Remove orphaned event listeners
      const elements = document.querySelectorAll('[data-cleanup]');
      elements.forEach(element => {
        if (!document.contains(element)) {
          element.remove();
        }
      });
    };

    const interval = setInterval(cleanup, 30000); // Every 30 seconds
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Initialize performance optimizations
  useEffect(() => {
    preloadCriticalResources();
    optimizeImagesOnScroll();
    const cleanupScroll = optimizeScrollPerformance();
    const cleanupResize = optimizeResizePerformance();
    const cleanupPrefetch = prefetchNextPage();
    const cleanupAnimations = optimizeAnimations();
    const cleanupMemory = optimizeMemory();

    return () => {
      cleanupScroll();
      cleanupResize();
      cleanupPrefetch();
      cleanupAnimations();
      cleanupMemory();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
    };
  }, [
    preloadCriticalResources,
    optimizeImagesOnScroll,
    optimizeScrollPerformance,
    optimizeResizePerformance,
    prefetchNextPage,
    optimizeAnimations,
    optimizeMemory
  ]);

<<<<<<< HEAD
  return <>{children}</>;
};

export default PerformanceOptimizer;
=======
  // Re-optimize on route change
  useEffect(() => {
    // Re-run image optimization on route change
    setTimeout(optimizeImagesOnScroll, 100);
  }, [location.pathname, optimizeImagesOnScroll]);

  return (
    <>
      {children}
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div className="scroll-progress h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-150 ease-out" style={{ width: '0%' }} />
      </div>
    </>
  );
};

export default PerformanceOptimizer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
