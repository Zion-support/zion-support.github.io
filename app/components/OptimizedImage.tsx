'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ImageIcon } from 'lucide-react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  quality?: number
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
  sizes = '100vw',
  quality = 75,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, loading])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536]
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
      .join(', ')
  }

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        ref={imgRef}
      >
        <div className="text-center text-gray-500">
          <ImageIcon className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Failed to load image</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            width: '100%',
            height: '100%'
          }}
        />
      )}

      {/* Loading placeholder */}
      {!isLoaded && !blurDataURL && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width: '100%', height: '100%' }}
        >
          <div className="text-gray-400">
            <ImageIcon className="w-8 h-8" />
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          sizes={sizes}
          srcSet={generateSrcSet(src)}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  )
}

export default OptimizedImage