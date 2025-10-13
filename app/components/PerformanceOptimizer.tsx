import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enablePreloading?: boolean;
  enablePrefetching?: boolean;
  enableServiceWorker?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enablePreloading = true,
  enablePrefetching = true,
  enableServiceWorker = true
}) => {
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/assets/index-Dq8n7JAm.css';
        criticalCSS.as = 'style';
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);
      };

      preloadCriticalResources();
    }

    // Prefetch next likely pages
    if (enablePrefetching) {
      const prefetchPages = () => {
        const pagesToPrefetch = ['/about', '/services', '/contact'];
        
        pagesToPrefetch.forEach(page => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        });
      };

      // Prefetch after initial load
      setTimeout(prefetchPages, 2000);
    }

    // Register service worker
    if (enableServiceWorker && 'serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      };

      window.addEventListener('load', registerSW);
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    // Cleanup
    return () => {
      // Cleanup any observers or listeners if needed
    };
  }, [enablePreloading, enablePrefetching, enableServiceWorker]);

  return null;
};

export default PerformanceOptimizer;