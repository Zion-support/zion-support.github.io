<<<<<<< HEAD
import React from 'react';
=======
'use client'
>>>>>>> cursor/fix-errors-and-merge-to-main-31f8

interface CriticalresourcepreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Criticalresourcepreloader({ className = '', children, ...props }: CriticalresourcepreloaderProps) {
  return (
    <div className={`criticalresourcepreloader-component ${className}`} {...props}>
      {children}
    </div>
  );
}
