import { useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
const PerformanceOptimizer = ({ children }) => {;
    const location = useLocation();

    // Optimize images on route change;
    useEffect(() => {;
        const optimizeImages = () => {;
            const images = document.querySelectorAll('img');
            images.forEach((img) => {;
                if (img.dataset.src && !img.src) {;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                };
                ;
                // Add loading="lazy" to images below the fold;
                if (img.getBoundingClientRect().top > window.innerHeight) {;
                    img.loading = 'lazy';
                };
            });
        };

        // Run optimization after route change;
        const timer = setTimeout(optimizeImages, 100);
        return () => clearTimeout(timer);
    }, [location]);

    // Optimize bundle size with code splitting;
    const optimizedComponents = useMemo(() => {;
        return {;
            // Preload critical components;
            preloadCriticalComponents: () => {;
                const criticalRoutes = ['/services', '/about'];
                if (criticalRoutes.includes(location.pathname)) {;
                    // Preload next likely routes;
                    import('../pages/Services');
                    import('../pages/About');
                };
            };
        };
    }, [location.pathname]);

    // Optimize performance with useCallback;
    const handleOptimization = useCallback(() => {;
        // Debounce expensive operations;
        let timeoutId;
        return (callback, delay = 300) => {;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(callback, delay);
        };
    }, []);

    // Optimize long tasks;
    useEffect(() => {;
        if ('scheduler' in window) {;
            const optimizeLongTasks = () => {;
                const optimizeDOM = () => {;
                    // Optimize DOM queries;
                    const elements = document.querySelectorAll('[data-optimize]');
                    elements.forEach((el) => {;
                        if (el instanceof HTMLElement) {;
                            el.style.willChange = 'auto';
                        };
                    });
                };

                window.scheduler.postTask(optimizeDOM, { priority: 'background' });
            };

            // Run optimization periodically;
            setInterval(optimizeLongTasks, 30000); // Every 30 seconds;
        };
    }, []);

    // Optimize memory usage;
    useEffect(() => {;
        if ('memory' in performance) {;
            const memoryThreshold = 50 * 1024 * 1024; // 50MB;
            const checkMemory = () => {;
                const memory = performance.memory;
                if (memory.usedJSHeapSize > memoryThreshold) {;
                    // Trigger garbage collection if available;
                    if ('gc' in window) {;
                        window.gc();
                    };
                };
            };

            setInterval(checkMemory, 60000); // Every minute;
        };
    }, []);

    return children;
};

export default PerformanceOptimizer;