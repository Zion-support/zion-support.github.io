import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedImageLoaderProps {

  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const EnhancedImageLoader: React.FC<EnhancedImageLoaderProps> = ({

  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  fallbackSrc = '/images/placeholder.jpg',
  onLoad,
  onError}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {

    if (priority) {

      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {

        rootMargin: '50px',
        threshold: 0.1}
    );

    if (imgRef.current) {

      observerRef.current.observe(imgRef.current);
    }

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

  const currentSrc = hasError ? fallbackSrc : src;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <AnimatePresence>
        {/* Blur placeholder */}
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"
          />
        )}

        {/* Main image */}
        {isInView && (
          <motion.img
            src={currentSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${

              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}

        {/* Loading indicator */}
        {!isLoaded && isInView && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-100 bg-opacity-75"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-8 h-8 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
              <span className="text-sm text-slate-600">Loading...</span>
            </div>
          </motion.div>
        )}

        {/* Error state */}
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-100"
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 text-slate-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-500">Image unavailable</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedImageLoader;