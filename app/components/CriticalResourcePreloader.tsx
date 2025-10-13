import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
interface CriticalResourcePreloaderProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
<<<<<<< HEAD

export default function CriticalResourcePreloader({ className = '', children }: CriticalResourcePreloaderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======

export default function CriticalResourcePreloader({ className = '', children, ...props }: CriticalResourcePreloaderProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
