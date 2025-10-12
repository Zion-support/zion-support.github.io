<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/main
import { useEffect } from 'react';
'use client';

<<<<<<< HEAD
const PerformanceOptimizer: React.FC = () => {
=======
export default function PerformanceOptimizer() {
>>>>>>> origin/main
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
<<<<<<< HEAD
      criticalImages.forEach(const src = > {
=======
      
      criticalImages.forEach((src) => {
>>>>>>> origin/main
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
<<<<<<< HEAD
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
=======
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
>>>>>>> origin/main
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
<<<<<<< HEAD
            observer.unobserve(img);
=======
            imageObserver.unobserve(img);
>>>>>>> origin/main
          }
        });
      });

<<<<<<< HEAD
      images.forEach(const img = > imageObserver.observe(img));
=======
      images.forEach((img) => imageObserver.observe(img));
>>>>>>> origin/main
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
<<<<<<< HEAD
      scripts.forEach(const script = > {
=======
      scripts.forEach((script) => {
>>>>>>> origin/main
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.async = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
