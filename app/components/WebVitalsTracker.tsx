import React from 'react'.

interface WebVitalsTrackerProps {
  className?: string.
  children?: React.ReactNode.;
};
export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`web-vitals-tracker ${className}`}>;
      {children};
    </div>;
  );
  );
};`