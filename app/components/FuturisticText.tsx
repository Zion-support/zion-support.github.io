import React from 'react';

<<<<<<< HEAD
interface FuturistictextProps {
=======
interface FuturisticTextProps {
>>>>>>> cursor/fix-errors-and-merge-to-main-062f
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
=======
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-062f
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}