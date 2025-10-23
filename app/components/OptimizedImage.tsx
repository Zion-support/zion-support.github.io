<<<<<<< HEAD
"use client";
import React, { useState, useRef, useEffect } from "react";
=======
import React, { useState, useRef, useEffect } from "react";
import { usePerformanceOptimization } from "../hooks/usePerformanceOptimization";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

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
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
<<<<<<< HEAD
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  sizes = "100vw",
  quality = 85,
=======
  placeholder,
  sizes = "100vw",
  quality = 75,
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  loading = "lazy",
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
<<<<<<< HEAD
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
=======
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder || "");
  const imgRef = useRef<HTMLImageElement>(null);
  const {} = usePerformanceOptimization();

  // Generate optimized image URL (you can integrate with your image optimization service)
  const getOptimizedSrc = (
    originalSrc: string,
    _w?: number,
    _h?: number,
    _q: number = quality,
  ) => {
    // For now, return original src. In production, integrate with services like:
    // - Cloudinary: `https://res.cloudinary.com/your-cloud/image/fetch/w_${w},h_${h},q_${q},f_auto/${originalSrc}`
    // - Next.js Image Optimization: `/api/image?url=${encodeURIComponent(originalSrc)}&w=${w}&h=${h}&q=${q}`
    // - Vercel Image Optimization: `/_next/image?url=${encodeURIComponent(originalSrc)}&w=${w}&h=${h}&q=${q}`
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src, width, height, quality);
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
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
    setIsError(true);
    onError?.();
  };

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith("data:") || originalSrc.startsWith("blob:")) {
      return originalSrc;
    }
    // For external images, return as-is
    if (originalSrc.startsWith("http")) {
      return originalSrc;
    }
    // For local images, you could implement WebP conversion here
    return originalSrc;
  };

<<<<<<< HEAD
  const optimizedSrc = getOptimizedSrc(src);
  const imageSrc = isInView ? optimizedSrc : placeholder;

  return (
    <div
      ref={imgRef}
      className="relative overflow-hidden"
      style={{ width, height }}
    >
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      )}
      {isError ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
=======
  useEffect(() => {
    if (loading === "lazy" && !priority) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: "50px",
        threshold: 0.1,
      });

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else if (priority) {
      setCurrentSrc(optimizedSrc);
    }

    return undefined;
  }, [loading, priority, optimizedSrc, isLoaded, hasError]);

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {placeholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: "cover",
          }}
        />
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "auto",
        }}
      />
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    </div>
  );
};

export default OptimizedImage;
