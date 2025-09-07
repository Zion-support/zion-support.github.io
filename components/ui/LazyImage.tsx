
<<<<<<< HEAD
interface LazyImageProps {
  src: string;
=======

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;

>>>>>>> origin/chore/fix-lint-and-merge
  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number;}
}
}
<<<<<<< HEAD
export const LazyImage: React.FC<LazyImageProps /> = ({src;
  alt;
  height?: number
}


  alt;
  className = '
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+;
  threshold = 0.1;
  width;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
          setIsInView(true);
import React, { useEffect, useRef, useState } from react';
import { motion } from 'framer-motion;
interface LazyImageProps {
  src: string,
  alt: string,
  className?: string,
  placeholder?: string,
  threshold?: number,
  width?: number,
  height?: number
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = $2;
  placeholder = data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = $2;
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState($2);
  const [isInView, setIsInView] = useState($2);
  const imgRef = $2;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView($2);
          observer.disconnect()
=======

export const LazyImage: React.FC<LazyImageProps    /> = ({src;
  alt;

  className;

const [isLoaded, setIsLoaded] = useState(false);

const [isInView, setIsInView] = useState(false);

const imgRef = useRef<HTMLImageElement    />(null);
          setIsInView(true);
}
observer.disconnect();}
>>>>>>> origin/chore/fix-lint-and-merge
        }
      },
      { threshold }
    );
    if (imgRef.current) {}
observer.observe(imgRef.current);}
    }
    return () => observer.disconnect ();
  }, [threshold]);

const handleLoad = (
    setIsLoaded(true)) => {
  return $3;}
}
};

<<<<<<< HEAD
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${


        alt=""
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [threshold]);
  const handleLoad = () => {
    setIsLoaded(true);  };    }
    return () => observer.disconnect()
  }, [threshold]);
  const handleLoad = () => {
    setIsLoaded(true)
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${        alt=""
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${

=======

<<<<<<< HEAD

=======
  return (
    <div className={`relative overflow - hidden ${class_name}`}    />

      {/* Placeholder */}

      <img;
src={placeholder}
alt=''
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${}
          isLoaded ? 'opacity-0' : 'opacity-100'}
        }`}
        style={{ width, height }}
         />


>>>>>>> origin/chore/fix-lint-and-merge

      {/* Actual Image */}
      {isInView && (<motion&& motion.img;}
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}}export default LazyImage;          className="w-full h-full object-cover";
          loading="lazy";initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
className='w-full h-full object-cover';
          loading='lazy';
          style={{ width, height }}
        />;
      )}</div>;
  )export default LazyImage;
          className='w - full h - full object - cover';
          loading='lazy'          style={{ width, height }}
        />)}
    </div>)}export default LazyImage;          className="w - full h - full object - cover";
          loading="lazy";
          style={{ width, height }}
        />)}
    </div>)}export default LazyImage)}export default LazyImage;</div>;
)}export default LazyImage;


          onLoad={handleLoad}

<<<<<<< HEAD
          initial={{ "opacity": 0, "scale": 1.1 
}
          animate={{ "opacity": isLoaded ? 1 : 0, "scale": isLoaded ? 1 : 1.1 }}
          transition={{ "duration": 0.5 
}
className='w-full h-full object-cover''
          loading='lazy''
          style={{ width, height }} />;
      )}
    </div>;
=======
          initial={{ opacity: 0, scale: 1.1 ,}
}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 ,}
}
className='w-full h-full object-cover'
          loading='lazy'
          style={{ width, height }}
           />;
      )}

    </div>
)
};


export default LazyImage;

>>>>>>> origin/chore/fix-lint-and-merge
