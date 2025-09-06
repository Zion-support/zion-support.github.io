import { ImageIcon, AlertTriangle } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { imageOptimization  } from '@/utils/performance';
import { logWarn } from '@/utils/productionLogger';
interface OptimizedImageProps {;
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next / image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib / utils';
import { image_optimization } from '@/utils / performance';
import { log_warn } from '@/utils / production_logger';
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;

      entries => {
        const [entry] = entries;        // Check condition
if ( {) {
  $2
}
          setIsInView (true);
          observer_ref.current?.disconnect ();

  useEffect(() => {;
    if (!lazy || priority || isInView) return;
    observerRef.current = new IntersectionObserver(;
      entries => {;

        const [entry] = entries;        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
        }
      }
      {

      }
    )
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current)
    }
    return () => {
      observerRef.current?.disconnect()
    }

              resourceEntry.responseEnd - resourceEntry.requestStart
            setMetrics({
              loadTime
              fileSize
              format: src.includes('.webp')
                ? 'webp'
                : src.includes('.avif')
                  ? 'avif'
                  : 'other'
              wasOptimized: src.includes('/_next/image')
            })
            // Log slow or large images
            if (loadTime > 2000) {
              logWarn('Slow image loading:', {
                src
                loadTime: `${loadTime.toFixed(2)}ms`
                size: `${(fileSize / 1024).toFixed(2)}KB`
              })
            }
            if (fileSize > 500 * 1024) {
              logWarn('Large image detected:', {
                src
                size: `${(fileSize / 1024).toFixed(2)}KB`
                loadTime: `${loadTime.toFixed(2)}ms`
              })

    } else {
      setIsLoading(false)
      setHasError(true)
      onError?.()
    }
  }

    const interval = setInterval((,) => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval)
          return prev
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [isLoading, showLoadingProgress])
  // Generate placeholder based on type
  const generatePlaceholder = () => {
    if (placeholder === 'none') return null
    const placeholderClassName = cn(
      'absolute inset-0 flex items-center justify-center'
      placeholder === 'shimmer' &&
        'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse'
      placeholder === 'blur' && 'backdrop-blur-sm bg-gray-200/50'
      placeholder === 'color' && 'bg-gray-200'
    )
    if (placeholder === 'color') {
              />
      )

  loading?: 'lazy' | 'eager';
  style?: React && React.CSSProperties;

import React, { useState, useRef, useEffect } from 'react',;
import Image from 'next/image',;
import { motion, AnimatePresence } from 'framer-motion',;
import { ImageIcon, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { imageOptimization } from '@/utils/performance',;
import { logWarn } from '@/utils/productionLogger',;
interface OptimizedImageProps {;
  src: string,;
  alt: string,;
  width?: number,;
  height?: number,;
  className?: string,;
  placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty',;
  placeholderColor?: string,;
  priority?: boolean,;
  quality?: number,;
  sizes?: string,;
  onLoad?: () => void,;
  onError?: () => void,;
  fallbackSrc?: string,;
  aspectRatio?: string,;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down',;
  lazy?: boolean,;
  retryCount?: number,;
  showLoadingProgress?: boolean,;
  fill?: boolean,;
  blurDataURL?: string,;
  loading?: 'lazy' | 'eager',;
  style?: React.CSSProperties,;

export const OptimizedImage: React.FC<OptimizedImageProps> = ({;
  src,;
  alt,;
  width,;
  height,;
  className,;
  placeholder = 'shimmer',;
  placeholderColor = '#f3f4f6',;
  priority = false,;
  quality = 75,;
  sizes,;
  onLoad,;
  onError,;
  fallbackSrc,;
  aspectRatio,;
  objectFit = 'cover',;
  lazy = true,;
  retryCount = 3,;
  showLoadingProgress = false,;
  fill = false,;
  blurDataURL,;
  loading = 'lazy',;
  style,;
  objectPosition = 'center',;
  ...props;
}) => {;

        }
      },;
      {;
        rootMargin: '50px', // Start loading 50px before image comes into view;

            // Log slow or large images;
            if (loadTime > 2000) {;
              logWarn('Slow image loading:', {;
                src,;

            if (fileSize > 500 * 1024) {;
              logWarn('Large image detected:', {;
                src,;
                size: `${(fileSize / 1024).toFixed(2)}KB`,;

              });
            }
          }
        });

    if (placeholder === 'color') {;
      return (;
        <div;
          className={placeholderClassName}
          style={{ backgroundColor: placeholderColor }}
        />;
      );
    }

    return (

  // Simulate loading progress for demo purposes;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const interval = set_interval ((, ) => {
      setLoadProgress (prev => {
        // Check condition
if ( {) {
  $2
}
          clear_interval (interval);
          return prev;
        }
        return prev + Math.random () * 15;
      });
    }, 100);
    return () => clear_interval (interval);
  }, [is_loading, showLoadingProgress]);
  // Generate placeholder based on type;
  const generate_placeholder = () =>: any {
    // Check condition
if (return null) {
  $2
}
    const placeholderClassName = cn (
      'absolute inset - 0 flex items - center justify - center',
      placeholder === 'shimmer' &&;
        'bg - gradient - to - r from - gray - 200 via - gray - 300 to - gray - 200 animate - pulse',
      placeholder === 'blur' && 'backdrop - blur - sm bg - gray - 200 / 50',
      placeholder === 'color' && 'bg - gray - 200');
    // Check condition
if ( {) {
  $2
}
              />);
    }
    return (
      <div className={placeholderClassName}>;
        <ImageIcon className='h - 8 w - 8 text - gray - 400' />;
      </div>);
  }
  // Container styles;
  const container_style: React.CSSProperties = {
    aspect_ratio:;
      aspect_ratio || (width && height ? `${width}/${height}` : undefined),
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,

  }
      >;
      <AnimatePresence>;

  },

  },

  // Container styles
  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
    width: width ? `${width}px` : undefined,

        {/* Placeholder */}

      <div className={placeholderClassName}>;
        <ImageIcon className='h-8 w-8 text-gray-400' />;
      </div>;
    );
  };

  // Container styles;
  const containerStyle: React && React.CSSProperties = {;
    aspectRatio:;
      aspectRatio || (width && height ? `${width}/${height}` : undefined),;
    width: width ? `${width}px` : undefined,;
    height: height ? `${height}px` : undefined,;
  };

      >;
      <AnimatePresence>;
        {/* Placeholder */}

            className="absolute inset-0"
          >
            {generatePlaceholder()}
;

            {/* Loading progress */}
            {showLoadingProgress && isLoading && loadProgress > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <motion.div

                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </motion.div>
        )}
        {/* Error state */}
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

          >
            <AlertTriangle className="h-8 w-8 mb-2" />
            <span className="text-sm">Failed to load image</span>
            {retries > 0 && (

            )}
          </motion.div>
        )}
        {/* Actual image */}

        {isInView && !hasError && (;
          <motion.img;
            src={optimizedSrc}
            srcSet={srcSet}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(;
              'w-full h-full transition-opacity duration-300',;
              `object-${objectFit}`,;
              isLoading ? 'opacity-0' : 'opacity-100';

            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

  opacity: 0 

      </AnimatePresence>;
    </div>;
  );
},;
// Gallery component with optimized loading;
interface ImageGalleryProps {;
  images: Array<{;
    src: string,;
    alt: string,;
    caption?: string;
  }>,;
  columns?: number,;
  aspectRatio?: string,;
  className?: string,;
  onImageClick?: (index: number) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  aspectRatio = '16/9',
  className,

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <span className="text-sm text-muted-foreground">
          {loadedCount}/{images.length} loaded
        </span>
      </div>

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onImageClick?.(index)}
          >
            <div className="relative">

              <OptimizedImage
                src={image.src}
                alt={image.alt}
                aspectRatio={aspectRatio}

              )}
            </div>
          </motion.div>
        ))}

    alt
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
    >
      {src ? (

        <OptimizedImage
          src={src}
          alt={alt}
          aspectRatio='1/1'
          objectFit='cover'

          className="rounded-full"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">

          {initials}

},;
};
}

    </div>;
  );
};

