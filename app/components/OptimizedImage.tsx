'use client'

import React from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-image ${className}`}
      loading="lazy"
    />
  )
}

export default OptimizedImage