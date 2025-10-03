
// Performance monitoring script
(function() {
  // Web Vitals monitoring
  function sendToAnalytics(metric) {
    // Send to your analytics service
    console.log('Performance metric:', metric);
  }
  
  // Measure Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  });
})();
