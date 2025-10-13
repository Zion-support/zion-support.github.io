import React from 'react';

interface WebVitalsTrackerProps {
  children: React.ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  return <>{children}</>;
};

export default WebVitalsTracker;
