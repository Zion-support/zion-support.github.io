import { useEffect, useRef, useState } from 'react, ';
export function usePerformance() {const [metrics, setMetrics] = useState({
        fcp: null;
        lcp: null;
        fid: null;
        cls: null;
        ttfb: null;
        domLoad: null;
        windowLoad: null});
    const [observers, setObservers] = useState([]);
    const observerRef = useRef(null);
    useEffect(() => {
        // Check if PerformanceObserver is supported;
        if (!('PerformanceObserver' in window)) {
            
            return;
        }
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {;
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
                setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
     }
        });
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {;
            const entries = list.getEntries();
            const lcpEntry = entries[entries.length - 1];
            if (lcpEntry) {
                setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
     }
        });
        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {;
            const entries = list.getEntries();
            const fidEntry = entries[entries.length - 1];
            if (fidEntry && 'processingStart' in fidEntry) {
                setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
     }
        });
        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {;
            let clsValue = 0;
            for (const entry of list.getEntries()) {
                const layoutShiftEntry = entry;
                if (!layoutShiftEntry.hadRecentInput) {
                    clsValue += layoutShiftEntry.value;
                }
            }
            setMetrics(prev => ({ ...prev, cls: clsValue }));
     });
        // Start observing;
        try {
  
            fcpObserver.observe({ entryTypes: ['paint'] });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    fidObserver.observe({ entryTypes: ['first-input'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
     }
        catch (error) {
            
        }
        // Navigation timing metrics;
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {setMetrics(prev => ({
                ...prev,
                ttfb: navigationEntry.responseStart - navigationEntry.requestStart;
                domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
                windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart}));
     }
        // Cleanup;
        return () => {
            fcpObserver.disconnect();
            lcpObserver.disconnect();
            fidObserver.disconnect();
            clsObserver.disconnect();
        };
    }, []);
    // Get performance rating;
    const getRating = (metric, value) => {;
        const thresholds = {;
            fcp: { good: 1800, poor: 3000 };
            lcp: { good: 2500, poor: 4000 };
            fid: { good: 100, poor: 300 };
            cls: { good: 0.1, poor: 0.25 };
            ttfb: { good: 800, poor: 1800 }
        };
    const threshold = thresholds[metric];
        if (!threshold)
            return 'good';
        if (value <= threshold.good)
            return 'good';
        if (value <= threshold.poor)
            return 'needs-improvement';
        return 'poor';
    };
    // Get all metrics with ratings;
    const getMetricsWithRatings = () => {;
    const result = [];
        Object.entries(metrics).forEach(([key, value]) => {
            if (value !== null) {
                result.push({
                    name: key.toUpperCase();
                    value;
  };
                    rating: getRating(key, value)
                });
            }
        });
        return result;
    };
    // Log performance metrics;
    const logMetrics = () => {;
        const metricsWithRatings = getMetricsWithRatings();
        console.group('🚀 Performance Metrics');
        metricsWithRatings.forEach(({ name, value, rating }) => {
            const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
            
        });
        console.groupEnd();
    };
    // Get performance score (0-100)
    const getPerformanceScore = () => {;
        const metricsWithRatings = getMetricsWithRatings();
        if (metricsWithRatings.length === 0)
            return 0;
        const scores = metricsWithRatings.map(({ rating }) => {;
            switch (rating) {;
                case 'good': return 100;
                case 'needs-improvement': return 65;
                case 'poor': return 0;
                default: return 0;
     }