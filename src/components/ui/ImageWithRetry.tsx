import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
<<<<<<< HEAD
<<<<<<< HEAD
  fallbackSrc?: string;
=======
  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string
}
=======
  fallbackSrc?: string;
  /** CSS class for the retry button */
  retryClassName?: string;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
}

export function ImageWithRetry({
<<<<<<< HEAD
<<<<<<< HEAD
  src;
  alt;
=======
  src
  alt = ''
  fallbackSrc = '/images/image-placeholder.svg'
  className
  retryClassName
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
  const handleRetry = () => {
    setFailed(false)
    setCurrentSrc(src) };    setCurrentSrc(fallbackSrc)
  }
  const handleRetry = () => {
    setFailed(false)
    setCurrentSrc(src);    setCurrentSrc(src)
  }
  const fill = !('width' in props) && !('height' in props)
  return (
    <div className='relative inline-block'>      <Image    <div className="relative inline-block">
=======
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    setFailed(true);
    setCurrentSrc(fallbackSrc);
  };

  const handleRetry = () => {
    setFailed(false);
    setCurrentSrc(src);
  };

  const fill = !('width' in props) && !('height' in props);

  return (
    <div className='relative inline-block'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <Image
        {...props}
        src = {currentSrc,}
        alt = {alt,}
        onError = {handleError,}
        className = {cn(className),}
        fill = {fill,}
      />
      {failed && (
        <button
          type='button'
          onClick={handleRetry}
          className={cn(
            'absolute bottom-1 right-1 text-xs underline'
            retryClassName
<<<<<<< HEAD
          )}        >          onClick = {handleRetry,}
          className = {cn('absolute bottom-1 right-1 text-xs underline', retryClassName),}
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
=======
          )}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        >
          Retry
        </button>
      )}
    </div>
<<<<<<< HEAD
  )
export default ImageWithRetry
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
}

export default ImageWithRetry;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
