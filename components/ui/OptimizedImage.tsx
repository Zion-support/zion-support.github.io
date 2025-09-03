<<<<<<< HEAD
import: React from 'react';';
import: Image from 'next/image';';
import: { cn } from '../../lib/utils';';

interface: OptimizedImageProps {
import { cn } from '../../src/lib/utils';';
=======
import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
=======
import { cn } from '../../lib/utils';
interface OptimizedImageProps {'
>>>>>>> main
import { cn } from '../../src/lib/utils';
>>>>>>> main

interface: OptimizedImageProps {
  src: string;
<<<<<<< HEAD
   alt: string;
   width?: number;
   height?: number;
   className?: string;
   priority?: boolean;
   quality?: number;
   placeholder?: 'blur' | 'empty';';
   blurDataURL?: string;
   sizes?: strin,g}
const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  sr,c,
=======
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
>>>>>>> main
  alt,
  width: = 800,
  height = 600,
  className,
  priority = false,
  quality = 85,
  placeholder = 'empty',';
  blurDataURL,
<<<<<<< HEAD
  sizes: = '(max-width: 768px) 100v,w, (max-width: 1200px) 50v,w, 33vw'}) => {';
  return(
    <div: className={cn('relative overflow-hidden', className)}>';
      <Image: src={src}
=======
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
>>>>>>> main
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
<<<<<<< HEAD
        className='object-cover transition-transform duration-300 hover: scale-105'/>';
    </div>
  ,)}
;
export: default OptimizedImage
=======
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
<<<<<<< HEAD
  );
};

export default OptimizedImage;
=======
  )}
<<<<<<< HEAD

export default OptimizedImage
=======
export default OptimizedImage'
>>>>>>> main
>>>>>>> main
>>>>>>> main
