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
            document.head.appendChild(criticalFonts)};
        preloadCriticalResources()}, []);
    // Optimize images on route change
    useEffect(() => {
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                // Add loading="lazy" to images below the fold
                if (img.getBoundingClientRect().top > window.innerHeight) {
<<<<<<< HEAD
                    img.loading = 'lazy';

=======
                    img.loading = 'lazy'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                // Add decoding="async" for better performance
                img.decoding = 'async';
                // Add error handling
                img.onerror = () => {
                    img.style.display = 'none'}})};
        // Use requestIdleCallback for non-critical optimization
        if ('requestIdleCallback' in window) {
<<<<<<< HEAD
            requestIdleCallback(optimizeImages);

        else {
            setTimeout(optimizeImages, 100);

=======
            requestIdleCallback(optimizeImages)}
        else {
            setTimeout(optimizeImages, 100)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }, [location.pathname]);
    // Memoize expensive computations
    const optimizedChildren = useMemo(() => children, [children]);
    // Optimize scroll performance
    const handleScroll = useCallback(() => {
        // Throttle scroll events for better performance
        if (!window.scrollTimeout) {
            window.scrollTimeout = setTimeout(() => {
                // Handle scroll-based optimizations here
<<<<<<< HEAD
                window.scrollTimeout = null;
            }, 16); // ~60fps

=======
                window.scrollTimeout = null}, 16); // ~60fps
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll)}, [handleScroll]);
    // Service Worker registration for caching
    useEffect(() => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
<<<<<<< HEAD
<<<<<<< HEAD
                    // // // console.log('SW registered: ', registration);
=======
                    // // // // // // // console.log('SW registered: ', registration);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New service worker available
<<<<<<< HEAD
                                    // // // console.log('New service worker available');

=======
                                    // // // // // // // console.log('New service worker available');
                                }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                            });

                    });
                })
                .catch((registrationError) => {
<<<<<<< HEAD
                    // // // console.warn('SW registration failed: ', registrationError);
=======
                    // // // // // // // console.warn('SW registration failed: ', registrationError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                });

=======
                console.log('SW registered: ', registration)})
                .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError)})}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
                            observer.unobserve(target);


                });
            }, {
=======
                            observer.unobserve(target)}
                    }
                })}, {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                rootMargin: '50px',
                threshold: 0.1,
            });
            // Observe all images with data-src
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach((img) => observer.observe(img));
<<<<<<< HEAD
            return () => observer.disconnect();

=======
            return () => observer.disconnect()}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }, [location.pathname]);
    return <>{optimizedChildren}</>};
// Add global performance optimizations
if (typeof window !== 'undefined') {
    // Optimize long tasks
    if ('scheduler' in window && 'postTask' in window.scheduler) {
        window.scheduler.postTask(() => {
            // Run non-critical tasks during idle time
<<<<<<< HEAD
        }, { priority: 'background' });

=======
        }, { priority: 'background' })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    // Optimize memory usage
    if ('memory' in performance) {
        const memoryThreshold = 50 * 1024 * 1024; // 50MB
        if (performance.memory.usedJSHeapSize > memoryThreshold) {
            // Trigger garbage collection if available
            if ('gc' in window) {
<<<<<<< HEAD
                window.gc();




=======
                window.gc()}
        }
    }
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export default PerformanceOptimizer;
}}}}}}}}}}}}}}}