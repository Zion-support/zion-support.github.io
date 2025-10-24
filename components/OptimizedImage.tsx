import React from 'react'

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
  width,
  height,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  return (
    <img
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