<<<<<<< HEAD
import Image from 'next / image';
;interface OptimizedImageProps {
=======
import React from "react";
import Image from "next/image";

interface OptimizedImageProps {
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
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
        style={style}      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
  );
}
export default OptimizedImage;
      quality={quality}
      style={style}

<<<<<<< HEAD
quality={quality}
      style={style}
  );
}
=======
export default OptimizedImage;
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
