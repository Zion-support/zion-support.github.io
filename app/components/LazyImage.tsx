import React, { useState } from 'react';
import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;,
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src, alt, className = '', _placeholder, _fallback, _onLoad, _onError, loading = 'lazy', _sizes, _srcSet, _}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
  // TODO: Implement
}
        threshold: 0.1,
        rootMargin: '50px'}
    )
    if (imgRef.current) {
  // TODO: Implement
}
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect();
  }, [])
  const handleLoad = () => {
  // TODO: Implement
}
}setIsLoaded(true)
    onLoad?.()
  }
  const handleError = () => {
  // TODO: Implement
}
}setIsError(true)
    onError?.()
  }
  if (isError && fallback) {
  // TODO: Implement
}
    return <>{fallback}</>
  }
  return();
    </><div ref={imgRef} className={`relative overflow-hidden ${className}`}></div>
      {!isLoaded && !isError && placeholder && ()
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700"></div>
          {placeholder}
        </div>
      )}
      {isInView && ()
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
  // TODO: Implement
}
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading={loading}
          sizes={sizes}
          srcSet={srcSet}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        /></img>
      )}
    </div>
  )
}
export default LazyImage;