'use client';
import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  onOptimizationComplete?: () => void;
}

export default function PerformanceOptimizer({ onOptimizationComplete }: PerformanceOptimizerProps) {
  useEffect(() => {
    const optimizePerformance = () => {
      // Image optimization
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // Font optimization
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach((link) => {
        link.setAttribute('crossorigin', 'anonymous');
      });

      // Resource preloading
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });

      if (onOptimizationComplete) {
        onOptimizationComplete();
      }
    };

    // Run optimizations after component mounts
    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
  }, [onOptimizationComplete]);

  return null; // This component doesn't render anything
}
