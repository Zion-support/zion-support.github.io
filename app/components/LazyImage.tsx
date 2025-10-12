import { useState, useRef, useEffect} from 'react';
import { Loader2 } from 'lucide-react';

interface LazyImageProps {
  src: string,
  alt: string
  className?: string
  placeholder?: string
 void
 void

const LazyImage: React.FC<LazyImageProps /> = ({
  src,
  alt,
  const className = '',
  placeholder,
  onLoad,
  onError
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement />(null)

    const observer = new IntersectionObserver(
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)

 observer.disconnect()
  }, [])

    setIsLoaded(true)
    onLoad?.()

    setHasError(true)
    onError?.()

  return (
      {!isInView && (

      )}
      
      {isInView && !isLoaded && !hasError && (

      )}
      
      {isInView && (
      )}
      
      {hasError && (

            <div className="w-8 h-8mx-automb-2">📷</div>

            <p className="text-sm">Image failed to load</p>
      )}
  )

export default LazyImage;

