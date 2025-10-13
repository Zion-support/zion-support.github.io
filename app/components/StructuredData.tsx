import React from 'react';

interface StructuredDataProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function StructuredData({ className = '', children }: StructuredDataProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function StructuredData({ className = '', children, ...props }: StructuredDataProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
