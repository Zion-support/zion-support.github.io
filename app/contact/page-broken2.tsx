<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface PageBroken2Props {
  className?: string;
  children?: React.ReactNode;
}

export default function PageBroken2({ className = '', children, ...props }: PageBroken2Props) {
  return (
    <div className={`pagebroken2-component ${className}`} {...props}>
      {children}
    </div>
  );
}
