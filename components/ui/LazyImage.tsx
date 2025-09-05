import React, {_useEffect, _useRef, _useState} from 'react';

interface LazyImageProps {_src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  width?: number;
  height?: number;}

export const LazyImage: React.FC<LazyImageProps> = (_{_src, _alt, _className = '', _placeholder = 'data:image/svg+xml;base64, _PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjM0I0RjYwIi8+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiM2QjcyOEEiLz4KPC9zdmc+', _threshold = 0.1, _width, _height}) => {_const [isLoaded, _setIsLoaded] = useState(false);
  const [isInView, _setIsInView] = useState(false);
  const _imgRef = useRef<HTMLImageElement>(null);

  useEffect__(() => {
    const _observer = new IntersectionObserver(_([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();}
      },
      {_threshold}
    );

    if (imgRef.current) {_observer.observe(imgRef.current);}

    return () => observer.disconnect();
  }, [threshold]);

  const _handleLoad = () => {_setIsLoaded(true);};

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
        <motion.img
          ref={imgRef}
          src={_src}
          alt={_alt}
          onLoad={_handleLoad}
          initial={_{ opacity: 0, _scale: 1.1}}
          animate={_{ opacity: isLoaded ? 1 : 0, _scale: isLoaded ? 1 : 1.1}}
          transition={_{ duration: 0.5}}
          className="w-full h-full object-cover"
          loading="lazy"
          style={_{ width, _height}}
        />
      )}
    </div>
  );
};

export default LazyImage;