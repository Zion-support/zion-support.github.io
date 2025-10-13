<<<<<<< HEAD
import { Link } from 'react-router-dom';

'use client'
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

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
