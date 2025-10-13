<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27

=======
import React from 'react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function WebVitalsTracker({ className = '', children, ...props }: WebVitalsTrackerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
