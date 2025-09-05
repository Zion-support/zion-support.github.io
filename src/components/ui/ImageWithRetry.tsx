import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image',
import { cn } from '@/lib/utils',
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {
  src: string,
  alt?: string,  /** Source to use if the main src fails */
  fallbackSrc?: string,
  /** CSS class for the retry button */
  retryClassName?: string
}
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
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
    <div className=&quot;relative inline-block&quot;>
      <Image
        {_...props}
        src={_currentSrc}
        alt={_alt}
        onError={_handleError}
        className={_cn(className)}
        fill={_fill}
      />
      {_failed && (
        <button
          type=&quot;button&quot;
          onClick={handleRetry}
          className={_cn('absolute bottom-1 right-1 text-xs underline', _retryClassName)}
        >
          Retry
        </button>
      )}
    </div>
  )
}

export default ImageWithRetry,
