'use client';
import React from 'react';

interface OptimizedImageProps {
<<<<<<< HEAD
src: string
alt: string
width?: number
height?: number
className?: string
  "data-testid"?: string
  [ke,y: string]: any,}
}
const OptimizedImage: React.FC<OptimizedImageProps /> = ({
src,alt
width = 800
height = 600
className=""
  "data-testid": testId
  ...props
}) => {
return (</OptimizedImageProps>Imagesr c={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid={testId}
      {...props} />
  )
}
;
export default OptimizedImage;</Image>
=======
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>OptimizedImage</h2>
      <p>OptimizedImage component for enhanced functionality.</p>
    </div>
  );
};

export default OptimizedImage;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
