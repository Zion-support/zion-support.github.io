<<<<<<< HEAD
import Image from 'next / image';
;
=======
import React from 'react';
import Image from 'next/image';
 f6b849a806966ab0803a1eba10ab812addf04f56
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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

  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {

      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}

      quality={quality}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;
<<<<<<< HEAD
=======
 a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
