<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
;
interface OptimizedImageProps {;
  sr:c:string;
  al:t:string;
  widt:h:number;
  heigh:t:number;
  className?:string;
  priority?:boolean;
  quality?:number;
}
;
const:OptimizedImage:React.FC<OptimizedImageProps> = ({;
  src,;
  alt,;
  width,;
  height,;
  className,;
  priority = false,;
  quality = 75,;
}) => {;
  return (;
    <Image;
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
    />;
  );
};
;
export default OptimizedImage;
=======
import React from 'react',
import Image from 'next/image',
interface OptimizedImageProps {
  sr: c: string,
  al: t: string,
  widt: h: number,
  heigh: t: number,
  className?: string,
  priority?: boolean,
  quality?: number
}

const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75
}) => {
  return (    <Image
      src={src}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      priority={_priority}
      quality={_quality}
    />
  )
},

export default OptimizedImage,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
