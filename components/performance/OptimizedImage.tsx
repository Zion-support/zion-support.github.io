import React from 'react';
import Image from 'next/image';
interface OptimizedImageProps {
<<<<<<< HEAD
  src: string, alt: string
=======
<<<<<<< HEAD
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
=======

  src: string, alt: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
<<<<<<< HEAD
  src
  alt
  width
  height
  className = ''
  priority = false
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  quality = 85
  fill = false
=======
>>>>>>> origin/main
  src,
  alt,
  width,
  height,
<<<<<<< HEAD
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
    />
  );
};

export default OptimizedImage;
=======
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  fill = false,
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  style

}) => {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
        style={style}
      />
    );
  }
    <Image
      src={src}
      alt={alt}
      width={width |800}
      height={height |600}
      className={className}
      priority={priority}
      sizes={sizes}
<<<<<<< HEAD
quality={quality}
      style={style}
<<<<<<< HEAD
  );
}
export default OptimizedImage;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      quality={quality}
      style={style}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
};

export default OptimizedImage;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
