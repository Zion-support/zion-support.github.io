import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
  retryClassName?: string;
=======
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
<<<<<<< HEAD
  retryClassName?: string;
=======
  retryClassName?: string
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    setFailed(true);
    setCurrentSrc(fallbackSrc);  };

  const handleRetry = () => {
    setFailed(false);
    setCurrentSrc(src);  };
=======
    setCurrentSrc(fallbackSrc)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const handleRetry = () => {
    setFailed(false);
<<<<<<< HEAD
    setCurrentSrc(src);
=======
    setCurrentSrc(src)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const fill = !('width' in props) && !('height' in props);

  return (
    <div className='relative inline-block'>      <Image
=======
    <div className="relative inline-block">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <Image
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {...props}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className={cn(className)}
        fill={fill}
      />
      {failed && (
        <button
          type='button'
          onClick={handleRetry}
          className={cn(
            'absolute bottom-1 right-1 text-xs underline',
            retryClassName
          )}        >
=======
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Retry
        </button>
      )}
    </div>
  );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default ImageWithRetry;