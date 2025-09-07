<<<<<<< HEAD
<<<<<<< HEAD
// Performance optimizations for Zion Tech Group;
const performanceOptimizations = {}
  // Lazy load images;
  "lazyLoadImages": () => {"
  const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {}
  entries.forEach(entry => {}
  if (entry.isIntersecting) {}
  const img = entry.target;
          img.src = img.dataset.src;"
=======
// Performance optimizations for Zion Tech Group;
const performanceOptimizations = {
  // Lazy load images;
  "lazyLoadImages": () => {
  const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  const img = entry.target;
          img.src = img.dataset.src;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          img.removeAttribute("data-src");
          imageObserver.unobserve(img)}
      })});
    images.forEach(img => imageObserver.observe(img))},
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/public/performance.js
  // Preload critical resources;
  "preloadCriticalResources": () => {
  const criticalResources = ["/fonts/inter && inter.woff2",
      "/css/critical && critical.css"];
    criticalResources && criticalResources.forEach(resource => {
  const link = document && document.createElement("link");
      link && link.rel = "preload";
      link && link.href = resource;
      link && link.as = resource && resource.endsWith(".css") ? "style" : "font";
      document && document.head.appendChild(link)})},

=======
=======
  const images = document.querySelectorAll ("img[data - src]");
    const image_observer = new IntersectionObserver ((entries) => {
  entries.for_each (entry => {
  // Check condition
if ( {) {
  $2
}
  const img = entry.target;
          img.src = img.dataset.src;
          img.remove_attribute ("data - src");
          image_observer.unobserve (img)}
      })});
    images.for_each (img => image_observer.observe (img))},
  // Preload critical resources;
  "preloadCriticalResources": () => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const critical_resources = ["/fonts / inter.woff2",
      "/css / critical.css"];
    critical_resources.for_each (resource => {
  const link = document.create_element ("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.ends_with (".css") ? "style" : "font";
      document.head.append_child (link)})},
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // Preload critical resources;
  "preloadCriticalResources": () => {
  const criticalResources = ["/fonts/inter.woff2",
      "/css/critical.css"];
    criticalResources.forEach(resource => {
  const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.endsWith(".css") ? "style" : "font";
      document.head.appendChild(link)})},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Optimize scroll performance;
  "optimizeScroll": () => {
  let ticking = false;
    const handleScroll = () => {
  if (!ticking) {
  requestAnimationFrame(() => {
  // Scroll handling logic here;
          ticking = false});
        ticking = true}
<<<<<<< HEAD
<<<<<<< HEAD
    }
    window.addEventListener("scroll", handleScroll, { "passive": true })}
  // Initialize all optimizations;
  "init": () => {
=======
  // Preload critical resources;"
  "preloadCriticalResources": () => {"
  const criticalResources = ["/fonts/inter.woff2","
      "/css/critical.css"];
    criticalResources.forEach(resource => {"
  const link = document.createElement("link");"
      link.rel = "preload";
      link.href = resource;"
      link.as = resource.endsWith(".css") ? "style" : "font";
      document.head.appendChild(link)})},
  // Optimize scroll performance;"
  "optimizeScroll": () => {}
  let ticking = false;
    const handleScroll = () => {}
  if (!ticking) {}
  requestAnimationFrame(() => {}
  // Scroll handling logic here;
          ticking = false});
        ticking = true}
    };"
    window.addEventListener("scroll", handleScroll, { "passive": true })},
  // Initialize all optimizations;"
  "init": () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:public/performance.js
  this.lazyLoadImages();
    this.preloadCriticalResources();
    this.optimizeScroll()}
}
// Performance utility
export const Performance = () => {
  // Implementation here
  return null;
};
<<<<<<< HEAD:backup-problematic-files/public/performance.js
:backup-problematic-files/public/performance.js
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    };
    window.addEventListener("scroll", handleScroll, { "passive": true })},
  // Initialize all optimizations;
  "init": () => {
  this.lazyLoadImages();
    this.preloadCriticalResources();
    this.optimizeScroll()}
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Auto-initialize when DOM is ready;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", performanceOptimizations.init)} else {
  performanceOptimizations.init()}
<<<<<<< HEAD
<<<<<<< HEAD
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2",; "/css/critical.css"; ]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},; optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false;,}); ticking = true;,} }; ; window.addEventListener("scroll",handleScroll,{ passive: 'true' })},; init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
<<<<<<<< HEAD:backup-problematic-files/public/performance.js
<<<<<<< HEAD:backup-problematic-files/public/performance.js
<<<<<<< HEAD:backup-problematic-files/public/performance.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<<< HEAD:public/performance.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:public/performance.js
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
=======
<<<<<<< HEAD
<<<<<<< HEAD
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:public/performance.js
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
<<<<<<< HEAD:backup-problematic-files/public/performance.js
=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:public/performance.js
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD:backup-problematic-files/public/performance.js
=======
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:public/performance.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2",; "/css/critical.css"; ]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},; optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false;,}); ticking = true;,} }; ; window.addEventListener("scroll",handleScroll,{ passive: 'true' })},; init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
<<<<<<< HEAD
<<<<<<< HEAD
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
<<<<<<<< HEAD:backup-problematic-files/public/performance.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:public/performance.js
========
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:public/performance.js
=======
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))}; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2"; "/css/critical.css"; ]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})}; optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false;,}); ticking = true;,} }; window.addEventListener("scroll",handleScroll,{ passive: 'true' })}; init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Auto-initialize when DOM is ready;"
if (document.readyState === "loading") {"
  document.addEventListener("DOMContentLoaded", performanceOptimizations.init)} else {}
  performanceOptimizations.init()}"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2",; "/css/critical.css"; ]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},; optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false;,}); ticking = true;,} }; ; window.addEventListener("scroll",handleScroll,{ passive: 'true' })},; init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
<



"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}



"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:public/performance.js
=======
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
  const critical_resources = ["/fonts / inter.woff2","]"
      "/css / critical.css"];"
    critical_resources.for_each (resource => {)"
  const link = document.create_element ("link");""
      link.rel = "preload";"
      link.href = resource;"
      link.as = resource.ends_with (".css") ? "style" : "font";"
      document.head.append_child (link)})},
  // Optimize scroll performance;"
  "optimize_scroll": () => {"
  let ticking = false;
    const handle_scroll = () =>: any {
  // TODO: Implement
}
  // Check condition;
if ( {) {
  $2;
  requestAnimationFrame (() => {
  // Scroll handling logic here;
          ticking = false});
        ticking = true}
// Auto-initialize when DOM is ready;"
if (document.readyState === "loading") {""
  document.addEventListener("DOMContentLoaded", performanceOptimizations.init)} else {"
  // TODO: Implement
  performanceOptimizations.init()}"
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}""
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))}; preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2"; "/css/critical.css"; ]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})}; optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false;,}); ticking = true;,} }; window.addEventListener("scroll",handleScroll,{ passive: 'true' })}; init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}""
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
