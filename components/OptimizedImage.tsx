<<<<<<< HEAD
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC < OptimizedImageProps> = ({
  src;
  alt;

  width = 800;
  height = 600;  return (
=======
import React from "react";
import Image from "next/image";
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  quality = 75,
}) => {
  return (
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
export default OptimizedImage;
=======
      className={className}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};

export default OptimizedImage;
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
