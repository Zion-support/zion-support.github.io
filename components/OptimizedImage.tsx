<<<<<<< HEAD
src = {src}; alt = {alt}; width = {width}; height = {height}; className = {className}; priority = {priority}; quality = {quality};
;
=======
<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
    />
  );
};

export default OptimizedImage;
=======
src = { src };
alt = { alt };
width = { width };
height = { height };
className = { className };
priority = { priority };
quality = { quality };
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
