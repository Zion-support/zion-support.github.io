// Performance enhancer utilities

export function performanceEnhancer() {
  return {
    preloadCriticalResources: () => {
      const criticalResources = [
        '/app/styles/globals.css',
        '/app/styles/futuristic.css'
      ];
      criticalResources.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    },
    optimizeImages: () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    }
  };
}
