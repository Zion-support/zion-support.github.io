<<<<<<< HEAD
import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */

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
=======

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

  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);  };    setCurrentSrc(fallbackSrc);
  };

  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);    setCurrentSrc(src);
  };

  const fill = !('width' in props) && !('height' in props);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
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
      )}
<<<<<<< HEAD
    </div>
  )
export default ImageWithRetry
=======
    </div>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

