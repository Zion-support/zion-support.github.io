const fs = require('fs');
const path = require('path');

console.log('Running performance optimizations...');

// Create critical CSS file
const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
  color: #ffffff;
  line-height: 1.6;
}

/* Navigation styles */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
}

/* Hero section styles */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 700;
  background: linear-gradient(135deg, #22d3ee, #a855f7, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 4vw, 1.5rem);
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

/* Button styles */
.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #22d3ee, #a855f7);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(34, 211, 238, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(34, 211, 238, 0.4);
}

/* Card styles */
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: rgba(34, 211, 238, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(34, 211, 238, 0.1);
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .btn-primary {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }
}

/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease-out;
}

/* Performance optimizations */
img {
  max-width: 100%;
  height: auto;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

// Write critical CSS to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'critical.css'), criticalCSS);

// Create a simple performance monitoring script
const performanceScript = `
// Performance monitoring
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function measureWebVitals() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      // First Contentful Paint
      const fcp = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcp) {
        console.log('FCP:', fcp.startTime);
      }
      
      // Largest Contentful Paint
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      if (lcp) {
        console.log('LCP:', lcp.startTime);
      }
      
      // First Input Delay
      const fid = performance.getEntriesByType('first-input')[0];
      if (fid) {
        console.log('FID:', fid.processingStart - fid.startTime);
      }
    }
  }
  
  // Run after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', measureWebVitals);
  } else {
    measureWebVitals();
  }
  
  // Image lazy loading
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Initialize lazy loading
  if ('IntersectionObserver' in window) {
    lazyLoadImages();
  }
})();
`;

fs.writeFileSync(path.join(publicDir, 'performance.js'), performanceScript);

console.log('Performance optimizations completed');