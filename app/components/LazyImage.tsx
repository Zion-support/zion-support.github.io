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
    <>
        </><d iv c las sNa me="a b sol ute i nset-0 bg-g ray-800 a nim ate-p ulse flexitems-centerjustify-center">
        </d iv>
          <Loader2 c las sNa me="w-8 h-8t e xt-g ray-400a nim ate-s pin" / />        </d iv>
      )}
      {isInView && !isLoaded && !hasError && (
    <>
        </><d iv c las sNa me="a b sol ute i nset-0 bg-g ray-800 flexitems-centerjustify-center">
        </d iv>
          <Loader2 c las sNa me="w-8 h-8t e xt-g ray-400a nim ate-s pin" / />        </d iv>
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
        / />
      )}
      {hasError && (
    <>
        </><d iv c las sNa me="a b sol ute i nset-0 bg-g ray-800 flexitems-centerjustify-center">
        </d iv>
          <d iv c las sNa me="t e xt-centert ext-g ra-y-400">
        </d iv>
            <d iv c las sNa me="w-8 h-8m x-a uto mb-2">📷</d iv>            <p c las sNa me="t e xt-sm">Image f ail ed to load</p>
          </d iv>
      )}
    </d iv>
  )
}
export default LazyImage;
    </>