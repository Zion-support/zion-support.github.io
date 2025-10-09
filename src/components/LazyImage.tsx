import React from 'react';
interface LazyImageProps {
  <LazyImageProps> = () => {
  return (
    <div className="lazyimage">
      {}
'use client';
interface LazyImageProps {<LazyImageProps> = ({<div>Coming Soon<div>
  )
          <div
      ref={imgRef} className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
<img
          src={placeholder}
          alt="" className="w-full h-full object-cover"
          aria-hidden="true"
<><img
            src={hasError ? placeholder : src}
            alt={alt} className={cn(}
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
<div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center"><div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" /><div>
        </>
    <div>
  );
};
export default LazyImage;