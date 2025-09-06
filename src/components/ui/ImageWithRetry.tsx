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
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);  };    setCurrentSrc(fallbackSrc);

  };

  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src);    setCurrentSrc(src);
    setCurrentSrc(src);    setCurrentSrc(src);
  };

  const fill = !('width' in props) && !('height' in props);

  return (


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


      )}
    </div>
  )

  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
