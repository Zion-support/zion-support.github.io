<<<<<<< HEAD
<<<<<<< HEAD
'use client',

import Image from 'next/image';
import { useState } from 'react';
'use client'
import Image from 'next/image'
import { useState } from 'react'
=======
interface SafeImageProps {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
<<<<<<< HEAD
  src: string;
  alt: string;  width?: number;interface SafeImageProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SafeImageProps {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  src: string;
  alt: string;  width?: number;interface SafeImageProps {


    }
  }

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    />
  );        aria-label={alt}
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
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

  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;


    }
  }


  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    />
;
    />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;
    />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );        aria-label={alt}
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
import { ImageIcon } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;


    }
  }


  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;

        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      >
      </div>
    )
  }
<<<<<<< HEAD
=======
=======

      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    />
  ); return (
        aria-label = {alt,}>;
        <ImageIcon className='w-6 h-6' />      </div>;
    );
  }


    />;
  );        aria-label={alt}
      >;
        <ImageIcon className="w-6 h-6" />;
      </div>;
    );
  }


    />;
  );  return (


<<<<<<< HEAD
<<<<<<< HEAD

    />
  ); return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


} 

}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}
    />;
  );
<<<<<<< HEAD
} ;
} ;


} 

}
}
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
    <Image;
      src = {current_src, }
      alt = {alt, }
      width = {width, }
      height = {height, }
      class_name = {class_name, }
      on_error = {handle_error, }
      priority = {priority, }
      // Add unoptimized as fallback for problematic images;
      unoptimized = {has_error, }
    />);
}
<<<<<<< HEAD
} ;
=======
} ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
