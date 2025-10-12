'use client'
import React, { useState, useCallback } from 'react'
import { cn } from '@/utils/cn'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  quality?: number
  sizes?: string
  loading?: 'lazy' | 'eager'
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  quality = 75,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy'
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-gray-200 flex items-center justify-center text-gray-500',
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && placeholder === 'blur' && blurDataURL && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ 
            backgroundImage: `url(${blurDataURL})`,
            width: '100%',
            height: '100%'
          }}
        />
      )}
      
      {isLoading && placeholder === 'empty' && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width: '100%', height: '100%' }}
        />
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          'w-full h-full object-cover'
        )}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto'
        }}
      />
    </div>
  )
}

export default OptimizedImage