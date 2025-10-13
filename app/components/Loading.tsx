import React from 'react';

interface LoadingProps {
  className?: string;
<<<<<<< HEAD
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
=======
}

export default function Loading({ className = '' }: LoadingProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
