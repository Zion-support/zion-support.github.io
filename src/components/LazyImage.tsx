import React from 'react';

interface LazyImageProps {
  // TODO: Add content;
};
  src: string;,
    alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}
const LazyImage: React.FC
          
          
          
          
          
          
          
          ;
          <LazyImageProps> = ({
  // TODO: Add content;
}
//   src,
//   alt,
//   className,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
//   width,
//   height,
  priority = false,
//   onLoad,
//   onError;
}) => {
  // TODO: Add content;
}
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
  // TODO: Add content;
}
    if (priority) return;
    const observer = new IntersectionObserver()
      ([entry]) => {
  // TODO: Add content;
}
        if (entry.isIntersecting) {
  // TODO: Add content;
}
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
  // TODO: Add content;
};
  threshold: 0.1,
        rootMargin: '50px'
      }
    );
    if (imgRef.current) {
  // TODO: Add content;
}
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [priority]);
  const handleLoad = () => {
  // TODO: Add content;
}
    setIsLoaded(true);
    onLoad?.();
  };
  const handleError = () => {
  // TODO: Add content;
}
    setHasError(true);
    onError?.();
  };
    
          
          
          
          
          
          
          
  )
    
      ref={imgRef} className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
// >
      {!isInView ? ()
        
          
          
          
          
          
          
          
          
          src={placeholder}
          alt="" className="w-full h-full object-cover"
          aria-hidden="true"
// />
      ) : (

          
          
          
          
          
          
          
          
            src={hasError ? placeholder : src}
            alt={alt} className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
// />
          {!isLoaded && !hasError && (

          
          
          
          
          
          
          
          
          )}
      )}
  );
};

export default LazyImage;