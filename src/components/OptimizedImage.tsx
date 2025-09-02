import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, AlertCircle, Loader2 } from 'lucide-react';

interface OptimizedImageProps extends React.PropsWithChildren<{}> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'shimmer' | 'none';
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  lazy?: boolean;
  quality?: number;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  rounded?: boolean;
  shadow?: boolean;
  hover?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'shimmer',
  fallbackSrc = '/images/placeholder.jpg',
  onLoad,
  onError,
  lazy = true,
  quality = 75,
  sizes = '100vw',
  objectFit = 'cover',
  rounded = false,
  shadow = false,
  hover = false
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    observerRef.current = observer;
    observer.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lazy, priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallbackSrc);
    onError?.(new Error(`Failed to load image: ${src}`));
  };

  // Generate optimized src with quality parameter
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }
    
    // For external images, you might want to use an image optimization service
    // For now, return the original src
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(imageSrc);

  // Placeholder component
  const Placeholder = () => {
    if (placeholder === 'none') return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${
          rounded ? 'rounded-lg' : ''
        }`}
      >
        {placeholder === 'shimmer' ? (
          <div className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 w-full h-full" />
        ) : (
          <ImageIcon className="w-8 h-8 text-gray-400" />
        )}
      </motion.div>
    );
  };

  // Error component
  const ErrorComponent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`absolute inset-0 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center ${
        rounded ? 'rounded-lg' : ''
      }`}
    >
      <AlertCircle className="w-8 h-8 text-gray-400 mb-2" />
      <span className="text-sm text-gray-500 dark:text-gray-400">Failed to load</span>
    </motion.div>
  );

  // Loading component
  const LoadingComponent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${
        rounded ? 'rounded-lg' : ''
      }`}
    >
      <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
    </motion.div>
  );

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className} ${
        rounded ? 'rounded-lg' : ''
      } ${shadow ? 'shadow-lg' : ''} ${
        hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
      }`}
      style={{ width, height }}
    >
      <AnimatePresence>
        {isLoading && !hasError && <LoadingComponent />}
        {!isIntersecting && lazy && !priority && <Placeholder />}
        {hasError && <ErrorComponent />}
      </AnimatePresence>

      {isIntersecting && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-${objectFit} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
};