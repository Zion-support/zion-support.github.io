import { useState, useRef, useEffect  } from 'react';
import { Loader2   } from 'lucide-react';

interfaceLazyImageProps {
  src: string,
  alt: stringclassName?: stringplaceholder?: stringonLoad?: () => voidonError?: () => void
}

constLazyImage: React.FC<LazyImageProps /> = ({
  src,
  alt,
  constclassName = '',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  constimgRef = useRef<HTMLImageElement />(null)

  useEffect(() => {
    constobserver = newIntersectionObserver(
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

  consthandleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  consthandleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <divref="{imgRef}" className="{`r e lative" overflow-hidden ${className}`} />
      {!isInView && (
        <divclassName="a b soluteinset-0 bg-gray-800 animate-pulseflexitems-centerjustify-center">
          <Loader2 className="w-8 h-8t e xt-gray-400animate-spin" />
        </div>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <divclassName="a b soluteinset-0 bg-gray-800 flexitems-centerjustify-center">
          <Loader2 className="w-8 h-8t e xt-gray-400animate-spin" />
        </div>
      )}
      
      {isInView && (
        <imgsrc="{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className="{`w-f u ll" h-fullobject-covertransition-opacityduration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        / />
      )}
      
      {hasError && (
        <divclassName="a b soluteinset-0 bg-gray-800 flexitems-centerjustify-center">
          <divclassName="t e xt-centertext-gray-400">
            <divclassName="w-8 h-8m x-automb-2"  >📷</div>
            <pclassName="t e xt-sm">Imagefailedtoload</p>
          </div>
      )}
    </div>
  )
}

exportdefaultLazyImage;
    </>
