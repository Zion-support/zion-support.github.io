import React, { useState, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder,
  quality = 75,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
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
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  // Generate optimized image URL
  const getOptimizedSrc = () => {
    if (isError) return placeholder || '/placeholder-image.svg';
    
    // In production, you might want to use a service like Cloudinary or Next.js Image
    // For now, we'll return the original src
    return src;
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!isInView && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}
      
      {isInView && (
        <>
          <img
            src={getOptimizedSrc()}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            style={{
              width: width ? `${width}px` : '100%',
              height: height ? `${height}px` : 'auto'
            }}
          />
          
          {!isLoaded && !isError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageOptimizer;