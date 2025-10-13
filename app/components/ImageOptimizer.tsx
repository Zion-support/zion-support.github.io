import React, { useState, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder,
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef</ImageOptimizerProps><HTMLImageElement>(null);
'use client';
import React, { useState, useEffect } from 'react';
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
}
const OptimizedImage: React.FC</HTMLImageElement><OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
;
  useEffect(() => {
    if (priority) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
const imgRef = document.querySelector(`[data-src="${src}"]`);
    if (imgRef) {
      observer.observe(imgRef);
    }
    return () => observer.disconnect();
  }, [src, priority]);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  const handleError = () => {
    setHasError(true);
  };
  if (hasError) {
    return (
      </OptimizedImageProps><div ;
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
       /><span className="text-gray-400 text-sm">Image failed to load</span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && (
        </div><div ;
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
      )}
      {isInView && (
        <img;
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      {!isInView && (
        <div ;
          data-src={src}
          className="absolute inset-0 bg-gray-200 animate-pulse"
      )}
    </div>
  );
};
;