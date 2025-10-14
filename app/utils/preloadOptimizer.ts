export const preloadOptimizer = {
  preload: (href: string, as: string) => {
    const link = document.createElement(&apos;link&apos;)
    link.rel = &apos;preload&apos;
    link.href = href
    link.as = as
    document.head.appendChild(link)
  },
  
  preloadScript: (src: string) => {
    preloadOptimizer.preload(src, &apos;script&apos;)
  },
  
  preloadStyle: (href: string) => {
    preloadOptimizer.preload(href, &apos;style&apos;)
  }
}