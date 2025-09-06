<<<<<<< HEAD
 useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect () 
}, [threshold]);

  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
  height,
=======
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface LazyImageProps {
  src: string,
  alt: string,
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src;
  alt;
  className = '';
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0.1;
  width;
  height
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
<<<<<<< HEAD
          observer.disconnect();
        }
      },
=======
          observer.disconnect()
        }
      };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      { threshold }
    );

    if (imgRef.current) {
<<<<<<< HEAD
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
=======
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
<<<<<<< HEAD
        alt=''
=======
        alt=""
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
      />
<<<<<<< HEAD

=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      {/* Actual Image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD
          className='w-full h-full object-cover'
          loading='lazy'
=======
          className="w-full h-full object-cover"
          loading="lazy"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          style={{ width, height }}
        />
      )}
    </div>
<<<<<<< HEAD
  );
};

export default LazyImage;
=======
  )
};

export default LazyImage;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
