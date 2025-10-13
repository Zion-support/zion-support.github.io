import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticText({ className = '', children }: FuturisticTextProps) {
  return (
<<<<<<< HEAD
    <div className={className}>
=======
    <div className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-234b
      {children}
    </div>
  );
}
