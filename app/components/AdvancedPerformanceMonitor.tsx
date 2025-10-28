import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

<<<<<<< HEAD
export const metadata = {
  title: "AdvancedPerformanceMonitor | Zion Tech Group",
  description: "Professional advancedperformancemonitor services by Zion Tech Group",
  keywords: "advancedperformancemonitor, technology, services",
  openGraph: {
    title: "AdvancedPerformanceMonitor | Zion Tech Group",
    description: "Professional advancedperformancemonitor services by Zion Tech Group",
    type: "website",
  },
=======
import React, { useState, useCallback, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null
}

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
  onMetricsUpdate?: (_metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}


const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  })

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return

    const observers: PerformanceObserver[] = []

    // Measure First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) { /* Handle error */ }

    // Measure First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          if (fidEntry.processingStart && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observers.push(fidObserver);
    } catch (error) { /* Handle error */ }

    // Measure Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) { /* Handle error */ }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    } catch (error) { /* Handle error */ }

    // Measure Memory Usage
    try {
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }));
        }
      }
    } catch (error) { /* Handle error */ }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureWebVitals()
    }, 5000)

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [measureWebVitals, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitor">
      <div className="metrics-display">
        <h3>Performance Metrics</h3>
        <div className="metric">
          <span>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>Memory: {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(2)}MB` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
};

export default function AdvancedPerformanceMonitorPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedPerformanceMonitor
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedperformancemonitor services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AdvancedPerformanceMonitor Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive advancedperformancemonitor solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your advancedperformancemonitor needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored advancedperformancemonitor solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your advancedperformancemonitor services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}