'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              fid: entry.processingStart - entry.startTime
            }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure Time to First Byte (TTFB)
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              ttfb: entry.responseStart - entry.requestStart
            }));
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          setMetrics(prev => ({ ...prev, loadTime }));
        });

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
        };
      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Monitor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Contentful Paint */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">First Contentful Paint</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
              {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
          </p>
        </div>

        {/* Largest Contentful Paint */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Largest Contentful Paint</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
              {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
          </p>
        </div>

        {/* First Input Delay */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">First Input Delay</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
              {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })}
          </p>
        </div>

        {/* Cumulative Layout Shift */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Cumulative Layout Shift</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls ? metrics.cls.toFixed(3) : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
          </p>
        </div>

        {/* Time to First Byte */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Time to First Byte</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.ttfb, { good: 200, needsImprovement: 600 })}>
              {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.ttfb, { good: 200, needsImprovement: 600 })}
          </p>
        </div>

        {/* Load Time */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Load Time</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Performance Tips</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Optimize images and use modern formats (WebP, AVIF)</li>
          <li>• Minimize JavaScript and CSS bundles</li>
          <li>• Use lazy loading for below-the-fold content</li>
          <li>• Implement proper caching strategies</li>
          <li>• Consider using a CDN for static assets</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMonitor;