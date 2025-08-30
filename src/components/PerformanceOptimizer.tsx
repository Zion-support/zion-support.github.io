import React, { useEffect, useState, useCallback, useRef } from 'react.ts';
import { useLocation  } from 'react-router-dom.ts';

// Simple Progress component
const Progress: React.FC<{ value: number; className?: string }> = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

interface PerformanceMetrics {

  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  domContentLoaded: number;
  windowLoad: number}

interface PerformanceOptimizerProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
  logMetrics?: boolean;
  sendToAnalytics?: boolean;
threshold?: {
    pageLoadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number}}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  logMetrics = true,
  sendToAnalytics = true,
  threshold = {
    pageLoadTime: 3000,
    firstContentfulPaint: 1800,
    largestContentfulPaint: 2500,
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100,
  },
})  => {
  const location = useLocation();
  const [metrics, setMetrics] = useState<any>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const navigationStartRef = useRef<number>(0);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const initPerformanceMonitoring = () => {
      setIsMonitoring(true);
      navigationStartRef.current = performance.now();

      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
                const fcp = entry.startTime;
                setMetrics(prev => prev ? { ...prev, firstContentfulPaint: fcp } : null);
                
                if (logMetrics) {
                  // // console.log('First Contentful Paint:', fcp, 'ms')}
                
                if (fcp > threshold.firstContentfulPaint) {
                  // // console.warn(`FCP (${fcp}ms) exceeds threshold (${threshold.firstContentfulPaint}ms)`)}
              }
            })});
          observerRef.current.observe({ entryTypes['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              const lcp = lastEntry.startTime;
              setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lcp } : null);
              
              if (logMetrics) {
                // // console.log('Largest Contentful Paint:', lcp, 'ms')}
              
              if (lcp > threshold.largestContentfulPaint) {
                // // console.warn(`LCP (${lcp}ms) exceeds threshold (${threshold.largestContentfulPaint}ms)`)}
            }
          });
          lcpObserver.observe({ entryTypes['largest-contentful-paint'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry)  => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value}
            });
            
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null);
            
            if (logMetrics) {
              // // console.log('Cumulative Layout Shift:', clsValue)}
            
            if (clsValue > threshold.cumulativeLayoutShift) {
              // // console.warn(`CLS (${clsValue}) exceeds threshold (${threshold.cumulativeLayoutShift})`)}
          });
          clsObserver.observe({ entryTypes['layout-shift'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry)  => {
              const fid = entry.processingStart - entry.startTime;
              setMetrics(prev => prev ? { ...prev, firstInputDelay: fid } : null);
              
              if (logMetrics) {
                // // console.log('First Input Delay:', fid, 'ms')}
              
              if (fid > threshold.firstInputDelay) {
                // // console.warn(`FID (${fid}ms) exceeds threshold (${threshold.firstInputDelay}ms)`)}
            })});
          fidObserver.observe({ entryTypes['first-input'] })} catch (error) {
          // // console.warn('Performance monitoring initialization failed:', error)}
      }

      // Monitor page load events
      const handleLoad = () => {
        const loadTime = performance.now() - navigationStartRef.current;
        const domContentLoaded = performance.timing?.domContentLoadedEventEnd - performance.timing?.navigationStart || 0;
        const windowLoad = performance.timing?.loadEventEnd - performance.timing?.navigationStart || 0;

        setMetrics(prev => ({
          ...prev,
          pageLoadTime: loadTime,
          domContentLoaded,
          windowLoad,
          timeToInteractive: loadTime,
        }));

        if (logMetrics) {
          // // console.log('Page Load Time:', loadTime, 'ms');
          // // console.log('DOM Content Loaded:', domContentLoaded, 'ms');
          // // console.log('Window Load:', windowLoad, 'ms')}

        if (loadTime > threshold.pageLoadTime) {
          // // console.warn(`Page load time (${loadTime}ms) exceeds threshold (${threshold.pageLoadTime}ms)`)}

        // Send metrics to analytics
        if (sendToAnalytics) {
          sendMetricsToAnalytics({
            pageLoadTime: loadTime,
            firstContentfulPaint: metrics?.firstContentfulPaint || 0,
            largestContentfulPaint: metrics?.largestContentfulPaint || 0,
            cumulativeLayoutShift: metrics?.cumulativeLayoutShift || 0,
            firstInputDelay: metrics?.firstInputDelay || 0,
            domContentLoaded,
            windowLoad,
            timeToInteractive: loadTime,
          })}
      };

      // Use both load event and performance timing
      if (document.readyState === 'complete') {
        handleLoad()} else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad)}
    };

    initPerformanceMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()}
      setIsMonitoring(false)}}, [enabled, logMetrics, sendToAnalytics, threshold]);

  // Reset metrics on route change
  useEffect(() => {
    setMetrics(null);
    navigationStartRef.current = performance.now()}, [location.pathname]);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy'}
      
      // Add decoding attribute
      if (!img.decoding) {
        img.decoding = 'async'}
    })}, []);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ];

    criticalFonts.forEach((fontUrl) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link)})}, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link)})}, []);

  // Apply optimizations on mount
  useEffect(() => {
    if (enabled) {
      optimizeImages();
      optimizeFonts();
      preloadCriticalResources()}
  }, [enabled, optimizeImages, optimizeFonts, preloadCriticalResources]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number  => {
    let score = 100;

    // Deduct points for poor performance
    if (metrics.pageLoadTime > threshold.pageLoadTime) {
      score -= Math.min(30, (metrics.pageLoadTime - threshold.pageLoadTime) / 100)}
    if (metrics.firstContentfulPaint > threshold.firstContentfulPaint) {
      score -= Math.min(20, (metrics.firstContentfulPaint - threshold.firstContentfulPaint) / 100)}
    if (metrics.largestContentfulPaint > threshold.largestContentfulPaint) {
      score -= Math.min(25, (metrics.largestContentfulPaint - threshold.largestContentfulPaint) / 100)}
    if (metrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) {
      score -= Math.min(15, metrics.cumulativeLayoutShift * 100)}
    if (metrics.firstInputDelay > threshold.firstInputDelay) {
      score -= Math.min(10, (metrics.firstInputDelay - threshold.firstInputDelay) / 10)}

    return Math.max(0, Math.round(score))}, [threshold]);

  // Send metrics to analytics service
  const sendMetricsToAnalytics = useCallback((metrics: PerformanceMetrics)  => {
    try {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && (window as ).gtag) {
        (window as ).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: location.pathname,
          value: calculatePerformanceScore(metrics),
          custom_parameters: {
            page_load_time: metrics.pageLoadTime,
            first_contentful_paint: metrics.firstContentfulPaint,
            largest_contentful_paint: metrics.largestContentfulPaint,
            cumulative_layout_shift: metrics.cumulativeLayoutShift,
            first_input_delay: metrics.firstInputDelay,
          },
        })}

      // Send to custom analytics endpoint
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: location.pathname,
          timestamp: new Date().toISOString(),
          metrics,
          score: calculatePerformanceScore(metrics),
          userAgent: navigator.userAgent,
        }),
      }).catch(()  => {
        // Silently fail if analytics endpoint is not available
      })} catch (error) {
      // // console.warn('Failed to send performance metrics:', error)}
  }, [location.pathname, calculatePerformanceScore]);

  // Don't render thing visible
  return null};

// Hook for accessing performance metrics
export const usePerformanceMetrics[, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics({
            pageLoadTime: navigation.loadEventEnd - navigation.startTime,
            firstContentfulPaint: 0, // Will be updated by PerformanceObserver
            largestContentfulPaint: 0, // Will be updated by PerformanceObserver
            cumulativeLayoutShift: 0, // Will be updated by PerformanceObserver
            firstInputDelay: 0, // Will be updated by PerformanceObserver
            timeToInteractive: navigation.loadEventEnd - navigation.startTime,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
            windowLoad: navigation.loadEventEnd - navigation.startTime,
          })}
      }
    };

    updateMetrics();
    window.addEventListener('load', updateMetrics);
    return ()  => window.removeEventListener('load', updateMetrics)}, []);

  return metrics};

// Export default component
export default PerformanceOptimizer;
