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
      console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
    }
    if (entry.entryType === 'paint') {
      console.log(entry.name + ':', entry.startTime, 'ms');
    }
  }
});

performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });

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

  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(path.join(distPath, 'performance.js'), performanceScript);
  console.log('Performance optimization completed!');
};

optimizePerformance();