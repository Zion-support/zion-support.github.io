import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ className = '', children }) => {
  return (
    <div className={`webvitalstracker ${className}`}>
      {children}
    </div>
  );
};

export default WebVitalsTracker;