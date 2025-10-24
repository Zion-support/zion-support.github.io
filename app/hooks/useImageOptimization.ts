<<<<<<< HEAD
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
=======
import { useState, useEffect } from 'react";'

interface UseImageOptimizationOptions {
  src: string
  placeholder?: string"
  lazy?: boolean"
  quality?: number""
  format?: 'webp' | 'avif' | 'jpeg' | 'png"
  );
}
export const useImageOptimization = ({
  src,
  placeholder,"
  lazy = true,"
  quality = 80,"'"
  format = 'webp"}
}: UseImageOptimizationOptions) => {"'"
  const [imageSrc, setImageSrc] = useState(placeholder || '")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)

>>>>>>> origin/main
  useEffect(() => {
    if (!lazy || isInView) {
      const img = new Image()
      img.onload = () => {
<<<<<<< HEAD
        setImageSrc(src)
        setIsLoaded(true    )
}
=======
        setImageSrc(src)}
        setIsLoaded(true)}
>>>>>>> origin/main
      img.src = src}
  }, [src, lazy, isInView])

  useEffect(() => {
    if (!lazy) return
<<<<<<< HEAD
=======

>>>>>>> origin/main
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
<<<<<<< HEAD
          observer.disconnect(    )
}
    const element = document.querySelector(`[data-src="${src}"]`)
    if (element) {
      observer.observe(element    )
}
    return () => observer.disconnect()
  }, [src, lazy])
=======
          observer.disconnect()
  );
}
      },
      { threshold: 0.1 }"
    )"

    const element = document.querySelector(`[data-src="${src}"]`)
    if (element) {}
      observer.observe(element)}
    return () => observer.disconnect()
  }, [src, lazy])

  return {
    imageSrc,
    isLoaded,
    isInView,
    shouldLoad: !lazy || isInView"}
  }"
}"
`
>>>>>>> origin/main
