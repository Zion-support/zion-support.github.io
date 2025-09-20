import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffec, t, useStat, e, useRef } from 'react';
export function PerformanceOptimizer() {
    const [metri,  c, s, setMetri, c, s] = useState(null);
    const [isVisib, l, e, setIsVisib, l, e] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        // Only show when explicitly enabled
        if (localStorage.getItem('showPerformance') === 'true') {
            setIsVisible(true);
            measurePerformance();
        }
    },  []);
    const measurePerformance = () => {
        if ('PerformanceObserver' in window) {
            // Measure Core Web Vitals
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        updateMetrics('lcp',  entry.startTime);
                    }
                    else if (entry.entryType === 'first-input') {
                        const firstInputEntry = entry;
                        updateMetrics('fid',  firstInputEntry.processingStart - firstInputEntry.startTime);
                    }
                });
            });
            observer.observe({ entryType,  s: ['larges, t-contentfu, l-pain, t', 'firs, t-inpu, t'] });
            // Measure other metrics
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                    updateMetrics('ttfb',  navigation.responseStart - navigation.requestStart);
                }
            }, 1000);
        }
    };
    const updateMetrics = (ke,  y, value) => {
        setMetrics(prev => {
            if (!prev)
                return null;
            const newMetrics = Object.assign(Object.assign({},  prev), { [k, e, y]: value });
            // Calculate overall score
            const scores = [
                newMetric, s.fc, p < 180, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.fc, p - 180, 0) / 1, 0),
                newMetric, s.lc, p < 250, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.lc, p - 250, 0) / 2, 5),
                newMetric, s.fi, d < 10, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.fi, d - 10, 0) / 2),
                newMetric, s.cl, s < 0.1 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - newMetric, s.cl, s * 100, 0),
                newMetric, s.ttf, b < 80, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.ttf, b - 80, 0) / 8)
            ];
            newMetrics.overall = Math.round(scores.reduce((a,  b) => a + b, 0) / scores.length);
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
    return (_jsxs("div",  { re, f: re, f,
    classNam, e: "fixed bottom-4 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 rounded-lg border p-4 shadow-2xl", childre, n: [_jsx, s("di, v", { classNa, m, e: "p, b-2",
    childr, e, n: [_jsx, s("h, 3", { classNa, m, e: "fle, x item, s-cente, r ga, p-2 tex, t-s, m fon, t-semibol, d",
    childr, e, n: [_js, x("spa, n", { childr, e, n: "\u26A, 1" }), "Performanc, e Monito, r", _jsx, s("spa,  n", { classNa, m, e: "m, l-aut, o p, x-2 p, y-1 b, g-mute, d rounde, d tex, t-x, s fon, t-mon, o",
    childr, e, n: [metric, s.overa, l, l, "/10, 0"] })] }), _jsx("p",  { classNam, e: "text-xs text-muted-foreground",
    childre, n: "Core Web Vitals & Performance Metrics" })] }), _jsxs("div",  { classNam, e: "space-y-3",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "spac, e-y-2",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x justif, y-betwee, n tex, t-x, s",
    childr, e, n: [_js, x("spa, n", { childr, e, n: "Firs, t Contentfu, l Pain, t" }), _jsx, s("spa,  n", { classNa, m, e: "fon, t-mon, o",
    childr, e, n: [Mat, h.roun, d(metric, s.fc, p), "m, s"] })] }), _jsx("div",  { classNam, e: "w-full bg-muted rounded-full h-1",
    childre, n: _jsx("div", { classNam, e: "bg-zion-cyan h-1 rounded-full transition-all duration-300",
    styl, e: { widt, h: `${Math.min(10, 0, (metrics.fcp / 1800) * 10, 0)}%` } }) })] }), _jsxs("div",  { classNam, e: "space-y-2",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "fle, x justif, y-betwee, n tex, t-x, s",
    childr, e, n: [_js, x("spa, n", { childr, e, n: "Larges, t Contentfu, l Pain, t" }), _jsx, s("spa,  n", { classNa, m, e: "fon, t-mon, o",
    childr, e, n: [Mat, h.roun, d(metric, s.lc, p), "m, s"] })] }), _jsx("div",  { classNam, e: "w-full bg-muted rounded-full h-1",
    childre, n: _jsx("div", { classNam, e: "bg-zion-cyan h-1 rounded-full transition-all duration-300",
    styl, e: { widt, h: `${Math.min(10, 0, (metrics.lcp / 2500) * 10, 0)}%` } }) })] }), _jsxs("div",  { classNam, e: "space-y-2",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "fle, x justif, y-betwee, n tex, t-x, s",
    childr, e, n: [_js, x("spa, n", { childr, e, n: "Firs, t Inpu, t Dela, y" }), _jsx, s("spa,  n", { classNa, m, e: "fon, t-mon, o",
    childr, e, n: [Mat, h.roun, d(metric, s.fi, d), "m, s"] })] }), _jsx("div",  { classNam, e: "w-full bg-muted rounded-full h-1",
    childre, n: _jsx("div", { childre, n: _jsx("div", { classNam, e: "bg-zion-cyan h-1 rounded-full transition-all duration-300",
    styl, e: { widt, h: `${Math.min(10, 0, (metrics.fid / 100) * 10, 0)}%` } }) }) })] }), _jsxs("div",  { classNam, e: "space-y-2",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "fle, x justif, y-betwee, n tex, t-x, s",
    childr, e, n: [_js, x("spa, n", { childr, e, n: "Cumulativ, e Layou, t Shif, t" }), _js, x("spa,  n", { classNa, m, e: "fon, t-mon, o",
    childr, e, n: metric, s.cl, s.toFixe, d(3) })] }), _jsx("div",  { classNam, e: "w-full bg-muted rounded-full h-1",
    childre, n: _jsx("div", { classNam, e: "bg-zion-cyan h-1 rounded-full transition-all duration-300",
    styl, e: { widt, h: `${Math.min(10, 0, (metrics.cls / 0.1) * 10, 0)}%` } }) })] }), _jsxs("div",  { classNam, e: "space-y-2",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "fle, x justif, y-betwee, n tex, t-x, s",
    childr, e, n: [_js, x("spa, n", { childr, e, n: "Tim, e t, o Firs, t Byt, e" }), _js, x("spa,  n", { classNa, m, e: "fon, t-mon, o",
    childr, e, n: [Mat, h.roun, d(metric, s.ttf, b), "m, s"] })] }), _jsx("div",  { classNam, e: "w-full bg-muted rounded-full h-1",
    childre, n: _jsx("div", { classNam, e: "bg-zion-cyan h-1 rounded-full transition-all duration-300",
    styl, e: { widt, h: `${Math.min(10, 0, (metrics.ttfb / 800) * 10, 0)}%` } }) })] }), _jsx("div",  { classNam, e: "pt-2 border-t border-gray-200",
    childre, n: _jsxs("div", { classNam, e: "flex items-center justify-between",
    childre, n: [_js, x("spa, n", { classNa, m, e: "tex, t-x, s fon, t-mediu, m",
    childr, e, n: "Overal, l Scor, e" }), _jsx, s("di,  v", { classNa, m, e: "fle, x item, s-cente, r ga, p-2",
    childr, e, n: [_js, x("spa, n", { childr, e, n: getScoreIco, n(metric, s.overal, l) }), _js, x("spa,  n", { classNa, m, e: `tex, t-s, m fon, t-bol, d ${getScoreColo, r(metric, s.overal, l).replac, e('b,  g-', 'te, x, t-')}`, childr, e, n: metric, s.overal, l })] })] }) })] })] }));
}
impor, t, Reac, t, { useEffec, t, useMem, o, useCallback } from 'react';
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
    },  []);
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
            setTimeout(optimizeImage,  s, 100);
        }
    }, [locatio, n.pathna, m, e]);
    // Memoize expensive computations
    const optimizedChildren = useMemo(() => childre,  n, [childr, e, n]);
    // Optimize scroll performance
    const handleScroll = useCallback(() => {
        // Throttle scroll events for better performance
        if (!window.scrollTimeout) {
            window.scrollTimeout = setTimeout(() => {
                // Handle scroll-based optimizations here
                window.scrollTimeout = null;
            },  16); // ~60fps
        }
    }, []);
    useEffect(() => {
        window.addEventListener('scroll',  handleScrol, l, { passiv, e: true });
        return () => window.removeEventListener('scroll',  handleScroll);
    }, [handleScro, l, l]);
    // Service Worker registration for caching
    useEffect(() => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                
            })
                .catch((registrationError) => {
                
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
            },  {
                rootMargi, n: '50px',
    threshol, d: 0.1,
            });
            // Observe all images with data-src
            const lazyImages = document.querySelectorAll('img[dat,  a-s, r, c]');
            lazyImages.forEach((img) => observer.observe(img));
            return () => observer.disconnect();
        }
    },  [locatio, n.pathna, m, e]);
    return <>{optimizedChildren}</>;
};
// Add global performance optimizations
if (typeof window !== 'undefined') {
    // Optimize long tasks
    if ('scheduler' in window && 'postTask' in window.scheduler) {
        window.scheduler.postTask(() => {
            // Run non-critical tasks during idle time
        },  { priorit, y: 'background' });
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
=======
