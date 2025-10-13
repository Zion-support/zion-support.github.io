import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WebVitalsTracker({ className = '', children, ...props }: WebVitalsTrackerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
