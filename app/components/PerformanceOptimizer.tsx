'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
  enableServiceWorker?: boolean;
  enableCriticalCSS?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enableServiceWorker = true,
  enableCriticalCSS = true,
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        // Add WebP support detection
        if (!img.srcset && img.src) {
          const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          img.srcset = `${img.src} 1x, ${webpSrc} 1x`;
        }
      });
    }

    // Prefetch critical resources
    if (enablePrefetching && typeof window !== 'undefined') {
      const prefetchLinks = [
        '/services',
        '/contact',
        '/ai-solutions',
        '/it-services',
      ];

      prefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    }

    // Service Worker registration
    if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Critical CSS inlining
    if (enableCriticalCSS && typeof window !== 'undefined') {
      const criticalCSS = `
        .cyber-grid { background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px; }
        .neon-text { color: #00ffff; text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff; }
        .cyber-card { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(0, 255, 255, 0.2); border-radius: 16px; backdrop-filter: blur(10px); }
        .cyber-button { background: linear-gradient(135deg, #00ffff, #8b5cf6); border: none; border-radius: 8px; color: white; font-weight: 600; }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          }
          if (entry.entryType === 'paint') {
            console.log(`${entry.name}:`, entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    }
  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePrefetching, enableServiceWorker, enableCriticalCSS]);

  return null;
};

export default PerformanceOptimizer;
