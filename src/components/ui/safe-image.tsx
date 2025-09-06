
  src: string;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {;
  src: string;
  alt: string;  width?: number;interface SafeImageProps {;
  src: string,;
  alt: string,;
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {;
  src: string,;
  alt: string,;

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

        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"

        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        style={{ width, height }}
        role="img"
        aria-label={alt}

      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }

    <Image
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}

    <Image;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
