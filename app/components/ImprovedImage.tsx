import React from 'react';

interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ImprovedImage({ className = '', children }: ImprovedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function ImprovedImage({ className = '', children, ...props }: ImprovedImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
