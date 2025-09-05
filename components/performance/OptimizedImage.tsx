<<<<<<< HEAD
import React from 'react';
  alt: string;
  width?: number;
  height?: number,
  priority?: boolean,
  className?: string,
  sizes?: string
};
export const "OptimizedImage": React.FC<OptimizedImageProps> = ({,
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {,
  return (,
    <Image,
=======
import React from 'react',;
  alt: string,;
  width?: number,;
  height?: number,;
  priority?: boolean,;
  className?: string,;
  sizes?: string,;
};
export const "OptimizedImage": React.FC<OptimizedImageProps> = ({,;
  src,;
  alt,;
  width,;
  height,;
  priority = false,;
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}) => {,;
  return (,;
    <Image,;
>>>>>>> cursor/automate-test-improve-and-merge-code-ceec
      src={src};
      alt={alt};
      width={width};
      height={height};
      priority={priority};
      className={className};
      sizes={sizes};
      quality={85};
<<<<<<< HEAD
    />)
};
export default OptimizedImage,
=======
    />)};
export default OptimizedImage,;
>>>>>>> cursor/automate-test-improve-and-merge-code-ceec
