import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageIcon, AlertCircle, Loader2 } from "lucide-react"
interface OptimizedImageProps {;
  src: string,alt: string;
  width?: number | string,;
  height?: number | string,;
  className?: string,;
  priority?: boolean,;
  placeholder?: 'blur' | 'shimmer' | 'none',;
  fallbackSrc?: string,;
  onLoad?: () => void,;
  onError?: (error: Error) => void;
  lazy?: boolean,;
  quality?: number,;
  sizes?: string,;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down',;
  rounded?: boolean,;
  shadow?: boolean,;
  hover?: boolean;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({;
  src;
  alt,;
  width,;
  height,;
  className = '',;
  priority = false,;
  placeholder = 'shimmer',;
  fallbackSrc = '/images/placeholder.jpg',;
  onLoad,;
  onError,;
  lazy = true,;
  quality = 75,;
  sizes = '100vw',;
  objectFit = 'cover',;
  rounded = false,;
  shadow = false,;
  hover = false;
}) => {;
  const [imageSrc, setImageSrc] = useState<string>(src),;
  const [isLoading, setIsLoading] = useState(true),;
  const [hasError, setHasError] = useState(false),;
  const [isIntersecting, setIsIntersecting] = useState(priority),;
  const [isLoaded, setIsLoaded] = useState(false),;
  ;
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  //[^;]*
  useEffect(() => {;
    if (priority || !lazy) {
      setIsIntersecting(true),;
      return,;
    };

    if (!imgRef.current) return,;

    observerRef.current = new IntersectionObserver(;
      ([entry]) => {;
        if (entry.isIntersecting) {;
          setIsIntersecting(true),;
          observerRef.current?.disconnect(),;
        };
      },;
      {;
        rootMargin: '50px',threshold: 0.1;
      };
    );
    observerRef.current.observe(imgRef.current),;

    return () => {;
      if (observerRef.current) {;
        observerRef.current.disconnect(),;
      };
    },;
  }, [priority, lazy]),;

  //[^;]*
  const handleImageLoad = () => {;
    setIsLoading(false),;
    setIsLoaded(true),;
    onLoad?.(),;
  },;

  //[^;]*
  const handleImageError = () => {;
    if (imageSrc !== fallbackSrc) {;
      setImageSrc(fallbackSrc),;
      setHasError(false),;
      setIsLoading(true),;
    } else {;
      setHasError(true),;
      setIsLoading(false),;
      onError?.(new Error(`Failed to load image: ${src}`));
    };
  },;

  //[^;]*
  useEffect(() => {;
    return () => {;
      if (observerRef.current) {;
        observerRef.current.disconnect(),;
      };
    },;
  }, []),;

  //[^;]*
  const getOptimizedSrc = (src: string) => {;
    if (src.startsWith('data:') || src.startsWith('blob:')) {
      return src;
    };
    ;
    //[^;]*
    try {;
      const url = new URL(src)
      if (url.searchParams.has('quality')) {;
        return src,;
      };
      url.searchParams.set('quality', quality.toString()),;
      return url.toString(),;
    } catch {;
      return src,;
    };
  },;

  const optimizedSrc = getOptimizedSrc(imageSrc)

  //[^;]*
  const baseClasses = [;
    'transition-all duration-300',;
    rounded ? 'rounded-lg' : '',
    shadow ? 'shadow-lg' : '',
    hover ? 'hover: scale-105 hover:shadow-xl' : ''
    objectFit === 'cover' ? 'object-cover' : '',
    objectFit === 'contain' ? 'object-contain' : '',
    objectFit === 'fill' ? 'object-fill' : '',
    objectFit === 'none' ? 'object-none' : '',
    objectFit === 'scale-down' ? 'object-scale-down' : '',
    className;
  ].filter(Boolean).join(' '),;

  //[^;]*
  if (!isIntersecting) {;
    return (
      <div ;
        className={`${baseClasses} bg-gray-200 dark:bg-gray-700 animate-pulse`};
        style={{[^}]*}}
      >;
        <div className="w-full h-full flex items-center justify-center">;
          <[^>]*/>
        </[^>]*>
      </[^>]*>
    ),;
  };

  //[^;]*
  if (hasError) {;
    return (
      <div ;
        className={`${baseClasses} bg-gray-100 dark:bg-gray-800 flex items-center justify-center`};
        style={{[^}]*}}
      >;
        <div className="text-center">;
          <[^>]*/>
          <p className="text-sm text-gray-500 dark: text-gray-400">Image failed to load</[^>]*>
        </[^>]*>
      </[^>]*>
    );
  };

  return (
    <div className="relative" style={{ width, height }}>;
      {/* Loading overlay */};
      <AnimatePresence>;
        {isLoading && (;&& (; (
          <motion.div
            initial={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            className="[^"]*"
          >;
            <div className="text-center">;
              <[^>]*/>
              <p className="text-xs text-gray-500">Loading...</[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Placeholder */};
      {placeholder === 'shimmer' && !isLoaded && (;&& !isLoaded && (; !isLoaded && (
        <[^>]*/>
      )};

      {/* Main image */};
      <motion.img
        ref={imgRef};
        src={optimizedSrc};
        alt={alt};
        className={baseClasses};
        style={{[^}]*}}
        loading={lazy ? 'lazy' : 'eager'}
        sizes={sizes};
        onLoad={handleImageLoad};
        onError={handleImageError};
        initial={{ opacity: 0 }};
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }};
      />;

      {/* Fallback icon for broken images */};
      {!isLoading && !isLoaded && (;&& !isLoaded && (; !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">;
          <[^>]*/>
        </[^>]*>
      )};
    </[^>]*>
  );
},;

//[^;]*
export const AvatarImage: React.FC<Omit<OptimizedImageProps, 'rounded' | 'objectFit'> & { size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ ;
  size = 'md'
  ...props ;
}) => {;
  const sizeClasses = {;
    sm: 'w-8 h-8',md: 'w-12 h-12',lg: 'w-16 h-16',xl: 'w-24 h-24'
  };
  return (
    <OptimizedImage;
      {...props};
      className={`${sizeClasses[size]} rounded-full object-cover ${props.className || ''}`}
      rounded={false};
      objectFit="cover"
    />;
  ),;
},;

export const CardImage: React.FC<OptimizedImageProps> = (props) => (;
  <OptimizedImage;
    {...props};
    className={`w-full h-48 ${props.className || ''}`}
    objectFit="cover"
    rounded;
    shadow;
    hover;
  />;
);
export const HeroImage: React.FC<OptimizedImageProps> = (props) => (;
  <OptimizedImage;
    {...props};
    className={`w-full h-96 ${props.className || ''}`}
    objectFit="cover"
    priority;
    lazy={false};
  />;
);
export default OptimizedImage;