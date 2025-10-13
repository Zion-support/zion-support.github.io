import React from 'react';'
interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';'  placeholder?: string;
}

  placeholder
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}'      }}
=======
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
    />
  );
}