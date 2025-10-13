import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface EnhancedImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const EnhancedImageOptimizer: React.FC<EnhancedImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate optimized image URL
  const generateOptimizedUrl = useCallback((originalSrc: string, width?: number, quality?: number) => {
    if (!originalSrc) return '';
    
    // If it's already an optimized URL or external URL, return as is
    if (originalSrc.includes('cloudinary.com') || originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // For local images, we can add optimization parameters
    const url = new URL(originalSrc, window.location.origin);
    if (width) url.searchParams.set('w', width.toString());
    if (quality) url.searchParams.set('q', quality.toString());
    url.searchParams.set('f', 'auto'); // Auto format
    url.searchParams.set('c', 'fill'); // Crop mode
    
    return url.toString();
  }, []);

  // Generate blur placeholder
  const generateBlurDataURL = useCallback(() => {
    if (blurDataURL) return blurDataURL;
    
    // Generate a simple blur placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, 40, 40);
    }
    return canvas.toDataURL();
  }, [blurDataURL]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const imgElement = imgRef.current;
    if (!imgElement) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgElement);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, isInView]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  const optimizedSrc = isInView ? generateOptimizedUrl(src, width, quality) : '';
  const blurPlaceholder = generateBlurDataURL();

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      )}

      {/* Blur Placeholder */}
      {placeholder === 'blur' && isLoading && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurPlaceholder})`,
            backgroundSize: 'cover'
          }}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-400">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-slate-700 rounded-full flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && optimizedSrc && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            backgroundImage: placeholder === 'blur' ? `url(${blurPlaceholder})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
    </div>
  );
};

export default React.memo(EnhancedImageOptimizer);