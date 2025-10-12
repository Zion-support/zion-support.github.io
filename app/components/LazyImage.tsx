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
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <Loader2 className="w-5 h-5ml-2" />
        </div>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <Loader2 className="w-5 h-5ml-2" />
        </div>
      )}
      
      {isInView && (
        <img
          src="{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className="{`w-full" h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
         />
      )}
      
      {hasError && (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="w-8h-8mx-a utomb-2"  >📷</div>
            <p className="text-sm">Image failed to load</p>
      )}
  )

export default LazyImage;
