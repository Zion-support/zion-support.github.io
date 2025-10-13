import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticText({ className = '', children }: FuturisticTextProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
