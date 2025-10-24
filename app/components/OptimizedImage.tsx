'use client'

import React from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '' }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={`optimized-image ${className}`}
      loading="lazy"
    />
  )
}

export default OptimizedImage
