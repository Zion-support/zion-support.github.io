'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 75,
  priority = false,
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setIsLoaded(true)
      onLoad?.()
    }
    img.onerror = () => {
      setIsError(true)
      onError?.()
    }
    img.src = src
  }, [src, onLoad, onError])

  const optimizedSrc = React.useMemo(() => {
    if (!src) return ''
    
    // Add quality parameter if it's a supported image service
    if (src.includes('cloudinary.com') || src.includes('imgix.net')) {
      const separator = src.includes('?') ? '&' : '?'
      return `${src}${separator}q=${quality}${width ? `&w=${width}` : ''}${height ? `&h=${height}` : ''}`
    }
    
    return src
  }, [src, quality, width, height])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Helmet>
        <title>Optimized Image - Zion Tech Group</title>
        <meta name="description" content="High-performance optimized images for better user experience." />
      </Helmet>
      
      <img
        ref={imgRef}
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => {
          setIsLoaded(true)
          onLoad?.()
        }}
        onError={() => {
          setIsError(true)
          onError?.()
        }}
      />
      
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="w-8 h-8 mx-auto mb-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage