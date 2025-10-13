import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
  variant?: string;
  as?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticText({ className = '', children }: FuturisticTextProps) {
  return (
    <div className={className}>
=======
export default function FuturisticText({ className = '', children, variant, as }: FuturisticTextProps) {
  const Component = as as keyof JSX.IntrinsicElements || 'div';
  
  return (
    <Component className={`${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
      {children}
    </Component>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
