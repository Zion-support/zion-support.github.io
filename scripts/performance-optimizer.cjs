const fs = require('fs');
const path = require('path');

const optimizePerformance = () => {
  console.log('Starting performance optimization...');
  
  // Create performance monitoring script
  const performanceScript = `
// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
    }
  }
});

performanceObserver.observe({ entryTypes: ['navigation'] });

// Lazy loading for images
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
`;

  // Write performance script to dist
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  const scriptPath = path.join(distDir, 'performance.js');
  fs.writeFileSync(scriptPath, performanceScript);
  
  console.log('Performance optimization completed!');
  console.log('Performance script created at:', scriptPath);
};

optimizePerformance();