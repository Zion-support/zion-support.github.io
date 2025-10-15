<<<<<<< HEAD
import React from 'react';

=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react;'
import { Helmet } from 'react-helmet-async;'
>>>>>>> main
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
<<<<<<< HEAD
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
    />
  );
};

export default OptimizedImage;
=======
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager''
  onLoad?: () => void;
  onError?: () => void}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '''
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+''
  sizes = '100vw''
  quality = 85,
  loading = 'lazy''
  onLoad,
  onError });
}) => {;
const [isLoaded, setIsLoaded] = useState(false);
const [isError, setIsError] = useState(false);
const [isInView, setIsInView] = useState(priority);
const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (priority) return;
const observer = new IntersectionObserver()
      ([entry]) => {
        if (entry.isIntersecting) {}
          setIsInView(true);}
          observer.disconnect();}
          setIsInView(true);}
          observer.disconnect()}
      },
      {
        threshold: 0.1,
        rootMargin: '50px'}''
      });
    if (imgRef.current) {}
      observer.observe(imgRef.current)}
    return () => observer.disconnect()}, [priority]);
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.()};
  const handleError = () => {
    setIsError(true);
    onError?.()};
  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {''
      return originalSrc}
    // For external images, return as-is
    if (originalSrc.startsWith('http')) {''
      return originalSrc}
    // For local images, you could implement WebP conversion here
    return originalSrc};
  const optimizedSrc = getOptimizedSrc(src);
    return originalSrc}
  const optimizedSrc = getOptimizedSrc(src)
  return (
    <>{priority && (</>
        <Helmet>}
          <link rel="preload" as="image" href={optimizedSrc} />""
        </Helmet>
)}
      <div
        ref={ imgRef }
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }
      >
        {/* Placeholder */}
        {!isLoaded && !isError && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"}""
            style={{ width, height }
          >
            <div className="text-gray-400 text-sm">Loading...</div>""
          </div>
)}
        {/* Error state */}
        {isError && (
          <div
            className="absolute inset-0 bg-gray-100 flex items-center justify-center"}""
            style={{ width, height }
          >
            <div className="text-gray-400 text-sm text-center">""
              <div className="text-2xl mb-2">📷</div>""
              <div>Image not available</div>
            </div>
          </div>)
<<<<<<< HEAD)
)}
        {/* Actual image */}
        {isInView && !isError && (}
          <img}
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${;
              isLoaded ? 'opacity-100' : 'opacity-0'}''
            }`}
            style={{
              width: '100%''
              height: '100%''
              objectFit: 'cover''
            }}
          />
)}
      </div>
    </>
  )};
export default OptimizedImage
=======

import React, { useState } from 'react';
import React, { useState, useRef, useEffect } from 'react';

import React from 'react';;';
import SEOHead from './components/SEOHead';
;

const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({};)
  src, alt, className = '', _width, _height, priority = false, placeholder = 'data:image/svg+xml;base64, _PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+', _onLoad, _onError, _}) => {};
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {};
    if (priority) return;

    const observer = new IntersectionObserver(([entry]) => {};
        if ($1) {}
  // If body
}
          setIsInView(true);
          observer.disconnect();
        };
      };
      { threshold: 0.1 };
    )
    if (imgRef.current) {},
      observer.observe(imgRef.current)
    },
      return () => observer.disconnect()
  }, [priority])
  const handleLoad = () => {};
}setIsLoaded(true)
    onLoad?.()
  },
      const handleError = () => {};
}setHasError(true)
    onError?.()
  },
      const imageSrc = isInView ? src : placeholder
  return ()
    <divref={imgRef},>
      className={`relative overflow-hidden ${className}`},
      style={{ width, height }};
    ></div
>
      {!isLoaded && !hasError && ()}
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"></div>
          <div className="w-8 h-8 border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      )};
      {hasError ? ()}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center"></div>
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      ) : ()
        <imgsrc={imageSrc},>
      alt={alt},
      className={`transition-opacity duration-300 ${},
      isLoaded ? 'opacity-100' : 'opacity-0'
          }`},
      onLoad={handleLoad},
      onError={handleError},
      loading={priority ? 'eager' : 'lazy'},
      decoding="async"
        />
      )};
    </div>
  )
},
      export default OptimizedImage

;
export default ComponentsPage;'";'";

>>>>>>> main
>>>>>>> main
