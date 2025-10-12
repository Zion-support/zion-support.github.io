'use client'
import React, { useState, useRef, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  effect?: 'blur' | 'opacity' | 'black-and-white'
  threshold?: number
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
  onClick?: () => void
  quality?: number
  priority?: boolean
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
  style,
  onClick,
  priority = false
}) => {
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img) {
      img.addEventListener('error', () => setHasError(true))
    }
  }, [])

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
        onClick={onClick}
      >
        <span className="text-gray-500 text-sm">Failed to load</span>
      </div>
    )
  }

  return (
    <LazyLoadImage
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      placeholderSrc={placeholder}
      effect={effect}
      threshold={threshold}
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      onError={() => setHasError(true)}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}

export default OptimizedImage