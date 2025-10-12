const fs = require('fs');
const path = require('path');

const optimizePerformance = () => {
  console.log('Starting performance optimization...');
  
  // Create performance monitoring script
  const performanceScript = `
// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
  
  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
  });
}
`;

  // Write performance script to dist directory
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  const performancePath = path.join(distDir, 'performance.js');
  fs.writeFileSync(performancePath, performanceScript);
  console.log('Performance monitoring script created at:', performancePath);
  
  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  const robotsPath = path.join(distDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('Robots.txt created at:', robotsPath);
  
  console.log('Performance optimization completed successfully!');
};

optimizePerformance();