=======
import React, { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string;  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {

  src: string,
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string


}

  fallbackSrc?: string
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

  src
  alt = ''
  fallbackSrc = '/images/image-placeholder.svg'
  className
  retryClassName
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),


  const fill = !('width' in props) && !('height' in props);
  return (
    <div className="relative inline-block">
      <Image
        {...props}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className={cn(className)}
        fill={fill}
      />
      {failed && (
        <button
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
        >;
          Retry;
        </button>;
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
=======

  const fill = !('width' in props) && !('height' in props);
  return (
    <div className='relative inline - block'>      <Image    <div className="relative inline - block">;
      <Image;
        {...props}
        src = {current_src, }
        alt = {alt, }
        on_error = {handle_error, }
        class_name = {cn (class_name), }
        fill = {fill, }
      />;
      {failed && (
        <button;
          type='button';
          on_click={handle_retry}
          className={cn (
            'absolute bottom - 1 right - 1 text - xs underline',
            retryClassName)}        >          on_click = {handle_retry, }
          class_name = {cn ('absolute bottom - 1 right - 1 text - xs underline', retryClassName), }
          type="button";
          on_click={handle_retry}
          className={cn ('absolute bottom - 1 right - 1 text - xs underline', retryClassName)}
        >;
          Retry;
        </button>)}
    </div>);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
export default ImageWithRetry;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
