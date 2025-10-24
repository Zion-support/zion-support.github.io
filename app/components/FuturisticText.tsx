import React from 'react';
interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
<<<<<<< HEAD
    <div className={`futuristictext-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
