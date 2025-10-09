export const lazyLoadImages = () => {
  if (typeof window !== 'undefined') {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/globals.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const font = document.createElement('link');
    font.rel = 'preload';
    font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    font.as = 'style';
    document.head.appendChild(font);
  }
};

export const performanceOptimizer = () => {
  if (typeof window !== 'undefined') {
    // Optimize images
    lazyLoadImages();
    
    // Preload critical resources
    preloadCriticalResources();
  }
};

export const performanceMonitor = () => {
  if (typeof window !== 'undefined') {
    // Monitor Core Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

export const collectPerformanceMetrics = () => {
  if (typeof window !== 'undefined') {
    const metrics = {
      loadTime: performance.now(),
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
      userAgent: navigator.userAgent,
      timestamp: Date.now()
    };
    
    return metrics;
  }
  return null;
};