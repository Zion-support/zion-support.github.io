import {useState, useRef, useEffect} from 'react';
import {Loader2} from 'lucide-react';

interface Lazy Image Props {
  src: string,
  alt: string
  class Name?: string
  placeholder?: string
  on Load?: () => void
  on Error?: () => void
}

const Lazy Image: React.FC<Lazy Image Props /> = ({
  src,
  alt,
  constclassName = '',
  placeholder,
  onLoad,
  onError
}) => {
  const [is Loaded, set Is Loaded] = use State(false)
  const [is In View, set Is InView] = use State(false)
  const [has Error, set Has Error] = use State(false)
  const imgRef = use Ref<HTMLImage Element/>(null)

  use Effect(() => {
    constobserver = new Intersection Observer(
      ([entry]) => {
        if (entry.isIntersecting) {
          set Is InView(true)
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
    set Is Loaded(true)
    on Load?.()
  }

  const handleError = () => {
    set Has Error(true)
    on Error?.()
  }

  return (
    <divref ="{imgRef}" className="{`relative" overflow-hidden${className}`} />
      {!isIn View && (
        <div className ="absoluteinset-0 bg-gray-800 animate-pulseflexitems-centerjustify-center" />
          <Loader2class Name ="w-8 h-8text-gray-400animate-spin" / />
        </div>
      )}
      
      {is In View && !is Loaded && !has Error && (
        <div className ="absoluteinset-0 bg-gray-800 flexitems-centerjustify-center" />
          <Loader2class Name ="w-8 h-8text-gray-400animate-spin" / />
        </div>
      )}
      
      {is In View && (
        <imgsrc ="{src}"
          alt="{alt}"
          onLoad ="{handleLoad}"
          onError ="{handleError}"
          className="{`w-full" h-fullobject-covertransition-opacityduration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        / />
      )}
      
      {has Error && (
        <div className ="absoluteinset-0 bg-gray-800 flexitems-centerjustify-center" />
          <div className ="text-centertext-gray-400" />
            <div className ="w-8 h-8mx-automb-2"  >📷</div>
            <pclassName ="text-sm">Imagefailed toload</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Lazy Image;