ursor/automate-test-fix-improve-and-merge-code-48f3
  alt: string;
  width?: number;
  height?: number;
  className?: string;
ursor/automate-test-fix-improve-and-merge-code-48f3
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({

src, alt,
  width,  ,
  ''
  '  height, '''
  '  className = '', priority = false, '''
  '  quality = 75, '''
  '  placeholder = 'empty
  ', '  blurDataURL, sizes, '  fill = false, style, '
  onClick, onLoad, onError}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

const observer = new IntersectionObserver();([entry]) => {

        if (entry.isIntersecting) {

          setIsInView(true);
          observer.disconnect()
        }
}, {
''''''
  '        rootMargin: '50px, // Start loading 50px before the image comes into view'        threshold: 0.1}'
  '    );if (imageRef.current) {'

      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
const handleLoad = () => {;setIsLoading(false);
    onLoad?.();
  };

  // Handle image error
const handleError = () => {;setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Fallback image for errors
  if (hasError) {

ursor/automate-test-fix-improve-and-merge-code-48f3

  // Loading skeleton
  if (!isInView) {

ursor/automate-test-fix-improve-and-merge-code-48f3

  return()
    <div``      ref={imageRef}```      className={`relative ${className}`}`      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}"""      {isLoading && ("""        <div className="absolute inset-0 bg-gray-200 dark: bg-gray-700 animate-pulse z-10" />"      )}"{/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
width={fill ? undefined : width}``        height={fill ? undefined : height}```        className={`transition-opacity duration-300 ${`, ''''
  '`'          isLoading ?
  'opacity-0': 'opacity-100'``        }`}'        priority={priority}`        quality={quality}placeholder={placeholder}'
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
ursor/automate-test-fix-improve-and-merge-code-48f3
  );
};

// HOC for wrapping components with image optimization;
export const withImageOptimization = <P extends object>(;Component: React.ComponentType<P>
) => {

  return (props: P) => (
    <Component {...props} />
  );
ursor/automate-test-fix-improve-and-merge-code-48f3
