'use client';
import React, { useEffect, useCallback } from 'react';

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      fontPreload.onload = () => {
        fontPreload.rel = 'stylesheet';
      };
      document.head.appendChild(fontPreload);
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');
    });
  }, []);

  useEffect(() => {
    optimizeImages();
  }, [optimizeImages]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
            LCP: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
            FID: performance.getEntriesByType('first-input')[0]?.processingStart,
            CLS: performance.getEntriesByType('layout-shift')[0]?.value,
            TTFB: navigation.responseStart - navigation.requestStart,
            DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            LoadComplete: navigation.loadEventEnd - navigation.navigationStart
          };

          // Send metrics to analytics (replace with your analytics service)
          console.log('Performance Metrics:', metrics);
        }
      };

      // Measure performance after page load
      window.addEventListener('load', measurePerformance);
      
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;