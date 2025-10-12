'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  effect?: 'blur' | 'black-and-white' | 'opacity'
  width?: number | string
  height?: number | string
  threshold?: number
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  effect = 'blur',
  width,
  height,
  threshold = 100,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  useEffect(() => {
    const currentImg = imgRef.current
    if (currentImg) {
      currentImg.addEventListener('load', handleLoad)
      currentImg.addEventListener('error', handleError)
      
      return () => {
        currentImg.removeEventListener('load', handleLoad)
        currentImg.removeEventListener('error', handleError)
      }
    }
  }, [handleLoad, handleError])

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
    <LazyLoadImage
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      placeholder={placeholder}
      effect={effect}
      width={width}
      height={height}
      threshold={threshold}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7
      }}
    />
  )
}

export default LazyImage