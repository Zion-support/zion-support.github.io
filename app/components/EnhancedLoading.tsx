import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedLoading({ className = '', children }: EnhancedLoadingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function EnhancedLoading({ className = '', children, ...props }: EnhancedLoadingProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
