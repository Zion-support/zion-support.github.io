import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

interface PerformanceOptimizerProps {
  enabled?: boolean;
}

export default function PerformanceOptimizer({ enabled = true }: PerformanceOptimizerProps) {
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const optimizePerformance = () => {
      setIsOptimizing(true);
      
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
      });

      setTimeout(() => setIsOptimizing(false), 1000);
    };

    optimizePerformance();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm z-50">
      {isOptimizing ? 'Optimizing...' : 'Performance optimized'}
    </div>
  );
}