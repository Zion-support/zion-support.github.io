import React, { useState, useRef, useEffect } from 'react';

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
  src;
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder,
  onLoad,
  onError;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);</HTMLImageElement>useEffect</HTMLImageElement>(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01;
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
    
    const svg = `
      <svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg"></svg>"
        <rect width="100%" height="100%" fill="#1e293b"/>"
        <rect x="0" y="0" width="100%" height="2" fill="#00ffff" opacity="0.3"/>"
        <rect x="0" y="0" width="2" height="100%" fill="#00ffff" opacity="0.3"/>"
        <rect x="0" y="98%" width="100%" height="2" fill="#00ffff" opacity="0.3"/>"
        <rect x="98%" y="0" width="2" height="100%" fill="#00ffff" opacity="0.3"/>"
        <text x="50%" y="50%" text-anchor="middle" fill="#64748b" font-family="monospace" font-size="14"></text>"
          Loading...,
        </text>,
      </svg>,
    `;
    ,
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  if (hasError) {
    return(<div;
        className={`bg-slate-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      ></div>
        <div className="text-gray-400 text-center"></div>"
          <div className="text-4xl mb-2">⚠️</div>"
          <div className="text-sm">Image failed to load</div>)"
        </div>)
      </div>)
    );
  }

  return(<div;
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    ></div>
      {/* Placeholder */}
      {!isLoaded && (</div>
        <img,
src={generatePlaceholder()}
          alt="""
          className="absolute inset-0 w-full h-full object-cover animate-pulse""
          style={{ filter: 'blur(1 px)' }}
        /></img>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img;
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${}
            isLoaded ? 'opacity-100' : 'opacity-0'}
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async""
          onLoad={handleLoad}
          onError={handleError}
          style={{ width, height }}
        /></img>
      )}
    </div>
  );
};

export default ImageOptimizer;