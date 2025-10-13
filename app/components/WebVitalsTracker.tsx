<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27

interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}