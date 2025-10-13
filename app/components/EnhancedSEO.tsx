import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedSEO({ className = '', children }: EnhancedSEOProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function EnhancedSEO({ className = '', children, ...props }: EnhancedSEOProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
