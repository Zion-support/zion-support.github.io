export const preloadOptimizer = {
  preload: (href: string, as: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  },
  
  preloadImage: (src: string) => {
    const img = new Image();
    img.src = src;
  },
  
  preloadScript: function(src: string) {
    this.preload(src, 'script');
  },
  
  preloadStyle: function(href: string) {
    this.preload(href, 'style');
  }
};