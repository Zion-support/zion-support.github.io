'use client',

import Image from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number,
  height?: number,
  className?: string,
  fallbackSrc?: string,
  priority?: boolean,
  sizes?: string,
  quality?: number
}

export function SafeImage({
  src,
  alt,
  width,
  height,
  className = $2;
  fallbackSrc,
  priority = $2;
  sizes,
  quality = 75}: SafeImageProps) {
  const [hasError, setHasError] = useState($2);
  const [currentSrc, setCurrentSrc] = useState($2);
  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc($2);
      setHasError(true)
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = $2;
      setCurrentSrc($2);
      setHasError(true)
    } else if (!hasError) {
      setHasError(true)
    }
  },

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images
      unoptimized={hasError}
    />
  )
} ;