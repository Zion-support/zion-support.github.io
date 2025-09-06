import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { imageOptimization } from '@/utils/performance';
import { logWarn } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty',
  placeholderColor?: string,
  priority?: boolean,
  quality?: number,
  sizes?: string,
  onLoad?: () => void,
  onError?: () => void,
  fallbackSrc?: string,
  aspectRatio?: string,
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down',
  lazy?: boolean,
  retryCount?: number,
  showLoadingProgress?: boolean,
  fill?: boolean,
  blurDataURL?: string,
  loading?: 'lazy' | 'eager',
  style?: React.CSSProperties,
  objectPosition?: string
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

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
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
  objectPosition?: string;

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  placeholder = 'shimmer',
  placeholderColor = '#f3f4f6',
  priority = false,
  quality = 75,
  sizes,
  onLoad,
  onError,
  fallbackSrc,
  aspectRatio,
  objectFit = 'cover',
  lazy = true,
  retryCount = 3,
  showLoadingProgress = false,
  fill = false,
  blurDataURL,
  loading = 'lazy',
  style,
  objectPosition = 'center',
  ...props
<<<<<<< HEAD
}) => {
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

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    observerRef.current = new IntersectionObserver(
      entries => {
        const [entry] = entries;
=======
},) => {
  const [isLoading, setIsLoading] = useState(true),
  const [hasError, setHasError] = useState(false),
  const [isInView, setIsInView] = useState(!lazy || priority),
  const [currentSrc, setCurrentSrc] = useState(src),
  const [retries, setRetries] = useState(0),
  const [loadProgress, setLoadProgress] = useState(0),
  const imgRef = useRef<HTMLImageElement>(null),
  const observerRef = useRef<IntersectionObserver>(),
  const [metrics, setMetrics] = useState<ImageMetrics | null>(null),
  const loadStartTime = useRef<number>(0),

  // Intersection Observer for lazy loading
  useEffect((,) => {
    if (!lazy || priority || isInView) return,

    observerRef.current = new IntersectionObserver(
      (entries,) => {
        const [entry] = entries,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [lazy, priority, isInView]);

  // Start load time tracking
<<<<<<< HEAD
  useEffect(() => {
    loadStartTime.current = performance.now();
  }, [src]);
=======
  useEffect((,) => {
    loadStartTime.current = performance.now()
  }, [src]),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  // Monitor image performance
  useEffect((,) => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
<<<<<<< HEAD
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
=======
      const observer = new PerformanceObserver((list,) => {
        const entries = list.getEntries(),
        entries.forEach((entry,) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          if (entry.name === src && entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const fileSize =
              resourceEntry.transferSize || resourceEntry.encodedBodySize || 0;
            const loadTime =
              resourceEntry.responseEnd - resourceEntry.requestStart;

            setMetrics({
              loadTime,
              fileSize,
              format: src.includes('.webp')
                ? 'webp'
                : src.includes('.avif')
                  ? 'avif'
                  : 'other',
              wasOptimized: src.includes('/_next/image'),
            });

            // Log slow or large images
            if (loadTime > 2000) {
              logWarn('Slow image loading:', {
                src,
                loadTime: `${loadTime.toFixed(2)}ms`,
                size: `${(fileSize / 1024).toFixed(2)}KB`,
              });
            }

            if (fileSize > 500 * 1024) {
              logWarn('Large image detected:', {
                src,
                size: `${(fileSize / 1024).toFixed(2)}KB`,
                loadTime: `${loadTime.toFixed(2)}ms`,
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });

      return () => observer.disconnect();
    }

    return () => {}; // Return empty cleanup function for the else case
  }, [src]);

  // Generate optimized URLs
  const optimizedSrc = isInView
    ? imageOptimization.optimizeUrl(currentSrc, width, quality)
    : '';
  const srcSet =
    isInView && sizes ? imageOptimization.generateSrcSet(currentSrc) : '';

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    setLoadProgress(100);
    onLoad?.();
  };

  // Handle image error with retry logic
  const handleError = () => {
    if (retries < retryCount) {
      setRetries(prev => prev + 1);
      // Retry with a slight delay
<<<<<<< HEAD
      setTimeout(
        () => {
          setCurrentSrc(src + `?retry=${retries + 1}`);
        },
        1000 * (retries + 1)
      );
=======
      setTimeout((,) => {
        setCurrentSrc(src + `?retry=${retries + 1}`)
      }, 1000 * (retries + 1))
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setRetries(0);
    } else {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    }
  };

  // Simulate loading progress for demo purposes
<<<<<<< HEAD
  useEffect(() => {
    if (!isLoading || !showLoadingProgress) return;
=======
  useEffect((,) => {
    if (!isLoading || !showLoadingProgress) return,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

    const interval = setInterval((,) => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, showLoadingProgress]);

  // Generate placeholder based on type
  const generatePlaceholder = () => {
    if (placeholder === 'none') return null;

    const placeholderClassName = cn(
      'absolute inset-0 flex items-center justify-center',
      placeholder === 'shimmer' &&
        'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse',
      placeholder === 'blur' && 'backdrop-blur-sm bg-gray-200/50',
      placeholder === 'color' && 'bg-gray-200'
    );

    if (placeholder === 'color') {
<<<<<<< HEAD
      
=======
      return (
        <div 
          className = {placeholderClassName,}
          style={{ backgroundColor: placeholderColor }}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        />
      );
    }

    return (
      <div className={placeholderClassName}>
        <ImageIcon className='h-8 w-8 text-gray-400' />
      </div>
    );
  };

  // Container styles
  const containerStyle: React.CSSProperties = {
    aspectRatio:
      aspectRatio || (width && height ? `${width}/${height}` : undefined),
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

<<<<<<< HEAD
  
=======
  return (
    <div 
      ref = {imgRef,}
      className = {cn('relative overflow-hidden', className),}
      style = {containerStyle,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    >
      <AnimatePresence>
        {/* Placeholder */}
        {(isLoading || !isInView) && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0'
          >
            {generatePlaceholder()}

            {/* Loading progress */}
            {showLoadingProgress && isLoading && loadProgress > 0 && (
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-gray-200'>
                <motion.div
                  className='h-full bg-blue-500'
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
            className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400'
          >
            <AlertTriangle className='h-8 w-8 mb-2' />
            <span className='text-sm'>Failed to load image</span>
            {retries > 0 && (
              <span className='text-xs mt-1'>Retried {retries} times</span>
            )}
          </motion.div>
        )}

        {/* Actual image */}
        {isInView && !hasError && (
          <motion.img
            src = {optimizedSrc,}
            srcSet = {srcSet,}
            alt = {alt,}
            loading = {priority ? 'eager' : 'lazy',}
            onLoad = {handleLoad,}
            onError = {handleError,}
            className={cn(
              'w-full h-full transition-opacity duration-300',
              `object-${objectFit}`,
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
<<<<<<< HEAD
  );
};
//Container styles 
}> <AnimatePresence> {;
  /* Placeholder */ ;
}{;
  (isLoading || !isInView) && !hasError && (<motion.div > {;
  generatePlaceholder () ;
}/> </div>) ;
}</motion.div>) ;
}{;
  /* Error state */ ;
}{;
  hasError && (<motion.div) ;
}</motion.div>) ;
}{;
  /* Actual image */ ;
}{;
  isInView && !hasError && (<motion.img src= {;
  optimizedSrc ;
}srcSet= {;
  srcSet ;
}alt= {;
  alt ;
}loading= {';
  priority ? 'eager' : 'lazy' ;
}onLoad= {;
  handleLoad ;
}onError= {;
  handleError ;
}className= {';
  cn ('w-full h-full transition-opacity duration-300', `object-$ {;
  objectFit ;
}`;';
isLoading ? 'opacity-0' : 'opacity-100') ;
}initial= {;
  {;
  opacity: 0 ;
=======
  )
},

// Gallery component with optimized loading
interface ImageGalleryProps {
  images: Array<{
    src: string,
    alt: string,
    caption?: string
  }>,
  columns?: number,
  aspectRatio?: string,
  className?: string,
  onImageClick?: (index: number,) => void
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  aspectRatio = '16/9',
  className,
<<<<<<< HEAD
  onImageClick,
}) => {
  const [loadedCount, setLoadedCount] = useState(0);
=======
  onImageClick
},) => {
  const [loadedCount, setLoadedCount] = useState(0),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>Gallery</h3>
        <span className='text-sm text-muted-foreground'>
          {loadedCount}/{images.length} loaded
        </span>
      </div>
<<<<<<< HEAD

      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
=======
      
      <div 
        className = {`grid gap-4`,}
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)` 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        }}
      >
        {images.map((image, index,) => (
          <motion.div
            key = {index,}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
<<<<<<< HEAD
            className='group cursor-pointer'
            onClick={() => onImageClick?.(index)}
=======
            className="group cursor-pointer"
            onClick = {(,) => onImageClick?.(index),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          >
            <div className='relative'>
              <OptimizedImage
<<<<<<< HEAD
                src={image.src}
                alt={image.alt}
                aspectRatio={aspectRatio}
                className='rounded-lg group-hover:scale-105 transition-transform duration-300'
                onLoad={handleImageLoad}
=======
                src = {image.src,}
                alt = {image.alt,}
                aspectRatio = {aspectRatio,}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                onLoad = {handleImageLoad,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                priority={index < 3} // Prioritize first 3 images
              />

              {image.caption && (
                <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg'>
                  <p className='text-sm'>{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
//Gallery component with optimized loading </span> </div> <div className= {;
  `grid gap-4` ;
}style= {;
  {;
  gridTemplateColumns: `repeat ($ {;
  columns ;
}, 1fr) ` ;

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({
  src,
  alt,
  size = 'md',
  fallback,
<<<<<<< HEAD
  className,
}) => {
=======
  className
},) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const initials =
    fallback ||
    alt
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

  
    >
      {src ? (
        <OptimizedImage
<<<<<<< HEAD
          src={src}
          alt={alt}
          aspectRatio='1/1'
          objectFit='cover'
          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder='color'
          placeholderColor='#f3f4f6'
          priority={true}
          className='rounded-full'
=======
          src = {src,}
          alt = {alt,}
          aspectRatio="1/1"
          objectFit="cover"
          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder="color"
          placeholderColor="#f3f4f6"
          priority = {true,}
          className="rounded-full"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        />
      ) : (
        <div className='w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold'>
          {initials}
        </div>
      )}
    </div>
  );
};
=======
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
