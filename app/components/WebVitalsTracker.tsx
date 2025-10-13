import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Web Vitals Tracker</h3>
          <p className="text-gray-600">This component is under development.</p>
        </div>
      )}
    </div>
  );
}