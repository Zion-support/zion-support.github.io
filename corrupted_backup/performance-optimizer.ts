<<<<<<< HEAD
// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};

export const preloadCriticalResources = () => {
  const criticalResources = ['/fonts/main.woff2/css/critical.css'];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
  const loadComponent = componentName => {
    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};
=======
// Performance optimizer utilities;
export const optimizeImages = () => {;
  console.log('Optimizing images...');
};
;
export const lazyLoadComponents = () => {';'
  console.log('Lazy loading components...');
<<<<<<< HEAD:corrupted_backup/performance-optimizer.ts
};''
=======
};'
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> 18e63b48a6084b04170c148e8c05428a2ef9c46b:src/utils/performance-optimizer.ts
