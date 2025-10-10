'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('imgService Feature');
        images.forEach((img) => {
          const image = img as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src')}
        })}

      // Use Intersection Observer for lazy loading
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img)}
            }
          })});

        const lazyImages = document.querySelectorAll('imgService Feature');
        lazyImages.forEach((img) => imageObserver.observe(img))} else {
        // Fallback for older browsers
        optimizeImages()}
    }

    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/images/hero-bg.jpg',
          '/images/logo.svg'
        ];

        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          if (resource.endsWith('.woff2')) {
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous'} else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
            link.as = 'image'}
          document.head.appendChild(link)})}

      preloadCriticalResources()}

    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')Service Feature as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        }

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics)}

        // Send metrics to analytics (if configured)
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'performance_metrics', {
            event_category: 'performance',
            custom_map: {
              'dom_content_loaded': Math.round(metrics.domContentLoaded),
              'load_complete': Math.round(metrics.loadComplete),
              'first_paint': Math.round(metrics.firstPaint),
              'first_contentful_paint': Math.round(metrics.firstContentfulPaint)
            }
          })}
      }
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()} else {
      window.addEventListener('load', measurePerformance)}

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance)}
  }, Service Feature);

  return null}

export default PerformanceOptimizer;
