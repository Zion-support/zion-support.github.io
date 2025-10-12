const fs = require('fs');
const path = require('path');

console.log('Starting performance optimization...');

// Performance optimization configurations
const performanceConfig = {
  // Image optimization
  imageOptimization: {
    formats: ['webp', 'avif'],
    quality: 85,
    maxWidth: 1920
  },
  
  // Code splitting
  codeSplitting: {
    vendorChunks: ['react', 'react-dom'],
    commonChunks: ['framer-motion', 'lucide-react']
  },
  
  // Caching strategies
  caching: {
    staticAssets: '1y',
    html: '1h',
    api: '5m'
  },
  
  // Compression
  compression: {
    gzip: true,
    brotli: true,
    minify: true
  }
};

// Generate performance optimization script
const performanceScript = `
// Performance optimization script
(function() {
  'use strict';
  
  // Lazy load images
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
  
  // Optimize scroll performance
  function optimizeScroll() {
    let ticking = false;
    
    function updateScrollPosition() {
      // Add scroll-based animations here
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
  }
  
  // Initialize performance optimizations
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        lazyLoadImages();
        preloadCriticalResources();
        optimizeScroll();
      });
    } else {
      lazyLoadImages();
      preloadCriticalResources();
      optimizeScroll();
    }
  }
  
  init();
})();
`;

// Write performance script to dist folder
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'performance.js'), performanceScript);

console.log('Performance optimization completed!');
console.log('Performance script created at: /workspace/dist/performance.js');