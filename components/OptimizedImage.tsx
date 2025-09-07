<<<<<<< HEAD

import React from "react";
import Image from "next/image";
interface OptimizedImageProps {
  sr: c: string,
  al: string,
  widt: number,
  heigh: number,
  className?: string,
  priority?: boolean,
import React from 'react'
import Image from 'next/image'
interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
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
<<<<<<< HEAD


return (
    <Image,
  src={src}
      alt={alt}
      width={width}
      height={height}
=======
  src, alt,
  width, height,
  className = '', priority = false,
  quality = 75, placeholder = 'empty',
  blurDataURL, sizes,
  fill = false, style,
  onClick, onLoad,
  onError
}) => {
>>>>>>> origin/chore/fix-lint-and-merge
