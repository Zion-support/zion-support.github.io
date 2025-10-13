import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
=======
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}