interface LazyImageProps {
  onLoad?: () => void;
  onError?: () => void;
}
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  priority = false,
  sizes = '100vw',
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    if (imgRef.current) {
    }
    return () => observer.disconnect();
  const handleLoad = () => {
  const handleError = () => {
  const optimizedSrc = `${src}?w=800&q=${quality}&f=webp`;
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <imgIcon className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <imgIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs text-gray-500">Failed to load image</p>
          </div>
        </div>
      )}
      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
        />
      )}
    </div>