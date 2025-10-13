import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`webvitalstracker ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">WebVitalsTracker</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}