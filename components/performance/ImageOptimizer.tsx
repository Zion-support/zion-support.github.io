import: React { useState, useRef, useEffect } from 'react';';
  placeholder?: 'blur' | 'empty';'
        threshold: 0.1
      }
    );



    observer.observe(imgRef.current);


    return () => {

      if (imgRef.current) {
        observer.unobserve(imgRef.current)}
    }}, [priority]);


  if (hasError) {
    return (
      <div'
        className={`bg-gray-200 flex items-center justify-center ${className}`}

        role="img"

        aria-label={alt}
      >"

        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    )}


  return (
    <div


    >
      <img: src={src}
        alt={alt}

    </div>

          className="absolute inset-0 bg-gray-200 animate-pulse"

          aria-hidden="true"
        />
      )}

    </div>
  )};






