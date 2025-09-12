<<<<<<< HEAD
// Performance optimizations for Zion Tech Group;
const performanceOptimizations = {
  // Lazy load images;
  lazyLoadImages: () => {
  const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
<<<<<<< HEAD
          imageObserver.unobserve(img)}
      })});

    images.forEach(img => imageObserver.observe(img))},;

  // Preload critical resources;
  preloadCriticalResources: () => {
  const criticalResources = [;
  "/fonts/inter.woff2",;
      "/css/critical.css";
    ];

    criticalResources.forEach(resource => {
=======
          imageObserver.unobserve(img);,
}
      });,
});
    images.forEach(img => imageObserver.observe(img));,
},
  // Preload critical resources;
  preloadCriticalResources: () => {;
  const criticalResources = [ "/fonts/inter.woff2",
      "/css/critical.css" ];
    criticalResources.forEach(resource => {;
>>>>>>> origin/automation-fixes
  const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.endsWith(".css") ? "style" : "font";
<<<<<<< HEAD
      document.head.appendChild(link)})},
=======
      document.head.appendChild(link);,
});,
},
>>>>>>> origin/automation-fixes
  // Optimize scroll performance;
  "optimizeScroll": () => {
  let ticking = false;
    const handleScroll = () => {
  if (!ticking) {
  requestAnimationFrame(() => {
  // Scroll handling logic here;
<<<<<<< HEAD
          ticking = false});
        ticking = true}
    };
    window.addEventListener("scroll", handleScroll, { "passive": true })},
=======
          ticking = false;,
});
        ticking = true;,
}
    };
    window.addEventListener("scroll", handleScroll, { passive: true });,
},
>>>>>>> origin/automation-fixes
  // Initialize all optimizations;
  "init": () => {
  this.lazyLoadImages();
    this.preloadCriticalResources();
<<<<<<< HEAD
    this.optimizeScroll()}
};
// Auto-initialize when DOM is ready;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", performanceOptimizations.init)} else {
  performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2",; "/css/critical.css"; ]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},; optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false;,}); ticking = true;,} }; ; window.addEventListener("scroll",handleScroll,{ passive: 'true' })},; init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
