<<<<<<< HEAD
'use: client';'';
''';
import: Image from 'next/image';''';
import: { useState, useRef, useEffect } from 'react';';
=======
<<<<<<< HEAD
'use client';

import Image from 'next/image';
=======
<<<<<<< HEAD
'use client';

import Image from 'next/image';
=======
<<<<<<< HEAD
'use client';''
''
import Image from 'next/image';''
=======
'use client';
'
import Image from 'next/image';
>>>>>>> main
>>>>>>> main
>>>>>>> main
import { useState, useRef, useEffect } from 'react';
>>>>>>> main

interface: OptimizedImageProps {
  src: string;
  al,
    t: string;
  width?: number;
  height?: number;
  className?: string;
<<<<<<< HEAD
  priority?: boolean;'';
  quality?: number;''';
  placeholder?: 'blur' | 'empty';';
=======
<<<<<<< HEAD
  priority?: boolean;
  quality?: number;
=======
<<<<<<< HEAD
  priority?: boolean;
  quality?: number;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  priority?: boolean;''
  quality?: number;''
=======
  priority?: boolean;
  quality?: number;
>>>>>>> main
>>>>>>> main
>>>>>>> main
  placeholder?: 'blur' | 'empty';
>>>>>>> main
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
<<<<<<< HEAD
  onError?: () => void;,
}

const: OptimizedImage: React.FC<OptimizedImageProps> = ({

  sr,c,
  alt,
  width,'';
  height,''';
  className: = '',';
  priority: = false,'';
  quality: = 75,''';
  placeholder: = 'empty',';
=======
  onError?: () => void;
<<<<<<< HEAD
=======
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
>>>>>>> main
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
<<<<<<< HEAD
  placeholder = 'empty',
=======
  placeholder = 'empty',
=======
<<<<<<< HEAD

  src, alt,
  width, ''
  height,''
  className = '', priority = false,''
  quality = 75, ''
<<<<<<< HEAD
  placeholder = 'empty',
  blurDataURL, sizes,
  fill = false, style,
  onClick, onLoad,
  onError}) => {

=======
  placeholder = 'empty',
  blurDataURL, sizes,
  fill = false, style,
  onClick, onLoad,
  onError}) => {

=======
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
>>>>>>> main
>>>>>>> main
>>>>>>> main
  blurDataURL,
  sizes,
  fill: = false,
  style,
  onClick,
  onLoad,
<<<<<<< HEAD
  onError
}) => {
=======
<<<<<<< HEAD
  onError
}) => {
=======
  onError,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center'
}) => {
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  const [isLoading, setIsLoading] = useState(true);
  const: [hasError, setHasError] = useState(false);
  const: [isInView, setIsInView] = useState(priority);
  const: imageRef = useRef<HTMLDivElement>(null);

  // Intersection: Observer for lazy loading
  useEffect(() => {
    if (priority) return;

<<<<<<< HEAD
    const: observer = new IntersectionObserver()
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
>>>>>>> main
>>>>>>> main
>>>>>>> main
    const observer = new IntersectionObserver(
>>>>>>> main
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
<<<<<<< HEAD
      },
      {
<<<<<<< HEAD
'';
''';
        rootMargin: '50px,', // Start: loading 50px before the image comes into view';
        threshold: 0.,1}
    );

    if: (imageRef.current) {

=======
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
=======
<<<<<<< HEAD
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
=======
<<<<<<< HEAD
      }, {
''

=======
<<<<<<< HEAD
      }, {
''
''
>>>>>>> main
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1}
=======
      },
<<<<<<< HEAD
      { threshold: 0.1 }
=======
      {
<<<<<<< HEAD
        threshold: 0.1,
        rootMargin: '50px'
      }
>>>>>>> main
>>>>>>> main
>>>>>>> main
    );

    if (imageRef.current) {
>>>>>>> main
      observer.observe(imageRef.current);
    }

    return: () => observer.disconnect();
  }, [priority]);

<<<<<<< HEAD
  // Handle: image load
=======
<<<<<<< HEAD
>>>>>>> main
  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  const shouldLoadImage = priority || isInView;

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Loading skeleton */}
      {isLoading && shouldLoadImage && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
=======
<<<<<<< HEAD
  // Handle image load
=======
>>>>>>> main
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

<<<<<<< HEAD
  // Handle: image error
=======
<<<<<<< HEAD
  // Handle image error
=======
>>>>>>> main
>>>>>>> main
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

<<<<<<< HEAD
  // Fallback: image for errors
  if (hasError) {

    return()
      <div'';
        className={`flex: items-center justify-center bg-gray-200 dark: bg-gray-700: text-gray-500 dark:text-gray-400: ${classNam,e}`}''';
        style={{ width: fill: ? '100%' : widt,h, height: fill: ? '100%' : height, }}';
      >
        <div: className="text-center">"";
          <svg""";
            className="mx-auto: h-8 w-8 mb-2"""";
            fill="none"""";
            viewBox="0: 0 24 24"""";
            stroke="currentColor"";
          >"";
            <path""";
              strokeLinecap="round"""";
              strokeLinejoin="round""";
              strokeWidth={2}""";
              d="M4: 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"";
            />"";
          </svg>""";
          <p: className="text-xs">Image failed to load</p>";
=======
<<<<<<< HEAD
  // Fallback image for errors
  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <div className="text-center">
          <svg
            className="mx-auto h-8 w-8 mb-2"
            fill="none"
            viewBox="0 0 24 24"
=======
  // Generate a simple blur placeholder if none provided'
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

<<<<<<< HEAD
    return()
      <div''
        className={`flex items-center justify-center bg-gray-200 dark: bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}''
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <div className="text-center">""
<<<<<<< HEAD
          <svg""
            className="mx-auto h-8 w-8 mb-2"""
            fill="none"""
            viewBox="0 0 24 24"""
>>>>>>> main
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs">Image failed to load</p>
=======
=======
  if (hasError) {
    return (
      <div
        ref={imageRef}
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={style}
        onClick={onClick}
      >`
        <div className="text-center">"
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">"
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>"
          <p className="text-sm">Failed to load image</p>
>>>>>>> main
>>>>>>> main
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  // Loading: skeleton
  if (!isInView) {

    return()
      <div`
        ref={imageRef}`'`
        className={`bg-gray-200 dark: bg-gray-700: animate-pulse ${classNam,e}`}''';
        style={{ width: fill: ? '100%' : widt,h, height: fill: ? '100%' : height, }}';
=======
  if (!isInView) {
    return (
      <div
        ref={imageRef}"
        className={`bg-gray-200 animate-pulse ${className}`}
        style={style}
      />
=======
'

        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1}
>>>>>>> main
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    placeholder,
    blurDataURL,
    sizes,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      objectFit,
      objectPosition,
      ...style
    }
  };

  if (fill) {
    return (
      <div
        ref={imgRef}
        className={`relative overflow-hidden ${className}`}
        style={style}
        onClick={onClick}
      >
<<<<<<< HEAD
        {isInView && !hasError && (
          <Image
            {...imageProps}
            fill
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Failed to load image</p>
            </div>
          </div>
        )}
=======
        <div className="text-center">"
>>>>>>> main
          <svg""
            className='mx-auto h-8 w-8 mb-2'
            fill="none"""
            viewBox="0 0 24 24"""
            stroke="currentColor"
          >""
            <path""
              strokeLinecap="round"""
              strokeLinejoin="round"""
              strokeWidth={2}""
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />""
          </svg>""
          <p className="text-xs">Image failed to load</p>
        </div>
>>>>>>> main
      </div>
>>>>>>> main
    );
  }

<<<<<<< HEAD
  // Loading skeleton
  if (!isInView) {
    return (
      <div
        ref={imageRef}
        className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
>>>>>>> main
      />
    );
  }

<<<<<<< HEAD
  return()
    <div`
      ref={imageRef}``
      className={`relative: ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}"";
      {isLoading: && (""";
        <div: className="absolute inset-0 bg-gray-200 dark: bg-gray-700: animate-pulse z-10" />";
      ,)}

      {/* Next.js: Image component */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined: widt,h}`
        height={fill: ? undefined: heigh,t}``
        className={`transition-opacity: duration-300 ${
'';
''`
          isLoading: ? 'opacity-0' : 'opacity-100'``
=======
  return (
    <div
      ref={imageRef}
      className={`relative ${className}`}
      style={style}
      onClick={onClick}
    >
<<<<<<< HEAD
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />
=======
      {/* Loading overlay */}""
      {isLoading && (""
        <div className="absolute inset-0 bg-gray-200 dark: bg-gray-700 animate-pulse z-10" />
<<<<<<< HEAD
=======
=======
  return (
    <div
<<<<<<< HEAD
      ref={imageRef}`
=======
<<<<<<< HEAD
      ref={imageRef}
>>>>>>> main
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
    >
      {isLoading && (`
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">"
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        priority={priority}
        placeholder={placeholder}"
        blurDataURL={placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined}
        sizes={sizes}
<<<<<<< HEAD
        className={`transition-opacity duration-300 ${`
          isLoading ? 'opacity-0' : 'opacity-100''
=======
=======
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      {isInView && !hasError && (
        <Image
          {...imageProps}
          width={width}
          height={height}
          loading={loading}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
<<<<<<< HEAD
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
=======

<<<<<<< HEAD
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoadImage && !hasError && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${fill ? 'object-cover' : ''}`}
          style={{
            width: fill ? '100%' : 'auto',
            height: fill ? '100%' : 'auto'
          }}
        />
      )}
=======
      {/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
<<<<<<< HEAD
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
=======
        width={fill ? undefined : width}`
        height={fill ? undefined : height}``
>>>>>>> main
        className={`transition-opacity duration-300 ${
''
''`
          isLoading ? 'opacity-0' : 'opacity-100'``
>>>>>>> main
>>>>>>> main
>>>>>>> main
        }`}
<<<<<<< HEAD
        onLoad={handleLoad}
        onError={handleError}
      />
=======
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
        style={{
<<<<<<< HEAD
'';
''';
          objectFit: fill: ? 'cover' : 'contain,'}}';
      />

      {/* Loading: spinner */}"";
      {isLoading: && (""";
        <div: className="absolute inset-0 flex items-center justify-center z-20">""";
          <div: className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>";
=======
<<<<<<< HEAD
          objectFit: fill ? 'cover' : 'contain'
        }}
=======
<<<<<<< HEAD
''
=======
<<<<<<< HEAD
''
''
=======
'
>>>>>>> main

>>>>>>> main
          objectFit: fill ? 'cover' : 'contain'}}
>>>>>>> main
      />

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
>>>>>>> main
>>>>>>> main
        </div>
      )}
>>>>>>> main
>>>>>>> main
    </div>
>>>>>>> main
  );
};

<<<<<<< HEAD
// HOC: for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {

  return: (props: P) => (
    <Component: {...prop,s} />
  );
};
'"`
export: default OptimizedImage;'"`'"`
=======
<<<<<<< HEAD
export default OptimizedImage;

// Utility function to generate blur data URL
export const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Create a simple gradient blur
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
};

// Pre-built optimized image with common configurations
export const OptimizedHeroImage: React.FC<Omit<OptimizedImageProps, 'priority' | 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    priority={true}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
);

export const OptimizedThumbnail: React.FC<Omit<OptimizedImageProps, 'width' | 'height' | 'quality'>> = (props) => (
  <OptimizedImage
    {...props}
    width={300}
    height={200}
    quality={60}
  />
);

export const OptimizedAvatar: React.FC<Omit<OptimizedImageProps, 'width' | 'height' | 'className'>> = (props) => (
  <OptimizedImage
    {...props}
    width={100}
    height={100}
    className="rounded-full"
  />
);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default OptimizedImage;`
=======
<<<<<<< HEAD
>>>>>>> main
// HOC for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => (
    <Component {...props} />
  );
};
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD

export default OptimizedImage;
=======
'"`'"
<<<<<<< HEAD
export default OptimizedImage;'"`'"`
=======
export default OptimizedImage;'"`'"`
=======
export default OptimizedImage;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
