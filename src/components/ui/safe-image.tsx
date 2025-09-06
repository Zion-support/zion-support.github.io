'use client';

import Image from 'next/image';
import { useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string;
<<<<<<< HEAD
  alt: string;  width?: number;
=======
  alt: string;
=======
import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string,
  alt: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string,
  alt: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  width?: number;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
<<<<<<< HEAD
  quality?: number;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  quality?: number;
=======
  quality?: number
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function SafeImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc,
  priority = false,
  sizes,
  quality = 75,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
<<<<<<< HEAD
      setHasError(true);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setHasError(true);
=======
      setHasError(true)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {
      setHasError(true);
    }
  };

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    
      >
<<<<<<< HEAD
        <ImageIcon className='w-6 h-6' />      </div>
    );
  }

  
    />
  );
=======
<<<<<<< HEAD
        <ImageIcon className='w-6 h-6' />
=======
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
      >
        <ImageIcon className="w-6 h-6" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <ImageIcon className="w-6 h-6" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
  
    />
  );
=======
  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images
      unoptimized={hasError}
    />
  );
} 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images
      unoptimized={hasError}
    />
  );
} 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
