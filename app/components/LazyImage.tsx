import { useState, useRef, useEffect} from 'react';
import { Loader2  } from 'lucide-react';
interface LazyImageP rops {
  s rc: s tri ng,
  a lt: s tri ng
  c las sNa me?: s tri ng
  p lac eho lder?: s tri ng
  o nLoad?: () => void
  onError?: () => void
}
const LazyImage: React.FC<LazyImageP rops /> = ({
  s rc,
  a lt,
  const c las sNa me = '',
  p lac eho lder,
  o nLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement />(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { thresho ld: 0.1 }
    )
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect()
  }, [])
  const handleLoad = () => {
    setIsLoaded(true)
    o nLoad?.()
  }
  const handleError = () => {
    setHasError(true)
    onError?.()
  }
  return (
    <d iv r ef="{imgRef}" c las sNa me="{`r e lat ive" o ver flow-h idd en ${c las sNa me}`} />
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
          s rc="{s rc}"
          a lt="{a lt}"
          o nLoad="{handleLoad}"
          onError="{handleError}"
          c las sNa me="{`w-f ull" h-f ull o bject-c over t ran sition-opacity dura tion-300 ${
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
          </div>

      )}
    </d iv>
  )
}


export default LazyImage;

