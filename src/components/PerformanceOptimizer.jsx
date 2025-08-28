import { useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const PerformanceOptimizer = ({ children }) => {
    const location = useLocation();

    // Optimize images on route change
    useEffect(() => {
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                if (img.dataset.src && !img.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                // Add loading="lazy" to images below the fold
                if (img.getBoundingClientRect().top > window.innerHeight) {
                    img.loading = 'lazy';
                }
                
                // Optimize image quality based on device pixel ratio
                if (window.devicePixelRatio > 1) {
                    img.style.imageRendering = 'crisp-edges';
                }
            });
        };

        // Use requestIdleCallback for non-critical optimization
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            window.requestIdleCallback(optimizeImages);
        } else {
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
            // Check if service worker is already registered
            if (navigator.serviceWorker.controller) {
                return; // Already active
            }

            navigator.serviceWorker
                .register('/sw.js', {
                    scope: '/',
                    updateViaCache: 'none'
                })
                .then((registration) => {
                    console.log('SW registered: ', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New service worker available
                                    console.log('New service worker available');
                                }
                            });
                        }
                    });
                })
                .catch((registrationError) => {
                    console.warn('SW registration failed: ', registrationError);
                });
        }
    }, []);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
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
        // Use scheduler.postTask for non-critical tasks
        const optimizeLongTasks = () => {
            // Optimize DOM operations
            const optimizeDOM = () => {
                // Batch DOM reads and writes
                const elements = document.querySelectorAll('[data-optimize]');
                elements.forEach((el) => {
                    if (el instanceof HTMLElement) {
                        el.style.willChange = 'auto';
                    }
                });
            };

            window.scheduler.postTask(optimizeDOM, { priority: 'background' });
        };

        // Run optimization periodically
        setInterval(optimizeLongTasks, 30000); // Every 30 seconds
    }

    // Optimize memory usage
    if ('memory' in performance) {
        const memoryThreshold = 50 * 1024 * 1024; // 50MB
        const checkMemory = () => {
            const memory = performance.memory;
            if (memory.usedJSHeapSize > memoryThreshold) {
                // Trigger garbage collection if available
                if ('gc' in window) {
                    window.gc();
                }
            }
        };

        setInterval(checkMemory, 60000); // Every minute
    }
}

