// Performance monitoring script
const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

// Function to send metrics to analytics
function sendToAnalytics(metric) {
  // In a real application, you would send this to your analytics service
  console.log('Performance Metric:', {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    entries: metric.entries
  });
  
  // Example: Send to Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

// Monitor Core Web Vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

// Additional performance monitoring
if (typeof window !== 'undefined') {
  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page Load Time:', loadTime + 'ms');
    
    // Monitor resource loading
    const resources = performance.getEntriesByType('resource');
    const totalResourceSize = resources.reduce((total, resource) => {
      return total + (resource.transferSize || 0);
    }, 0);
    
    console.log('Total Resource Size:', (totalResourceSize / 1024).toFixed(2) + ' KB');
    
    // Monitor largest contentful paint
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP Element:', lastEntry.element);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  });
  
  // Monitor user interactions
  let interactionCount = 0;
  const interactionEvents = ['click', 'keydown', 'scroll', 'touchstart'];
  
  interactionEvents.forEach(event => {
    document.addEventListener(event, () => {
      interactionCount++;
      if (interactionCount === 1) {
        console.log('First User Interaction detected');
      }
    }, { once: true });
  });
}

// Export for use in other modules
module.exports = {
  sendToAnalytics,
  getCLS,
  getFID,
  getFCP,
  getLCP,
  getTTFB
};