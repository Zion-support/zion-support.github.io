import React from 'react';

interface EnhancedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedLoadingSpinner({ className = '', children }: EnhancedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function EnhancedLoadingSpinner({ className = '', children, ...props }: EnhancedLoadingSpinnerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
