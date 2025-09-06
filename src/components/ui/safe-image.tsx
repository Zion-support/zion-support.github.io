'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;  width?: number;
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
  quality?: number;
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
      setHasError(true);
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
        <ImageIcon className='w-6 h-6' />      </div>
    );
  }

  
    />
  );
=======
        <ImageIcon className="w-6 h-6" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>
    );
  }

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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
