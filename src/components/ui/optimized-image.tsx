import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils';
import { imageOptimization } from '@/utils/performance';
import { logWarn } from '@/utils/productionLogger';
interface OptimizedImageProps {
  src: string;
  alt: string;
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

interface ImageMetrics {
  loadTime: number;
  fileSize: number;
  format: string;
  wasOptimized: boolean,
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({;
  src,
  alt,
  width,
  height,
  className,
  placeholder = $2;
  placeholderColor = $2;
  priority = $2;
  quality = $2;
  sizes,
  onLoad,
  onError,
  fallbackSrc,
  aspectRatio,
  objectFit = $2;
  lazy = $2;
  retryCount = $2;
  showLoadingProgress = $2;
  fill = $2;
  blurDataURL,
  loading = $2;
  style,
  objectPosition = $2;
  ...props
}) => {
  const [isLoading, setIsLoading] = useState($2);
  const [hasError, setHasError] = useState($2);
  const [isInView, setIsInView] = useState($2);
  const [currentSrc, setCurrentSrc] = useState($2);
  const [retries, setRetries] = useState($2);
  const [loadProgress, setLoadProgress] = useState($2);
  const imgRef = $2;
  const observerRef = $2;
  const [metrics, setMetrics] = useState<ImageMetrics | null>(null),
  const loadStartTime = $2;
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return,

    observerRef.current = $2;
        if (entry && entry.isIntersecting) {
          setIsInView($2);
          observerRef.current?.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1,
      }
    ),

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [lazy, priority, isInView]),

  // Start load time tracking
  useEffect(() => {
    loadStartTime.current = performance.now()
  }, [src]),

  // Monitor image performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries($2);
        entries.forEach((entry) => {
          if (entry.name = $2;
            const fileSize = $2;
            const loadTime = $2;
            setMetrics({
              loadTime,
              fileSize,
              format: src.includes('.webp') ? 'webp' : src.includes('.avif') ? 'avif' : 'other',
              wasOptimized: src.includes('/_next/image'),
            }),

            // Log slow or large images
            if (loadTime > 2000) {
              logWarn('Slow image loading:', {
                src,
                loadTime: `${loadTime.toFixed(2)}ms`,
                size: `${(fileSize / 1024).toFixed(2)}KB`
              })
            }

            if (fileSize > 500 * 1024) {
              logWarn('Large image detected:', {
                src,
                size: `${(fileSize / 1024).toFixed(2)}KB`,
                loadTime: `${loadTime.toFixed(2)}ms`
              })
            }
          }
        })
      }),

      observer.observe($2);
      return () => observer.disconnect()
    }
    
    return () => {}, // Return empty cleanup function for the else case
  }, [src]),

  // Generate optimized URLs
  const optimizedSrc = isInView ? imageOptimization.optimizeUrl(currentSrc, width, quality) : '',
  const srcSet = $2;
  // Handle image load
  const handleLoad = () => {
    setIsLoading($2);
    setHasError($2);
    setLoadProgress($2);
    onLoad?.()
  },

  // Handle image error with retry logic
  const handleError = () => {
    if (retries < retryCount) {
      setRetries($2);
      // Retry with a slight delay
      setTimeout(() => {
        setCurrentSrc(src + `?retry=${retries + 1}`)
      }, 1000 * (retries + 1))
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc($2);
      setRetries(0)
    } else {
      setIsLoading($2);
      setHasError($2);
      onError?.()
    }
  },

  // Simulate loading progress for demo purposes
  useEffect(() => {
    if (!isLoading || !showLoadingProgress) return,

    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval($2);
          return prev
        }
        return prev + Math.random() * 15
      })
    }, 100),

    return () => clearInterval(interval)
  }, [isLoading, showLoadingProgress]),

  // Generate placeholder based on type
  const generatePlaceholder = $2;
    const placeholderClassName = cn($2);
    if (placeholder = $2;
  // Container styles
  const containerStyle: React.CSSProperties = {,
    aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined},

  return (
    <div 
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style = $2;
              `object-${objectFit}`,
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
            initial = $2;
// Gallery component with optimized loading
interface ImageGalleryProps {
  images: Array<{;
    src: string;
    alt: string;
    caption?: string,
  }>,
  columns?: number,
  aspectRatio?: string,
  className?: string,
  onImageClick?: (index: number) => void,
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({;
  images,
  columns = $2;
  aspectRatio = $2;
  className,
  onImageClick
}) => {
  const [loadedCount, setLoadedCount] = useState($2);
  const handleImageLoad = $2;
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
          gridTemplateColumns: `repeat(${columns}, 1fr)` 
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }},
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer",
            onClick={() => onImageClick?.(index)}
          >
            <div className="relative">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                aspectRatio={aspectRatio}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300",
                onLoad={handleImageLoad}
                priority={index < 3} // Prioritize first 3 images
              />
              
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
},

// Avatar component with optimized loading
interface OptimizedAvatarProps {
  src?: string,;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl',
  fallback?: string,
  className?: string
}

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = ({;
  src,
  alt,
  size = $2;
  fallback,
  className
}) => {
  const sizeClasses = {;
    sm: 'h-8 w-8';
    md: 'h-10 w-10';
    lg: 'h-12 w-12';
    xl: 'h-16 w-16',
  },

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase().slice($2);
  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      {src ? (
        <OptimizedImage
          src={src}
          alt={alt}
          aspectRatio="1/1"
          objectFit="cover"
          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder="color"
          placeholderColor="#f3f4f6"
          priority={true}
          className="rounded-full"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
          {initials}
        </div>
      )}
    </div>
  )
}, ;