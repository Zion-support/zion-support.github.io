import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticBackground({ className = '', children }: FuturisticBackgroundProps) {
  return (
    <div className={`${className}`}>
=======
export default function FuturisticBackground({ className = '', children, ...props }: FuturisticBackgroundProps) {
  return (
    <div className={`futuristic-background-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function FuturisticBackground({ className = '', children, ...props }: FuturisticBackgroundProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
