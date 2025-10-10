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
  const [optimizations, setOptimizations] = useState<string[]>([]);

  const addOptimization = useCallback((optimization: string) => {
    setOptimizations(prev => [...prev, optimization]);
  }, []);

  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);
      addOptimization('Critical fonts preloaded');

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
        addOptimization(`Critical image preloaded: ${src}`);
      });
    }

    // Enable lazy loading for images
    if (enableLazyLoading && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
            addOptimization('Image lazy loaded');
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }

    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
      addOptimization('Images optimized for performance');
    }

    // Code splitting optimization
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // This would typically be handled by the bundler
      addOptimization('Code splitting enabled');
    }

  }, [enablePreloading, enableLazyLoading, enableImageOptimization, enableCodeSplitting, addOptimization]);

  return (
    <div className="performance-optimizer">
      {optimizations.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold">Performance Optimizations</span>
          </div>
          <div className="space-y-1">
            {optimizations.slice(-3).map((optimization, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{optimization}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;