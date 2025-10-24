'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={`lazy-image ${className} ${loaded ? 'loaded' : ''}`}
      onLoad={() => setLoaded(true)}
    />
  )
}

export default LazyImage
