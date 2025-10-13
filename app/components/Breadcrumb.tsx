import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Breadcrumb({ className = '', children }: BreadcrumbProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
