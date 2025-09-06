<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
'use client',

import Image from 'next/image';
import { useState } from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
'use client'
import Image from 'next/image'
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
  src: string;
  alt: string;  width?: number;interface SafeImageProps {
<<<<<<< HEAD


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

  );        aria-label={alt}

=======
    />
  );        aria-label={alt}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {;
  src: string;
  alt: string;  width?: number;interface SafeImageProps {;
  src: string,;
  alt: string,;
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {;
  src: string,;
  alt: string,;

import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string,
  alt: string,

>>>>>>>   width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;


    }
  }


  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
<<<<<<< HEAD

  quality?: number
}

export function SafeImage({
  src;
  alt;
  width;
  height;
  className = '',
  fallbackSrc;
  priority = false,
  sizes;
  quality = 75}: SafeImageProps) {

  const [ hasError, setHasError ] = useState(false),
  const [ currentSrc, setCurrentSrc ] = useState(src),


  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true)
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`,
      setCurrentSrc(fallbackUrl);
      setHasError(true)
    } else if (!hasError) {
      setHasError(true)
=======
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }
<<<<<<< HEAD
    />
=======
;
    />;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>>       >
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      >
>>>>>>>         <ImageIcon className="w-6 h-6" />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    />
  ); return (
        aria-label = {alt,}>;
        <ImageIcon className='w-6 h-6' />      </div>;
    );
  }
>>>>>>> 

    />;
  );        aria-label={alt}
      >;
        <ImageIcon className="w-6 h-6" />;
      </div>;
    );
  }


    />;
  );  return (


>>>>>>>     <Image
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    />
  ); return (
    <Image
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}
    />
  )
<<<<<<< HEAD
<<<<<<< HEAD

}

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
  return (;
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
<<<<<<< HEAD

=======
>>>>>>> 
} ;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
} 

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
;
  return (;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
