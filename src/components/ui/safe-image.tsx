<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
'use client',

import Image from 'next/image';
import { useState } from 'react';
<<<<<<< HEAD
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {
=======
=======
'use client'
import Image from 'next/image'
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
export function SafeImage(): any ({;
  src,;
  alt,;
  width,;
  height,;
  className = '',;
  fallbackSrc,;
  priority = false,;
  sizes,;
  quality = 75,;
}: SafeImageProps) {;
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const handleError = () => {;
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      // Try serving the image directly through our custom API route;
      const fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {;
      setHasError(true);
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
    />
  );        aria-label={alt}
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string,
  alt: string,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

=======
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
    }
  };


  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    />
  )
<<<<<<< HEAD
}
} ;
} ;
} 
=======
<<<<<<< HEAD
=======
} 

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
    />;
  );
} ;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
} ;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
