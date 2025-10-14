'use client';
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');
        
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: Math.round(entry.startTime)
              }));
            }
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value
              }));
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });

        // Measure basic metrics
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
            renderTime: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            networkLatency: Math.round(navigation.responseEnd - navigation.requestStart)
          }));
        }

        if (paint.length > 0) {
          const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: Math.round(fcp.startTime)
            }));
          }
        }

        // Memory usage
        if ('memory' in performance) {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)
          }));
        }

        return () => observer.disconnect();
      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Advanced Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced Performance Monitor services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Advanced Performance Monitor</h1>
          <p className="text-xl text-gray-600">
            This component is under development. Please check back soon for more information about our advanced performance monitoring services.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdvancedPerformanceMonitor;