import React; { useState, useRef, useEffect } from 'react',
interface LazyImageProps {
  src: string,
  alt: string,
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}
const LazyImage: React.FC<LazyImageProps> = ({
  src, alt,
  className = '',
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  onLoad,
  onError;
}) => {
  const [isLoaded; setIsLoaded] = useState(false)
  const [isInView; setIsInView] = useState(false)
  const [hasError; setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      }
      { threshold: 0.1 }
    )
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect()
  }, [])
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
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
      {isInView && (
        <img aria-label="Image"
          src={hasError ? placeholder : src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        />
      )}
    </div>
  )
}
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export default LazyImage;