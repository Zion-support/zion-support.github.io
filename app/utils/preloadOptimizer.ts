export const preloadOptimizer ={
  preload: (href: string, as: string) => {
    const link = document.createElement('link');
    link.rel='preload';
    link.hre f = href;
    link.a s = as;
    document.head.appendChild(link);
  },
  preloadScript: (src: string) => {
    preloadOptimizer.preload(src,'script');
  },
  preloadStyle: (href: string) => {
    preloadOptimizer.preload(href,'style');
  }
};