import React, { useState, useCallback, useMemo } from 'react';
import { ImageIcon, Loader2 } from 'lucide-react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  // placeholder?: string; // Available for future use
  lazy?: boolean;
}

const ImageOptimizer = React.memo<ImageOptimizerProps>(({
  src,
  alt,
  width,
  height,
  className = '',
<<<<<<< HEAD
  // placeholder, // Available for future use
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-711b
  lazy = true
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const optimizedSrc = useMemo(() => {
    // Add WebP format support and quality optimization
    if (src.includes('?')) {
      return `${src}&format=webp&quality=80`;
    }
    return `${src}?format=webp&quality=80`;
  }, [src]);

<<<<<<< HEAD
  // Placeholder generation (currently unused but available for future use)
=======
  // Placeholder generation logic (currently unused but kept for future use)
>>>>>>> cursor/fix-errors-and-merge-to-main-711b
  // const placeholderSrc = useMemo(() => {
  //   if (placeholder) return placeholder;
  //   
  //   // Generate a simple placeholder based on dimensions
  //   const w = width || 300;
  //   const h = height || 200;
  //   return `data:image/svg+xml;base64,${btoa(`
  //     <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  //       <rect width="100%" height="100%" fill="#f3f4f6"/>
  //       <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
  //         Loading...
  //       </text>
  //     </svg>
  //   `)}`;
  // }, [placeholder, width, height]);

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{ width, height }}
      >
        <ImageIcon className="w-8 h-8 text-gray-400" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
        }}
      />
    </div>
  );
});

ImageOptimizer.displayName = 'ImageOptimizer';

export default ImageOptimizer;