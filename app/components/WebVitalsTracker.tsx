import React from 'react'.

interface WebVitalsTrackerProps {
  className?: string.
  children?: React.ReactNode.;
};
export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
<<<<<<< HEAD
    <div className={`web-vitals-tracker ${className}`}>
      {children}
}
=======
    <div className={`web-vitals-tracker ${className}`}>;
      {children};
    </div>;
  );
  );
};`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
