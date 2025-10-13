import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyImage({ className = '', children }: LazyImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
