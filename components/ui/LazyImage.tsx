<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect () 
}, [threshold]);

  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
<<<<<<< HEAD
  height,}) => {
=======
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

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export const LazyImage: React.FC<LazyImageProps> = ({
  src;
  alt;
  className = '';
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0.1;
  width;
  height
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}) => {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
      },      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
=======
<<<<<<< HEAD
<<<<<<< HEAD
          observer.disconnect();
        }
      },
=======
          observer.disconnect()
        }
      };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          observer.disconnect()
        }
      };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      { threshold }
    );

    if (imgRef.current) {
<<<<<<< HEAD
<<<<<<< HEAD
      observer.observe(imgRef.current);
=======
      observer.observe(imgRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }

    return () => observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {
<<<<<<< HEAD
    setIsLoaded(true);  };
=======
<<<<<<< HEAD
    setIsLoaded(true);
=======
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setIsLoaded(true)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
<<<<<<< HEAD
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
=======
<<<<<<< HEAD
<<<<<<< HEAD
        alt=''
=======
        alt=""
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        alt=""
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
      />
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          loading='lazy'          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default LazyImage;
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='w-full h-full object-cover'
          loading='lazy'
=======
          className="w-full h-full object-cover"
          loading="lazy"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="w-full h-full object-cover"
          loading="lazy"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          style={{ width, height }}
        />
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default LazyImage;
=======
  )
};

export default LazyImage;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default LazyImage;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
