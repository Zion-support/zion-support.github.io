import React, { useEffect } from 'react';

const PerformanceEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const enhancePerformance = () => {
      // Lazy load images
      const lazyLoadImages = () => {
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

      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalResources = [
          { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
          { href: '/css/critical.css', as: 'style' }
        ];

        criticalResources.forEach((resource) => {
          if (!document.querySelector(`link[href="${resource.href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            if (resource.type) link.type = resource.type;
            if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
            document.head.appendChild(link);
          }
        });
      };

      // Optimize scroll performance
      const optimizeScrollPerformance = () => {
        let ticking = false;
        
        const updateScrollPosition = () => {
          // Throttled scroll handling
          ticking = false;
        };

        const requestTick = () => {
          if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
          }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
      };

      // Add service worker for caching
      const registerServiceWorker = () => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
              console.log('Service Worker registration failed:', error);
            });
        }
      };

      // Optimize animations
      const optimizeAnimations = () => {
        // Use will-change for animated elements
        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach((element) => {
          (element as HTMLElement).style.willChange = 'transform, opacity';
        });
      };

      // Run optimizations
      lazyLoadImages();
      preloadCriticalResources();
      optimizeScrollPerformance();
      registerServiceWorker();
      optimizeAnimations();
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhancePerformance);
    } else {
      enhancePerformance();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', enhancePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceEnhancer;
