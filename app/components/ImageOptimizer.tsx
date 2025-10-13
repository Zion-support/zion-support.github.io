<<<<<<< HEAD
import React from 'react';

=======
import { useState, useEffect } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
interface ImageOptimizerProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  src: string;
  alt: string;
  width?: number;
  height?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
  className?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  placeholder?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function ImageOptimizer({ className = '', children }: ImageOptimizerProps) {
=======
export default function ImageOptimizer({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false, 
  onLoad, 
  onError 
}: ImageOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
=======
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  lazy = true,
  quality = 80,
  format = 'webp',
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized src
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }
    
    const url = new URL(originalSrc, window.location.origin);
    url.searchParams.set('format', format);
    url.searchParams.set('quality', quality.toString());
    
    if (width) url.searchParams.set('width', width.toString());
    if (height) url.searchParams.set('height', height.toString());
    
    return url.toString();
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      },
      { threshold: 0.1 }
    );

<<<<<<< HEAD
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
=======
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  };

  const handleError = () => {
    setHasError(true);
<<<<<<< HEAD
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function ImageOptimizer({ className = '', children, ...props }: ImageOptimizerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
};

export default ImageOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
    setIsLoaded(false);
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500"
          style={{ width, height }}
        >
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm">Failed to load</p>
          </div>
        </div>
      )}

      {/* Main image */}
      {isInView && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default ImageOptimizer;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
