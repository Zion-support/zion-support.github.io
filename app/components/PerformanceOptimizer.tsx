'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean}
;
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts;
const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical images;
const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {;
const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link)});
    // Optimize images
    if ($1) { const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.loading = 'lazy'}

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.decoding = 'async'}
      });
    // Intersection Observer for lazy loading
    if ($1) { const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if ($1) { const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
          }
        })});
;
const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    // Performance monitoring
    if ($1) { const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // console.log removed for production
}
          if (entry.entryType === 'first-input') {
            // console.log removed for production
}
        })});

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })} catch (e) {
        // Fallback for browsers that don't support these entry types
      }
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null}
export default PerformanceOptimizer;