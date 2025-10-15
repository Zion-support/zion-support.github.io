import React, { useState, useRef, useEffect } from 'react',
      interface ImageOptimizerProps {
  src: string,
      alt: string,
      className?: string,
      width?: number,
      height?: number,
      priority?: boolean,
      placeholder?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src, alt, className = '', width, height, priority = false, placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false),
      const [isInView, setIsInView] = useState(priority),
      const [hasError, setHasError] = useState(false),
      const imgRef = useRef<HTMLImageElement>(null),
      const handleLoad = () => {
    setIsLoaded(true)
    },
    {

  const handleError = () => {
    setHasError(true)
    },
    {

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('/')) {
      return originalSrc;
    }
    
    // Add WebP support if supported
    if (typeof window !== 'undefined' && 'WebP' in window) {
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
      return webpSrc;
    }
    
    return originalSrc
    },
    {

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return,
      const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true),
      observer.disconnect();
        }
      },
      { threshold: 0.1 }
    ),
      if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]),
      if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 ${className}`} style={{ width, height }}>
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  if (!isInView && !priority) {
    return (
      <div 
        ref={imgRef}
        className={`bg-gray-200 animate-pulse ${className}`} 
        style={{ width, height }}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={getOptimizedSrc(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
    />
  )
    },
    {

export default ImageOptimizer;