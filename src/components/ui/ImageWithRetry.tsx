
import React, { useState } from 'react',
import Image, { type ImageProps } from 'next/image';
import React, { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils';

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({



  };

  const fill = !('width' in props) && !('height' in props);

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

