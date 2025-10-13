import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function CoreWebVitals({ className = '', children, ...props }: CoreWebVitalsProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
