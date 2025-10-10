import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

<<<<<<< HEAD
interface LazyImageProps {
  src: string;,
    alt: string;
=======
interface LazyImageProps {}
  src: string;
  alt: string;
>>>>>>> origin/merge-error-fixes
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
const LazyImage: React.FC<LazyImageProps>= ({
=======
const LazyImage: React.FC<LazyImageProps> = ({}
>>>>>>> origin/merge-error-fixes
  src,
=======
const LazyImage: React.FC<LazyImageProps> = ({,
  src;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  onLoad,
  onError,
}) => {}
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);</LazyImageProps>
  const [hasError, setHasError] = useState(false);</LazyImageProps>
  const imgRef = useRef<HTMLImageElement>(null);

<<<<<<< HEAD
<<<<<<< HEAD
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
)
    React.useEffect(() => {
    if (entry?.isIntersecting) {
=======
  const [setNode, entry] = useIntersectionObserver({)
    threshold: 0.1),
    rootMargin: '50px'),
  React.useEffect(() => {,
    if (entry?.isIntersecting) {,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
  const [setNode, entry] = useIntersectionObserver({)}
    threshold: 0.1,
    rootMargin: '50px',

  React.useEffect(() => {}
    if (entry?.isIntersecting) {}
>>>>>>> origin/merge-error-fixes
      setIsInView(true);
    }
  }, [entry]);

  const handleLoad = () => {}
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {}
    setHasError(true);
    onError?.();
  };
<<<<<<< HEAD
</HTMLImageElement>
<<<<<<< HEAD
  return (<div ref={setNode} className={`relative overflow-hidden ${className}`}>{isInView && (<img
=======

<<<<<<< HEAD
  return(<div ref={setNode} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <img;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
  return (<div ref={setNode} className={`relative overflow-hidden ${className}`}>{isInView && (</div><img
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
=======
  return (
    <div ref={setNode} className={`relative overflow-hidden ${className}`}>
      {isInView && (}
        <img
>>>>>>> origin/merge-error-fixes
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
<<<<<<< HEAD
<<<<<<< HEAD
          className={`transition-opacity duration-300 ${
=======
          className={`transition-opacity duration-300 ${}
>>>>>>> origin/merge-error-fixes
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        >)}
</img>
      {!isLoaded && !hasError && (</img>
        </img><div className="absolute inset-0 flex items-center justify-center bg-gray-200"></div>
          <img
=======
          className={`transition-opacity duration-300 ${})
            isLoaded ? 'opacity-100' : 'opacity-0'})
          } ${className}`})
          loading="lazy")
        />)
      )}

      {!isLoaded && !hasError && (}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <img;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            src={placeholder}
            alt="Loading..."
            className="w-full h-full object-cover"
          />
        </div>
      )}

<<<<<<< HEAD
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500"></div>
=======
      {hasError && (}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
>>>>>>> origin/merge-error-fixes
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;