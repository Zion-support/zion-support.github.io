"use client";
import React from "react";

interface PerformanceImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto"
      />
    </div>
  );
};

export default PerformanceImage;
