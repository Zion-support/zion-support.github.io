<<<<<<< HEAD


=======
import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

}
=======
>>>>>>> }
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

>>>>>>>   fallbackSrc?: string
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

<<<<<<< HEAD
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src) };    setCurrentSrc(fallbackSrc)
  }
  const handleRetry = () => {
    setFailed(false)
    setCurrentSrc(src);    setCurrentSrc(src)
  }
  const fill = !('width' in props) && !('height' in props)
  return (
    <div className='relative inline-block'>      <Image    <div className="relative inline-block">
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
          )}        >          onClick = {handleRetry,}
          className = {cn('absolute bottom-1 right-1 text-xs underline', retryClassName),}
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
        >
          Retry
        </button>
      )}
    </div>
  )
=======
  src
  alt = ''
  fallbackSrc = '/images/image-placeholder.svg'
  className
  retryClassName
export default ImageWithRetry
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),

  const handleError = () => {
    setFailed(true),
    setCurrentSrc(fallbackSrc)
  },

  const handleRetry = () => {
    setFailed(false),
    setCurrentSrc(src)
  },

  const fill = !('width' in props) && !('height' in props),

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
export default ImageWithRetry;
<<<<<<< HEAD

=======
>>>>>>> 
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
