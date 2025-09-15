<<<<<<< HEAD
import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image',
import { cn } from '@/lib/utils',

interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {
  src: string,
  alt?: string,
  /** Source to use if the main src fails */
  fallbackSrc?: string,
  /** CSS class for the retry button */
  retryClassName?: string
=======
import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
  retryClassName?: string;
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),

  const handleError = () => {
    setFailed(true),
    setCurrentSrc(fallbackSrc),
  },

  const handleRetry = () => {
    setFailed(false),
    setCurrentSrc(src),
  },

  const fill = !('width' in props) && !('height' in props),

  const fill = !('width' in props) && !('height' in props);
=======
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

>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  ),
}

export default ImageWithRetry,
=======
  );
}

export default ImageWithRetry;
>>>>>>> origin/auto/autonomy-17186719616
