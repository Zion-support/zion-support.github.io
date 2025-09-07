<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import Image from "next/image";
>>>>>>> origin/main
>>>>>>> origin/main

=======
<<<<<<< HEAD
import React from \"react\";"
import Image from \"next/image\";

=======
import React from 'react'
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src;
  alt;
  width;
  height;
  priority = false;
  className;
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
}) => {
  return (
    <Image
      src={src}
<<<<<<< HEAD
=======

<<<<<<< HEAD
 ;
  return (}
    <Image;}
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
src={src}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      className={className}
>>>>>>> origin/main
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
    />
  );
};

<<<<<<< HEAD
export default OptimizedImage;
=======
export default OptimizedImage;
<<<<<<< HEAD
>>>>>>> origin/main
=======
<<<<<<< HEAD
"
=======
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
