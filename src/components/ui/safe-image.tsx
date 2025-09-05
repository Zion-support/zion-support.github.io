'use client';

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

  const _handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);} else if (!hasError && src.startsWith('/')) {_// Try serving the image directly through our custom API route
      const _fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {_setHasError(true);}
  };

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {_return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={_{ width, _height}}
        role="img"
        aria-label={_alt}
      >
        <ImageIcon className="w-6 h-6" />
      </div>
    );
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
  );
} 