import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticText({ className = '', children }: FuturisticTextProps) {
=======
export default function Futuristictext({ className = '', children }: FuturistictextProps) {
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
  return (
    <div className={className}>
      {children}
    </div>
  );
}
