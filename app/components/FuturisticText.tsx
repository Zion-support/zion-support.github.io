import React from 'react';

<<<<<<< HEAD
interface FuturisticTextProps {
=======
interface FuturistictextProps {
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
=======
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}