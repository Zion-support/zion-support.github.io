import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function LazyImage({ className = '', children }: LazyImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function LazyImage({ className = '', children, ...props }: LazyImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
