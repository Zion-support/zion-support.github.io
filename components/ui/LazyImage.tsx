import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src;
  alt;
  className;
origin/cursor/automate-test-improve-and-merge-code-2533
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
          setIsInView(true);
observer.disconnect();
        }
      },
      { threshold }
    );
    if (imgRef.current) {
observer.observe(imgRef.current);
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    return () => observer.disconnect ();
  }, [threshold]);
  const handleLoad = () => {
    setIsLoaded(true);
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className={`relative overflow - hidden ${class_name}`}>;
      {/* Placeholder */}
      <img
        src={placeholder}
alt=''
origin/cursor/automate-test-improve-and-merge-code-2533
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
      />

origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
className='w-full h-full object-cover'
          loading='lazy'
origin/cursor/automate-test-improve-and-merge-code-2533
          style={{ width, height }}
        />;
      )}
    </div>
);
};

export default LazyImage;
origin/cursor/automate-test-improve-and-merge-code-2533
