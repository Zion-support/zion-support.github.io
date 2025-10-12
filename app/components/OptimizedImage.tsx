'use client'
import React, { useState, useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  effect?: 'blur' | 'black-and-white' | 'opacity'
  threshold?: number
  width?: number | string
  height?: number | string
  onClick?: () => void
  priority?: boolean
  quality?: number
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  effect = 'blur',
  threshold = 100,
  width,
  height,
  onClick,
  priority = false,
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: threshold / 100 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, priority])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {isInView && !hasError && (
        <LazyLoadImage
          src={src}
          alt={alt}
          effect={effect}
          placeholderSrc={placeholder}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            quality: quality
          }}
        />
      )}
      {!isLoaded && !hasError && placeholder && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width: '100%', height: '100%' }}
        >
          <span className="text-gray-400 text-sm">Loading...</span>
        </div>
      )}
      {hasError && (
        <div
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          style={{ width: '100%', height: '100%' }}
        >
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage