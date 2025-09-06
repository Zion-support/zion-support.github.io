<<<<<<< HEAD
import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
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
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
<<<<<<< HEAD
<<<<<<< HEAD

  src
  alt = ''
  fallbackSrc = '/images/image-placeholder.svg'
  className
  retryClassName
<<<<<<< HEAD
=======
=======
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
<<<<<<< HEAD
  const handleRetry = () => {
    setFailed(false)
    setCurrentSrc(src) };    setCurrentSrc(fallbackSrc)
  }
  const handle_retry = () =>: any {
    set_failed (false);
    setCurrentSrc (src);    setCurrentSrc (src);
  }
  const fill = !('width' in props) && !('height' in props)
=======
  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);  };    setCurrentSrc(fallbackSrc);

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  };

  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);    setCurrentSrc(src);
    setCurrentSrc(src);    setCurrentSrc(src);
  };

  const fill = !('width' in props) && !('height' in props);

  return (
    <div className='relative inline-block'>      <Image    <div className="relative inline-block">;
    <div className='relative inline-block'>      <Image    <div className="relative inline-block">;
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
          type='button'
          onClick={handleRetry}
          className={cn(
            'absolute bottom-1 right-1 text-xs underline'
            retryClassName
          )}>          onClick = {handleRetry,}
          className = {cn('absolute bottom-1 right-1 text-xs underline', retryClassName),}
          type="button";
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
        >;
          Retry;
        </button>;
    </div>
  )
export default ImageWithRetry

          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
        >
          Retry
        </button>
      )}
    </div>
<<<<<<< HEAD
  );

export default ImageWithRetry;
=======
  )
<<<<<<< HEAD
export default ImageWithRetry

=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
export default ImageWithRetry;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
=======
export default ImageWithRetry;
;
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
