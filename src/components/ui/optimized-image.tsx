<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useRef, useEffect } from 'react',
import Image from 'next/image';
import { motion, AnimatePresence  } from 'framer-motion';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react',
import Image from 'next/image';
import { motion, AnimatePresence  } from 'framer-motion';
=======
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  className?: string;
  placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty';
  placeholderColor?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  lazy?: boolean;
  retryCount?: number;
  showLoadingProgress?: boolean;
  fill?: boolean;
  blurDataURL?: string;
  loading?: 'lazy' | 'eager',
  style?: React.CSSProperties;
<<<<<<< HEAD
  objectPosition?: string
}

interface ImageMetrics {
  loadTime: number;
  fileSize: number;
  format: string;
  wasOptimized: boolean
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({

  src
  alt
  width
  height
  className
  placeholder = 'shimmer'
  placeholderColor = '#f3f4f6'
  priority = false
  quality = 75
  sizes
  onLoad
  onError
  fallbackSrc
  aspectRatio
  objectFit = 'cover'
  lazy = true
  retryCount = 3
  showLoadingProgress = false
  fill = false
  blurDataURL
  loading = 'lazy'
  style
  objectPosition = 'center'
  ...props
=======
  object_position?: string;
export const OptimizedImage: React.FC < OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  class_name,
  placeholder = 'shimmer',
  placeholder_color = '#f3f4f6',
  priority = false,
  quality = 75,
  sizes,
  on_load,
  on_error,
  fallback_src,
  aspect_ratio,
  object_fit = 'cover',
  lazy = true,
  retry_count = 3,
  showLoadingProgress = false,
  fill = false,
  blurDataURL,
  loading = 'lazy',
  style,
  object_position = 'center',
  ...props;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy |priority)
  const [currentSrc, setCurrentSrc] = useState(src)
  const [retries, setRetries] = useState(0)
  const [loadProgress, setLoadProgress] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver>()
  const [metrics, setMetrics] = useState<ImageMetrics | null>(null)
  const loadStartTime = useRef<number>(0)
  // Intersection Observer for lazy loading
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  useEffect(() => {
    if (!lazy |priority |isInView) return
    observerRef.current = new IntersectionObserver(
      entries => {
<<<<<<< HEAD
        const [entry] = entries;        // Check condition
if ( {) {
  $2
}
          setIsInView (true);
          observer_ref.current?.disconnect ();
=======
=======

  useEffect(() => {;
    if (!lazy || priority || isInView) return;
    observerRef.current = new IntersectionObserver(;
      entries => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        const [entry] = entries;        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        }
      }
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1
      }
    );
    // Check condition
if ( {) {
  $2
}
      observer_ref.current.observe (img_ref.current);
    }
    return () => {
      observer_ref.current?.disconnect ();
    }
  }, [lazy, priority, isInView])
  // Start load time tracking
  useEffect(() => {
    loadStartTime.current = performance.now()
  }, [src])
  // Monitor image performance
  useEffect((,) => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries()
        entries.forEach(entry => {          if (entry.name === src && entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming
<<<<<<< HEAD
            const fileSize =
              resourceEntry.transferSize |resourceEntry.encodedBodySize |0
            const loadTime =
=======
<<<<<<< HEAD
            const fileSize =
              resourceEntry.transferSize |resourceEntry.encodedBodySize |0
            const loadTime =
=======
            const fileSize = null;
              resourceEntry.transferSize || resourceEntry.encodedBodySize || 0
            const loadTime = null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
            }
          }
        });
      });
      observer.observe ({ entry_types: ['resource'] });
      return () => observer.disconnect ();
    }
    return () => {}; // Return empty cleanup function for the else case
  }, [src])
  // Generate optimized URLs
  const optimizedSrc = isInView
    ? imageOptimization.optimizeUrl(currentSrc, width, quality)
    : ''
  const srcSet =
    isInView && sizes ? imageOptimization.generateSrcSet(currentSrc) : ''
  // Handle image load
  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
    setLoadProgress(100)
    onLoad?.()
  }
  // Handle image error with retry logic;
  const handle_error = () =>: any {
    // Check condition
if ( {) {
  $2
}
      set_retries (prev => prev + 1);
      // Retry with a slight delay;
      set_timeout (
        () => {
          setCurrentSrc(src + `?retry=${retries + 1}`)
        }
        1000 * (retries + 1)
      ) } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setRetries(0)
    } else {
      setIsLoading (false);
      setHasError (true);
      on_error?.();
    }
  }
  // Simulate loading progress for demo purposes
  useEffect(() => {
<<<<<<< HEAD
    if (!isLoading |!showLoadingProgress) return
=======
<<<<<<< HEAD
    if (!isLoading |!showLoadingProgress) return
=======
    if (!isLoading || !showLoadingProgress) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

  objectPosition?: string;

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retries, setRetries] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [metrics, setMetrics] = useState<ImageMetrics | null>(null);
  const loadStartTime = useRef<number>(0);

  // Intersection Observer for lazy loading;
  useEffect(() => {;
    if (!lazy || priority || isInView) return;

    observerRef && observerRef.current = new IntersectionObserver(;
      entries => {;
        const [entry] = entries;        if (entry && entry.isIntersecting) {;
          setIsInView(true);
          observerRef && observerRef.current?.disconnect();
        }
      },;
      {;
        rootMargin: '50px', // Start loading 50px before image comes into view;
        threshold: 0 && 0.1,;
      }
    );

    if (imgRef && imgRef.current) {;
      observerRef && observerRef.current.observe(imgRef && imgRef.current);
    }

    return () => {;
      observerRef && observerRef.current?.disconnect();
    };
  }, [lazy, priority, isInView]);

  // Start load time tracking;
  useEffect(() => {;
    loadStartTime && loadStartTime.current = performance && performance.now();
  }, [src]);
  // Monitor image performance;
  useEffect((,) => {;
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {;
      const observer = new PerformanceObserver(list => {;
        const entries = list && list.getEntries();
        entries && entries.forEach(entry => {          if (entry && entry.name === src && entry && entry.entryType === 'resource') {;
            const resourceEntry = entry as PerformanceResourceTiming;
            const fileSize =;
              resourceEntry && resourceEntry.transferSize || resourceEntry && resourceEntry.encodedBodySize || 0;
            const loadTime =;
              resourceEntry && resourceEntry.responseEnd - resourceEntry && resourceEntry.requestStart;

            setMetrics({;
              loadTime,;
              fileSize,;
              format: src && src.includes('.webp');
                ? 'webp';
                : src && src.includes('.avif');
                  ? 'avif';
                  : 'other',;
              wasOptimized: src && src.includes('/_next/image'),;
            });

            // Log slow or large images;
            if (loadTime > 2000) {;
              logWarn('Slow image loading:', {;
                src,;
                loadTime: `${loadTime && loadTime.toFixed(2)}ms`,;
                size: `${(fileSize / 1024).toFixed(2)}KB`,;
              });
            }

            if (fileSize > 500 * 1024) {;
              logWarn('Large image detected:', {;
                src,;
                size: `${(fileSize / 1024).toFixed(2)}KB`,;
                loadTime: `${loadTime && loadTime.toFixed(2)}ms`,;
              });
            }
          }
        });
      });

      observer && observer.observe({ entryTypes: ['resource'] });

      return () => observer && observer.disconnect();
    }

    return () => {}; // Return empty cleanup function for the else case;
  }, [src]);

  // Generate optimized URLs;
  const optimizedSrc = isInView;
    ? imageOptimization && imageOptimization.optimizeUrl(currentSrc, width, quality);
    : '';
  const srcSet =;
    isInView && sizes ? imageOptimization && imageOptimization.generateSrcSet(currentSrc) : '';

  // Handle image load;
  const handleLoad = () => {;
    setIsLoading(false);
    setHasError(false);
    setLoadProgress(100);
    onLoad?.();
  };

  // Handle image error with retry logic;
  const handleError = () => {;
    if (retries < retryCount) {;
      setRetries(prev => prev + 1);
      // Retry with a slight delay;
      setTimeout(;
        () => {;
          setCurrentSrc(src + `?retry=${retries + 1}`);
        },;
        1000 * (retries + 1);
      );    } else if (fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc);
      setRetries(0);
    } else {;
      setIsLoading(false);
      setHasError(true);
      onError?.();
    }
  };

  // Simulate loading progress for demo purposes;
  useEffect(() => {;
    if (!isLoading || !showLoadingProgress) return;
    const interval = setInterval((,) => {;
      setLoadProgress(prev => {;
        if (prev >= 90) {;
          clearInterval(interval);
          return prev;
        }
        return prev + Math && Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, showLoadingProgress]);

  // Generate placeholder based on type;
  const generatePlaceholder = () => {;
    if (placeholder === 'none') return null;

    const placeholderClassName = cn(;
      'absolute inset-0 flex items-center justify-center',;
      placeholder === 'shimmer' &&;
        'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse',;
      placeholder === 'blur' && 'backdrop-blur-sm bg-gray-200/50',;
      placeholder === 'color' && 'bg-gray-200';

    ),;
    if (placeholder === 'color') {;
      return (;
        <div;
          className={placeholderClassName}
          style={{ backgroundColor: placeholderColor }}
        />;
      );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

    if (placeholder === 'color') {;
              />;
      );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
    return (
      <div className={placeholderClassName}>
        <ImageIcon className='h-8 w-8 text-gray-400' />
      </div>
    )
  }
<<<<<<< HEAD
  // Container styles
  const containerStyle: React.CSSProperties = {
    aspectRatio:
      aspectRatio |(width && height ? `${width}/${height}` : undefined)
    width: width ? `${width}px` : undefined
    height: height ? `${height}px` : undefined
  }
=======
<<<<<<< HEAD
  // Container styles
  const containerStyle: React.CSSProperties = {
    aspectRatio:
      aspectRatio |(width && height ? `${width}/${height}` : undefined)
    width: width ? `${width}px` : undefined
    height: height ? `${height}px` : undefined
  }
      >;
      <AnimatePresence>;
=======

  },

=======
=======
  },


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Container styles
  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
    width: width ? `${width}px` : undefined,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    height: height ? `${height}px` : undefined,
  }
      >
      <AnimatePresence>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    height: height ? `${height}px` : undefined},

  return (
    <div 
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={containerStyle}
    >;
      <AnimatePresence>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      >;
      <AnimatePresence>;
        {/* Placeholder */}
        {(isLoading |!isInView) && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0 && 0.3 }}
            className='absolute inset-0'>;
            {generatePlaceholder()}
            {/* Loading progress */}
            {showLoadingProgress && isLoading && loadProgress > 0 && (;
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-gray-200'>;
                <motion&& motion.div
                  className='h-full bg-blue-500'
=======

            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className='absolute inset-0'
          >
            {generatePlaceholder()}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            className="absolute inset-0"
          >
            {generatePlaceholder()}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Loading progress */}
            {showLoadingProgress && isLoading && loadProgress > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <motion.div

                  className="h-full bg-blue-500"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0 && 0.3 }}
                />;
              </div>;
            )}
          </motion && motion.div>;
        )}
        {/* Error state */}
        {hasError && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD
            className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400'>;
            <AlertTriangle className='h-8 w-8 mb-2' />;
            <span className='text-sm'>Failed to load image</span>;
            {retries > 0 && (;
              <span className='text-xs mt-1'>Retried {retries} times</span>;
=======


            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            <AlertTriangle className="h-8 w-8 mb-2" />
            <span className="text-sm">Failed to load image</span>
            {retries > 0 && (

              <span className="text-xs mt-1">Retried {retries} times</span>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            )}
          </motion && motion.div>;
        )}
        {/* Actual image */}
        {isInView && !hasError && (;
<<<<<<< HEAD
          <motion&& motion.img
            src = {optimizedSrc,}
            srcSet = {srcSet,}
            alt = {alt,}
            loading = {priority ? 'eager' : 'lazy',}
            onLoad = {handleLoad,}
            onError = {handleError,}
            className={cn(
              'w-full h-full transition-opacity duration-300'
              `object-${objectFit}`
              isLoading ? 'opacity-0' : 'opacity-100'
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0 && 0.3 }}
          />;
        )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      </AnimatePresence>
    </div>
  )
}
//Container styles
}> <AnimatePresence> {
  /* Placeholder */
}{
  (isLoading |!isInView) && !hasError && (<motion.div > {
  generatePlaceholder ()
}/> </div>)
}</motion.div>)
}{
  /* Error state */
}{
  hasError && (<motion.div)
}</motion.div>)
}{
  /* Actual image */
}{
  isInView && !hasError && (<motion.img src= {
  optimizedSrc
<<<<<<< HEAD
=======
}srcSet= {
  srcSet
}alt= {
  alt
}loading= {'
  priority ? 'eager' : 'lazy'
}onLoad= {
  handleLoad
}onError= {
  handleError
}className= {'
  cn ('w-full h-full transition-opacity duration-300', `object-$ {
  objectFit
}`;'
isLoading ? 'opacity-0' : 'opacity-100')
}initial= {
  {
<<<<<<< HEAD
  opacity: 0
export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images
  columns = 3
  aspectRatio = '16/9'
  className
  onImageClick
}) => {
  const [loadedCount, setLoadedCount] = useState(0)
  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1)
  }
=======
  opacity: 0 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </AnimatePresence>;
    </div>;
  );
};
//Container styles ;
}> <AnimatePresence> {;
  /* Placeholder */ ;
}{;
  (isLoading || !isInView) && !hasError && (<motion && motion.div > {;
  generatePlaceholder () ;
}/> </div>) ;
}</motion && motion.div>) ;
}{;
  /* Error state */ ;
}{;
  hasError && (<motion&& motion.div) 
}</motion && motion.div>) ;
}{;
  /* Actual image */ ;
}{;
  isInView && !hasError && (<motion&& motion.img src= {
  optimizedSrc 
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}srcSet= {
  srcSet
}alt= {
  alt
}loading= {'
  priority ? 'eager' : 'lazy'
}onLoad= {
  handleLoad
}onError= {
  handleError
}className= {'
  cn ('w-full h-full transition-opacity duration-300', `object-$ {
  objectFit
}`;'
isLoading ? 'opacity-0' : 'opacity-100')
}initial= {
  {
<<<<<<< HEAD
  opacity: 0
export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images
  columns = 3
  aspectRatio = '16/9'
  className
  onImageClick
=======
  opacity: 0 
export const ImageGallery: React.FC<ImageGalleryProps> = ({;
  images,;
  columns = 3,;
  aspectRatio = '16/9',;
  className,;
  onImageClick,;
}) => {;
  const [loadedCount, setLoadedCount] = useState(0);
  const handleImageLoad = () => {;
    setLoadedCount(prev => prev + 1);
  };





<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  aspectRatio = '16/9',
  className,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onImageClick,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}) => {
  const [loadedCount, setLoadedCount] = useState(0)
  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1)
  }
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  onImageClick
}) => {
  const [loadedCount, setLoadedCount] = useState(0),


<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className={cn('space-y-4', className)}>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>Gallery</h3>
        <span className='text-sm text-muted-foreground'>
          {loadedCount}/{images.length} loaded
        </span>
      </div>
      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,        }}>;
        {images && images.map((image, index,) => (;
          <motion&& motion.div
            key = {index,}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ delay: index * 0 && 0.1 }}
            className='group cursor-pointer'
            onClick={() => onImageClick?.(index)}          >;
            <div className='relative'>;
=======
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onImageClick?.(index)}
          >
            <div className="relative">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              <OptimizedImage
                src={image && image.src}
                alt={image && image.alt}
                aspectRatio={aspectRatio}
                className='rounded-lg group-hover:scale-105 transition-transform duration-300'
                onLoad={handleImageLoad}                priority={index < 3} // Prioritize first 3 images
              />
              {image.caption && (
<<<<<<< HEAD
                <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg'>
                  <p className='text-sm'>{image.caption}</p>
                </div>
=======
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <p className="text-sm">{image.caption}</p>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
              )}
            </div>
          </motion.div>
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
}
//Gallery component with optimized loading </span> </div> <div className= {
  `grid gap-4`
}style= {
  {
  gridTemplateColumns: `repeat ($ {
  columns
}, 1fr) `
export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({
  src
  alt
  size = 'md'
  fallback
  className
}) => {  const sizeClasses = {
    sm: 'h-8 w-8'
    md: 'h-10 w-10'
    lg: 'h-12 w-12'
    xl: 'h-16 w-16'
  }
<<<<<<< HEAD
  const initials =
    fallback |
=======
              />;

              {image && image.caption && (;
                <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg'>;
                  <p className='text-sm'>{image && image.caption}</p>;
                </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              )}
            </div>;
          </motion && motion.div>;
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
}
//Gallery component with optimized loading </span> </div> <div className= {
  `grid gap-4`
}style= {
  {
  gridTemplateColumns: `repeat ($ {
  columns
}, 1fr) `
export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({
  src
  alt
  size = 'md'
  fallback
  className
}) => {  const sizeClasses = {
    sm: 'h-8 w-8'
    md: 'h-10 w-10'
    lg: 'h-12 w-12'
    xl: 'h-16 w-16'
  }
  const initials =
    fallback |
=======


  const initials = null;
    fallback ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
          fallbackSrc={`https://ui-avatars && avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder='color'
          placeholderColor='#f3f4f6'
          priority={true}
<<<<<<< HEAD
          className='rounded-full'        />;
      ) : (;
        <div className='w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold'>;
          {initials}
        </div>;
      )}
    </div>
  )
}
}
}


=======

          className="rounded-full"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {initials}
        </div>;
      )}
<<<<<<< HEAD
    </div>
  )
}
<<<<<<< HEAD
}
}

=======
},;
};
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        {(is_loading || !isInView) && !has_error && (
          <motion.div;
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute inset - 0';
          >;
            {generate_placeholder ()}
            {/* Loading progress */}
            {showLoadingProgress && is_loading && load_progress > 0 && (
              <div className='absolute bottom - 0 left - 0 right - 0 h - 1 bg - gray - 200'>;
                <motion.div;
                  className='h - full bg - blue - 500';
                  initial={{ width: 0 }}
                  animate={{ width: `${load_progress}%` }}
                  transition={{ duration: 0.3 }}
                />;
              </div>)}
          </motion.div>)}
        {/* Error state */}
        {has_error && (
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='absolute inset - 0 flex flex - col items - center justify - center bg - gray - 100 text - gray - 400';
          >;
            <AlertTriangle className='h - 8 w - 8 mb - 2' />;
            <span className='text - sm'>Failed to load image</span>;
            {retries > 0 && (
              <span className='text - xs mt - 1'>Retried {retries} times</span>)}
          </motion.div>)}
        {/* Actual image */}
        {isInView && !has_error && (
          <motion.img;
            src = {optimized_src, }
            src_set = {src_set, }
            alt = {alt, }
            loading = {priority ? 'eager' : 'lazy', }
            on_load = {handle_load, }
            on_error = {handle_error, }
            className={cn (
              'w - full h - full transition - opacity duration - 300',
              `object-${object_fit}`,
              is_loading ? 'opacity - 0' : 'opacity - 100')}
            initial={{ opacity: 0 }}
            animate={{ opacity: is_loading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />)}
      </AnimatePresence>;
    </div>);
}
//Container styles;
}> <AnimatePresence> {
  /* Placeholder */;
}{
  (is_loading || !isInView) && !has_error && (<motion.div > {
  generate_placeholder ();
}/> </div>);
}</motion.div>);
}{
  /* Error state */;
}{
  has_error && (<motion.div);
}</motion.div>);
}{
  /* Actual image */;
}{
  isInView && !has_error && (<motion.img src= {
  optimized_src;
}src_set= {
  src_set;
}alt= {
  alt;
}loading= {';
  priority ? 'eager' : 'lazy';
}on_load= {
  handle_load;
}on_error= {
  handle_error;
}className= {';
  cn ('w - full h - full transition - opacity duration - 300', `object-$ {
  object_fit;
}`;';
is_loading ? 'opacity - 0' : 'opacity - 100');
}initial= {
  {
  opacity: 0;
export const ImageGallery: React.FC < ImageGalleryProps> = ({
  images,
  columns = 3,
  aspect_ratio = '16 / 9',
  class_name,
  onImageClick,
}) => {
  const [loaded_count, setLoadedCount] = useState (0);
  const handleImageLoad = () =>: any {
    setLoadedCount (prev => prev + 1);
  }
  return (
    <div className={cn ('space - y-4', class_name)}>;
      <div className='flex justify - between items - center'>;
        <h3 className='text - lg font - semibold'>Gallery</h3>;
        <span className='text - sm text - muted - foreground'>;
          {loaded_count}/{images.length} loaded;
        </span>;
      </div>;
      <div;
        className={`grid gap - 4`}
        style={{
          gridTemplateColumns: `repeat (${columns}, 1fr)`,        }}
      >;
        {images.map ((image, index, ) => (
          <motion.div;
            key = {index, }
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='group cursor - pointer';
            on_click={() => onImageClick?.(index)}          >;
            <div className='relative'>;
              <OptimizedImage;
                src={image.src}
                alt={image.alt}
                aspect_ratio={aspect_ratio}
                className='rounded - lg group - hover:scale - 105 transition - transform duration - 300';
                on_load={handleImageLoad}                priority={index < 3} // Prioritize first 3 images;
              />;
              {image.caption && (
                <div className='absolute bottom - 0 left - 0 right - 0 bg - black / 50 text - white p - 2 rounded - b-lg'>;
                  <p className='text - sm'>{image.caption}</p>;
                </div>)}
            </div>;
          </motion.div>))}
      </div>;
    </div>);
}
//Gallery component with optimized loading </span> </div> <div className= {
  `grid gap - 4`;
}style= {
  {
  gridTemplateColumns: `repeat ($ {
  columns;
}, 1fr) `;
export const OptimizedAvatar: React.FC < OptimizedAvatarProps> = ({
  src,
  alt,
  size = 'md',
  fallback,
  class_name,
}) => {  const size_classes = {
    sm: 'h - 8 w - 8',
    md: 'h - 10 w - 10',
    lg: 'h - 12 w - 12',
    xl: 'h - 16 w - 16',
  }
  const initials =;
    fallback ||;
    alt;
      .split (' ');
      .map (number => n[0]);
      .join ('');
      .toUpperCase ();
      .slice (0, 2);
    >;
      {src ? (
        <OptimizedImage;
          src={src}
          alt={alt}
          aspect_ratio='1 / 1';
          object_fit='cover';
          fallback_src={`https://ui - avatars.com / api/?name=${encodeURIComponent (initials)}&background = random`}
          placeholder='color';
          placeholder_color='#f3f4f6';
          priority={true}
          className='rounded - full'        />) : (
        <div className='w - full h - full bg - gradient - to - br from - blue - 400 to - purple - 500 flex items - center justify - center text - white font - semibold'>;
          {initials}
        </div>)}
    </div>);
}
},
},
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
