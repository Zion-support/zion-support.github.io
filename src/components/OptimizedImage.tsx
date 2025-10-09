import React from 'react';
interface OptimizedImageProps {
  <OptimizedImageProps> = () => {
  return (
    <div className="optimizedimage">
      {}
    <div>
interface OptimizedImageProps {<OptimizedImageProps> = ({<div>Coming Soon<div>
  )
          <div
      ref={imgRef} className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
<div className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{}
  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {hasError && (}
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center"><div className="text-gray-400 text-sm">Failed to load image<div>
      {isInView && ()}
          <img
          src={getOptimizedSrc()}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          onLoad={handleLoad}
onError={handleError} className={`transition-opacity duration-300 ${}
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
  );
};
export default OptimizedImage;
}}