import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, AlertCircle, Loader2 } from 'lucide-react';

interface OptimizedImageProps {
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
    if (priority || !lazy) {
      setIsIntersecting(true);
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, lazy]);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleImageError = () => {
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
      onError?.(new Error(`Failed to load image: ${src}`));
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Generate optimized src with quality parameter
  const getOptimizedSrc = (src: string) => {
    if (src.startsWith('data:') || src.startsWith('blob:')) {
      return src;
    }
    
    // Add quality parameter for external images if possible
    try {
      const url = new URL(src);
      if (url.searchParams.has('quality')) {
        return src;
      }
      url.searchParams.set('quality', quality.toString());
      return url.toString();
    } catch {
      return src;
    }
  };

  const optimizedSrc = getOptimizedSrc(imageSrc);

  // Base classes
  const baseClasses = [
    'transition-all duration-300',
    rounded ? 'rounded-lg' : '',
    shadow ? 'shadow-lg' : '',
    hover ? 'hover:scale-105 hover:shadow-xl' : '',
    objectFit === 'cover' ? 'object-cover' : '',
    objectFit === 'contain' ? 'object-contain' : '',
    objectFit === 'fill' ? 'object-fill' : '',
    objectFit === 'none' ? 'object-none' : '',
    objectFit === 'scale-down' ? 'object-scale-down' : '',
    className
  ].filter(Boolean).join(' ');

  // Loading skeleton
  if (!isIntersecting) {
    return (
      <div 
        className={`${baseClasses} bg-gray-200 dark:bg-gray-700 animate-pulse`}
        style={{ width, height }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      </div>
    );
  }

  // Error state
  if (hasError) {
    return (
      <div 
        className={`${baseClasses} bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
        style={{ width, height }}
      >
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" style={{ width, height }}>
      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center z-10"
          >
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin mx-auto mb-2" />
              <p className="text-xs text-gray-500">Loading...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder */}
      {placeholder === 'shimmer' && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}

      {/* Main image */}
      <motion.img
        ref={imgRef}
        src={optimizedSrc}
        alt={alt}
        className={baseClasses}
        style={{ width: '100%', height: '100%' }}
        loading={lazy ? 'lazy' : 'eager'}
        sizes={sizes}
        onLoad={handleImageLoad}
        onError={handleImageError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Fallback icon for broken images */}
      {!isLoading && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <ImageIcon className="w-16 h-16 text-gray-400" />
        </div>
      )}
    </div>
  );
};

// Specialized image components
export const AvatarImage: React.FC<Omit<OptimizedImageProps, 'rounded' | 'objectFit'> & { size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  size = 'md', 
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <OptimizedImage
      {...props}
      className={`${sizeClasses[size]} rounded-full object-cover ${props.className || ''}`}
      rounded={false}
      objectFit="cover"
    />
  );
};

export const CardImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage
    {...props}
    className={`w-full h-48 ${props.className || ''}`}
    objectFit="cover"
    rounded
    shadow
    hover
  />
);

export const HeroImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage
    {...props}
    className={`w-full h-96 ${props.className || ''}`}
    objectFit="cover"
    priority
    lazy={false}
  />
);

export default OptimizedImage;
