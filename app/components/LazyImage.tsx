import { useState, useRef, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

interface LazyImageProps {
  src: string;
alt: string;
className?: string;
placeholder?: string;
onLoad?: () => void;
onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
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
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
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

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <div>
      {!isInView && (
        <div>
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      </LazyImageProps>
      </HTMLImageElement>
      </Loader2>
      </Loader2>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <div>
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}
      
      {isInView && (
        <img;
src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      
      {hasError && (
        <div>
          <div>
            <div>📷</div>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LazyImage