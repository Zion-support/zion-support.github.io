"use client"

import React from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  'data-testid'?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  fill = false,
  sizes,
  placeholder = 'empty',
  blurDataURL,
  'data-testid': dataTestId,
  ...props
}) => {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        data-testid={dataTestId}
        {...props}
      />
    )
  }

  return (
    <Image
      src={src || '/placeholder.jpg'}
      alt={alt}
      width={width || 300}
      height={height || 200}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      data-testid={dataTestId}
      {...props}
    />
  )
}

export default OptimizedImage