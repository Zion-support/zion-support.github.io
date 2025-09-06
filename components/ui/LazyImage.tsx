<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect ()
}, [threshold]);
<<<<<<< HEAD
=======
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+'
  threshold = 0.1
  width
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+',
  threshold = 0.1,
  width,
  height,}) => {export const LazyImage: React.FC<LazyImageProps> = ({;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  src;
  alt;
  className = ''
  placeholder = 'data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+';
  threshold = 0.1;
  width;
<<<<<<< HEAD
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
          setIsInView(true);
          observer && observer.disconnect();
        }
      },      { threshold }
    );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
      }
      { threshold }
    );
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
  return (
    <div className={`relative overflow - hidden ${class_name}`}>;
      {/* Placeholder */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width, height }}
      />

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


      />
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Actual Image */}
      {isInView && (;
        <motion&& motion.img
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
};

export default LazyImage;          className="w-full h-full object-cover";
          loading="lazy";
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
