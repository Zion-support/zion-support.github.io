<<<<<<< HEAD
import React from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  "data-testid"?: string
  [key: string]: any
}

const OptimizedImage: React.FC<OptimizedImageProps /> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  "data-testid": testId,
  ...props
=======
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
>>>>>>> origin/main
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
<<<<<<< HEAD
      data-testid={testId}
      {...props}
    />
  )
}

export default OptimizedImage
=======
    />
  );
};

export default OptimizedImage;
>>>>>>> origin/main
