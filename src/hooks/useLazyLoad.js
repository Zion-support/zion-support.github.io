import { useEffect, useRef, useState, useCallback } from 'react';
export const useLazyLoad = (options = {}) => {
    const { threshold = 0.1, rootMargin = '50px', preload = true, preloadDistance = 100 } = options;
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef(null);
    const load = useCallback(() => {
        if (!isLoaded) {
            setIsLoaded(true);
            setIsVisible(true);
        }
    }, [isLoaded]);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    load();
                }
            });
        }, {
            threshold,
            rootMargin: preload ? `${preloadDistance}px` : rootMargin
        });
        observer.observe(element);
        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, preload, preloadDistance, load]);
    return { isVisible, ref, load };
};
// Enhanced lazy loading for images
export const useLazyImage = (src, options = {}) => {
    const { isVisible, ref } = useLazyLoad(options);
    const [imageSrc, setImageSrc] = useState('');
    useEffect(() => {
        if (isVisible && src) {
            const img = new Image();
            img.onload = () => setImageSrc(src);
            img.src = src;
        }
    }, [isVisible, src]);
    return { imageSrc, ref, isVisible };
};
// Enhanced lazy loading for components
export const useLazyComponent = (importFn, options = {}) => {
    const { isVisible, ref } = useLazyLoad(options);
    const [Component, setComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (isVisible && !Component && !isLoading) {
            setIsLoading(true);
            importFn()
                .then((module) => {
                setComponent(() => module.default);
            })
                .catch((error) => {
                console.error('Failed to load lazy component:', error);
            })
                .finally(() => {
                setIsLoading(false);
            });
        }
    }, [isVisible, Component, isLoading, importFn]);
    return { Component, ref, isVisible, isLoading };
};
