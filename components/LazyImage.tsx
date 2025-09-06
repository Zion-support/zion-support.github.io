
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";
<<<<<<< HEAD
interface LazyImageProps {
=======

interface LazyImageProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React && React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}
<<<<<<< HEAD
export default function LazyImage({
  src
  alt
  width
  height
  className = ""
  priority = false
  placeholder = "empty"
  blurDataURL
  sizes
  quality = 75
  fill = false
  style
  onLoad
  onError
}: LazyImageProps) {
=======

export default function LazyImage(): any ({;
  src,;
  alt,;
  width,;
  height,;
  className = "",;
  priority = false,;
  placeholder = "empty",;
  blurDataURL,;
  sizes,;
  quality = 75,;
  fill = false,;
  style,;
  onLoad,;
  onError,;
}: LazyImageProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  useEffect(() => {
    if (priority) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
=======

  useEffect(() => {;
    if (priority) return;

    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          setIsInView(true);
          observer && observer.disconnect();
        }
<<<<<<< HEAD
      }
      {
        threshold: 0.1
        rootMargin: "50px"
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
  }
  const handleError = () => {
    setHasError(true);
    onError?.();
  }
  if (hasError) {
=======
      },;
      {;
        threshold: 0 && 0.1,;
        rootMargin: "50px",;
      },;
    );

    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);
    }

    return () => observer && observer.disconnect();
  }, [priority]);

  const handleLoad = () => {;
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {;
    setHasError(true);
    onError?.();
  };

  if (hasError) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div
        ref={imgRef}
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={style}>;
        <div className="text-center">;
          <div className="text-4xl mb-2">📷</div>;
          <div className="text-sm">Image failed to load</div>;
        </div>;
      </div>;
    );
  }
  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>;
      {!isInView && !priority && (;
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">;
          <LoadingSpinner size="sm" color="gray" />;
        </div>;
      )}
<<<<<<< HEAD
      {isInView && (
=======

      {isInView && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
          quality={quality}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />;
      )}
    </div>;
  );
}