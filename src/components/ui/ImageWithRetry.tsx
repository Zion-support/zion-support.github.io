import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string,
  alt?: string,
  /** Source to use if the main src fails */
  fallbackSrc?: string,
  /** CSS class for the retry button */
  retryClassName?: string
}

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
  src,
  alt = $2;
  fallbackSrc = $2;
  className,
  retryClassName,
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState($2);
  const [failed, setFailed] = useState($2);
  const handleError = () => {
    setFailed($2);
    setCurrentSrc(fallbackSrc)
  },

  const handleRetry = () => {
    setFailed($2);
    setCurrentSrc(src)
  },

  const fill = $2;
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
        >
          Retry
        </button>
      )}
    </div>
  )
}

export default ImageWithRetry,
