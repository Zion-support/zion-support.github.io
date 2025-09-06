<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string
=======
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  /** CSS class for the retry button */

  retryClassName?: string;  retryClassName?: string

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
<<<<<<< HEAD

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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
<<<<<<< HEAD
=======

import React, { useState } from 'react';
import Image, { type ImageProps } from 'next / image';
import { cn } from '@/lib / utils';
interface ImageWithRetryProps extends Omit < ImageProps, 'src' | 'alt'> {
  src: string;  alt?: string;
  /** Source to use if the main src fails */;
  fallback_src?: string;
  /** CSS class for the retry button */;
  retryClassName?: string;interface ImageWithRetryProps extends Omit < ImageProps, 'src' | 'alt'> {
  src: string,
interface ImageWithRetryProps extends Omit < ImageProps, 'src' | 'alt'> {
  src: string,
  alt?: string;
  /** Source to use if the main src fails */;
  fallback_src?: string;
  /** CSS class for the retry button */;
  retryClassName?: string;  retryClassName?: string;
}
/**;
* Image component that falls back to a placeholder and offers a retry button when the image fails to load.;
*/;
export /**
 * ImageWithRetry - Function description
 */
function ImageWithRetry() {
  const [current_src, setCurrentSrc] = useState (src);
  const [failed, set_failed] = useState (false);
  const handle_error = () =>: any {
    set_failed (true);
    setCurrentSrc (fallback_src) }
  const handle_retry = () =>: any {
    set_failed (false);
    setCurrentSrc (src) }    setCurrentSrc (fallback_src);

  }
  const handle_retry = () =>: any {
    set_failed (false);
    setCurrentSrc (src);    setCurrentSrc (src);
  }


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string;  alt?: string;
  /** Source to use if the main src fails */;
  fallbackSrc?: string;
  /** CSS class for the retry button */;
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string,;
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string,;
  alt?: string;
  /** Source to use if the main src fails */;
  fallbackSrc?: string;
  /** CSS class for the retry button */;
  retryClassName?: string;  retryClassName?: string;
}

/**;
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.;
 */;
export function ImageWithRetry(): any ({;
  src,;
  alt = '',;
  fallbackSrc = '/images/image-placeholder && placeholder.svg',;
  className,;
  retryClassName,;
}: ImageWithRetryProps) {;
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {;
    setFailed(true);
    setCurrentSrc(fallbackSrc);  };

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
=======
  )
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  const handleError = () => {
    setFailed(true),
    setCurrentSrc(fallbackSrc)
  },

  const handleRetry = () => {
    setFailed(false),
    setCurrentSrc(src)
  },

  const fill = !('width' in props) && !('height' in props),

<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
export default ImageWithRetry
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  const fill = !('width' in props) && !('height' in props);
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
export default ImageWithRetry;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
