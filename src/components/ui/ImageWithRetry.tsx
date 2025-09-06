import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
<<<<<<< HEAD

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
=======
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
<<<<<<< HEAD
<<<<<<< HEAD
  retryClassName?: string;
=======
  retryClassName?: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  retryClassName?: string
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
<<<<<<< HEAD
<<<<<<< HEAD
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
=======
  src;
  alt = '';
  fallbackSrc = '/images/image-placeholder.svg';
  className;
  retryClassName;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    setFailed(true);
<<<<<<< HEAD
    setCurrentSrc(fallbackSrc);
=======
  src;
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className;
  retryClassName;
  ...props
}: ImageWithRetryProps) {

  const [ currentSrc, setCurrentSrc ] = useState(src),
  const [ failed, setFailed ] = useState(false),


  const handleError = () => {
    setFailed(true);
    setCurrentSrc(fallbackSrc)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setCurrentSrc(fallbackSrc)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const handleRetry = () => {
    setFailed(false);
<<<<<<< HEAD
<<<<<<< HEAD
    setCurrentSrc(src);
=======
    setCurrentSrc(src)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setCurrentSrc(src)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const fill = !('width' in props) && !('height' in props);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='relative inline-block'>
=======
    <div className="relative inline-block">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    <div className="relative inline-block">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
          type='button'
          onClick={handleRetry}
          className={cn(
            'absolute bottom-1 right-1 text-xs underline',
            retryClassName
          )}
=======
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          Retry
        </button>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default ImageWithRetry;
=======
}


export default ImageWithRetry;

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
