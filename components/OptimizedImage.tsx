<<<<<<< HEAD
'use client';''''''import Image from 'next/image';''''interface OptimizedImageProps {
=======
'use client';'
''
import Image from 'next/image';''

interface OptimizedImageProps {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
<<<<<<< HEAD
  priority?: boolean;'''  quality?: number;'''  placeholder?: 'blur' | 'empty';'  blurDataURL?: string;'  sizes?: string;
=======
  priority?: boolean;'
  quality?: number;''
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({

<<<<<<< HEAD
  src, alt,
  width, '''  height,'''  className = '', priority = false,'''  quality = 75, '''  placeholder = 'empty','  blurDataURL, sizes,'  fill = false, style,
  onClick, onLoad,
=======
  src,
  alt,
  width,'
  height,''
  className = '',
  priority = false,'
  quality = 75,''
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  style,
  onClick,
  onLoad,
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  onError}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

<<<<<<< HEAD
    const observer = new IntersectionObserver();
=======
    const observer = new IntersectionObserver()
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      ([entry]) => {

        if (entry.isIntersecting) {

          setIsInView(true);
          observer.disconnect();
        }
<<<<<<< HEAD
      }, {
''''''        rootMargin: '50px', // Start loading 50px before the image comes into view'        threshold: 0.1}'    );
=======
      },
      {
'
''
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1}
    );
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a

    if (imageRef.current) {

      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
<<<<<<< HEAD
  const handleLoad = () => {;
=======
  const handleLoad = () => {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    setIsLoading(false);
    onLoad?.();
  };

  // Handle image error
<<<<<<< HEAD
  const handleError = () => {;
=======
  const handleError = () => {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Fallback image for errors
  if (hasError) {

<<<<<<< HEAD
    return();
      <div'''        className={`flex items-center justify-center bg-gray-200 dark: bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}'''        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}'      >'        <div className="text-center">"""          <svg"""            className="mx-auto h-8 w-8 mb-2""""            fill="none""""            viewBox="0 0 24 24""""            stroke="currentColor""          >"""            <path"""              strokeLinecap="round""""              strokeLinejoin="round""""              strokeWidth={2}"""              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z""            />"""          </svg>"""          <p className="text-xs">Image failed to load</p>"        </div>"      </div>`    );
=======
    return()
      <div'
        className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}''
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <div className="text-center">"
          <svg""
            className="mx-auto h-8 w-8 mb-2"""
            fill="none"""
            viewBox="0 0 24 24"""
            stroke="currentColor"
          >"
            <path""
              strokeLinecap="round"""
              strokeLinejoin="round""
              strokeWidth={2}""
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />"
          </svg>""
          <p className="text-xs">Image failed to load</p>
        </div>
      </div>
    );
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  }

  // Loading skeleton
  if (!isInView) {

<<<<<<< HEAD
    return();
      <div``        ref={imageRef}`'`''        className={`bg-gray-200 dark: bg-gray-700 animate-pulse ${className}`}'''        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}'      />'    );`  }

  return();
    <div``      ref={imageRef}```      className={`relative ${className}`}`      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}"""      {isLoading && ("""        <div className="absolute inset-0 bg-gray-200 dark: bg-gray-700 animate-pulse z-10" />"      )}"
=======
    return()
      <div`
        ref={imageRef}`'`
        className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}''
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      />
    );
  }

  return()
    <div`
      ref={imageRef}``
      className={`relative ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}"
      {isLoading && (""
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />
      )}

>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      {/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
<<<<<<< HEAD
        width={fill ? undefined : width}``        height={fill ? undefined : height}```        className={`transition-opacity duration-300 ${`'''''`'          isLoading ? 'opacity-0' : 'opacity-100'``'        }`}'        priority={priority}`        quality={quality}
=======
        width={fill ? undefined : width}`
        height={fill ? undefined : height}``
        className={`transition-opacity duration-300 ${
'
''`
          isLoading ? 'opacity-0' : 'opacity-100'``
        }`}
        priority={priority}
        quality={quality}
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
        style={{
<<<<<<< HEAD
''''''          objectFit: fill ? 'cover' : 'contain'}}'      />'
      {/* Loading spinner */}"""      {isLoading && ("""        <div className="absolute inset-0 flex items-center justify-center z-20">"""          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>"        </div>"      )}
=======
'
''
          objectFit: fill ? 'cover' : 'contain'}}
      />

      {/* Loading spinner */}"
      {isLoading && (""
        <div className="absolute inset-0 flex items-center justify-center z-20">""
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    </div>
  );
};

<<<<<<< HEAD
// HOC for wrapping components with image optimization;
export const withImageOptimization = <P extends object>(;
=======
// HOC for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  Component: React.ComponentType<P>
) => {

  return (props: P) => (
    <Component {...props} />
  );
};
<<<<<<< HEAD
'"`'""export default OptimizedImage;'"`'"`""`
=======
'"`
export default OptimizedImage;'"`'"`
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
