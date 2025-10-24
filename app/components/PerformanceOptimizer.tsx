'use client';
import React, { useEffect, useCallback, memo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({ 
  children, 
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true 
}) => {
  // Preload critical resources
  useEffect(() => {
    if (enablePreloading) {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter-var.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const imagePreload = document.createElement('link');
      imagePreload.rel = 'preload';
      imagePreload.href = '/images/hero-bg.webp';
      imagePreload.as = 'image';
      document.head.appendChild(imagePreload);
    }
  }, [enablePreloading]);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const updateScroll = () => {
      // Add scroll-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    if (enableLazyLoading) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, enableLazyLoading]);

  // Resource hints for better performance
  useEffect(() => {
    if (enablePreloading) {
      // Add DNS prefetch for external resources
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      // Add preconnect for critical external resources
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
    }
  }, [enablePreloading]);

  return <>{children}</>;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;
