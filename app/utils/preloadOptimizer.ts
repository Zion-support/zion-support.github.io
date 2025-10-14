export const preload Optimizer = {
  preload: (href: string, as: string) => {
    const link = document.create Element('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.append Child(link);
  },
  preload Script: (src: string) => {
    preload Optimizer.preload(src, 'script');
  },
  preload Style: (href: string) => {
    preload Optimizer.preload(href, 'style');
  }
};