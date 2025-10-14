import React, { useState, useRef, useEffect } from 'react';''
import { Helmet } from 'react-helmet-async';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;'
  quality?: number;''
  loading?: 'lazy' | 'eager'
  onLoad?: () => void;
  onError?: () => void}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,'
  height,''
  className = '''
  priority = false,''
  placeholder = 'data:image/svg+xml;base64,PHN""2ZyB""""3aWR""""0aD""""0iMzAwIiBoZWlnaHQ""""9IjIwMCIgeG""""1sbnM""""9Imh""""0dHA""""6Ly""""93d""""3cudzMub""""3JnLzIwMDAvc""""3ZnIj""""48cmVjdCB""""3aWR""""0aD""""0iMTAwJSIgaGVpZ""""2h""""0PSIxMDAlIiBmaWxsPSIjZjNmNGY""""2Ii""8+PHRleHQgeD""0iNTAlIiB""""5PSI""""1MCUiIGZvbnQtZmFtaWx""""5PSJBcmlhbCwgc""""2Fucy""""1zZXJpZiIgZm""""9udC""""1zaXplPSIxNCIgZmlsbD""""0iIzY""""2NjY""""2NiIgdGV""""4dC""""1hbmNob""""3I""""9Im""""1pZGRsZSIgZHk""""9Ii""""4zZW""""0iPkxvYWRpbmcuLi""""48L""""3RleHQ""+PC""9zdmc""+'''
  sizes = '""100vw""''
  quality = 85,''
  loading = 'lazy'
  onLoad,
}
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
      {'
        threshold: 0.1,;''
        rootMargin: '""50px""'}
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

  // Generate WebP src if supported'
  const getOptimizedSrc = (originalSrc: string) => {''
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob: ')) {',
      return originalSrc}'
    ','
    // For external images, return as-is''
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
          <link rel="preload" as="image" href={optimizedSrc} /></link>
        </Helmet>
)}
      <div

        ref={ imgRef }
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }
      ></div>
        {/* Placeholder */}
        {!isLoaded && !isError && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"}
            style={{ width, height }
          ></div>
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
)}
        {/* Error state */}
        {isError && (
          <div
            className="absolute inset-0 bg-gray-100 flex items-center justify-center"}
            style={{ width, height }
          ></div>
            <div className="text-gray-400 text-sm text-center"></div>
              <div className="text-""2xl"" mb-2">📷</div>
              <div>Image not available</div>
            </div>
          </div>
)}
        {/* Actual image */}
        {isInView && !isError && (
          <img}
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}'`
            className={`transition-opacity duration-300 ${;''
              isLoaded ? 'opacity-100' : 'opacity-0'}`
            }`}'
            style={{''
              width: '100%'''
              height: '100%'''
              objectFit: 'cover',
            }}
          /></img>
)}
      </div>
</>
  )};

export default OptimizedImage'
ursor/fix-errors-and-merge-to-main-""94a""7''`
