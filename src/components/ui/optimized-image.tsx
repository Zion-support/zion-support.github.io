
=======
  class_name?: string;
  placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty';
  placeholder_color?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  on_load?: () => void;
  on_error?: () => void;
  fallback_src?: string;
  aspect_ratio?: string;
  object_fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale - down';
  lazy?: boolean;
  retry_count?: number;
  showLoadingProgress?: boolean;
  fill?: boolean;
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
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
  useEffect(() => {
    if (!lazy |priority |isInView) return
    observerRef.current = new IntersectionObserver(
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
  }, [lazy, priority, isInView]);
  // Start load time tracking;
  useEffect (() => {
    loadStartTime.current = performance.now ();
  }, [src]);
  // Monitor image performance;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      const observer = new PerformanceObserver (list => {
        const entries = list.get_entries ();
        entries.for_each (entry => {          // Check condition
if ( {) {
  $2
}
            const resource_entry = entry as PerformanceResourceTiming;
            const file_size =;
              resource_entry.transfer_size || resource_entry.encodedBodySize || 0;
            const load_time =;
              resource_entry.response_end - resource_entry.request_start;
            set_metrics ({
              load_time,
              file_size,
              format: src.includes ('.webp');
                ? 'webp';
                : src.includes ('.avif');
                  ? 'avif';
                  : 'other',
              was_optimized: src.includes ('/_next / image'),
            });
            // Log slow or large images;
            // Check condition
if ( {) {
  $2
}
              log_warn ('Slow image loading:', {
                src,
                load_time: `${load_time.to_fixed (2)}ms`,
                size: `${(file_size / 1024).to_fixed (2)}KB`,
              });
            }
            // Check condition
if ( {) {
  $2
}
              log_warn ('Large image detected:', {
                src,
                size: `${(file_size / 1024).to_fixed (2)}KB`,
                load_time: `${load_time.to_fixed (2)}ms`,
              });
            }
          }
        })
      })
      observer.observe({ entryTypes: ['resource'] })
      return () => observer.disconnect()
    }

    return () => {} // Return empty cleanup function for the else case;
  }, [src]);
  // Generate optimized URLs;
  const optimized_src = isInView;
    ? image_optimization.optimize_url (current_src, width, quality);
    : '';
  const src_set =;
    isInView && sizes ? image_optimization.generateSrcSet (current_src) : '';
  // Handle image load;
  const handle_load = () =>: any {
    setIsLoading (false);
    setHasError (false);
    setLoadProgress (100);
    on_load?.();

  }
  // Handle image error with retry logic
  const handleError = () => {
    if (retries < retryCount) {
      setRetries(prev => prev + 1)
      // Retry with a slight delay
      setTimeout(
        () => {

          setCurrentSrc (src + `?retry=${retries + 1}`);
        },
        1000 * (retries + 1)) } else // Check condition
if ( {) {
  $2
}
      setCurrentSrc (fallback_src);
      set_retries (0);

    } else {
      setIsLoading(false)
      setHasError(true)
      onError?.()
    }
  }
  // Simulate loading progress for demo purposes
  useEffect(() => {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  loading?: 'lazy' | 'eager';
  style?: React && React.CSSProperties;


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
}
;
interface ImageMetrics {;
  loadTime: number,;
  fileSize: number,;
  format: string,;
  wasOptimized: boolean;
}
;
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
  const [isLoading, setIsLoading] = useState(true),;
  const [hasError, setHasError] = useState(false),;
  const [isInView, setIsInView] = useState(!lazy || priority),;
  const [currentSrc, setCurrentSrc] = useState(src),;
  const [retries, setRetries] = useState(0),;
  const [loadProgress, setLoadProgress] = useState(0),;
  const imgRef = useRef<HTMLImageElement>(null),;
  const observerRef = useRef<IntersectionObserver>(),;
  const [metrics, setMetrics] = useState<ImageMetrics | null>(null),;
  const loadStartTime = useRef<number>(0),;
  // Intersection Observer for lazy loading;
  useEffect(() => {;
    if (!lazy || priority || isInView) return,;
    observerRef.current = new IntersectionObserver(;
      (entries) => {;
        const [entry] = entries,;
        if (entry && entry.isIntersecting) {;
          setIsInView(true),;
          observerRef.current?.disconnect();
        }
      },;
      {;
        rootMargin: '50px', // Start loading 50px before image comes into view;
        threshold: 0.1;
      }
    ),;
    if (imgRef.current) {;
      observerRef.current.observe(imgRef.current);
    }
;
    return () => {;
      observerRef.current?.disconnect();
    }
  }, [lazy, priority, isInView]),;
  // Start load time tracking;
  useEffect(() => {;
    loadStartTime.current = window.window.window.performance.now();
  }, [src]),;
  // Monitor image performance;
  useEffect(() => {;
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {;
      const observer = new PerformanceObserver((list) => {;
        const entries = list.getEntries(),;
        entries.forEach((entry) => {;
          if (entry.name === src && entry.entryType === 'resource') {;
            const resourceEntry = entry as PerformanceResourceTiming,;
            const fileSize = resourceEntry.transferSize || resourceEntry.encodedBodySize || 0,;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart,;
            setMetrics({;
              loadTime,;
              fileSize,;
              format: src.includes('.webp') ? 'webp' : src.includes('.avif') ? 'avif' : 'other',;
              wasOptimized: src.includes('/_next/image');
            }),;
            // Log slow or large images;
            if (loadTime > 2000) {;
              logWarn('Slow image loading:', {;
                src,;
                loadTime: `${loadTime.toFixed(2)}ms`,;
                size: `${(fileSize / 1024).toFixed(2)}KB`;
              });
            }
;
            if (fileSize > 500 * 1024) {;
              logWarn('Large image detected:', {;
                src,;
                size: `${(fileSize / 1024).toFixed(2)}KB`,;
                loadTime: `${loadTime.toFixed(2)}ms`;
              });
            }
          }
        });
      }),;
      observer.observe({ entryTypes: ['resource'] }),;
      return () => observer.disconnect();
    }
;
    return () => {}, // Return empty cleanup function for the else case;
  }, [src]),;
  // Generate optimized URLs;
  const optimizedSrc = isInView ? imageOptimization.optimizeUrl(currentSrc, width, quality) : '',;
  const srcSet = isInView && sizes ? imageOptimization.generateSrcSet(currentSrc) : '',;
  // Handle image load;
  const handleLoad = () => {;
    setIsLoading(false),;
    setHasError(false),;
    setLoadProgress(100),;
    onLoad?.();
  },;
  // Handle image error with retry logic;
  const handleError = () => {;
    if (retries < retryCount) {;
      setRetries(prev => prev + 1),;
      // Retry with a slight delay;
      setTimeout(() => {;
        setCurrentSrc(src + `?retry=${retries + 1}`);
      }, 1000 * (retries + 1));
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc),;
      setRetries(0);
    } else {;
      setIsLoading(false),;
      setHasError(true),;
      onError?.();
    }
  },;
  // Simulate loading progress for demo purposes;
  useEffect(() => {;
    if (!isLoading || !showLoadingProgress) return,;
    const interval = setInterval(() => {;
      setLoadProgress(prev => {;
        if (prev >= 90) {;
          clearInterval(interval),;
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100),;
    return () => clearInterval(interval);
  }, [isLoading, showLoadingProgress]),;
  // Generate placeholder based on type;
  const generatePlaceholder = () => {;
    if (placeholder === 'none') return null,;
    const placeholderClassName = cn(;
      'absolute inset-0 flex items-center justify-center',;
      placeholder === 'shimmer' && 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse',;
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
=======


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      >;
      <AnimatePresence>;

  },

  },

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  // Container styles
  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  }
      >
      <AnimatePresence>
    height: height ? `${height}px` : undefined},

    height: height ? `${height}px` : undefined},

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={containerStyle}
    >;
      <AnimatePresence>;



            className="absolute inset-0"
          >
            {generatePlaceholder()}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <AlertTriangle className="h-8 w-8 mb-2" />
            <span className="text-sm">Failed to load image</span>
            {retries > 0 && (
=======
              <span className='text-xs mt-1'>Retried {retries} times</span>
              <span className="text-xs mt-1">Retried {retries} times</span>
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  aspectRatio = '16/9',
  className,
  onImageClick,
}) => {
  const [loadedCount, setLoadedCount] = useState(0)
  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1)
  }
  onImageClick
}) => {
  const [loadedCount, setLoadedCount] = useState(0),

  onImageClick
}) => {
  const [loadedCount, setLoadedCount] = useState(0),
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <span className="text-sm text-muted-foreground">
          {loadedCount}/{images.length} loaded
        </span>
      </div>
      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,        }}
      >
        {images.map((image, index,) => (
          <motion.div
            key = {index,}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='group cursor-pointer'
            onClick={() => onImageClick?.(index)}          >
            <div className='relative'>
      
      <div 
        className={`grid gap-4`}
        style={{;
          gridTemplateColumns: `repeat(${columns}, 1fr)`;
        }}
      >;
        {images.map((image, index) => (;
          <motion.div;
            key={index}
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
<<<<<<< HEAD
    alt
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
    >
      {src ? (
      </div>;
    </div>;
  );
};
//Gallery component with optimized loading </span> </div> <divclassName= {
  `grid gap-4` 
}style= {
  {
  gridTemplateColumns: `repeat ($ {
  columns 
}, 1fr) ` 

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({;
  src,;
  alt,;
  size = 'md',;
  fallback,;
  className,;
}) => {  const sizeClasses = {;
    sm: 'h-8 w-8',;
    md: 'h-10 w-10',;
    lg: 'h-12 w-12',;
    xl: 'h-16 w-16',;
  };

  const initials =;
    fallback ||;
    alt;
      .split(' ');
      .map(n => n[0]);
      .join('');
      .toUpperCase();
      .slice(0, 2);


    >;
      {src ? (;
        <OptimizedImage
          src={src}
          alt={alt}
          aspectRatio='1/1'
          objectFit='cover'
          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder='color'
          placeholderColor='#f3f4f6'
          priority={true}
          className='rounded-full'        />
      ) : (
        <div className='w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold'>


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          {initials}
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
