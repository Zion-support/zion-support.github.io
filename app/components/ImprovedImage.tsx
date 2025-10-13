import React from 'react';

interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedImage({ className = '', children }: ImprovedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
