  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  useEffect(() => {
    if (!lazy || isInView) {
      const img = new Image()
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true    )
}
      img.src = src}
  }, [src, lazy, isInView])
  useEffect(() => {
    if (!lazy) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect(    )
}
    const element = document.querySelector(`[data-src="${src}"]`)
    if (element) {
      observer.observe(element    )
}
    return () => observer.disconnect()
  }, [src, lazy])