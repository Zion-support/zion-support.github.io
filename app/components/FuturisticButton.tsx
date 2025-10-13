<<<<<<< HEAD
import React from 'react';

interface FuturisticButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function FuturisticButton({ children, className = '', onClick }: FuturisticButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
=======
// import React from 'react';
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
