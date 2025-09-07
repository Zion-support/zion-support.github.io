
<<<<<<< HEAD
<<<<<<< HEAD
interface LazyImageProps {
  src: string;
=======

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======

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
=======

<<<<<<< HEAD
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  width;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
<<<<<<< HEAD
          setIsInView(true);
import React, { useEffect, useRef, useState } from react';
import { motion } from 'framer-motion;
>>>>>>> merged-prs-20250907-203621
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
      }
      { threshold }
    );

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }
      },
      { threshold }
    );
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
      <img;
src={placeholder}
alt=''
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${}
          isLoaded ? 'opacity-0' : 'opacity-100'}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }`}
        style={{ width, height }}
         />


<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />



<<<<<<< HEAD
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
<<<<<<< HEAD
=======
          setIsInView(true);
          observer.disconnect();}
      },
      {_threshold}
    );
>>>>>>> merged-prs-20250907-203621

    return () => observer.disconnect()
  }, [threshold]),

<<<<<<< HEAD
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
=======
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

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}


<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621
      )}

    </div>
<<<<<<< HEAD
  );
}
export default LazyImage;  )
}
export default LazyImage;

=======
)
};


export default LazyImage;
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
