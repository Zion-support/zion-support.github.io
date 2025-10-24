'use client'

import React from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'empty' | 'blur';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

<<<<<<< HEAD
export default OptimizedImage
=======
export default OptimizedImage;
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
