<<<<<<< HEAD
import React from \"react\";"
import Image from \"next/image\";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;}
}
}

const OptimizedImage: React.FC<OptimizedImageProps /> = ({
  src,
const OptimizedImage: React.FC<OptimizedImageProps /> = ({ src,
  alt,
  width,
  height,"
  className = \"\",
  priority = false,
  quality = 75}"
  sizes = \"100vw\"}
}) => {}
   }) => {

 ;
  return (}
    <Image;}
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
    />
  );
};

  )
};

export default OptimizedImage;
"
=======
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
