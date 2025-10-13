import React from 'react';

interface ImageOptimizerProps {
<<<<<<< HEAD
=======
  src: string;
  alt: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ImageOptimizer({ className = '', children }: ImageOptimizerProps) {
=======
export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
  placeholder
}: ImageOptimizerProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      style={{
        backgroundImage: placeholder ? `url(${placeholder})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
}