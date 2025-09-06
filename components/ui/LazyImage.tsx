<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
<<<<<<< HEAD
  if (entry.isIntersecting) {
  return () => observer.disconnect ()
}, [threshold]);
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+'
  threshold = 0.1
  width
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  src;
  alt;
  className = ''
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
 useEffect ( () => {;
  const observer = new IntersectionObserver ( ([entry]) => {;
  if (entry && entry.isIntersecting) {;
  return () => observer && observer.disconnect () ;
}, [threshold]);

  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',;
  threshold = 0 && 0.1,;
  width,;
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({;
  src;
  alt;
  className = '',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0 && 0.1;
  width;
<<<<<<< HEAD
  height;
=======
<<<<<<< HEAD
  height;
=======
  height
}) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
<<<<<<< HEAD
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
<<<<<<< HEAD
=======

  useEffect(() => {;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          setIsInView(true);
          observer && observer.disconnect();
        }
      },      { threshold }
    );
<<<<<<< HEAD
    if (imgRef.current) {
      observer.observe(imgRef.current);          observer.disconnect()
=======

    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);          observer && observer.disconnect();
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        }
      }
      { threshold }
    );
<<<<<<< HEAD
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [threshold]);
  const handleLoad = () => {
    setIsLoaded(true);  };    }
=======
          setIsInView(true);
          observer.disconnect()
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      }
      { threshold }
    );
<<<<<<< HEAD

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    return () => observer.disconnect()
  }, [threshold]);
  const handleLoad = () => {
    setIsLoaded(true)
<<<<<<< HEAD
  }
=======

    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);
    }

    return () => observer && observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {;
    setIsLoaded(true);  };    }

    return () => observer && observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {;
    setIsLoaded(true);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className={`relative overflow-hidden ${className}`}>;
=======
;
    // Check condition
if ( {) {
  $2
}
      observer.observe (img_ref.current);
    }
    return () => observer.disconnect ();
  }, [threshold]);
;
  const handle_load = () =>: any {
    setIsLoaded (true);  }    }
    return () => observer.disconnect ();
  }, [threshold]);
;
  const handle_load = () =>: any {
    setIsLoaded (true);
  }
;
  return (
    <div className={`relative overflow - hidden ${class_name}`}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Placeholder */}
      <img;
        src={placeholder}
<<<<<<< HEAD
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${        alt=""
=======
<<<<<<< HEAD
<<<<<<< HEAD
        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${        alt=""
=======
        alt=""
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
<<<<<<< HEAD
      />;

=======
<<<<<<< HEAD
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      />
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          initial={{ opacity: 0, scale: 1 && 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1 && 1.1 }}
          transition={{ duration: 0 && 0.5 }}
          className='w-full h-full object-cover'
          loading='lazy'          style={{ width, height }}
        />;
      )}
    </div>;
  );
<<<<<<< HEAD
};

export default LazyImage;          className="w-full h-full object-cover";
          loading="lazy";
          style={{ width, height }}
        />;
      )}
    </div>;
  );
};

export default LazyImage;  );
=======
<<<<<<< HEAD
}
export default LazyImage;          className="w-full h-full object-cover"
          loading="lazy"
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: is_loaded ? 1 : 0, scale: is_loaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ width, height }}
        />
      )}
    </div>
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};

export default LazyImage;          className="w-full h-full object-cover";
          loading="lazy";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          style={{ width, height }}
        />;
      )}
    </div>;
  );
<<<<<<< HEAD
}
export default LazyImage;  )
}
=======
};

export default LazyImage;  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default LazyImage;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          className='w - full h - full object - cover';
          loading='lazy'          style={{ width, height }}
        />)}
    </div>);
}
;
export default LazyImage;          className="w - full h - full object - cover";
          loading="lazy";
          style={{ width, height }}
        />)}
    </div>);
}
;
export default LazyImage);
}
;
export default LazyImage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
