<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react";
=======
import { useEffect, useRef, useState } from from 'react'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;
interface UseLazyLoadingOptions {;
;
threshold?: number;
  rootMargin?: string;
<<<<<<< HEAD
  triggerOnce?: boolean;

}"
}"
;"
export function useLazyLoading(options: "UseLazyLoadingOptions = {",;}) { ;
;"
const{;"
threshold = 0.1,;"'"
rootMargin = '50px",;
triggerOnce = true,;
, }
=======
  triggerOnce?: boolean}
}
export function useLazyLoading(options: "UseLazyLoadingOptions = {"}) { ;
;
const{;
threshold = 0.1,;
rootMargin = '50px',;
triggerOnce = true}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  } = options;
;
const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
;
useEffect(() => {;
const element = elementRef.current;
    if (!element) return;
;
const observer = new IntersectionObserver();
      ([entry]) => {;
const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
;
if(isVisible && !hasIntersected) {  ;
setHasIntersected(true);
        ,}
      },;
      {;
threshold,;
rootMargin}
    );
;
observer.observe(element);
;
return () => {;
<<<<<<< HEAD
observer.unobserve(element);
    };"
  }, [threshold, rootMargin, hasIntersected,]);"
;"
const shouldLoad = triggerOnce ? hasIntersected: "isIntersecting;"
=======
observer.unobserve(element)}
  }, [threshold, rootMargin, hasIntersected]);"
;"
const shouldLoad = triggerOnce ? hasIntersected: "isIntersecting;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;"
return{;"
elementRef",isIntersecting,;
hasIntersected,;
<<<<<<< HEAD
shouldLoad,}
  };"
}"
;"
export function useImageLazyLoading(src: "string",options: "UseLazyLoadingOptions = {",;}) {;
;
const { shouldLoad, elementRef 
;} = useLazyLoading(options);
  const [imageSrc, setImageSrc,] = useState<string | null>(null);
  const [isLoaded, setIsLoaded,] = useState(false);
  const [hasError, setHasError,] = useState(false);
=======
shouldLoad}
  }"
}"
export function useImageLazyLoading(src: "string",options: "UseLazyLoadingOptions = {"}) {;
;
const { shouldLoad, elementRef;
} = useLazyLoading(options);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;
useEffect(() => {;
if(shouldLoad && src && !imageSrc) {  ;
setImageSrc(src)}
  }, [shouldLoad, src, imageSrc]);
;
const handleLoad = ();
setIsLoaded(true);
    setHasError(false)) => {;
$3;
}
const handleError = ();
setHasError(true);
    setIsLoaded(false)) => {;
$3;
}
return{;
elementRef,;
imageSrc,;
<<<<<<< HEAD
isLoaded,;"
hasError,;"
shouldLoad,;}"
onLoad: "handleLoad",onError: "handleError",};"
}"
"'"
=======
isLoaded,;
hasError,;"
shouldLoad}"
onLoad: "handleLoad",onError: "handleError"}
}"
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
