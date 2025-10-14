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
  height,''''
  className = '','''
  priority = false,''''
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',''''
  sizes = '100vw','''
  quality = 85,''''
  loading = 'lazy','''
  height,
  className = '',
  priority = false,
  placeholder: _placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
 (Fix all linting errors and merge conflicts)
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
