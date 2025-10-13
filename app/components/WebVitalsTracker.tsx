import React, { useEffect } from 'react';
interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  useEffect(() => {
    // Web Vitals tracking logic can be added here
    console.log('Web Vitals Tracker initialized');
  }, []);
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}