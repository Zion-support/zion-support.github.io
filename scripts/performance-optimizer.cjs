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

// Web Vitals
function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log('Web Vital:', metric.name, metric.value);
}

// LCP
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    sendToAnalytics({ name: 'LCP', value: entry.startTime });
  }
}).observe({ entryTypes: ['largest-contentful-paint'] });

// FID
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    sendToAnalytics({ name: 'FID', value: entry.processingStart - entry.startTime });
  }
}).observe({ entryTypes: ['first-input'] });

// CLS
let clsValue = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      clsValue += entry.value;
      sendToAnalytics({ name: 'CLS', value: clsValue });
    }
  }
}).observe({ entryTypes: ['layout-shift'] });
`;

  // Write performance script to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  const performancePath = path.join(publicDir, 'performance.js');
  fs.writeFileSync(performancePath, performanceScript);
  
  console.log('Performance monitoring script created');
  console.log('Performance optimization completed');
};

optimizePerformance();
