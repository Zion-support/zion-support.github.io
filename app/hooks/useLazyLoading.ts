interface UseLazyLoadingOptions {
threshold?: number
  rootMargin?: string
  } = options
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
if(isVisible && !hasIntersected) {
setHasIntersected(true)
        ,}
      },
      {
threshold,
rootMargin}
    )
observer.observe(element)
return () => {
"
return{
elementRef",isIntersecting,
hasIntersected,
useEffect(() => {
if(shouldLoad && src && !imageSrc) {
setImageSrc(src    )
}
  }, [shouldLoad, src, imageSrc])
const handleLoad = ()
setIsLoaded(true)
    setHasError(false)) => {
$3
}
const handleError = ()
setHasError(true)
    setIsLoaded(false)) => {
$3
}
return{
elementRef,
imageSrc,