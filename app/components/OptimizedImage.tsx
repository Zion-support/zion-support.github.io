'use client';
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
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
<<<<<<< HEAD
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  _className = '',
  _src,
  _alt,
  _width,
  _height,
  _priority = false,
  _quality = 75,
  _placeholder = 'empty',
  _blurDataURL
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
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
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default OptimizedImage;
