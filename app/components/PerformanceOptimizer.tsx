import React, { useEffect, useCallback, useMemo } from 'react';
import { reportWebVitals } from 'web-vitals';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Performance monitoring
  useEffect(() => {
    // Report Core Web Vitals
    reportWebVitals((metric) => {
      // Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: metric.name,
          metric_value: Math.round(metric.value),
          metric_delta: Math.round(metric.delta),
          metric_id: metric.id,
          metric_rating: metric.rating
        });
      }
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    });

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.svg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  // Memoize expensive computations
  const memoizedChildren = useMemo(() => children, [children]);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Update scroll position for animations
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
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
      // Update layout calculations
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateLayout);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div className="performance-optimized">
      {memoizedChildren}
      
      {/* Performance monitoring overlay in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-white p-2 rounded text-xs font-mono z-50">
          <div>Performance Optimized</div>
          <div>Scroll: {typeof window !== 'undefined' ? Math.round(window.scrollY) : 0}px</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;