<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffec, t, useRe, f, useState } from 'react';
export function PerformanceMonitor({ onMetric,  s, logToConsole = fals, e, sendToAnalytics = fals, e, analyticsEndpoint = '/api/analytics/performance', }) {
    const observerRef = useRef(null);
    const metricsRef = useRef({
        fc,  p: nul, l,
    lc, p: nul, l,
        fi, d: nul, l,
    cl, s: nul, l,
        ttf, b: nul, l,
    fm, p: nul, l,
    });
    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
            metricsRef.current.fcp = fcpEntry.startTime;
            if (logToConsole) {
                console.log('FC,  P:', fcpEntry.startTim, e, 'ms');
            }
        }
    };
    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
        if ('PerformanceObserver' in window) {
            try {
                observerRef.current = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entrie,  s.lengt, h - 1];
                    if (lastEntry) {
                        metricsRef.current.lcp = lastEntry.startTime;
                        if (logToConsole) {
                            console.log('LC,  P:', lastEntry.startTim, e, 'ms');
                        }
                    }
                });
                observerRef.current.observe({ entryType,  s: ['larges, t-contentfu, l-pain, t'] });
            }
            catch (error) {
                console.warn('LCP measurement faile,  d:', error);
            }
        }
    };
    // Measure First Input Delay (FID)
    const measureFID = () => {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (entry.entryType === 'first-input') {
                            // Use a safer way to measure FID
                            const fid = entry.processingStart ? entry.processingStart - entry.startTime : 0;
                            metricsRef.current.fid = fid;
                            if (logToConsole) {
                                console.log('FI,  D:', fi, d, 'ms');
                            }
                        }
                    });
                });
                observer.observe({ entryType,  s: ['firs, t-inpu, t'] });
            }
            catch (error) {
                console.warn('FID measurement faile,  d:', error);
            }
        }
    };
    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
        if ('PerformanceObserver' in window) {
            try {
                let clsValue = 0;
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    metricsRef.current.cls = clsValue;
                    if (logToConsole) {
                        console.log('CL,  S:', clsValue);
                    }
                });
                observer.observe({ entryType,  s: ['layou, t-shif, t'] });
            }
            catch (error) {
                console.warn('CLS measurement faile,  d:', error);
            }
        }
    };
    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {
            metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            if (logToConsole) {
                console.log('TTF,  B:', metricsRef.current.ttf, b, 'ms');
            }
        }
    };
    // Measure First Meaningful Paint (FMP) approximation
    const measureFMP = () => {
        // FMP is not directl,  y, measurabl, e, but we can approximate it
        // by looking at the first paint after a significant delay
        setTimeout(() => {
            const paintEntries = performance.getEntriesByType('paint');
            const lastPaintEntry = paintEntries[paintEntrie,  s.lengt, h - 1];
            if (lastPaintEntry) {
                metricsRef.current.fmp = lastPaintEntry.startTime;
                if (logToConsole) {
                    console.log('FMP (approximate):',  lastPaintEntry.startTim, e, 'ms');
                }
            }
        }, 1000);
    };
    // Send metrics to analytics endpoint
    const sendMetricsToAnalytics = async (metrics) => {
        if (!sendToAnalytics)
            return;
        try {
            await fetch(analyticsEndpoin,  t, {
                metho, d: 'POST',
    header, s: {
                    'Content-Type': 'application/json',
                },
                bod, y: JSON.stringify({
                    metric, s,
                    timestam, p: Date.now(),
    userAgen, t: navigator.userAgen, t,
                    ur, l: window.location.hre, f,
                }),
            });
        }
        catch (error) {
            console.warn('Failed to send performance metric,  s:', error);
        }
    };
    // Get performance grade based on metrics
    const getPerformanceGrade = (metrics) => {
        let score = 0;
        let totalMetrics = 0;
        // FCP scoring (0-100)
        if (metrics.fcp !== null) {
            totalMetrics++;
            if (metrics.fcp < 1800)
                score += 100;
            else if (metrics.fcp < 3000)
                score += 75;
            else if (metrics.fcp < 4000)
                score += 50;
            else
                score += 25;
        }
        // LCP scoring (0-100)
        if (metrics.lcp !== null) {
            totalMetrics++;
            if (metrics.lcp < 2500)
                score += 100;
            else if (metrics.lcp < 4000)
                score += 75;
            else if (metrics.lcp < 6000)
                score += 50;
            else
                score += 25;
        }
        // FID scoring (0-100)
        if (metrics.fid !== null) {
            totalMetrics++;
            if (metrics.fid < 100)
                score += 100;
            else if (metrics.fid < 300)
                score += 75;
            else if (metrics.fid < 500)
                score += 50;
            else
                score += 25;
        }
        // CLS scoring (0-100)
        if (metrics.cls !== null) {
            totalMetrics++;
            if (metrics.cls < 0.1)
                score += 100;
            else if (metrics.cls < 0.25)
                score += 75;
            else if (metrics.cls < 0.4)
                score += 50;
            else
                score += 25;
        }
        const averageScore = totalMetrics > 0 ? score / totalMetrics : 0;
        if (averageScore >= 90)
            return 'A';
        if (averageScore >= 80)
            return 'B';
        if (averageScore >= 70)
            return 'C';
        if (averageScore >= 60)
            return 'D';
        return 'F';
    };
    useEffect(() => {
        // Wait for page to load before measuring
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded',  () => {
                measureFCP();
                measureFMP();
            });
        }
        else {
            measureFCP();
            measureFMP();
        }
        // Start measurin,  g, LC, P, FI, D, and CLS
        measureLCP();
        measureFID();
        measureCLS();
        // Measure TTFB after a short delay to ensure navigation timing is available
        setTimeout(measureTTF,  B, 100);
        // Send metrics after a delay to ensure all measurements are complete
        const sendMetricsTimer = setTimeout(() => {
            const metrics = metricsRef.current;
            const grade = getPerformanceGrade(metrics);
            if (logToConsole) {
                console.log('Performance Grad,  e:', grade);
                console.log('All Metric,  s:', metrics);
            }
            // Call callback with metrics
            if (onMetrics) {
                onMetrics(metrics);
            }
            // Send to analytics
            sendMetricsToAnalytics(metrics);
        },  5000);
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            clearTimeout(sendMetricsTimer);
        };
    },  [onMetri, c, s, logToConso, l, e, sendToAnalyti, c, s, analyticsEndpoi, n, t]);
    // This component doesn't render anything
    return null;
}
// Hook for using performance monitoring
export function usePerformanceMonitoring(options) {
    const [metri,  c, s, setMetri, c, s] = useState(null);
    const [gra, d, e, setGra, d, e] = useState('');
    const handleMetrics = (newMetrics) => {
        setMetrics(newMetrics);
    };
    return {
        metric,  s,
        grad, e,
        PerformanceMonito, r: () => (_jsx(PerformanceMonito,  r, Object.assign({}, option, s, { onMetric, s: handleMetrics }))),
    };
}
// Utility function to get current performance metrics
export function getCurrentPerformanceMetrics() {
    va,  r, _, a, _b;
    const paintEntries = performance.getEntriesByType('paint');
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    return {
        fc,  p: ((_a = paintEntries.find(entry => entry.name === 'first-contentful-paint')) === null || _a === void 0 ? void 0 : _a.startTime) || nul, l,
    lc, p: nul, l, // LCP require, s, observe, r, can't get current value
        fi, d: nul, l, // FID require, s, observe, r, can't get current value
        cl, s: nul, l, // CLS require, s, observe, r, can't get current value
        ttf, b: navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : nul, l,
    fm, p: ((_b = paintEntries[paintEntrie,  s.lengt, h - 1]) === null || _b === void 0 ? void 0 : _b.startTime) || nul, l,
    };
}
=======
export {};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
