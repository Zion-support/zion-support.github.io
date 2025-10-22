<<<<<<< HEAD
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
=======
// performance Enhancer
export const performanceenhancer = {
  // Utility functions will be implemented here
  init: () => {
    console.log('performance Enhancer initialized');
  }
};

export default performanceenhancer;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
