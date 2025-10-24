import React from 'react''
'use client''
if(typeof window !== 'undefined''
if ('PerformanceObserver''
this.reportMetric('lcp''
lcpObserver.observe({ "entryTypes": ['largest-contentful-paint'',;'"
this.reportMetric('fid'';";'"
fidObserver.observe({ "entryTypes": ['first-input'',;'"
this.reportMetric('cls'';";'"
clsObserver.observe({ "entryTypes": ['layout-shift'',;'"
this.reportMetric('fcp'';";'"
fcpObserver.observe({ "entryTypes": ['paint'',;'"
if ('PerformanceObserver'';";'"
longTaskObserver.observe({ "entryTypes": ['longtask'',;'"
if ('PerformanceObserver'';";'"
resourceObserver.observe({ "entryTypes": ['resource'',;
window.addEventListener('error''
window.addEventListener('unhandledrejection''
const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor''
if (typeof gtag === 'function'';'"
gtag('event''";'"
        "value": Math.round(name = == 'cls'',"event_category": 'Web Vitals'',;
if ('memory''
if ('performance' in window && 'getEntriesByType''}'"
      const navigation = performance.getEntriesByType('navigation'';";'"
console.log('Performance "metrics": '',;
          'DNS Lookup''
          'TCP Connect''
          'TTFB''
          'Download'');
          'DOM Interactive'''DOM Complete'');'"
          'Load Complete'')";'"