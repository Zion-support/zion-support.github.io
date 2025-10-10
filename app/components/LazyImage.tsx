import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps {
  src: string;,
    alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps>= ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false</LazyImageProps>)</LazyImageProps>;</LazyImageProps>
  const [hasError, setHasError] = useState(false<//LazyImageProps>)<//LazyImageProps>;</LazyImageProps>
  const imgRef = useRe<//LazyImageProps>f<//LazyImageProps><HTMLImageElement>(null);

  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
)
    React.useEffect(() => {
    if (entry?.isIntersecting) {
      setIsInView(true);
    }
  }, [entry]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  }</HTMLImageElement>;</HTMLImageElement>
</HTMLImageElement>
  return <//HTMLImageElement>(<//HTMLImageElement><div ref={setNode} className={`relative overflow-hidden ${className}`}>{isInView &&</div ref={setNode} className={`relative overflow-hidden ${className}`}> </div ref={setNode} className={`relative overflow-hidden ${className}`}>(</div><img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        >)</img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        >}</img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        >
</img>
      {!isLoaded && !hasError &&<//img> <//img>(</img>
      <//img> <//img> </img><div className="absolute inset-0 flex items-center justify-center bg-gray-200">
        </div className="absolute inset-0 flex items-center justify-center bg-gray-200"> </div className="absolute inset-0 flex items-center justify-center bg-gray-200"> </div><img
            src={placeholder}
            alt="Loading..."
            className="w-full h-full object-cover"
          />
      </img
            src={placeholder}
            alt="Loading..."
            className="w-full h-full object-cover"
          /> </img
            src={placeholder}
            alt="Loading..."
            className="w-full h-full object-cover"
          /> </div>
      )}

      {hasError && (
       <//div> <//div><div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
        </div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500"> </div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500"> </div><span>Failed to load im</span>a</span>g</span>e</span>
      <//span> <//span> </div>
      )}
  <//div> <//div> </div>
  );
};

export default LazyImage<//div>;<//div>