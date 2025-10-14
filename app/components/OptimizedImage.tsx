import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  sizes = '100vw',
  quality = 85,
  loading = 'lazy',
  onLoad,
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
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }
    // For local images, you could implement WebP conversion here
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <>
      {priority && (
        <Helmet>
          <link rel="preload" as="image" href={optimizedSrc} />
        </Helmet>
      )}
      <div ref={imgRef} className={`relative ${className}`}>
        {/* Placeholder */}
        {!isLoaded && !isError && (
          <div className="flex items-center justify-center bg-gray-100 rounded-lg" style={{ width, height }}>
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg text-gray-500" style={{ width, height }}>
            <div className="text-2xl mb-2">📷</div>
            <div>Image not available</div>
          </div>
        )}

        {/* Actual image */}
        {isInView && !isError && (
          <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
          />
        )}
      </div>
    </>
  );
};

export default OptimizedImage;
