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
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
export default OptimizedImage;
