'use client'
import React, { useState, useCallback } from 'react'

interface ImageProps {
  src: value,
        alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  fill?: boolean
  sizes?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

interface OptimizedImageProps extends ImageProps {
  fallback?: string
  showSkeleton?: boolean
  errorFallback?: React.ReactNode
}

// Optimized Image Component
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  style,
  loading = 'lazy',
  onLoad,
  onError,
  fallback,
  showSkeleton = true,
  errorFallback
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    if (fallback) {
      setCurrentSrc(fallback)
      setHasError(false)
    }
    onError?.()
  }, [fallback, onError])

  // Generate optimized image URL
  const getOptimizedSrc = useCallback((originalSrc: string) => {
    // In a real application, you would use a service like Cloudinary, ImageKit, or Next.js Image Optimization
    // For now, we'll return the original src
    return originalSrc
  }, [])

  const optimizedSrc = getOptimizedSrc(currentSrc)

  if (hasError && errorFallback) {
    return <>{errorFallback}</>
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} ${className}`}>
      {showSkeleton && isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width: width || '100%', height: height || '200px' }}
        />
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${fill ? 'w-full h-full object-cover' : ''} ${className}`}
        style={{
          ...style,
          ...(fill && { position: 'absolute', top: 0, left: 0 })
        }}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...(placeholder === 'blur' && blurDataURL && {
          style: {
            ...style,
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        })}
      />
    </div>
  )
}

// Lazy Image Component
export const LazyImage: React.FC<ImageProps> = (props) => {
  return <OptimizedImage {...props} loading="lazy" showSkeleton={true} />
}

// Priority Image Component
export const PriorityImage: React.FC<ImageProps> = (props) => {
  return <OptimizedImage {...props} priority={true} loading="eager" showSkeleton={false} />
}

// Responsive Image Component
export const ResponsiveImage: React.FC<ImageProps & { 
  breakpoints?: { [key: value,
        defaultSrc: string
}> = ({ breakpoints = {}, defaultSrc, ...props }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('default')

  // Generate srcset for responsive images
  const generateSrcSet = useCallback((baseSrc: string) => {
    const srcSet = Object.entries(breakpoints)
      .map(([breakpoint, src]) => `${src} ${breakpoint}w`)
      .join(', ')
    
    return srcSet || baseSrc
  }, [breakpoints])

  const srcSet = generateSrcSet(defaultSrc)

  return (
    <OptimizedImage
      {...props}
      src={defaultSrc}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        ...props.style,
        srcSet
      }}
    />
  )
}

// Image with Blur Placeholder
export const BlurImage: value,
        blurDataURL: string
}> = ({ blurDataURL, ...props }) => {
  return (
    <OptimizedImage
      {...props}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  )
}

// Avatar Image Component
export const AvatarImage: React.FC<ImageProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
}> = ({ 
  size = 'md', 
  rounded = true, 
  className = '', 
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  return (
    <OptimizedImage
      {...props}
      className={`${sizeClasses[size]} ${rounded ? 'rounded-full' : 'rounded'} object-cover ${className}`}
      width={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 96}
      height={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 96}
    />
  )
}

export default OptimizedImage
