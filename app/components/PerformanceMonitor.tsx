<<<<<<< HEAD
import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB };
export default PerformanceMonitor;
'use client';
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals;
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      if ('web-vitals' in window) {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      }
    };

    // Monitor performance metrics;
    const monitorPerformance = () => {
      if ('performance' in, window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(const entry = > entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage;
    const monitorMemory = () => {
      if ('memory' in, performance) {
        setInterval(() => {
          const memory = (performance as, any).memory;
          console.log('Memory Usage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds;
      }
    };

    // Initialize monitoring;
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanup;
    return () => {
      // Cleanup if needed;
    };
  }, []);

  return null;
};

<<<<<<< HEAD
export default PerformanceMonitor;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PerformanceMonitor() {
  return (
    <>
      <Helmet>
        <title>Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Professional performance monitor by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Performance Monitor</h1>
          <p className="text-lg text-gray-300 mb-8">Professional performance monitor coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
}
>>>>>>> origin/main
