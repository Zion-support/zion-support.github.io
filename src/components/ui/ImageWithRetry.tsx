import React, {_useState} from 'react';
import Image, {_type ImageProps} from 'next/image';

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {_src: string;
  alt?: string;
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
  retryClassName?: string;}

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry(_{_src, _alt = '', _fallbackSrc = '/images/image-placeholder.svg', _className, _retryClassName, _...props}: ImageWithRetryProps) {_const [currentSrc, _setCurrentSrc] = useState(src);
  const [failed, _setFailed] = useState(false);

  const _handleError = () => {
    setFailed(true);
    setCurrentSrc(fallbackSrc);};

  const _handleRetry = () => {_setFailed(false);
    setCurrentSrc(src);};

  const _fill = !('width' in props) && !('height' in props);

  return (
    <div className="relative inline-block">
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
          type="button"
          onClick={handleRetry}
          className={_cn('absolute bottom-1 right-1 text-xs underline', _retryClassName)}
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ImageWithRetry;
