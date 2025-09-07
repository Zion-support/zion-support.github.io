import React from "react";
import Image from "next/image";

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
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src,
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
<<<<<<< HEAD
}) => {
=======
   }) => {



 ;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
    />
<<<<<<< HEAD
  );
};

=======
  )
};


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
export default OptimizedImage;