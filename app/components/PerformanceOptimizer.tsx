import React, { useEffect } from 'react';
interface PerformanceOptimizerProps {
  children: React.ReactNode;
'use client';
import React from 'react';
'use client';

import React, { useEffect, useState, useCallback } from 'react';

import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {}
  enableImageOptimization?: boolean;

  enableLazyLoading?: boolean;

  enablePreloading?: boolean;

  enableCodeSplitting?: boolean;

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
    };
    optimizePerformance();
    return () => {
      // Cleanup if needed
    };
  }, []);
  return <>{children}</>;
    // Performance optimization logic
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
};
export default PerformanceOptimizer;
      criticalImages.forEach(src => {)
    // Intersection Observer for lazy loading;
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {)
          if (entry.isIntersecting) {
