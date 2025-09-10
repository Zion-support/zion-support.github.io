<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
export function PerformanceOptimizer() {
    const [metrics, setMetrics] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        // Only show when explicitly enabled
        if (localStorage.getItem('showPerformance') === 'true') {
            setIsVisible(true);
            measurePerformance();
        }
    }, []);
    const measurePerformance = () => {
        if ('PerformanceObserver' in window) {
            // Measure Core Web Vitals
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        updateMetrics('lcp', entry.startTime);
                    }
                    else if (entry.entryType === 'first-input') {
                        const firstInputEntry = entry;
                        updateMetrics('fid', firstInputEntry.processingStart - firstInputEntry.startTime);
                    }
                });
            });
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
            // Measure other metrics
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                    updateMetrics('ttfb', navigation.responseStart - navigation.requestStart);
                }
            }, 1000);
        }
    };
    const updateMetrics = (key, value) => {
        setMetrics(prev => {
            if (!prev)
                return null;
            const newMetrics = Object.assign(Object.assign({}, prev), { [key]: value });
            // Calculate overall score
            const scores = [
                newMetrics.fcp < 1800 ? 100 : Math.max(0, 100 - (newMetrics.fcp - 1800) / 10),
                newMetrics.lcp < 2500 ? 100 : Math.max(0, 100 - (newMetrics.lcp - 2500) / 25),
                newMetrics.fid < 100 ? 100 : Math.max(0, 100 - (newMetrics.fid - 100) / 2),
                newMetrics.cls < 0.1 ? 100 : Math.max(0, 100 - newMetrics.cls * 1000),
                newMetrics.ttfb < 800 ? 100 : Math.max(0, 100 - (newMetrics.ttfb - 800) / 8)
            ];
            newMetrics.overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
            return newMetrics;
        });
    };
    const getScoreColor = (score) => {
        if (score >= 90)
            return 'bg-green-500';
        if (score >= 70)
            return 'bg-yellow-500';
        return 'bg-red-500';
    };
    const getScoreIcon = (score) => {
        if (score >= 90)
            return '✅';
        if (score >= 70)
            return '⏰';
        return '⚠️';
    };
    if (!isVisible || !metrics)
        return null;
    return (_jsxs("div", { ref: ref, className: "fixed bottom-4 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 rounded-lg border p-4 shadow-2xl", children: [_jsxs("div", { className: "pb-2", children: [_jsxs("h3", { className: "flex items-center gap-2 text-sm font-semibold", children: [_jsx("span", { children: "\u26A1" }), "Performance Monitor", _jsxs("span", { className: "ml-auto px-2 py-1 bg-muted rounded text-xs font-mono", children: [metrics.overall, "/100"] })] }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Core Web Vitals & Performance Metrics" })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "First Contentful Paint" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.fcp), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.fcp / 1800) * 100)}%` } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "Largest Contentful Paint" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.lcp), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.lcp / 2500) * 100)}%` } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "First Input Delay" }), _jsxs("span", { className: "font-mono", children: [Math.round(metrics.fid), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.fid / 100) * 100)}%` } }) }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "Cumulative Layout Shift" }), _jsx("span", { className: "font-mono", children: metrics.cls.toFixed(3) })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.cls / 0.1) * 100)}%` } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-xs", children: [_jsx("span", { children: "Time to First Byte" }), _jsx("span", { className: "font-mono", children: [Math.round(metrics.ttfb), "ms"] })] }), _jsx("div", { className: "w-full bg-muted rounded-full h-1", children: _jsx("div", { className: "bg-zion-cyan h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, (metrics.ttfb / 800) * 100)}%` } }) })] }), _jsx("div", { className: "pt-2 border-t border-border", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs font-medium", children: "Overall Score" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { children: getScoreIcon(metrics.overall) }), _jsx("span", { className: `text-sm font-bold ${getScoreColor(metrics.overall).replace('bg-', 'text-')}`, children: metrics.overall })] })] }) })] })] }));
}
=======
import React, { useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
export const PerformanceOptimizer = ({ children }) => {
    const location = useLocation();
    // Preload critical resources
    useEffect(() => {
        const preloadCriticalResources = () => {
            // Preload critical CSS
            const criticalCSS = document.createElement('link');
            criticalCSS.rel = 'preload';
            criticalCSS.as = 'style';
            criticalCSS.href = '/src/index.css';
            document.head.appendChild(criticalCSS);
            // Preload critical fonts
            const criticalFonts = document.createElement('link');
            criticalFonts.rel = 'preload';
            criticalFonts.as = 'font';
            criticalFonts.href = '/fonts/inter-var.woff2';
            criticalFonts.crossOrigin = 'anonymous';
            document.head.appendChild(criticalFonts);
        };
        preloadCriticalResources();
    }, []);
    // Optimize images on route change
    useEffect(() => {
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                // Add loading="lazy" to images below the fold
                if (img.getBoundingClientRect().top > window.innerHeight) {
                    img.loading = 'lazy';
                }
                // Add decoding="async" for better performance
                img.decoding = 'async';
                // Add error handling
                img.onerror = () => {
                    img.style.display = 'none';
                };
            });
        };
        // Use requestIdleCallback for non-critical optimization
        if ('requestIdleCallback' in window) {
            requestIdleCallback(optimizeImages);
        }
        else {
            setTimeout(optimizeImages, 100);
        }
    }, [location.pathname]);
    // Memoize expensive computations
    const optimizedChildren = useMemo(() => children, [children]);
    // Optimize scroll performance
    const handleScroll = useCallback(() => {
        // Throttle scroll events for better performance
        if (!window.scrollTimeout) {
            window.scrollTimeout = setTimeout(() => {
                // Handle scroll-based optimizations here
                window.scrollTimeout = null;
            }, 16); // ~60fps
        }
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    // Service Worker registration for caching
    useEffect(() => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                console.log('SW registered: ', registration);
            })
                .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
        }
    }, []);
    // Intersection Observer for lazy loading
    useEffect(() => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (target.dataset.src) {
                            target.src = target.dataset.src;
                            target.removeAttribute('data-src');
                            observer.unobserve(target);
                        }
                    }
                });
            }, {
                rootMargin: '50px',
                threshold: 0.1,
            });
            // Observe all images with data-src
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach((img) => observer.observe(img));
            return () => observer.disconnect();
        }
    }, [location.pathname]);
    return <>{optimizedChildren}</>;
};
// Add global performance optimizations
if (typeof window !== 'undefined') {
    // Optimize long tasks
    if ('scheduler' in window && 'postTask' in window.scheduler) {
        window.scheduler.postTask(() => {
            // Run non-critical tasks during idle time
        }, { priority: 'background' });
    }
    // Optimize memory usage
    if ('memory' in performance) {
        const memoryThreshold = 50 * 1024 * 1024; // 50MB
        if (performance.memory.usedJSHeapSize > memoryThreshold) {
            // Trigger garbage collection if available
            if ('gc' in window) {
                window.gc();
            }
        }
    }
}
export default PerformanceOptimizer;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
