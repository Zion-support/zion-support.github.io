import React from 'react';

interface ImageOptimizerProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  src: string;
  alt: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ImageOptimizer({ className = '', children }: ImageOptimizerProps) {
<<<<<<< HEAD
=======
export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
  placeholder
}: ImageOptimizerProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
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