import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.webp',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Add loading states
    const addLoadingStates = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            lazyObserver.unobserve(entry.target);
          }
        });
      });

      lazyElements.forEach((el) => lazyObserver.observe(el));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    addLoadingStates();

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .lazy {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup observers
      const observers = document.querySelectorAll('[data-observer]');
      observers.forEach((el) => {
        // Remove any custom observers if needed
      });
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;