import React from 'react'
<<<<<<< HEAD
import Image from 'next/image'
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  'data-testid'?: string
<<<<<<< HEAD
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 300}
      height={height || 200}
      className={className}
      data-testid={testId}
      {...props}
    />
  )
};
;
export default OptimizedImage
=======
  [key: string]: any
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src
  alt
  width
  height
  className
  'data-testid': dataTestId
  ...props
}) => {
  return (
    <img src = {src}>
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid={dataTestId}
      {...props}
    />
  )
}

export default OptimizedImage;
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
