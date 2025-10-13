<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27

=======
import React from 'react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
interface WebVitalsTrackerProps {
=======
import React, { useEffect } from 'react';

interface WebvitalstrackerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
<<<<<<< HEAD
=======
export default function WebVitalsTracker({ className = '', children, ...props }: WebVitalsTrackerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default function Webvitalstracker({ className = '', children, ...props }: WebvitalstrackerProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
