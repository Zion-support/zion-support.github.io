import React from 'react',
import Image from 'next/image',

<<<<<<< HEAD
interface OptimizedImageProps {
  sr: c: string;
  al: t: string;
  widt: h: number;
  heigh: t: number;
=======
interface OptimizedImageProps {_src: string;
  alt: string;
  width: number;
  height: number;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;}

<<<<<<< HEAD
const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw',
}) => {
  return (
=======
const OptimizedImage: React.FC<OptimizedImageProps> = (_{_src, _alt, _width, _height, _className = '', _priority = false, _quality = 75, _sizes = '100vw', _}) => {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Image
      src={src}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      priority={_priority}
      quality={_quality}
      sizes={_sizes}
    />
  ),
},

export default OptimizedImage;
