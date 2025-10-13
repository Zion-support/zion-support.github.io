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
<<<<<<< HEAD
  className = '',
  lazy = true
=======
  priority = false,
  placeholder,
  onLoad,
  onError,
>>>>>>> cursor/analyze-improve-and-deploy-application-0ed4
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
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
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const generatePlaceholder = () => {
    if (placeholder) return placeholder;
    
    const canvas = document.createElement('canvas');
    canvas.width = width || 400;
    canvas.height = height || 300;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
<<<<<<< HEAD
    return `${src}?format=webp&quality=80`;
  }, [src]);

  // Placeholder generation logic (currently unused but kept for future use)
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
=======
    
    return canvas.toDataURL();
  };
>>>>>>> cursor/analyze-improve-and-deploy-application-0ed4

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${hasError ? 'hidden' : 'block'}`}
          style={{
            backgroundImage: `url(${generatePlaceholder()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer;