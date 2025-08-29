import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface BundleInfo {
  name: string;
  size: number;
  chunks: string[];
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      '/services',
      '/ai-services',
      '/contact',
      '/about',
      '/pricing-guide',
      '/revolutionary-services-2030'
    ];

    // Preload critical routes
    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/images/hero-ai-solutions.jpg',
      '/images/hero-it-services.jpg',
      '/images/hero-green-it.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  // Enhanced Core Web Vitals monitoring
  const monitorCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const fcp = entry.startTime;
            console.log('FCP:', fcp);
            
            // Send to analytics
            if (fcp < 1800) {
              console.log('✅ FCP is excellent');
            } else if (fcp < 3000) {
              console.log('⚠️ FCP needs improvement');
            } else {
              console.log('❌ FCP is poor');
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
          console.log('LCP:', lcp);
          
          if (lcp < 2500) {
            console.log('✅ LCP is excellent');
          } else if (lcp < 4000) {
            console.log('⚠️ LCP needs improvement');
          } else {
            console.log('❌ LCP is poor');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
          
          if (fid < 100) {
            console.log('✅ FID is excellent');
          } else if (fid < 300) {
            console.log('⚠️ FID needs improvement');
          } else {
            console.log('❌ FID is poor');
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        console.log('CLS:', clsValue);
        
        if (clsValue < 0.1) {
          console.log('✅ CLS is excellent');
        } else if (clsValue < 0.25) {
          console.log('⚠️ CLS needs improvement');
        } else {
          console.log('❌ CLS is poor');
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            const ttfb = entry.responseStart - entry.requestStart;
            console.log('TTFB:', ttfb);
            
            if (ttfb < 800) {
              console.log('✅ TTFB is excellent');
            } else if (ttfb < 1800) {
              console.log('⚠️ TTFB needs improvement');
            } else {
              console.log('❌ TTFB is poor');
            }
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
    }

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for non-critical images
      if (!img.classList.contains('critical')) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      img.decoding = 'async';
      
      // Add error handling
      img.onerror = () => {
        img.style.display = 'none';
        console.warn(`Failed to load image: ${img.src}`);
      };
    });
  };

  const preloadCriticalResources = () => {
    const criticalPaths = [
      '/fonts/orbitron-v28-latin-700.woff2',
      '/css/critical.css'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = path.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  };

  const optimizeFonts = () => {
    // Font display optimization
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('font-display', 'swap');
    });
  };

  const startOptimization = async () => {
    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        preloadCriticalResources(),
        optimizeFonts()
      ]);

      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Performance optimization completed');
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  // Auto-optimize on mount
  useEffect(() => {
    startOptimization();
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical third-party origins
    const criticalOrigins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalOrigins.forEach(origin => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      document.head.appendChild(link);
    });
  }, []);

  // Bundle size optimization
  const optimizeBundleSize = useCallback(() => {
    // Monitor bundle size
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'resource') {
            const size = entry.transferSize || entry.decodedBodySize;
            if (size > 50000) { // 50KB threshold
              console.warn(`Large resource detected: ${entry.name} (${Math.round(size / 1024)}KB)`);
            }
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    }
  }, []);

  // Memory leak prevention
  const preventMemoryLeaks = useCallback(() => {
    // Clean up event listeners on route change
    return () => {
      // This will be called when component unmounts
      const observers = PerformanceObserver;
      if (observers) {
        observers.disconnect && observers.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    monitorCoreWebVitals();
    optimizeImages();
    optimizeResourceHints();
    optimizeBundleSize();
    
    return preventMemoryLeaks();
  }, [preloadCriticalResources, monitorCoreWebVitals, optimizeImages, optimizeResourceHints, optimizeBundleSize, preventMemoryLeaks]);

  // Route-based optimization
  useEffect(() => {
    // Optimize for specific routes
    if (location.pathname === '/') {
      // Homepage optimizations
      const heroImages = document.querySelectorAll('.hero-image');
      heroImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.loading = 'eager';
          img.classList.add('critical');
        }
      });
    }

    if (location.pathname.startsWith('/services/')) {
      // Service page optimizations
      const serviceImages = document.querySelectorAll('.service-image');
      serviceImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.loading = 'lazy';
        }
      });
    }
  }, [location.pathname]);

  return null;
}
