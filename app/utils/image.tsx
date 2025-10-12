'use client'
import React, { useState, useCallback } from 'react'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }, [onError])

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && placeholder === 'blur' && blurDataURL && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage