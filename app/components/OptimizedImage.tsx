import React from 'react';
import React from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { Helmet  } from "react-helmet-async";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager'
  onLoad?: () => void;
  onError?: () => void}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = ''
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2 ZyB3 aWR0 aD0 iMzAwIiBoZWlnaHQ9 IjIwMCIgeG1 sbnM9 Imh0 dHA6 Ly93 d3 cudzMub3 JnLzIwMDAvc3 ZnIj48 cmVjdCB3 aWR0 aD0 iMTAwJSIgaGVpZ2 h0 PSIxMDAlIiBmaWxsPSIjZjNmNGY2 Ii8+PHRleHQgeD0 iNTAlIiB5 PSI1 MCUiIGZvbnQtZmFtaWx5 PSJBcmlhbCwgc2 Fucy1 zZXJpZiIgZm9 udC1 zaXplPSIxNCIgZmlsbD0 iIzY2 NjY2 NiIgdGV4 dC1 hbmNob3 I9 Im1 pZGRsZSIgZHk9 Ii4 zZW0 iPkxvYWRpbmcuLi48 L3 RleHQ+PC9 zdmc+'
  sizes = '100 vw'
  quality = 85,
  loading = 'lazy'
  onLoad,

  onError })
}) => {;
const [isLoaded, setIsLoaded] = useState(false);
const [isError, setIsError] = useState(false);
const [isInView, setIsInView] = useState(priority);
const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (priority) return;
const observer = new IntersectionObserver()
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect()}
      },
      {
        threshold: 0.1,;
        rootMargin: '50 px'}
      });
    if (imgRef.current) {
      observer.observe(imgRef.current)}

    return () => observer.disconnect()}, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.()};

  const handleError = () => {
    setIsError(true);
    onError?.()};

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc}
    
    // For external images, return as-is
    if (originalSrc.startsWith('http')) {
      return originalSrc}
    
    // For local images, you could implement WebP conversion here
    return originalSrc};

  const optimizedSrc = getOptimizedSrc(src);

    return originalSrc}
  const optimizedSrc = getOptimizedSrc(src)
  return (
    <>
      {priority && (
        <Helmet>}
          <link rel="preload" as="image" href={optimizedSrc} />
        </>
)}
      <div ref={ imgRef }
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }
      >
        {/* Placeholder */}
        {!isLoaded && !isError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"}
            style={{ width, height }
          >
            <div>Loading...</>
          </>
)}
        {/* Error state */}
        {isError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center"}
            style={{ width, height }
          >
            <div className="text-gray-400 text-sm text-center">
              <div>📷</>
              <div>Image not available</>
            </>
          </>
)}
        {/* Actual image */}
        {isInView && !isError && (
          <img }
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${;
              isLoaded ? 'opacity-100' : 'opacity-0'}
            }`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
)}
      </>
    </>
  )};

export default OptimizedImage
ursor/fix-errors-and-merge-to-main-94 a7
