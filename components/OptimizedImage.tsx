<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback } from 'react';
=======
import React from 'react';
import Image from 'next/image';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface OptimizedImageProps {
=======
<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import Image from "next/image";
interface OptimizedImageProps {
  sr: c: string,
  al: string,
  widt: number,
  heigh: number,
  className?: string,
  priority?: boolean,
import React from 'react'
import Image from 'next/image'
interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface OptimizedImageProps {
  src: string
  alt: string
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
const OptimizedImage: React.FC < OptimizedImageProps> = ({
const OptimizedImage: React.FC<OptimizedImageProps> = ({
=======

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = ",
  priority = false,
  quality = 75,
}) => {
=======
<<<<<<< HEAD
import React from "react";
import Image from "next/image";
interface OptimizedImageProps {

>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
<<<<<<< HEAD
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}
=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  src;
  alt;

  width = 800;
  height = 600;
  className = '';
  priority = false;
<<<<<<< HEAD
  quality = 75

}) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

<<<<<<< HEAD
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  if (hasError) {
    return (
      <div 
        className={`bg-slate-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-slate-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-slate-800 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default OptimizedImage;
=======
  quality?: number;

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
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({

}) => {

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
<<<<<<< HEAD
      quality={quality}
<<<<<<< HEAD
      placeholder=blur"
=======
      quality={quality}"
      placeholder="blur""
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      placeholder="blur"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};
export default OptimizedImage;
<<<<<<< HEAD


<<<<<<< HEAD
return (
    <Image,
  src={src}
      alt={alt}
      width={width}
      height={height}
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
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======
<<<<<<< HEAD
export default OptimizedImage;
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>  );
}
    />  );
};

export default OptimizedImage;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
