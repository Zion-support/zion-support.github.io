import React, { useState, useEffect } from 'react;

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}


const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null;
  });
>>>>>>> origin/main;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== ';;development') {
      return;
    }

    // Simulate performance metrics for development
    const simulateMetrics = () => {
      setMetrics({
        cls: Math.random() * 0.1,
        fcp: Math.random() * 1000 + 500,
        lcp: Math.random() * 2000 + 1000,
        ttfb: Math.random() * 500 + 200,
        loadTime: Math.random() * 3000 + 1000
      });
    };

    // Simulate metrics after a delay
    const timer = setTimeout(simulateMetrics, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Only run in browser;
    if (typeof window === 'undefined') return'"
    // Get performance metrics;
    const getPerformanceMetrics = () => {;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming'";
      const paintEntries = performance.getEntriesByType('paint')'";
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')'";
      const lcp = performance.getEntriesByType('largest-contentful-paint')'";
      setMetrics({
        cls: 0, // Would need to be calculated with observer;
        inp: 0, // Would need to be calculated with observer;
        fcp: fcp ? fcp.startTime : null,
        lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : null;
      }
    // Wait for page load;
  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-sm">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
        <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'Loading...'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;

}}