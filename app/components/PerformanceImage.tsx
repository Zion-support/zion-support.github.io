import Image from "next/image";
"use client";
import React from "react";

interface PerformanceImageProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ src, alt, className, width = 800, height = 600 }) => {
  return (
    <div className={className}>
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto"
      />
    </div>
  );
};

export default PerformanceImage;
