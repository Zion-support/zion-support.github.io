'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  effect?: 'blur' | 'black-and-white' | 'opacity'
  width?: number | string
  height?: number | string
  threshold?: number
  quality?: number
  format?: 'webp' | 'jpeg' | 'png' | 'avif'
  onLoad?: () => void
  onError?: () => void
  priority?: boolean
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  effect = 'blur',
  width,
  height,
  threshold = 100,
  quality = 80,
  format = 'webp',
  onLoad,
  onError,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const imgRef = useRef<HTMLImageElement>(null)

  // Generate optimized image URL based on format and quality
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc
    }
    
    // For external images, you might want to use a service like Cloudinary or ImageKit
    // For now, return the original src with quality and format parameters
    const url = new URL(originalSrc)
    url.searchParams.set('quality', quality.toString())
    url.searchParams.set('format', format)
    return url.toString()
  }

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  useEffect(() => {
    setCurrentSrc(getOptimizedSrc(src))
  }, [src, quality, format])

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
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 dark:text-gray-400 text-sm">Failed to load image</span>
      </div>
    )
  }

  const imageProps = {
    ref: imgRef,
    src: currentSrc,
    alt,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-70'}`,
    placeholder: placeholder,
    effect,
    width,
    height,
    threshold,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      transition: 'opacity 0.3s ease-in-out',
      objectFit: 'cover' as const
    }
  }

  if (priority) {
    return <img {...imageProps} />
  }

  return <LazyLoadImage {...imageProps} />
}

export default OptimizedImage