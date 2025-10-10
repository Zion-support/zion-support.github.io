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
  placeholder = 'data:image/svg+xml;base64,PHN2 ZyB3 aWR0 aD0 iMjAwIiBoZWlnaHQ9 IjIwMCIgeG1 sbnM9 Imh0 dHA6 Ly93 d3 cudzMub3 JnLzIwMDAvc3 ZnIj48 cmVjdCB3 aWR0 aD0 iMTAwJSIgaGVpZ2 h0 PSIxMDAlIiBmaWxsPSIjZjNmNGY2 Ii8 vPjx0 ZXh0 IHg9 IjUwJSIgeT0 iNTAlIiBkb21 pbmFudC1 iYXNlbGluZT0 ibWlkZGxlIiB0 ZXh0 LWFuY2 hvcj0 ibWlkZGxlIiBmaWxsPSIjOWNhM2 FmIiBmb250 LWZhbWlseT0 ic2 Fucy1 zZXJpZiI+TG9 hZGluZy4 uLjwvdGV4 dD48 L3 N2 Zz4=',
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
    rootMargin: '50 px',
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
        >)}</img>
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
          /></im>
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