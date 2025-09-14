import { useState, useEffect } from 'react';

export function useImageOptimization(src, options = {}) {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    quality = 85,
    format = 'webp',
    width,
    height,
    lazy = true
  } = options;

  useEffect(() => {
    if (!src) return;

    const optimizeImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Create optimized image URL
        const params = new URLSearchParams({
          q: quality.toString(),
          f: format,
          ...(width && { w: width.toString() }),
          ...(height && { h: height.toString() })
        });

        const optimizedUrl = `${src}?${params.toString()}`;
        setOptimizedSrc(optimizedUrl);
      } catch (err) {
        setError(err);
        setOptimizedSrc(src); // Fallback to original
      } finally {
        setIsLoading(false);
      }
    };

    optimizeImage();
  }, [src, quality, format, width, height]);

  return { optimizedSrc, isLoading, error };
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  quality = 85,
  format = 'webp',
  width,
  height,
  lazy = true,
  ...props 
}) {
  const { optimizedSrc, isLoading, error } = useImageOptimization(src, {
    quality,
    format,
    width,
    height,
    lazy
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={optimizedSrc || src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={() => {
          if (error) {
            console.warn('Image optimization failed, using original:', error);
          }
        }}
        {...props}
      />
    </div>
  );
}