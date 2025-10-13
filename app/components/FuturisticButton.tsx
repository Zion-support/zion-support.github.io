<<<<<<< HEAD
=======
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}


interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticButton({ className = '', children }: FuturisticButtonProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
// import React from 'react';
