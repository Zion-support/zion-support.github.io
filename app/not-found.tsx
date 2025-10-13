<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NotFound({ className = '', children, ...props }: NotFoundProps) {
  return (
    <div className={`notfound-component ${className}`} {...props}>
      {children}
    </div>
  );
}
