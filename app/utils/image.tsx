'use client'
import React, { useState, useCallback } from 'react'

interface ImageProps {
  src: string
  alt: string
  className?: string
}

export default function Image({ src, alt, className }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={handleLoad}
      style={{ opacity: isLoaded ? 1 : 0 }}
    />
  )
}