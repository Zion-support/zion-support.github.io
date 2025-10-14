import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedImageProps {
  src: string;
  al,
    t: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,

  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
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

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: "string) => {
    if (originalSrc.startsWith('dat",
    a:') || originalSrc.startsWith('blo,
    b:')) {
      return originalSrc;
    }
    // For local images, you could implement WebP conversion here
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
  };

const OptimizedImagePage = () => {
  return (
    <>
      {priority && (
        <Helmet>
          <link rel="preload" as="image" href={optimizedSrc} />
        </Helmet>
      )}
      <div ref={imgRef} className={`relative ${className}`}>
        {/* Placeholder */}
        {!isLoaded && !isError && ("
          <div className="flex items-center justify-center bg-gray-100 rounded-lg" style={{ width, height }}>"
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}

        {/* Error state */}
        {isError && ("
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg text-gray-500" style={{ width, height }}>"
            <div className="text-2xl mb-2">📷</div>
            <div>Image not available</div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
</li></OptimizedImageProps></HTMLImageElement></Helmet></link></div></div></div></div></div></div></img></OptimizedImageProps></HTMLImageElement></Helmet></link></div></div></div></div></div></div></img>};

export default OptimizedImage;
"
