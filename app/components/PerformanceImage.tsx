import React, { useState, useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
interface PerformanceImageProps {
  src: string
  alt: string
  className?: string
  width?: number | string
  height?: number | string
  placeholder?: string
  effect?: 'blur' | 'black-and-white' | 'opacity'
  threshold?: number
  onLoad?: () => void
  onError?: () => void
}
const PerformanceImage: React.FC<PerformanceImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  effect = 'blur',
  threshold = 100,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])
  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])
  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    )
  }
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      width={width}
      height={height}
      placeholderSrc={placeholder}
      effect={effect}
      threshold={threshold}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
    />
  )
}
export default PerformanceImage