
<<<<<<< HEAD
<<<<<<< HEAD
useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect ()
}, [threshold]);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  src;
  alt;
  className = ''
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
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0 && 0.1;
  width;
<<<<<<< HEAD


  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);


=======
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          setIsInView(true);
          observer && observer.disconnect();
        }
      },      { threshold }
    );
<<<<<<< HEAD


    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);          observer && observer.disconnect();

=======
    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);          observer && observer.disconnect();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      }
      { threshold }
    );
<<<<<<< HEAD
<<<<<<< HEAD
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

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect ()
}, [threshold]);
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+'
  threshold = 0.1
  width
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({

  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({;
  src;
  alt;
  className = ''
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0.1;
  width;
  height
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },      { threshold }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);          observer.disconnect()
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      }
      { threshold }
    );
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };
  return (
    <div className={`relative overflow-hidden ${className}`}>;
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
      {/* Placeholder */}
      <img;
        src={placeholder}
<<<<<<< HEAD


=======

        alt=''        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        alt=""
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
<<<<<<< HEAD
<<<<<<< HEAD
      />

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      />



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
=======
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
=======
      />

      {/* Actual Image */}
      {isInView && (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <motion.img

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
<<<<<<< HEAD
<<<<<<< HEAD
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
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
<<<<<<< HEAD

    </div>

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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: is_loaded ? 1 : 0, scale: is_loaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD
};
export default LazyImage;  );
};
export default LazyImage;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  );
}
export default LazyImage;  )
}
export default LazyImage;

    </div>
    </div>
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
