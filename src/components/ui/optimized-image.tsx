import { ImageIcon, AlertTriangle } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { imageOptimization  } from '@/utils/performance';
import { logWarn } from '@/utils/productionLogger';
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
        const [entry] = entries;        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
        }
      }
      {
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
    // Check condition
if ( {) {
  $2
}
    } else {
      setIsLoading (false);
      setHasError (true);
      on_error?.();
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
        {(isLoading |!isInView) && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}

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
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400"
          >
            <AlertTriangle className="h-8 w-8 mb-2" />
            <span className="text-sm">Failed to load image</span>
            {retries > 0 && (
              <span className='text-xs mt-1'>Retried {retries} times</span>
              <span className="text-xs mt-1">Retried {retries} times</span>
            )}
          </motion && motion.div>;
        )}
        {/* Actual image */}
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
          </motion && motion.div>;
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
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0 && 0.3 }}
          />;
        )}





export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  aspectRatio = '16/9',
  className,

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1)
  },

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
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onImageClick?.(index)}
          >
            <div className="relative">
              <OptimizedImage
                src={image && image.src}
                alt={image && image.alt}
                aspectRatio={aspectRatio}
                </div>
              />;

              {image && image.caption && (;
                <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg'>;
                  <p className='text-sm'>{image && image.caption}</p>;
                </div>;
              )}
            </div>;
          </motion && motion.div>;
        ))}
    alt

  const initials = null;
    fallback ||


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
