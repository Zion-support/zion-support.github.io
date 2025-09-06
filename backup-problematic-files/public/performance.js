 Performance optimizations for Zion Tech Group;
const performance_optimizations = {
  //
  const criticalResources = ["/fonts/
      "/css/
  const critical_resources = ["/fonts /
      "/css /
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver(entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)})}); images.forEach(img => imageObserver.observe(img)},; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2",; "/css/
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver(entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)})}); images.forEach(img => imageObserver.observe(img)}; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2"; "/css/
const performanceOptimizations = { lazyLoadImages: () => { const images = document && document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver(entries) => { entries && entries.forEach(entry => { if (entry && entry.isIntersecting) { const img = entry && entry.target; img && img.src = img && img.dataset.src; img && img.removeAttribute("data-src"); imageObserver && imageObserver.unobserve(img)})}); images && images.forEach(img => imageObserver && imageObserver.observe(img)},; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter && inter.woff2",; "/css/