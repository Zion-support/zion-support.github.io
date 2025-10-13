import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
=======
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
>>>>>>> origin/clean-main-20251013-145848
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}