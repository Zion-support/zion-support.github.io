import React, { useState, useRef, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
<<<<<<< HEAD
  alt: string;
=======
  al,
    t: string;
>>>>>>> main
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> main
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  fill = false,
  style,
  onLoad,
<<<<<<< HEAD
  onError
=======
<<<<<<< HEAD
  onError,
=======
  onError
>>>>>>> main
>>>>>>> main
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
<<<<<<< HEAD

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

=======
<<<<<<< HEAD
  // Generate a simple blur placeholder if none provided;
  const defaultBlurDataURL =
    'data: image/jpeg;base64, /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
=======

  // Generate a simple blur placeholder if none provided'
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

>>>>>>> main
>>>>>>> main
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> main
  const handleError = () => {
    setHasError(true);
    onError?.();
  };
<<<<<<< HEAD

  // Intersection Observer for lazy loading
=======
<<<<<<< HEAD
  // Intersection Observer for lazy loading;
=======

  // Intersection Observer for lazy loading
>>>>>>> main
>>>>>>> main
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
<<<<<<< HEAD
            // Image is in viewport, trigger load
=======
<<<<<<< HEAD
            // Image is in viewport, trigger load;
=======
            // Image is in viewport, trigger load
>>>>>>> main
>>>>>>> main
            observer.unobserve(entry.target);
          }
        });
      },
<<<<<<< HEAD
      {
        rootMargin: '50px 0px',
=======
      {'
        rootMargin: '50px 0px',
<<<<<<< HEAD
        threshold: 0.1,
      }
    );
=======
>>>>>>> main
        threshold: 0.1
      }
    );

<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> main
  if (hasError) {
    return (
      <div'
        className={`bg-gray-200 flex items-center justify-center ${className}`}
<<<<<<< HEAD
        style={{ width, height, ...style }}`
=======
        style={{ width, height, ...style }}
<<<<<<< HEAD
        role="img"
        aria-label={alt}
      >
=======
<<<<<<< HEAD
>>>>>>> main
        role="img"
=======
<<<<<<< HEAD
        role="img"
=======
        role='img'
>>>>>>> main
>>>>>>> main
        aria-label={alt}
      >"
>>>>>>> main
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> main
  return (
    <div
<<<<<<< HEAD
      ref={imgRef}"
      className={`relative overflow-hidden ${className}`}`
      style={fill ? { position: 'relative', width: '100%', height: '100%' } : { width, height, ...style }}
=======
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={
        fill
          ? { position: 'relative', width: '100%', height: '100%' }
          : { width, height, ...style }
      }
>>>>>>> main
    >
      <img
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
<<<<<<< HEAD
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: 'cover',
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...style
        }}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ImageOptimizer;
=======
        className={`transition-opacity duration-300 ${`
          isLoaded ? 'opacity-100' : 'opacity-0''
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{`
          objectFit: 'cover',
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
<<<<<<< HEAD
          ...style,
        }}
        loading={priority ? 'eager' : 'lazy'}
      />
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div
=======
          ...style
        }}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
<<<<<<< HEAD
        <div'
          className="absolute inset-0 bg-gray-200 animate-pulse""
=======
        <div
<<<<<<< HEAD
>>>>>>> main
          className="absolute inset-0 bg-gray-200 animate-pulse"
>>>>>>> main
          aria-hidden="true"
        />
      )}
<<<<<<< HEAD
    </div>
  );
};
export default ImageOptimizer;
=======
=======
          className='absolute inset-0 bg-gray-200 animate-pulse'
          aria-hidden='true'/>)}
>>>>>>> main
    </div>
  );
};

<<<<<<< HEAD
export default ImageOptimizer;"
=======
export default ImageOptimizer;
>>>>>>> main
>>>>>>> main
>>>>>>> main
