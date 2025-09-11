>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    images && images.forEach(img => imageObserver && imageObserver.observe(img))},
  // Preload critical resources;
  "preloadCriticalResources": () => {
  const criticalResources = ["/fonts/inter.woff2",
      "/css/critical.css"];
    criticalResources.forEach(resource => {
  const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.ends_with (".css") ? "style" : "font";
      document.head.append_child (link)})},
  // Optimize scroll performance;
  "optimizeScroll": () => {
  let ticking = false;
    const handleScroll = () => {
  if (!ticking) {
  requestAnimationFrame(() => {
  // Scroll handling logic here;
          ticking = false});
        ticking = true}
// Performance utility
export const Performance = () => {
  // Implementation here
  return null;
};
// Auto-initialize when DOM is ready;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", performanceOptimizations.init)} else {
  performanceOptimizations.init()}
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}
const performanceOptimizations = { lazyLoadImages: () => { const images = document.querySelectorAll("img[data-src]"); const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.removeAttribute("data-src"); imageObserver.unobserve(img)} })}); ; images.forEach(img => imageObserver.observe(img))},preloadCriticalResources: () => { const criticalResources = [ "/fonts/inter.woff2","/css/critical.css"]; ; criticalResources.forEach(resource => { const link = document.createElement("link"); link.rel = "preload"; link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font"; document.head.appendChild(link)})},optimizeScroll: () => { let ticking = false; const handleScroll = () => { if (!ticking) { requestAnimationFrame(() => { ticking = false,}); ticking = true,} }; ; window.addEventListener("scroll",handleScroll,{ passive: true })},init: () => { this.lazyLoadImages(); this.preloadCriticalResources(); this.optimizeScroll()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",performanceOptimizations.init)} else { performanceOptimizations.init()}



=======    }
    window.addEventListener ("scroll", handle_scroll, { "passive": true })},
  // Initialize all optimizations;
  "init": () => {
  this.lazyLoadImages ();
    this.preloadCriticalResources ();
    this.optimize_scroll ()}
}
// Auto - initialize when DOM is ready;
// Check condition
if ( {) {
  $2
}
  document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else {
  performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]"); const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"; ]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false) {
  $2
}, }); ticking = true;, } } ; window.addEventListener ("scroll", handle_scroll, { passive: 'true' })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]")) {
  $2
} const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false, })) {
  $2
} ticking = true, } } ; window.addEventListener ("scroll", handle_scroll, { passive: true })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]")) {
  $2
} const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false, })) {
  $2
} ticking = true, } } ; window.addEventListener ("scroll", handle_scroll, { passive: true })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]")) {
  $2
} const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false, })) {
  $2
} ticking = true, } } ; window.addEventListener ("scroll", handle_scroll, { passive: true })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]")) {
  $2
} const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false, })) {
  $2
} ticking = true, } } ; window.addEventListener ("scroll", handle_scroll, { passive: true })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]")) {
  $2
} const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false, })) {
  $2
} ticking = true, } } ; window.addEventListener ("scroll", handle_scroll, { passive: true })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
const performance_optimizations = { lazyLoadImages: () => { const images = document.querySelectorAll ("img[data - src]")) {
  $2
} const image_observer = new IntersectionObserver ((entries) => { entries.for_each (entry => { // Check condition
if ( { const img = entry.target) {
  $2
} img.src = img.dataset.src; img.remove_attribute ("data - src"); image_observer.unobserve (img)} })}); ; images.for_each (img => image_observer.observe (img))}, preloadCriticalResources: () => { const critical_resources = [ "/fonts / inter.woff2", "/css / critical.css"]; ; critical_resources.for_each (resource => { const link = document.create_element ("link"); link.rel = "preload"; link.href = resource; link.as = resource.ends_with (".css") ? "style" : "font"; document.head.append_child (link)})}, optimize_scroll: () => { let ticking = false; const handle_scroll = () =>: any { if ( { requestAnimationFrame (() => { ticking = false, })) {
  $2
} ticking = true, } } ; window.addEventListener ("scroll", handle_scroll, { passive: true })}, init: () => { this.lazyLoadImages (); this.preloadCriticalResources (); this.optimize_scroll ()} } ; if ( { document.addEventListener ("DOMContentLoaded", performance_optimizations.init)} else { performance_optimizations.init ()}
) {
  $2
}
origin/main
==============

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
