'use client',

<<<<<<< HEAD
import Image from 'next/image',
import { useState } from 'react',
import { ImageIcon } from 'lucide-react'

interface SafeImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  fallbackSrc?: string,
  priority?: boolean,
  sizes?: string,
  quality?: number
}

export function SafeImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc,
  priority = false,
  sizes,
  quality = 75}: SafeImageProps) {
  const [hasError, setHasError] = useState(false),
  const [currentSrc, setCurrentSrc] = useState(src),
=======
import Image from 'next/image';

interface SafeImageProps {_src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;}

export function SafeImage(_{_src, _alt, _width, _height, _className = '', _fallbackSrc, _priority = false, _sizes, _quality = 75}: SafeImageProps) {_const [hasError, _setHasError] = useState(false);
  const [currentSrc, _setCurrentSrc] = useState(src);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
<<<<<<< HEAD
      setCurrentSrc(fallbackSrc),
      setHasError(true)
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`,
      setCurrentSrc(fallbackUrl),
      setHasError(true)
    } else if (!hasError) {
      setHasError(true)
    }
  },
=======
      setCurrentSrc(fallbackSrc);
      setHasError(true);} else if (!hasError && src.startsWith('/')) {_// Try serving the image directly through our custom API route
      const _fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {_setHasError(true);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {_return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
<<<<<<< HEAD
        style={{ width, height }}
        role=&quot;img&quot;
        aria-label={alt}
=======
        style={_{ width, _height}}
        role="img"
        aria-label={_alt}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <ImageIcon className=&quot;w-6 h-6&quot; />
      </div>
    )
  }

  return (
    <Image
      src={_currentSrc}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      onError={_handleError}
      priority={_priority}
      // Add unoptimized as fallback for problematic images
      unoptimized={_hasError}
    />
  )
} 