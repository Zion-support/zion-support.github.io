<<<<<<< HEAD
=======
import { useEffect, useRef, useState } from 'react";'

>>>>>>> origin/main
interface UseLazyLoadingOptions {
threshold?: number
  rootMargin?: string
<<<<<<< HEAD
  } = options
=======
  triggerOnce?: boolean
}
}"
}"

export function useLazyLoading(options: "UseLazyLoadingOptions = {",;}) { 

<<<<<<< HEAD
const{
threshold = 0.1
rootMargin = "50px
triggerOnce = true
}
=======
const{"
threshold = 0.1,""
rootMargin = '50px",
triggerOnce = true,}
, }
>>>>>>> origin/main
  } = options

>>>>>>> origin/main
const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
useEffect(() => {
const element = elementRef.current
    if (!element) return
const observer = new IntersectionObserver()
      ([entry]) => {
const isVisible = entry.isIntersecting
        setIsIntersecting(isVisible)
<<<<<<< HEAD
if(isVisible && !hasIntersected) {
setHasIntersected(true)
        ,}
      },
      {
threshold,
=======

if(isVisible && !hasIntersected) {  
setHasIntersected(true)}
        ,}
      },
      {
threshold,}
>>>>>>> origin/main
rootMargin}
    )
observer.observe(element)
return () => {
<<<<<<< HEAD
"
return{
elementRef",isIntersecting,
hasIntersected,
useEffect(() => {
if(shouldLoad && src && !imageSrc) {
setImageSrc(src    )
}
  }, [shouldLoad, src, imageSrc])
=======
observer.unobserve(element)}
    }"
  }, [threshold, rootMargin, hasIntersected,])"

<<<<<<< HEAD
=======
const shouldLoad = triggerOnce ? hasIntersected: "isIntersecting"
>>>>>>> origin/main

return{"
elementRef",isIntersecting,
hasIntersected,}
shouldLoad,}
  }"
}"

export function useImageLazyLoading(src: "string",options: "UseLazyLoadingOptions = {",;}) {

const { shouldLoad, elementRef }
;} = useLazyLoading(options)
  const [imageSrc, setImageSrc,] = useState<string | null>(null)
  const [isLoaded, setIsLoaded,] = useState(false)
  const [hasError, setHasError,] = useState(false)

useEffect(() => {
if(shouldLoad && src && !imageSrc) {  }
setImageSrc(src)}
  }, [shouldLoad, src, imageSrc])

>>>>>>> origin/main
const handleLoad = ()
setIsLoaded(true)
<<<<<<< HEAD
    setHasError(false)
  ) => {

}

const handleError = () => {
setHasError(true)
    setIsLoaded(false)
  ) => {

}

return{
elementRef
imageSrc
isLoaded
hasError
shouldLoad}
onLoad: "handleLoad",onError: "handleError"}

=======
    setHasError(false)) => {
$3
<<<<<<< HEAD
=======
  );
>>>>>>> origin/main
>>>>>>> origin/main
}
const handleError = ()
setHasError(true)
    setIsLoaded(false)) => {
$3
  );
}
return{
elementRef,
<<<<<<< HEAD
imageSrc,
=======
imageSrc,
<<<<<<< HEAD
isLoaded,
hasError,
shouldLoad,}
onLoad: "handleLoad",onError: "handleError",}
}
isLoaded,
hasError,
shouldLoad}
onLoad: "handleLoad",onError: "handleError"}
}
=======
isLoaded,"
hasError,"}
shouldLoad,;}"
onLoad: "handleLoad",onError: "handleError",}"
}"
"'"
>>>>>>> origin/main
>>>>>>> origin/main
