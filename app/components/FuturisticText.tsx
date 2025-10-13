import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
=======
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
>>>>>>> 0da0de9a40ceae2cf98b043331c5936c6960e4fa
      {children}
    </div>
  );
}