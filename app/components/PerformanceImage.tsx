"use client";
import React from "react";
import Image from "next/image";

interface PerformanceImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        className="w-full h-auto"
        width={800}
        height={600}
        priority={false}
      />
    </div>
  );
};

