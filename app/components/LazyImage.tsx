import { useState, useRef, useEffect} from 'react';
import { Loader2 } from 'lucide-react';

interface LazyImageProps {
  src: string,
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps /> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  imgRef = useRef<HTMLImageElement />(null)

  useEffect(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  handleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <div ref="{imgRef}" className="{`relativ e" overflow-hidden ${className}`} />
      {!isInView && (
        <div className="absolut e inset-0 bg-gray-800 animate-pulse flex items-centerjustify-center">
          <Loader2 className="w-8 h-8tex t-gray-400animate-spin" />
        </div>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <div className="absolut e inset-0 bg-gray-800 flex items-centerjustify-center">
          <Loader2 className="w-8 h-8tex t-gray-400animate-spin" />
        </div>
      )}
      
      {isInView && (
        <img
          src="{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className="{`w-ful l" h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        / />
      )}
      
      {hasError && (
        <div className="absolut e inset-0 bg-gray-800 flex items-centerjustify-center">
          <div className="tex t-centertext-gray-400">
            <div className="w-8 h-8m x-automb-2"  >📷</div>
            <p className="tex t-sm">Image failed to load</p>
          </div>
      )}
    </div>
  )
}

export default LazyImage;
    </>