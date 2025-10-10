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
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0
  });

  const [optimizations, setOptimizations] = useState<string[]>([]);

  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    }
  }, [enablePreloading]);

  useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading attribute for native lazy loading
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding attribute for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Add error handling
        img.addEventListener('error', () => {
          img.src = '/images/placeholder.jpg';
        });
      });

      setOptimizations(prev => [...prev, 'Image optimization enabled']);
    }
  }, [enableImageOptimization]);

  useEffect(() => {
    // Lazy loading for images
    if (enableLazyLoading && typeof window !== 'undefined') {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));

      setOptimizations(prev => [...prev, 'Lazy loading enabled']);
    }
  }, [enableLazyLoading]);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        setPerformanceMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint: 0, // Would need to be measured with LCP API
          cumulativeLayoutShift: 0 // Would need to be measured with CLS API
        });
      };

      // Measure performance after page load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    }
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { loadTime, firstContentfulPaint } = performanceMetrics;
    
    if (loadTime < 1000 && firstContentfulPaint < 1500) {
      return { score: 95, label: 'Excellent', color: 'text-green-400' };
    } else if (loadTime < 2000 && firstContentfulPaint < 2500) {
      return { score: 80, label: 'Good', color: 'text-yellow-400' };
    } else if (loadTime < 3000 && firstContentfulPaint < 4000) {
      return { score: 60, label: 'Needs Improvement', color: 'text-orange-400' };
    } else {
      return { score: 40, label: 'Poor', color: 'text-red-400' };
    }
  }, [performanceMetrics]);

  const performanceScore = getPerformanceScore();

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Settings className="w-5 h-5 text-cyan-400" />
        <h3 className="text-white font-semibold">Performance Monitor</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Performance Score</span>
          <span className={`font-semibold ${performanceScore.color}`}>
            {performanceScore.score}/100
          </span>
        </div>
        
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${performanceScore.score}%` }}
          />
        </div>
        
        <div className="text-xs text-gray-400">
          {performanceScore.label}
        </div>
        
        {performanceMetrics.loadTime > 0 && (
          <div className="space-y-1 text-xs text-gray-300">
            <div>Load Time: {performanceMetrics.loadTime.toFixed(0)}ms</div>
            <div>FCP: {performanceMetrics.firstContentfulPaint.toFixed(0)}ms</div>
          </div>
        )}
        
        {optimizations.length > 0 && (
          <div className="space-y-1">
            <div className="text-xs text-gray-400">Active Optimizations:</div>
            {optimizations.map((opt, index) => (
              <div key={index} className="flex items-center gap-1 text-xs text-green-400">
                <CheckCircle className="w-3 h-3" />
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceOptimizer;