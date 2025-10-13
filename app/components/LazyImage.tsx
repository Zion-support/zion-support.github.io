<<<<<<< HEAD
import React from 'react';

interface LazyImageProps {
=======
import { ImageIcon } from 'lucide-react';
interface LazyImageProps {
  src: string;
  alt: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  size?: string;
  quality?: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function LazyImage({ className = '', children }: LazyImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function LazyImage({ className = '', children, ...props }: LazyImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  priority = false,
  size = '100vw',
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

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
            <ImageIcon className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
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
          size={size}
        />
      )}
    </div>
  );
};

export default LazyImage;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
