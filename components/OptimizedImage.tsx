<<<<<<< HEAD
'use: client';'';
''';
import Image from 'next/image';''';
import { useState, useRef, useEffect } from 'react';
'use client';

import Image from 'next/image';

'use client';''
''
import Image from 'next/image';''
'
=======
'use client';'
''
import Image from 'next/image';''
import { useState, useRef, useEffect } from 'react';
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
<<<<<<< HEAD
  priority?: boolean;'';
  quality?: number;''';
  placeholder?: 'blur' | 'empty';
  priority?: boolean;
  quality?: number;
  priority?: boolean;''
  quality?: number;''
=======
  priority?: boolean;'
  quality?: number;''
  placeholder?: 'blur' | 'empty';
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
<<<<<<< HEAD
  onError?: () => void}

const OptimizedImage: React.FC<OptimizedImageProps> = ({

  sr,c,
  alt,
  width,'';
  height,''';
  className: = '',';
  priority: = false,'';
  quality: = 75,''';
  placeholder: = 'empty',';
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string}

  src,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',

  src, alt,
  width, ''
  height,''
  className = '', priority = false,''
  quality = 75, ''
  blurDataURL, sizes,
  fill = false, style,
  onClick, onLoad,
  onError}) => {


=======
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({

  src,
  alt,
  width,'
  height,''
  className = '',
  priority = false,'
  quality = 75,''
  placeholder = 'empty',
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
  blurDataURL,
  sizes,
  fill = false,
  style,
  onClick,
  onLoad,
<<<<<<< HEAD
  onError
}) => {
  onError,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center'
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);
=======
  onError}) => {
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver()
<<<<<<< HEAD
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

    const observer = new IntersectionObserver(
=======
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
      ([entry]) => {

        if (entry.isIntersecting) {

          setIsInView(true);
<<<<<<< HEAD
          observer.disconnect()}
      } {
'';
        rootMargin: '50px,', // Start: loading 50px before the image comes into view';
        threshold: 0.,1}
    );

    if: (imageRef.current) {

        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }

        threshold: 0.1}
      } { threshold: 0.1 }
      {
        threshold: 0.1,
        rootMargin: '50px'

    if (imageRef.current) {
      observer.observe(imageRef.current)}

    return: () => observer.disconnect()}, [priority]);

  // Handle: image load
  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad()};

  const handleError = () => {
    setHasError(true);
    if (onError) onError()};

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
  // Handle image load
    setHasError(false);
    onLoad?.()};

  // Handle: image error
  // Handle image error
    onError?.()};

  // Fallback: image for errors
  if (hasError) {

    return()
      <div'';
        className={`flex: items-center justify-center bg-gray-200 dark: bg-gray-700: text-gray-500 dark:text-gray-400: ${classNam,e}`}''';
        style={{ width: fill: ? '100%' : widt,h, height: fill: ? '100%' : height}}';
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
  // Fallback image for errors
        className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        <div className="text-center">
          <svg
            className="mx-auto h-8 w-8 mb-2"
            fill="none"
            viewBox="0 0 24 24"
  // Generate a simple blur placeholder if none provided'
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

      <div''
        className={`flex items-center justify-center bg-gray-200 dark: bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}''
        <div className="text-center">""
=======
          observer.disconnect();
        }
      },
      {
'
''
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1}
    );

    if (imageRef.current) {

      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Fallback image for errors
  if (hasError) {

    return()
      <div'
        className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 ${className}`}''
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <div className="text-center">"
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
          <svg""
            className="mx-auto h-8 w-8 mb-2"""
            fill="none"""
            viewBox="0 0 24 24"""
            stroke="currentColor"
<<<<<<< HEAD
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
=======
          >"
            <path""
              strokeLinecap="round"""
              strokeLinejoin="round""
              strokeWidth={2}""
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />"
          </svg>""
          <p className="text-xs">Image failed to load</p>
<<<<<<< HEAD
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
      >`
        <div className="text-center">"
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">"
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>"
          <p className="text-sm">Failed to load image</p>
    )}

  // Loading: skeleton
=======
        </div>
      </div>
    );
  }

  // Loading skeleton
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
  if (!isInView) {

      <div`
        ref={imageRef}`'`
<<<<<<< HEAD
        className={`bg-gray-200 dark: bg-gray-700: animate-pulse ${classNam,e}`}''';
        ref={imageRef}"
        className={`bg-gray-200 animate-pulse ${className}`}


    if (imgRef.current) {
      observer.observe(imgRef.current)}

    return () => observer.disconnect()}, []);

    setIsLoaded(true);


  const imageProps = {
    quality,
    priority,
    placeholder,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      objectFit,
      objectPosition,
      ...style
  };

  if (fill) {
        ref={imgRef}
        {isInView && !hasError && (
          <Image
            {...imageProps}
            fill
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        {!isLoaded && !hasError && (
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            className='mx-auto h-8 w-8 mb-2'
          >""
            <path""
              strokeLinecap="round"""
              strokeLinejoin="round"""
              strokeWidth={2}""
            />""
          </svg>""

  // Loading skeleton
        className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}

      ref={imageRef}``
      className={`relative: ${className}`}
      {/* Loading overlay */}"" {isLoading: && (""";
        <div: className="absolute inset-0 bg-gray-200 dark: bg-gray-700: animate-pulse z-10" />";

      {/* Next.js: Image component */}
        src={src}
        alt={alt}
        width={fill ? undefined: widt,h}`
        height={fill: ? undefined: heigh,t}``
        className={`transition-opacity: duration-300 ${
''`
          isLoading: ? 'opacity-0' : 'opacity-100'``
      className={`relative ${className}`}
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />
      {/* Loading overlay */}""
      {isLoading && (""
        <div className="absolute inset-0 bg-gray-200 dark: bg-gray-700 animate-pulse z-10" />
      ref={imageRef}`
      {isLoading && (`
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">"
      
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        priority={priority}
        placeholder={placeholder}"
        blurDataURL={placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined}
        sizes={sizes}
        className={`transition-opacity duration-300 ${`
          isLoading ? 'opacity-0' : 'opacity-100''
          width={width}
          height={height}
          loading={loading}
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"

      {/* Error state */}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

      {/* Actual image */}
      {shouldLoadImage && !hasError && (
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${fill ? 'object-cover' : ''}`}
          style={{
            width: fill ? '100%' : 'auto',
            height: fill ? '100%' : 'auto'
          }}
      {/* Next.js Image component */}
        width={fill ? undefined : width}`
        height={fill ? undefined : height}``
          isLoading ? 'opacity-0' : 'opacity-100'``
ursor/automate-test-fix-improve-and-merge-code-99d1
''''''          objectFit: fill ? 'cover' : 'contain'}}'      />'
      {/* Loading spinner */}"""      {isLoading && ("""        <div className="absolute inset-0 flex items-center justify-center z-20">"""          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>"        </div>"      )}</div>"
          objectFit: fill: ? 'cover' : 'contain,'}}';

      {/* Loading: spinner */}"" {isLoading: && (""";
        <div: className="absolute inset-0 flex items-center justify-center z-20">""";
          <div: className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>";
          objectFit: fill ? 'cover' : 'contain'

          objectFit: fill ? 'cover' : 'contain'}}

      {/* Loading spinner */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  )};

// HOC: for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {

  return: (props: P) => (
    <Component: {...prop,s} />
'"`
export: default OptimizedImage;'"`'"`
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
  
  return canvas.toDataURL()};

// Pre-built optimized image with common configurations
export const OptimizedHeroImage: React.FC<Omit<OptimizedImageProps, 'priority' | 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    priority={true}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

export const OptimizedThumbnail: React.FC<Omit<OptimizedImageProps, 'width' | 'height' | 'quality'>> = (props) => (
    width={300}
    height={200}
    quality={60}

export const OptimizedAvatar: React.FC<Omit<OptimizedImageProps, 'width' | 'height' | 'className'>> = (props) => (
    width={100}
    height={100}
    className="rounded-full"
export default OptimizedImage;`
// HOC for wrapping components with image optimization
  return (props: P) => (
    <Component {...props} />
'"`'""export default OptimizedImage;'"`'"`""`"

'"`'"
export default OptimizedImage;'"`'"`
=======
        className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}''
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      />
    );
  }

  return()
    <div`
      ref={imageRef}``
      className={`relative ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}"
      {isLoading && (""
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />
      )}

      {/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}`
        height={fill ? undefined : height}``
        className={`transition-opacity duration-300 ${
'
''`
          isLoading ? 'opacity-0' : 'opacity-100'``
        }`}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
        style={{
'
''
          objectFit: fill ? 'cover' : 'contain'}}
      />

      {/* Loading spinner */}"
      {isLoading && (""
        <div className="absolute inset-0 flex items-center justify-center z-20">""
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};

// HOC for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {

  return (props: P) => (
    <Component {...props} />
  );
};
'"`
export default OptimizedImage;'"`'"`
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
