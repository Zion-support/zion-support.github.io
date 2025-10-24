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
  [key: string]: any
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid={testId}
      {...props}
    />
  )
}

export default OptimizedImage