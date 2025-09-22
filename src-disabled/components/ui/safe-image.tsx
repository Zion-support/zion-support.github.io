:src_backup/components/ui/safe-image.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  src: string;
=======
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;  src: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  alt: string;  width?: number;interface SafeImageProps {

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

;
    />;

  );        aria-label={alt}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;

    }
  }
:src_backup/components/ui/safe-image.tsx
  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc ===,  fallbackSrc)) {;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;

:src_backup/components/ui/safe-image.tsx
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
'use client',

import Image from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string
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

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
      >
        <ImageIcon className='w-6 h-6' />
origin/cursor/automate-test-improve-and-merge-code-2533
  // If we have an error and no fallback, show a placeholder
:src/components/ui/safe-image.tsx
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/safe-image.tsx
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}`
        style={{ width, height }}
        role="img""
        role="img"
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }
  );        aria-label={alt}
'use client',;
import Image from 'next/image',;
import { useState } from 'react',;
import { ImageIcon } from 'lucide-react';

:src/components/ui/safe-image.tsx
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/safe-image.tsx
        style={{ width, height }}
        role="img""
        aria-label={alt}
      >
        <ImageIcon className="w-6 h-6" />"
      </div>
    )
  }
:src_backup/components/ui/safe-image.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (;

    />
  ); return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:src_backup/components/ui/safe-image.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
    />;
  );

} 

}
}
}
    />;
  );
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
function SafeImage() {,
  const [has_error, setHasError] = useState (false);,
  const [current_src, setCurrentSrc] = useState (src);
  const handle_error = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentSrc (fallback_src);
      setHasError (true);
      // Try serving the image directly through our custom API route;
      const fallback_url = `/api / image${src}`;`
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
        className={`flex items - center justify - center bg - gray - 100 text - gray - 400 ${class_name}`}`
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
:src_backup/components/ui/safe-image.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/safe-image.tsx
    <Image;
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images;
:src_backup/components/ui/safe-image.tsx
<<<<<<< HEAD:src/components/ui/safe-image.tsx
<<<<<<< HEAD
      unoptimized={hasError}
    />;
  );
      unoptimized = {has_error, }
    />);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      unoptimized={hasError}
    />;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} ;
:src_backup/components/ui/safe-image.tsx
<<<<<<< HEAD
=======

/>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
      unoptimized={hasError}
    />;
  );
} ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/safe-image.tsx

/>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/safe-image.tsx
