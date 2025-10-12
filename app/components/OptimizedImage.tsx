'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ImageIcon, Loader2 } from 'lucide-react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
  priority?: boolean
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  onLoad,
  onError,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isInView && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}
      
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  )
}

export default OptimizedImage