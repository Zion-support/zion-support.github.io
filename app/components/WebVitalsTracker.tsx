import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ className = '', children }) => {
  return (
    <div className={`webvitalstracker-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">WebVitalsTracker</h3>
          <p className="text-gray-600">This is the WebVitalsTracker component.</p>
        </div>
      )}
    </div>
  );
};

export default WebVitalsTracker;