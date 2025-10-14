export constpreloadOptimizer= {
  preload: (href: string, as: string) => {
    const link= document.create Element('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.append Child(link);
  },
  preloadScript: (src: string) => {
    preload Optimizer.preload(src, 'script');
  },
  preloadStyle: (href: string) => {
    preload Optimizer.preload(href, 'style');
  }
};