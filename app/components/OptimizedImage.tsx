'use client';

import React, { useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImageIcon, Loader2 } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  blurDataURL,
  priority: _priority = false,
  quality: _quality = 75,
  sizes,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate blur data URL if not provided
  const defaultBlurDataURL = blurDataURL || `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">
        Loading...
      </text>
    </svg>
  `)}`;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Retry loading on error
  const retryLoad = () => {
    setHasError(false);
    setIsLoading(true);
    setImageSrc(`${src}?retry=${Date.now()}`);
  };

  // Generate responsive srcSet if sizes is provided
  const generateSrcSet = (baseSrc: string) => {
    if (!sizes) return undefined;
    
    const breakpoints = [
      { width: 640, suffix: '?w=640' },
      { width: 768, suffix: '?w=768' },
      { width: 1024, suffix: '?w=1024' },
      { width: 1280, suffix: '?w=1280' },
      { width: 1536, suffix: '?w=1536' }
    ];

    return breakpoints
      .map(bp => `${baseSrc}${bp.suffix} ${bp.width}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);

  if (hasError) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <ImageIcon className="w-8 h-8 mb-2" />
        <span className="text-sm">Failed to load image</span>
        <button
          onClick={retryLoad}
          className="mt-2 px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      )}
      
      <LazyLoadImage
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        placeholderSrc={placeholder || defaultBlurDataURL}
        effect="blur"
        threshold={100}
        delayMethod="debounce"
        delayTime={200}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        srcSet={srcSet}
        sizes={sizes}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default OptimizedImage;