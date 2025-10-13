const fs = require('fs');
const path = require('path');

// Performance monitoring script
function setupPerformanceMonitoring() {
  console.log('📊 Setting up performance monitoring...');
  
  try {
    // 1. Create performance monitoring script
    createPerformanceMonitoringScript();
    
    // 2. Add Web Vitals tracking
    addWebVitalsTracking();
    
    // 3. Add error tracking
    addErrorTracking();
    
    // 4. Add user interaction tracking
    addUserInteractionTracking();
    
    // 5. Add resource timing tracking
    addResourceTimingTracking();
    
    // 6. Generate performance dashboard
    generatePerformanceDashboard();
    
    console.log('✅ Performance monitoring setup completed successfully!');
  } catch (error) {
    console.error('❌ Performance monitoring setup failed:', error.message);
    process.exit(1);
  }
}

function createPerformanceMonitoringScript() {
  console.log('🔧 Creating performance monitoring script...');
  
  const monitoringScript = `
// Performance Monitoring Script for Zion Tech Group
(function() {
  'use strict';
  
  // Performance monitoring configuration
  const CONFIG = {
    apiEndpoint: '/api/analytics',
    sampleRate: 1.0,
    enableWebVitals: true,
    enableErrorTracking: true,
    enableUserInteraction: true,
    enableResourceTiming: true,
    enableCoreWebVitals: true
  };
  
  // Performance data storage
  let performanceData = {
    webVitals: {},
    errors: [],
    userInteractions: [],
    resourceTimings: [],
    pageLoadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  };
  
  // Initialize performance monitoring
  function init() {
    if (CONFIG.enableWebVitals) {
      initWebVitals();
    }
    
    if (CONFIG.enableErrorTracking) {
      initErrorTracking();
    }
    
    if (CONFIG.enableUserInteraction) {
      initUserInteractionTracking();
    }
    
    if (CONFIG.enableResourceTiming) {
      initResourceTimingTracking();
    }
    
    // Track page load performance
    trackPageLoadPerformance();
    
    // Send data periodically
    setInterval(sendPerformanceData, 30000); // Every 30 seconds
    
    // Send data on page unload
    window.addEventListener('beforeunload', sendPerformanceData);
  }
  
  // Web Vitals tracking
  function initWebVitals() {
    // First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            performanceData.firstContentfulPaint = entry.startTime;
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
    
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        performanceData.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
    
    // First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          performanceData.firstInputDelay = entry.processingStart - entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
    
    // Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        performanceData.cumulativeLayoutShift = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }
  
  // Error tracking
  function initErrorTracking() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      performanceData.errors.push({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error ? event.error.stack : null,
        timestamp: Date.now()
      });
    });
    
    // Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      performanceData.errors.push({
        type: 'promise',
        message: event.reason ? event.reason.toString() : 'Unhandled promise rejection',
        stack: event.reason ? event.reason.stack : null,
        timestamp: Date.now()
      });
    });
    
    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        performanceData.errors.push({
          type: 'resource',
          message: 'Resource loading error',
          filename: event.target.src || event.target.href,
          timestamp: Date.now()
        });
      }
    }, true);
  }
  
  // User interaction tracking
  function initUserInteractionTracking() {
    // Track clicks
    document.addEventListener('click', (event) => {
      performanceData.userInteractions.push({
        type: 'click',
        target: event.target.tagName,
        className: event.target.className,
        id: event.target.id,
        timestamp: Date.now()
      });
    });
    
    // Track form submissions
    document.addEventListener('submit', (event) => {
      performanceData.userInteractions.push({
        type: 'form_submit',
        target: event.target.tagName,
        className: event.target.className,
        id: event.target.id,
        timestamp: Date.now()
      });
    });
    
    // Track scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        performanceData.userInteractions.push({
          type: 'scroll',
          scrollY: window.scrollY,
          scrollX: window.scrollX,
          timestamp: Date.now()
        });
      }, 100);
    });
  }
  
  // Resource timing tracking
  function initResourceTimingTracking() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            performanceData.resourceTimings.push({
              name: entry.name,
              duration: entry.duration,
              size: entry.transferSize,
              type: entry.initiatorType,
              timestamp: Date.now()
            });
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
    }
  }
  
  // Page load performance tracking
  function trackPageLoadPerformance() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        performanceData.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
        performanceData.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      }
      
      // First Paint
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-paint') {
          performanceData.firstPaint = entry.startTime;
        }
      });
    });
  }
  
  // Send performance data
  function sendPerformanceData() {
    if (Object.keys(performanceData).length === 0) return;
    
    const data = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      ...performanceData
    };
    
    // Send to analytics endpoint
    if (navigator.sendBeacon) {
      navigator.sendBeacon(CONFIG.apiEndpoint, JSON.stringify(data));
    } else {
      fetch(CONFIG.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).catch(error => {
        console.error('Failed to send performance data:', error);
      });
    }
    
    // Reset data after sending
    performanceData = {
      webVitals: {},
      errors: [],
      userInteractions: [],
      resourceTimings: [],
      pageLoadTime: 0,
      domContentLoaded: 0,
      firstPaint: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0
    };
  }
  
  // Performance metrics calculation
  function calculatePerformanceScore() {
    const metrics = {
      fcp: performanceData.firstContentfulPaint,
      lcp: performanceData.largestContentfulPaint,
      fid: performanceData.firstInputDelay,
      cls: performanceData.cumulativeLayoutShift
    };
    
    // Calculate scores based on Core Web Vitals thresholds
    const scores = {
      fcp: metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 50 : 0,
      lcp: metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 50 : 0,
      fid: metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 50 : 0,
      cls: metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 50 : 0
    };
    
    return {
      overall: Math.round((scores.fcp + scores.lcp + scores.fid + scores.cls) / 4),
      fcp: scores.fcp,
      lcp: scores.lcp,
      fid: scores.fid,
      cls: scores.cls
    };
  }
  
  // Export for external use
  window.PerformanceMonitor = {
    getData: () => performanceData,
    getScore: calculatePerformanceScore,
    sendData: sendPerformanceData
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`;

  const distPath = path.join(process.cwd(), 'dist');
  const scriptPath = path.join(distPath, 'performance-monitor.js');
  fs.writeFileSync(scriptPath, monitoringScript);
  
  console.log('✅ Performance monitoring script created');
}

function addWebVitalsTracking() {
  console.log('📈 Adding Web Vitals tracking...');
  
  const webVitalsScript = `
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log('Web Vital:', metric);
  
  // Example: Send to Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true
    });
  }
}

// Track all Core Web Vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
`;

  const distPath = path.join(process.cwd(), 'dist');
  const scriptPath = path.join(distPath, 'web-vitals.js');
  fs.writeFileSync(scriptPath, webVitalsScript);
  
  console.log('✅ Web Vitals tracking added');
}

function addErrorTracking() {
  console.log('🚨 Adding error tracking...');
  
  const errorTrackingScript = `
// Error tracking
window.addEventListener('error', (event) => {
  console.error('JavaScript Error:', event.error);
  
  // Send to error tracking service
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      description: event.error.message,
      fatal: false
    });
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  
  // Send to error tracking service
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      description: event.reason.toString(),
      fatal: false
    });
  }
});
`;

  const distPath = path.join(process.cwd(), 'dist');
  const scriptPath = path.join(distPath, 'error-tracking.js');
  fs.writeFileSync(scriptPath, errorTrackingScript);
  
  console.log('✅ Error tracking added');
}

function addUserInteractionTracking() {
  console.log('👆 Adding user interaction tracking...');
  
  const interactionScript = `
// User interaction tracking
document.addEventListener('click', (event) => {
  const target = event.target;
  const data = {
    type: 'click',
    tagName: target.tagName,
    className: target.className,
    id: target.id,
    text: target.textContent?.slice(0, 100),
    timestamp: Date.now()
  };
  
  console.log('User Interaction:', data);
  
  // Send to analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'User Interaction',
      event_label: target.tagName + (target.className ? '.' + target.className : ''),
      value: 1
    });
  }
});

// Track form submissions
document.addEventListener('submit', (event) => {
  const form = event.target;
  const data = {
    type: 'form_submit',
    formId: form.id,
    formClass: form.className,
    timestamp: Date.now()
  };
  
  console.log('Form Submission:', data);
  
  // Send to analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'User Interaction',
      event_label: form.id || 'unnamed_form',
      value: 1
    });
  }
});
`;

  const distPath = path.join(process.cwd(), 'dist');
  const scriptPath = path.join(distPath, 'interaction-tracking.js');
  fs.writeFileSync(scriptPath, interactionScript);
  
  console.log('✅ User interaction tracking added');
}

function addResourceTimingTracking() {
  console.log('⏱️ Adding resource timing tracking...');
  
  const resourceScript = `
// Resource timing tracking
function trackResourceTiming() {
  const resources = performance.getEntriesByType('resource');
  
  resources.forEach(resource => {
    const data = {
      name: resource.name,
      duration: resource.duration,
      size: resource.transferSize,
      type: resource.initiatorType,
      timestamp: Date.now()
    };
    
    console.log('Resource Timing:', data);
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'resource_timing', {
        event_category: 'Performance',
        event_label: resource.initiatorType,
        value: Math.round(resource.duration)
      });
    }
  });
}

// Track resources on page load
window.addEventListener('load', () => {
  setTimeout(trackResourceTiming, 1000);
});
`;

  const distPath = path.join(process.cwd(), 'dist');
  const scriptPath = path.join(distPath, 'resource-timing.js');
  fs.writeFileSync(scriptPath, resourceScript);
  
  console.log('✅ Resource timing tracking added');
}

function generatePerformanceDashboard() {
  console.log('📊 Generating performance dashboard...');
  
  const dashboardHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Dashboard - Zion Tech Group</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .metric-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
        }
        .metric-value {
            font-size: 2em;
            font-weight: bold;
            color: #8b5cf6;
        }
        .metric-label {
            color: #666;
            margin-top: 5px;
        }
        .chart-container {
            margin: 20px 0;
        }
        .error-list {
            background: #fff5f5;
            border: 1px solid #fed7d7;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .error-item {
            background: white;
            border-radius: 4px;
            padding: 10px;
            margin: 10px 0;
            border-left: 4px solid #e53e3e;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Performance Dashboard</h1>
            <p>Real-time performance metrics for Zion Tech Group website</p>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value" id="fcp">-</div>
                <div class="metric-label">First Contentful Paint (ms)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value" id="lcp">-</div>
                <div class="metric-label">Largest Contentful Paint (ms)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value" id="fid">-</div>
                <div class="metric-label">First Input Delay (ms)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value" id="cls">-</div>
                <div class="metric-label">Cumulative Layout Shift</div>
            </div>
        </div>
        
        <div class="chart-container">
            <h3>Performance Score</h3>
            <div id="performance-score">Loading...</div>
        </div>
        
        <div class="error-list">
            <h3>Recent Errors</h3>
            <div id="error-list">No errors detected</div>
        </div>
    </div>
    
    <script>
        // Performance dashboard functionality
        function updateDashboard() {
            if (window.PerformanceMonitor) {
                const data = window.PerformanceMonitor.getData();
                const score = window.PerformanceMonitor.getScore();
                
                // Update metrics
                document.getElementById('fcp').textContent = Math.round(data.firstContentfulPaint || 0);
                document.getElementById('lcp').textContent = Math.round(data.largestContentfulPaint || 0);
                document.getElementById('fid').textContent = Math.round(data.firstInputDelay || 0);
                document.getElementById('cls').textContent = (data.cumulativeLayoutShift || 0).toFixed(3);
                
                // Update performance score
                document.getElementById('performance-score').innerHTML = \`
                    <div style="font-size: 3em; color: \${score.overall >= 80 ? '#48bb78' : score.overall >= 60 ? '#ed8936' : '#e53e3e'};">
                        \${score.overall}/100
                    </div>
                    <div style="margin-top: 10px;">
                        <div>FCP: \${score.fcp}/100</div>
                        <div>LCP: \${score.lcp}/100</div>
                        <div>FID: \${score.fid}/100</div>
                        <div>CLS: \${score.cls}/100</div>
                    </div>
                \`;
                
                // Update error list
                if (data.errors && data.errors.length > 0) {
                    const errorList = data.errors.slice(-5).map(error => \`
                        <div class="error-item">
                            <strong>\${error.type}</strong>: \${error.message}
                            <br><small>\${new Date(error.timestamp).toLocaleString()}</small>
                        </div>
                    \`).join('');
                    document.getElementById('error-list').innerHTML = errorList;
                }
            }
        }
        
        // Update dashboard every 5 seconds
        setInterval(updateDashboard, 5000);
        updateDashboard();
    </script>
</body>
</html>
`;

  const distPath = path.join(process.cwd(), 'dist');
  const dashboardPath = path.join(distPath, 'performance-dashboard.html');
  fs.writeFileSync(dashboardPath, dashboardHTML);
  
  console.log('✅ Performance dashboard generated');
}

// Run performance monitoring setup
setupPerformanceMonitoring();