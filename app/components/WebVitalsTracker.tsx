import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
}

export default function WebVitalsTracker({ className = '' }: WebVitalsTrackerProps) {
  return (
    <div className={`web-vitals-tracker ${className}`}>
      <h3>Web Vitals Tracker</h3>
      <p>Web vitals tracking component</p>
    </div>
  );
}