

<<<<<<< HEAD

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

  useEffect(() => {;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;



          setIsInView(true);
          observer && observer.disconnect();
        }
      },      { threshold }
    );



    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);          observer && observer.disconnect();


        }
      }
      { threshold }
    )
};

          setIsInView(true);
          observer.disconnect()
  // Check condition
if ( {) {
  $2
}
  return () => observer.disconnect ();
}, [threshold]);
;
  placeholder = 'data:image / svg + xml;base64, PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI + CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8 + CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
  height, }) => {export const LazyImage: React.FC < LazyImageProps> = ({
  src;
  alt;
  class_name = '',
  placeholder = 'data: image / svg + xml, base64, PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI + CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8 + CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0.1;
  width;
  height;
  const [is_loaded, setIsLoaded] = useState (false);
  const [isInView, setIsInView] = useState (false);
  const img_ref = useRef < HTMLImageElement>(null);
;
  useEffect (() => {
    const observer = new IntersectionObserver (
      ([entry]) => {
        // Check condition
if ( {) {
  $2
}
          setIsInView (true);
          observer.disconnect ();
        }
      },      { threshold }
    );
;
    // Check condition
if ( {) {
  $2
}
      observer.observe (img_ref.current);          observer.disconnect ();



=======
interface LazyImageProps {
  src: string;

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


interface LazyImageProps {
  src: string;

  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number;}
}
}
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


export const LazyImage: React.FC<LazyImageProps    /> = ({src;
  alt;

  className;

const [isLoaded, setIsLoaded] = useState(false);

const [isInView, setIsInView] = useState(false);

const imgRef = useRef<HTMLImageElement    />(null);
          setIsInView(true);
}
observer.disconnect();}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        }
      },
      { threshold }
    );


<<<<<<< HEAD
=======
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD


        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'

=======
      <img;
src={placeholder}
alt=''
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${}
          isLoaded ? 'opacity-0' : 'opacity-100'}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }`}
        style={{ width, height }}
         />



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      />



<<<<<<< HEAD

          setIsInView(true);
          observer.disconnect();}
      },
      {_threshold}
    );


    return () => observer.disconnect()
  }, [threshold]),


    return () => observer.disconnect()
  }, [threshold]),

  const handleLoad = () => {
    setIsLoaded(true)
  },

  return (
    <div className={_`relative overflow-hidden ${className}`}>
      {_/* Placeholder */}
      <img
        src={_placeholder}
        alt=""
        className={_`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={_{ width, _height}}
      />
      
      {_/* Actual Image */}
      {_isInView && (
      />

      {/* Actual Image */}
      {isInView && (
        <motion.img


      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img

=======
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
      />;
      />
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img

  useEffect__(() => {
    const _observer = new IntersectionObserver(_([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true),
          observer.disconnect()
        }
      },
      { threshold }
    ),

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

  const handleLoad = $2;
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
      />

      />
      
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
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ width, height }}
        />
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
>>>>>>> origin/cursor/delete-old-data-records-6bba
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}


<<<<<<< HEAD




=======
alt=''        className={`absolute inset - 0 w - full h - full object - cover transition - opacity duration - 500 ${        alt="";
        className={`absolute inset - 0 w - full h - full object - cover transition - opacity duration - 500 ${
          is_loaded ? 'opacity - 0' : 'opacity - 100';
        }`}
        style={{ width, height }}
      />;
      {/* Actual Image */}
      {isInView && (
        <motion.img;
          ref={img_ref}
          src={src}
          alt={alt}
          on_load={handle_load}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: is_loaded ? 1 : 0, scale: is_loaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
          className='w-full h-full object-cover'
          loading='lazy'          style={{ width, height }}
        />
      )}
    </div>
  );
}
export default LazyImage;          className="w-full h-full object-cover"
          loading="lazy"
          style={{ width, height }}
        />
      )}
    </div>
  );
}
export default LazyImage;  )
}
export default LazyImage;

    </div>
    </div>
          className='w - full h - full object - cover';
          loading='lazy'          style={{ width, height }}
        />)}
    </div>);
}
;
export default LazyImage;          className="w - full h-full object-cover";
          loading="lazy";
          style={{ width, height }}
        />)}
    </div>)}export default LazyImage)}export default LazyImage;</div>;
)}export default LazyImage;


          onLoad={handleLoad}

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
      )}

    </div>
  );
}
export default LazyImage;  )
}
export default LazyImage;

)
};


export default LazyImage;

;

>>>>>>> origin/cursor/delete-old-data-records-6bba
