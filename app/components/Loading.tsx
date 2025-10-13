import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function Loading({ className = '', children }: LoadingProps) {
  return (
    <div className={`${className}`}>
=======
export default function Loading({ className = '', children, ...props }: LoadingProps) {
  return (
    <div className={`loading-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function Loading({ className = '', children, ...props }: LoadingProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
