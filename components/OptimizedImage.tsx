<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default OptimizedImage;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";
import Image from "next/image";
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC < OptimizedImageProps> = ({
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  src;
  alt;

  width = 800;
  height = 600;
=======
import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
=======
import React from "react";
import Image from "next/image";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react";
import Image from "next/image";
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
interface OptimizedImageProps {
  src: string;
  alt: string;
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
=======
'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
interface OptimizedImageProps {
'use client, ';''''
  'import Image from 'next/image
  ';interface OptimizedImageProps {'
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  onClick?: () => void
  onLoad?: () => void
  onError?: () => void
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
<<<<<<< HEAD
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  quality = 75,
}) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      className={className}
      priority={priority}
      quality={quality}

;

=======
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>  );
}
    />  );
};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export default OptimizedImage;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default OptimizedImage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className={className}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};
export default OptimizedImage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  src, alt,
  width, height,
  className = '', priority = false,
  quality = 75, placeholder = 'empty',
  blurDataURL, sizes,
  fill = false, style,
  onClick, onLoad,
  onError
}) => {

const OptimizedImage: React.FC<OptimizedImageProps> = ({
src, alt, width,  , ''
  '  height, '''
  '  className = '', priority = false, '''
  '  quality = 75, '''
  '  placeholder = 'empty
  ', '  blurDataURL, sizes, '  fill = false, style, '
  onClick, onLoad, onError}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imageRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      }, {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    )
    if (imageRef.current) {

const observer = new IntersectionObserver();([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
}, {
''''''
  '        rootMargin: '50px, // Start loading 50px before the image comes into view'        threshold: 0.1}'
  '    );if (imageRef.current) {'
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [priority])
  // Handle image load
  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }
  // Handle image error
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }
  // Fallback image for errors
  if (hasError) {
    return (
      <div
        className={`bg-gray-200 dark: bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    )
  }

  // Loading skeleton
  if (!isInView) {
    return (
      <div
        ref={imageRef}
        className={`bg-gray-200 dark: bg-gray-700 animate-pulse ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      />
    )
  }

  return (
    <div
      ref={imageRef}
      className={`relative ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark: bg-gray-700 animate-pulse z-10" />
      )}
      
      {/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        quality={quality}
        placeholder={placeholder}

  // Handle image load
const handleLoad = () => {;setIsLoading(false)
    onLoad?.()
  }

  // Handle image error
const handleError = () => {;setHasError(true)
    setIsLoading(false)
    onError?.()
  }

  // Fallback image for errors
  if (hasError) {
ursor/automate-test-fix-improve-and-merge-code-48f3
  // Loading skeleton
  if (!isInView) {
return()
      <div``        ref={imageRef}`'`'
  '        className={`bg-gray-200 dark: bg-gray-700 animate-pulse ${className}`}', '        style={{ width: fill ? '100% : width, height: fill ? '100%'
  ' : height }}'      />
  '    )`  }'

  return()
    <div``      ref={imageRef}```      className={`relative ${className}`}`      style={style}
      onClick={onClick}
    >
      {/* Loading overlay */}'''      {isLoading && ('''        <div className='absolute inset-0 bg-gray-200 dark: bg-gray-700 animate-pulse z-10' />'      )}'{/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
width={fill ? undefined : width}``        height={fill ? undefined : height}```        className={`transition-opacity duration-300 ${`, ''''
  '`'          isLoading ?
  'opacity-0': 'opacity-100'``        }`}'        priority={priority}`        quality={quality}placeholder={placeholder}'
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: fill ? 'cover' : 'contain'
        }}
      />
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  )
}
// HOC for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => (
    <Component {...props} />
  )
}
export default OptimizedImage
        style={{, ''''
  '          objectFit: fill ? 'cover
  ' : 'contain}}'      />'
  ''
      {/* Loading spinner */}'''      {isLoading && ('''        <div className='absolute inset-0 flex items-center justify-center z-20'>'''          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>'        </div>'      )}</div>  )'
}

// HOC for wrapping components with image optimization
export const withImageOptimization = <P extends object>(;Component: React.ComponentType<P>
) => {
  return (props: P) => (
    <Component {...props} />
  )
}''`
  '''export default OptimizedImage''`;''`''`'
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
