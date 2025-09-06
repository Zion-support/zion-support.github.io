<<<<<<< HEAD
<<<<<<< HEAD

export default OptimizedImage;
=======
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  src;
  alt;

  width = 800;
  height = 600;
=======
import React from 'react';
import Image from 'next/image';
interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  priority?: boolean,
  quality?: number;
};
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 75
}) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
<<<<<<< HEAD
      className={className}
      priority={priority}
      quality={quality}

;

=======
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>  );
}
    />  );
};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export default OptimizedImage;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      className={className}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};

export default OptimizedImage;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
