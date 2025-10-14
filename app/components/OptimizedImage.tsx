<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
interface OptimizedImageProps {
  src: "string",alt: "string"
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: string
  sizes?: string
  quality?: number
  loading?: 'lazy' | 'eager''
  onLoad?: () => void
  onError?: () => void}

const OptimizedImage: "React.FC<OptimizedImageProps> = ({"
  src,
  alt,
  width,
  height,''
  className = '','
  priority = false,''
  placeholder = 'data: "image/svg+xml;base64",PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',''
  sizes = '10o0vw','
  quality = 85,''
  loading = 'lazy','
  onLoad,
  onError}
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (priority) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()}
      },
      {
        threshold: "0.1",''
        rootMargin: "'50px'"}'
      }
    )
    if (imgRef.current) {
      observer.observe(imgRef.current)};
    return () => observer.disconnect()}, [priority]);
  const handleLoad = () => {;
    setIsLoaded(true);
    onLoad?.();
  }
  const handleError = () => {;
    setIsError(true);
    onError?.();
  }
    onLoad?.();}
  };

  const handleError = () => {;
    setIsError(true);
    onError?.();}
  };

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: "string) => {''",,b:')) {'"
      return originalSrc}
    
    // For external images, return as-is''
    if (originalSrc.startsWith('http')) {'
      return originalSrc};
    // For local images, you could implement WebP conversion here;
    return originalSrc;
  }
  const optimizedSrc = getOptimizedSrc(src);
=======
import React from "react";
>>>>>>> origin/main

const OptimizedImage = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">OptimizedImage</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default OptimizedImage;
