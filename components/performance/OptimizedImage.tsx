<<<<<<< HEAD
import Image from 'next / image';
;
=======
import React from 'react';
import Image from 'next/image';

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}
<<<<<<< HEAD
=======

const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw'
}) => {
<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
}
    return (
      <Image;
        src={src}
        alt={alt}
        fill;
        className={class_name}
        priority={priority}
        sizes={sizes}
        quality={quality}
        style={style}
=======
  return (
    <Image
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
<<<<<<< HEAD
      sizes={sizes}
  );
}
export default OptimizedImage;
      quality={quality}
      style={style}

quality={quality}
      style={style}
  );
}
=======
      quality={quality}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
