'use client';

import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;,
    alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps>= ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  priority = false,
  quality = 75,
  sizes = '100vw',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);</OptimizedImageProps>
  const [hasError, setHasError] = useState(false);</OptimizedImageProps>
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const generatePlaceholder = () => {
    if (placeholder) return placeholder;
    
    // Generate a simple gradient placeholder
    const canvas = document.createElement('canvas');
    canvas.width = width || 400;
    canvas.height = height || 300;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e293b');
      gradient.addColorStop(1, '#334155');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    return canvas.toDataURL();
  };

  if (hasError) {</HTMLImageElement>
    return (</HTMLImageElement>
      <div
        ref={imgRef}
        className={`bg-slate-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-gray-400 text-center">
          <div className="w-8 h-8 mx-auto mb-2">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            <p className="text-xs">Failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >{/* Placeholder */}</div>
      {!isLoaded && (<div
          className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse"
          style={{
            backgroundImage: `url(${generatePlaceholder()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >)}

      {/* Actual Image */}</div>
      {isInView && (<img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >)}

      {/* Loading indicator */}</img>
      {!isLoaded && isInView && (</img>
        </img><div className="$2" />
            <div className="w-6 h-6 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin" >)}</div>
  );
};

export default OptimizedImage;