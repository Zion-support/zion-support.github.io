<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import Image from "next/image";
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
  sr: c: string,
  al: string,
  widt: number,
  heigh: number,
  className?: string,
  priority?: boolean,
  quality?: number,
  sizes?: string
}

<<<<<<< HEAD
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> origin/main
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
<<<<<<< HEAD

=======
  return (
    <Image
>>>>>>> origin/main
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
      className={className}
      priority={priority}
<<<<<<< HEAD

=======
      sizes={sizes}
      quality={quality}
    />
  );
};

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
