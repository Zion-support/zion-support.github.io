import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
=======
import { cn } from '../../lib/utils';
interface OptimizedImageProps {'
>>>>>>> main
import { cn } from '../../src/lib/utils';

interface OptimizedImageProps {
  src: string;
<<<<<<< HEAD
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  return (
=======
   al,
    t: string;
   width?: number;
   height?: number;
   className?: string;
   priority?: boolean;
   quality?: number;
   placeholder?: 'blur' | 'empty';
   blurDataURL?: string;
   sizes?: string}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src, alt,
  width = 800, height = 600,
  className, priority = false,
  quality = 85, placeholder = 'empty',
  blurDataURL, sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}) => {
  return('
>>>>>>> main
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
<<<<<<< HEAD
  );
};

export default OptimizedImage;
=======
  )}
export default OptimizedImage'
>>>>>>> main
