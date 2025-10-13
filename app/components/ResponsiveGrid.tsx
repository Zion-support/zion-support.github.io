<<<<<<< HEAD
import React from 'react';

interface ResponsiveGridProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveGrid({ className = '', children }: ResponsiveGridProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
