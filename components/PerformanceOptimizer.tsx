import { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/og-image.jpg',
        '/favicon.svg'
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
    // Optimize images with lazy loading
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
    };

    // Service Worker registration
    const registerServiceWorker = async () => {
      if (typeof window !== 'undefined' && 'serviceWorker' in window.navigator && process.env.NODE_ENV === 'production') {
        try {
          const registration = await window.navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (registrationError) {
          console.log('SW registration failed: ', registrationError);
        }
      }
    };

      images.forEach((img) => imageObserver.observe(img));
    }
    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();

    // Performance monitoring
    const reportWebVitals = (metric: { name: string; value: number; delta: number }) => {
      if (process.env.NODE_ENV === 'production') {
        // Send to analytics
        console.log(metric);
      }
    };

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      });
    }
  }, []);

  return <>{children}</>;
}

// Web Vitals monitoring
export const reportWebVitals = (metric: { name: string; value: number; delta: number }) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    // eslint-disable-next-line no-console
    console.log('Web Vital:', metric);
  }