<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface SafeImageProps {
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  src: string;
=======
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;  src: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  alt: string;  width?: number;interface SafeImageProps {

    }
  }

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }

;
    />;

  );        aria-label={alt}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
import { ImageIcon } from 'lucide-react';
interface SafeImageProps {;
  src: string,;
  alt: string,;
<<<<<<< HEAD
  width?: number,;
  height?: number,;
  className?: string,;
  fallbackSrc?: string,;
  priority?: boolean,;
  sizes?: string,;
  quality?: number;
=======

import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string,
  alt: string,

  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;

    }
  }

  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;

<<<<<<< HEAD
  src: string
  alt: string
interface SafeImageProps {

  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  priority?: boolean
  sizes?: string
  quality?: number
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export function SafeImage({;
  src,;
  alt,;
  width,;
  height,;
  className = '',;
  fallbackSrc,;
  priority = false,;
  sizes,;
  quality = 75}: SafeImageProps) {;
  const [hasError, setHasError] = useState(false),;
  const [currentSrc, setCurrentSrc] = useState(src),;
  const handleError = () => {;
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc),;
      setHasError(true);
    } else if (!hasError && src.startsWith('/')) {;
      // Try serving the image directly through our custom API route;
      const fallbackUrl = `/api/image${src}`,;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {;
      setHasError(true);
    }
  };
  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;
    return (;
      <div;
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
=======
export function SafeImage({
  src
  alt
  width
  height
  className = ''
  fallbackSrc
  priority = false
  sizes
  quality = 75
=======
'use client',

import Image from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string
  alt: string;  width?: number;interface SafeImageProps {
  src: string
  alt: string
interface SafeImageProps {
quality?: number;

export function SafeImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc,
  priority = false,
  sizes,
  quality = 75,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
setHasError(true);
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {
<<<<<<< HEAD
      setHasError(true)

=======
      setHasError(true);
    }
  };

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    
      >
        <ImageIcon className='w-6 h-6' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"

        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (;
=======

    />
  ); return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    <Image
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <Image;
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images;
<<<<<<< HEAD
      unoptimized={hasError}
    />;
  );
=======

    />
  ); return (    <Image
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}
}
    />;
  );    <Image;
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images;
<<<<<<< HEAD
      unoptimized = {has_error, }
    />);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      unoptimized={hasError}
    />;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} ;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

/>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
