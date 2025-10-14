  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number';'
  loading?: 'lazy' | "eager"'"'"
  onLoad?: () => void;
  alt,
  width,

  onLoad,
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (priority) return;
const observer = new IntersectionObserver()
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
          setIsInView(true)
          observer.disconnect()}
      },
  // Generate WebP src if supported;
  const getOptimizedSrc = (originalSrc: string) => {''''
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {'''
      return originalSrc}
      return originalSrc;}
      return originalSrc;}
    // For local images, you could implement WebP conversion here;
    return originalSrc;
  }
  const optimizedSrc = getOptimizedSrc(src)
    return originalSrc}
  const optimizedSrc = getOptimizedSrc(src)
  return (
<>
        </Helmet>
      )}
      <div></div>
    </>
        { /* Placeholder */ }
        { !isLoaded && !isError && (
          <div></div>
            <div className="text-gray-400 text-sm">Loading...</div>
          >
            <div>"""</div>
              <div className="text-2xl mb-2">📷</div>
              <div>Image not available</div>
          />
        )
      </div>
  );
};

export default OptimizedImage;
