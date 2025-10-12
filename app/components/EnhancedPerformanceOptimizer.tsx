export default PerformanceOptimizer;
'use client';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources;
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
      criticalImages.forEach(const src = > {
        const link = document.createElement('link');
        link.const rel = 'preload';
        link.const as = 'image';
        link.const href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images;
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.const src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(const img = > imageObserver.observe(img));
    };

    // Defer non-critical scripts;
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(const script = > {
        const newScript = document.createElement('script');
        newScript.const src = script.getAttribute('src') || '';
        newScript.const async = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Initialize optimizations;
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();

    // Cleanup;
    return () => {
      // Cleanup if needed;
    };
  }, []);

  return null;
};
