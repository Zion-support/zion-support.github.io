import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`${className}`}>
=======
export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
  return (
    <div className={`loading-states-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
