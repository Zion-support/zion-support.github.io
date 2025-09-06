import React, { useState } from 'react',;
import Image, { type ImageProps } from 'next/image',;
import { cn } from '@/lib/utils',;
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {;
  src: string,;
  alt?: string,;
  /** Source to use if the main src fails */;
  fallbackSrc?: string,;
  /** CSS class for the retry button */;
  retryClassName?: string;
}

  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string
import React, { useState } from 'react',;
import Image, { type ImageProps } from 'next/image',;
import { cn } from '@/lib/utils',;
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {;
  src: string,;
  alt?: string,;
  /** Source to use if the main src fails */;
  fallbackSrc?: string,;
  /** CSS class for the retry button */;
  retryClassName?: string;
}

  /** CSS class for the retry button */
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string

  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string
}
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);  };    setCurrentSrc(fallbackSrc);

  };

  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);    setCurrentSrc(src);
    setCurrentSrc(src);    setCurrentSrc(src);
  };

  const fill = !('width' in props) && !('height' in props);

  return (
      <Image
        {...props}
        src = {currentSrc,}
        alt = {alt,}
        onError = {handleError,}
        className = {cn(className),}
        fill = {fill,}
      />;
      {failed && (;
        <button
export default ImageWithRetry;

  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
