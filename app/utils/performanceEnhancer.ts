export const performanceEnhancer = {
  preloadImage: (src: string) => {
    const img = new Image();
    img.src = src;
  },
  
  preloadRoute: (route: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    }
  },
  
  optimizeImages: () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    });
  }
};
