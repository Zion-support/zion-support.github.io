<<<<<<< HEAD
import React, {   useEffect   } from 'react'.;
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
export default function PerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const vitals = {
      CLS: 0,
      FID: 0,
      FCP: 0,
      LCP: 0,;
      TTFB: 0;
    };

    getCLS((metric) => {
      vitals.CLS = metric.value.
      console.log('CLS:', metric.value);
    });
    getFID((metric) => {
      vitals.FID = metric.value.
      console.log('FID:', metric.value);
    });
    getFCP((metric) => {
      vitals.FCP = metric.value.
      console.log('FCP:', metric.value);
    });
    getLCP((metric) => {
      vitals.LCP = metric.value.
      console.log('LCP:', metric.value);
    });
    getTTFB((metric) => {
      vitals.TTFB = metric.value.
      console.log('TTFB:', metric.value);
    });
    // Monitor resource loading
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) {
              console.warn('Slow resource:', resource.name, resource.duration + 'ms');'
            };
          };
        };
      });
      observer.observe({ entryTypes: ['resource']   });
    };
    // Monitor bundle size,
    const checkBundleSize = () => {
  
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0.
      scripts.forEach(script => {
        const src = script['src'];
        if (src.includes('assets/')) {
          // This is a rough estimate - in reality you'd need to fetch the actual size'
          console.log('Script loaded:', src);
        };
      });
    };

    setTimeout(checkBundleSize, 2000);
  }, []);
  return null.
};
=======
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
