import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticText({ className = '', children }: FuturisticTextProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
<<<<<<< HEAD
=======
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-f13c
}
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
