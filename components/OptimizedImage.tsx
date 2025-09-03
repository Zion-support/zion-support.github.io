
interface OptimizedImageProps {
  src: string,
alt: string
  width?: number
  height?: number
  className?: string
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties,
  onClick?: () => void
  onLoad?: () => void
  blurDataURL
  sizes
  fill = false
  style
  onClick
  onLoad}) => {
  onError
  loading = "lazy","
  objectFit = "cover","
  objectPosition = "center"
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imageRef = useRef<HTMLDivElement>(null)
  // Intersection Observer for lazy loading
useEffect(() => {
    if (priority) return
    const observer = new IntersectionObserver()
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          <svg"""
            className = "mx-auto h-8 w-8 mb-2""""
            fill="none""""
            viewBox="0 0 24 24""""
            stroke="currentColor""
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z""
            />""
          </svg>"""
          <p className="text-xs">Image failed to load</p>
  if (!isInView) {
      <div`"
        ref={imageRef}`"`"'