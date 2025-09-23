<<<<<<< HEAD
"use client";
import React{ useEffectuseRefuseState } from 'react';
=======
import React, { useEffect, useRef, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
<<<<<<< HEAD
  className = ', ',
=======
  className = '',
>>>>>>> origin/auto/autonomy-17186719616
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
  height
}) => {
<<<<<<< HEAD
  const [isLoadedsetIsLoaded] = useState(false);
  const [isInViewsetIsInView] = useState(false);
=======
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
<<<<<<< HEAD
  }[threshold]);
=======
  }, [threshold]);
>>>>>>> origin/auto/autonomy-17186719616

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
<<<<<<< HEAD
        style={{ widtheight }}
=======
        style={{ width, height }}
>>>>>>> origin/auto/autonomy-17186719616
      />
      
      {/* Actual Image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
<<<<<<< HEAD
          initial={{ opacity: 0scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ widtheight }}
=======
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ width, height }}
>>>>>>> origin/auto/autonomy-17186719616
        />
      )}
    </div>
  );
};

export default LazyImage;