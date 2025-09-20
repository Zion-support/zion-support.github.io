import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
export function OptimizedImage({ src, alt, width, height, className, placeholder = '/images/placeholder.svg', fallback = '/images/fallback.svg', priority = false, sizes = '100vw', loading = 'lazy', onLoad, onError, aspectRatio = 'auto', objectFit = 'cover', blur = false, quality = 75 }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef(null);
    const observerRef = useRef(null);
    // Intersection Observer for lazy loading
    useEffect(() => {
        if (priority || !imgRef.current)
            return;
        observerRef.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observerRef.current?.disconnect();
            }
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        observerRef.current.observe(imgRef.current);
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [priority]);
    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };
    const handleError = () => {
        setHasError(true);
        onError?.();
    };
    const getAspectRatioClass = () => {
        if (typeof aspectRatio === 'number') {
            return `aspect-[${aspectRatio}]`;
        }
        switch (aspectRatio) {
            case 'square':
                return 'aspect-square';
            case 'video':
                return 'aspect-video';
            default:
                return '';
        }
    };
    const getObjectFitClass = () => {
        switch (objectFit) {
            case 'cover':
                return 'object-cover';
            case 'contain':
                return 'object-contain';
            case 'fill':
                return 'object-fill';
            case 'none':
                return 'object-none';
            case 'scale-down':
                return 'object-scale-down';
            default:
                return 'object-cover';
        }
    };
    // Generate responsive image sources
    const generateSrcSet = (imageSrc) => {
        if (!imageSrc.includes('http'))
            return imageSrc;
        const baseUrl = imageSrc.split('?')[0];
        const params = new URLSearchParams(imageSrc.split('?')[1] || '');
        const widths = [320, 640, 768, 1024, 1280, 1920];
        const srcSet = widths
            .filter(w => !width || w <= width)
            .map(w => {
            params.set('w', w.toString());
            params.set('q', quality.toString());
            return `${baseUrl}?${params.toString()} ${w}w`;
        })
            .join(', ');
        return srcSet;
    };
    const currentSrc = hasError ? fallback : (isInView ? src : placeholder);
    const srcSet = generateSrcSet(currentSrc);
    return (<div className={cn('relative overflow-hidden', getAspectRatioClass(), className)} style={{
            width: width ? `${width}px` : 'auto',
            height: height ? `${height}px` : 'auto'
        }}>
      <AnimatePresence mode="wait">
        {!isLoaded && (<motion.div key="placeholder" className="absolute inset-0 bg-zion-slate-light/20 animate-pulse" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}/>)}
      </AnimatePresence>

export default OptimizedImage;
