'use client'
import React, { useState, useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  effect?: 'blur' | 'black-and-white' | 'opacity'
  threshold?: number
  width?: number | string
  height?: number | string
  onClick?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  effect = 'blur',
  threshold = 100,
  width,
  height,
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
  }, [threshold])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {isInView && (
        <LazyLoadImage
          src={src}
          alt={alt}
          effect={effect}
          placeholderSrc={placeholder}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      {!isLoaded && placeholder && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width: '100%', height: '100%' }}
        >
          <span className="text-gray-400 text-sm">Loading...</span>
        </div>
      )}
    </div>
  )
}

export default LazyImage