'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const [optimizations, setOptimizations] = useState({
    images: false,
    lazyLoading: false,
    preloading: false,
    codeSplitting: false
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0
  });

  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical CSS
      const cssPreload = document.createElement('link');
      cssPreload.rel = 'preload';
      cssPreload.href = '/styles/critical.css';
      cssPreload.as = 'style';
      document.head.appendChild(cssPreload);

      setOptimizations(prev => ({ ...prev, preloading: true }));
    }

    // Enable image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      // Add WebP support detection and fallback
      const supportsWebP = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      };

      if (supportsWebP()) {
        // Convert images to WebP format
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img: HTMLImageElement) => {
          if (img.dataset.src && img.dataset.src.includes('.jpg')) {
            img.src = img.dataset.src.replace('.jpg', '.webp');
          }
        });
      }

      setOptimizations(prev => ({ ...prev, images: true }));
    }

    // Enable lazy loading
    if (enableLazyLoading && typeof window !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => observer.observe(img));

      setOptimizations(prev => ({ ...prev, lazyLoading: true }));
    }

    // Measure performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
        
        setPerformanceMetrics({
          loadTime: Math.round(loadTime),
          firstContentfulPaint: Math.round(fcp),
          largestContentfulPaint: Math.round(lcp),
          cumulativeLayoutShift: 0 // Would need to be measured with a library like web-vitals
        });
      };

      // Measure after page load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    }

    return () => {
      // Cleanup
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', measurePerformance);
      }
    };
  }, [enableImageOptimization, enableLazyLoading, enablePreloading]);

  const getPerformanceScore = useCallback(() => {
    const { loadTime, firstContentfulPaint, largestContentfulPaint } = performanceMetrics;
    
    let score = 100;
    
    // Deduct points for slow load times
    if (loadTime > 3000) score -= 30;
    else if (loadTime > 2000) score -= 20;
    else if (loadTime > 1000) score -= 10;
    
    // Deduct points for slow FCP
    if (firstContentfulPaint > 2500) score -= 25;
    else if (firstContentfulPaint > 1800) score -= 15;
    else if (firstContentfulPaint > 1000) score -= 10;
    
    // Deduct points for slow LCP
    if (largestContentfulPaint > 4000) score -= 25;
    else if (largestContentfulPaint > 2500) score -= 15;
    else if (largestContentfulPaint > 1200) score -= 10;
    
    return Math.max(0, score);
  }, [performanceMetrics]);

  const performanceScore = getPerformanceScore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Performance Optimizer
        </h3>
        <div className="flex items-center">
          <Zap className="w-5 h-5 text-yellow-500 mr-2" />
          <span className="text-2xl font-bold text-gray-900">{performanceScore}</span>
          <span className="text-sm text-gray-500 ml-1">/100</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Image Optimization</span>
          {optimizations.images ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Lazy Loading</span>
          {optimizations.lazyLoading ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Resource Preloading</span>
          {optimizations.preloading ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Code Splitting</span>
          {optimizations.codeSplitting ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Performance Metrics</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Load Time:</span>
            <span className="ml-2 font-medium">{performanceMetrics.loadTime}ms</span>
          </div>
          <div>
            <span className="text-gray-600">FCP:</span>
            <span className="ml-2 font-medium">{performanceMetrics.firstContentfulPaint}ms</span>
          </div>
          <div>
            <span className="text-gray-600">LCP:</span>
            <span className="ml-2 font-medium">{performanceMetrics.largestContentfulPaint}ms</span>
          </div>
          <div>
            <span className="text-gray-600">CLS:</span>
            <span className="ml-2 font-medium">{performanceMetrics.cumulativeLayoutShift}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;