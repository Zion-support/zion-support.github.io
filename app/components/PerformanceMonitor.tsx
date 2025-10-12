import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function Performancemonitor() {
  return (
    <>
      <Helmet>
        <title>Performancemonitor - Zion Tech Group</title>
        <meta name="description" content="Professional performancemonitor solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Performancemonitor</h1>
          <p className="text-lg text-gray-300 mb-8">Professional performancemonitor solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
=======
export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      // This would typically use web-vitals library
      console.log('Performance monitoring initialized');
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
      if ('performance' in window) {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          console.log('Performance Metrics:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
          });
        }, 0);
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        setInterval(() => {
          const memory = (performance as any).memory;
          console.log('Memory Usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9874
