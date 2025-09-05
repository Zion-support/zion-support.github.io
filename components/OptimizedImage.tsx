<<<<<<< HEAD
import React from 'react',
import Image from 'next/image',
interface OptimizedImageProps {
  sr: c: string,
  al: t: string,
  widt: h: number,
  heigh: t: number,
  className?: string,
  priority?: boolean,
  quality?: number
}

const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75
}) => {
  return (
=======
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {_src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;}

const OptimizedImage: React.FC<OptimizedImageProps> = (_{_src, _alt, _width, _height, _className, _priority = false, _quality = 75, _}) => {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Image
      src={src}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      priority={_priority}
      quality={_quality}
    />
  )
},

export default OptimizedImage,
