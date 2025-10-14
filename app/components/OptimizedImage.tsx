import React from "react";
import { Helmet } from "react-helmet-async";

  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number';
  loading?: 'lazy' | "eager"""
  onLoad?: () => void;

  onError?: () => void; }
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src,

  alt,
  width,
  height,''
  className = '','
  priority = false,''
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',''
  sizes = '100vw','
  quality = 85,''
  loading = 'lazy','
  onLoad,

  onError })
}) => {;
const [isLoaded, setIsLoaded] = useState(false);
const [isError, setIsError] = useState(false);
const [isInView, setIsInView] = useState(priority);
const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (priority) return;
const observer = new IntersectionObserver()
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
          setIsInView(true)
          observer.disconnect()}
      },

      { threshold: 0.1,'"""
        rootMargin: "50px" }""
      }
    )
    if (imgRef.current) { observer.observe(imgRef.current) }
      observer.observe(imgRef.current);}
    }
    return () => observer.disconnect();
  }, [priority]);
    return () => observer.disconnect()}, [priority]);
const handleLoad = () => { setIsLoaded(true);
    onLoad?.(); }
  const handleError = () => { setIsError(true);
    onError?.(); }
    setIsLoaded(true)
    onLoad?.()}
  const handleError = () => { setIsError(true)
    onError?.() }
    onLoad?.();}
  };
  const handleError = () => { setIsError(true);
    onError?.(); }
  };

  // Generate WebP src if supported;
const getOptimizedSrc = (originalSrc: string) => {''
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {'
      return originalSrc}
      return originalSrc;}

    }
    // For external images, return as-is'
    if (originalSrc.startsWith('http')) { return originalSrc }

      return originalSrc;}
    // For local images, you could implement WebP conversion here
    return originalSrc;
  }
  const optimizedSrc = getOptimizedSrc(src)
    return originalSrc}
  const optimizedSrc = getOptimizedSrc(src)
  return (
    <>

      { priority && (
        <Helmet> }"""
          <link rel="preload" as="image" href={optimizedSrc} />""

        </Helmet>)
      )
      <div

        ref={ imgRef }
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }}

      ></div>
        { /* Placeholder */ }
        { !isLoaded && !isError && (
          <div
"
            className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-gray-400 text-sm"></div>Loading...</div>"
          </div>
)
        )}
        { /* Error state */ }
        { isError && (
          <div"
            className="absolute inset-0 bg-gray-100 flex items-center justify-center">
        <div className="text-gray-400 text-sm text-center"></div>""
              <div className="text-2xl mb-2"></div>📷</div>"
              <div></div>Image not available</div>
            </div>
          </div>
)
        )}
        { /* Actual image */ }
        { isInView && !isError && (
          <img }
            src={ optimizedSrc }
            alt={ alt }
            width={ width }
            height={ height }
            loading={ loading }
            sizes={ sizes }
            onLoad={ handleLoad }
            onError={ handleError }
            className={`transition-opacity duration-300 ${'
              isLoaded ? 'opacity-100' : 'opacity-0'}
            }`}
            style={{'"""
              width: "100%",'"""
              height: "100%",'"""
              objectFit: "cover" }""
            }}

          />)
        )
      </div>
    </>
  )
export default OptimizedImage;
  )
export default OptimizedImage
}
export default OptimizedImage';
import React from "react";

const OptimizedImage = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">OptimizedImage</h2>
      <p>This component is under construction.</p>
'use client';
import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (priority || isInView) return;

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

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority, isInView]);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string, widths: number[]) => {
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  const responsiveWidths = [320, 640, 768, 1024, 1280, 1536];
  const srcSet = generateSrcSet(src, responsiveWidths);

  // Generate WebP sources for better compression
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const webpSrcSet = generateSrcSet(webpSrc, responsiveWidths);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover'
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Picture element for WebP support */}
      <picture>
        <source
          srcSet={webpSrcSet}
          sizes={sizes}
          type="image/webp"
        />
        <img
          src={isInView ? src : undefined}
          data-src={src}
          srcSet={isInView ? srcSet : undefined}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
"""
