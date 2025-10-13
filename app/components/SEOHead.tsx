import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function SEOHead({ className = '', children }: SEOHeadProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function SEOHead({ className = '', children, ...props }: SEOHeadProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
