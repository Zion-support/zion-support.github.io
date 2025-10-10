import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  effect?: 'blur' | 'black-and-white' | 'opacity';
  threshold?: number;
  wrapperClassName?: string;
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
  effect = 'blur',
  threshold = 100,
  wrapperClassName = '',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }
    
    // Add WebP support for local images
    const baseSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    return `${baseSrc}.webp`;
  };

  // Generate placeholder if not provided
  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    // Generate a simple gradient placeholder
    const canvas = document.createElement('canvas');
    canvas.width = width || 300;
    canvas.height = height || 200;
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

  if (hasError) {
    return (
      <div 
        className={`bg-slate-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-slate-400 text-sm">Image failed to load</div>
      </div>
    );
  }

  if (priority) {
    return (
      <img
        ref={imgRef}
        src={getOptimizedSrc(src)}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <LazyLoadImage
      src={getOptimizedSrc(src)}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      width={width}
      height={height}
      effect={effect}
      placeholderSrc={getPlaceholder()}
      threshold={threshold}
      wrapperClassName={wrapperClassName}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      decoding="async"
    />
  );
};

export default ImageOptimizer;