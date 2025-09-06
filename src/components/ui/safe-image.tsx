<<<<<<< HEAD
interface SafeImageProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
'use client',

import Image from 'next/image';
import { useState } from 'react';
=======
'use client'
import Image from 'next/image'
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  src: string;
  alt: string;  width?: number;interface SafeImageProps {
  src: string
  alt: string
interface SafeImageProps {

  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  priority?: boolean
  sizes?: string
  quality?: number
export function SafeImage({
  src
  alt
  width
  height
  className = ''
  fallbackSrc
  priority = false
  sizes
  quality = 75
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(true)
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`
      setCurrentSrc(fallbackUrl)
      setHasError(true)
    } else if (!hasError) {
      setHasError(true)
    }
  }

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
    />
;
    />;
=======

;
    />;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  );        aria-label={alt}
=======
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
import { ImageIcon } from 'lucide-react';
interface SafeImageProps {;
  src: string,;
  alt: string,;
  width?: number,;
  height?: number,;
  className?: string,;
  fallbackSrc?: string,;
  priority?: boolean,;
  sizes?: string,;
  quality?: number;
}
;
export function SafeImage({;
  src,;
  alt,;
  width,;
  height,;
  className = '',;
  fallbackSrc,;
  priority = false,;
  sizes,;
  quality = 75}: SafeImageProps) {;
  const [hasError, setHasError] = useState(false),;
  const [currentSrc, setCurrentSrc] = useState(src),;
  const handleError = () => {;
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc),;
      setHasError(true);
    } else if (!hasError && src.startsWith('/')) {;
      // Try serving the image directly through our custom API route;
      const fallbackUrl = `/api/image${src}`,;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {;
      setHasError(true);
    }
  };
  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;
    return (;
      <div;
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    />
  ); return (
    <Image
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}
<<<<<<< HEAD
<<<<<<< HEAD
    />
  )
} 

}
=======


} 

}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
    />;
  );
<<<<<<< HEAD


  src: string,
  alt: string,
interface SafeImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  class_name?: string;
  fallback_src?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
export /**
 * SafeImage - Function description
 */
function SafeImage() {
  const [has_error, setHasError] = useState (false);
  const [current_src, setCurrentSrc] = useState (src);
  const handle_error = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentSrc (fallback_src);
      setHasError (true);
      // Try serving the image directly through our custom API route;
      const fallback_url = `/api / image${src}`;
      setCurrentSrc (fallback_url);
      setHasError (true);
    } else // Check condition
if ( {) {
  $2
}
      setHasError (true);
    }
  }
  // If we have an error and no fallback, show a placeholder;
  if () {) {
  $2
}
        return (
      <div;
        className={`flex items - center justify - center bg - gray - 100 text - gray - 400 ${class_name}`}
        style={{ width, height }}
        role="img";
        aria - label = {alt, }
      >;
        <ImageIcon className='w - 6 h - 6' />      </div>);
  }
    />);        aria - label={alt}
      >;
        <ImageIcon className="w - 6 h - 6" />;
      </div>);
  }
    />); return (
=======
    />
  )
}
=======
;
  return (;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <Image;
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images;
      unoptimized={hasError}
    />;
  );
} ;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
