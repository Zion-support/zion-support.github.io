<<<<<<< HEAD
=======
import React from "react";
import Image from "next/image";
>>>>>>> origin/main

interface OptimizedImageProps {
  sr: c: string,
  al: string,
  widt: number,
  heigh: number,
  className?: string,
  priority?: boolean,
  quality?: number,
  sizes?: string
}

<<<<<<< HEAD
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> origin/main
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
<<<<<<< HEAD

=======
  return (
    <Image
>>>>>>> origin/main
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
<<<<<<< HEAD

=======
      sizes={sizes}
      quality={quality}
    />
  );
};

export default OptimizedImage;
>>>>>>> origin/main
