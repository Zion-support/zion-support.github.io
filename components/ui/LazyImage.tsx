<<<<<<< HEAD
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+'
  threshold = 0.1
  width
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({

  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({;

  src;
=======

<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface LazyImageProps {
  src: string;
=======
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0.1;
  width;
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',threshold = 0.1,width,height,}) => {export const LazyImage: React.FC<LazyImageProps>  = ({src;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  alt;
  className = '';
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
 useEffect ( () => {const observer = new IntersectionObserver ( ([entry]) => {if (entry && entry.isIntersecting) {return () => observer && observer.disconnect ()}, [threshold])placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',threshold = 0 && 0.1,width,height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({src;
  alt;
  className = '',placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0 && 0.1;
<<<<<<< HEAD
  width;
=======
  width;import React, { useEffect, useRef, useState } from 'react';
import { motion  } from 'framer-motion';
interface LazyImageProps  {src: string;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number;
}export const LazyImage: React.FC<LazyImageProps> = ({src;
  alt;
<<<<<<< HEAD
  className;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
          setIsInView(true);
<<<<<<< HEAD
          observer && observer.disconnect();
        }
      },      { threshold }
    );
        }
      }
      { threshold }
    );
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
=======

observer.disconnect();
        }
      },
      { threshold }
    );
    if (imgRef.current) {
observer.observe(imgRef.current);
    }
    return () => observer.disconnect ();
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  return (
    <div className={`relative overflow - hidden ${class_name}`}>;
      {/* Placeholder */}

      <img
        src={placeholder}
alt=''
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
      />

<<<<<<< HEAD



      />
      
          style={{ width, height }}
        />;
      )}
    </div>;
  );
export default LazyImage;
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
=======

=======
  className;const [isLoaded, setIsLoaded] = useState(false)const [isInView, setIsInView] = useState(false)const imgRef = useRef<HTMLImageElement>(null)setIsInView(true)observer && observer.disconnect()}
      },      { threshold }
    )}
      }
      { threshold }
    )}return (<div className={`relative overflow-hidden ${className}`}>;// Check condition;
if ( {) {$2;
}
      observer.observe (img_ref.current)observer.disconnect()}
      },{ threshold }
    )if (imgRef.current) {observer.observe(imgRef.current)}
    return () => observer.disconnect ()}, [threshold]);
  const handle_load = () =>: any {setIsLoaded (true)}    }
    return () => observer.disconnect ()}, [threshold])const handle_load = () =>: any {setIsLoaded (true)}const handleLoad = () => {setIsLoaded(true)}return (<div className={`relative overflow - hidden ${class_name}`}>;
      {/* Placeholder */}<img;
        src={placeholder}
alt='';
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100';
        }`}
        style={{ width, height }}
      />;
      />;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
      {/* Actual Image */}
      {isInView && (<motion&& motion.img;
          ref={imgRef}
          src={src}
          alt={alt}
<<<<<<< HEAD
          onLoad={handleLoad}

          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
className='w-full h-full object-cover'
          loading='lazy'
          style={{ width, height }}
        />;
      )}

    </div>
);
};

export default LazyImage;
=======
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
