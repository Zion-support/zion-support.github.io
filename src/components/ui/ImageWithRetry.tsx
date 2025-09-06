import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
<<<<<<< HEAD

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
=======
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
<<<<<<< HEAD
  retryClassName?: string;
=======
  retryClassName?: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
<<<<<<< HEAD
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
  };

  const handleRetry = () => {
    setFailed(false);
<<<<<<< HEAD
    setCurrentSrc(src);
=======
    setCurrentSrc(src)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  };

  const fill = !('width' in props) && !('height' in props);

  return (
<<<<<<< HEAD
    <div className='relative inline-block'>
=======
    <div className="relative inline-block">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
        >
          Retry
        </button>
      )}
    </div>
  );
<<<<<<< HEAD

export default ImageWithRetry;
=======
}


export default ImageWithRetry;

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
