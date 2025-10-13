import React from 'react';

interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Futuristictext({ className = '', children }: FuturistictextProps) {
  return (
    <div className={className}>
=======
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
      {children}
    </div>
  );
}
